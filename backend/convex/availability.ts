import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const isoDate = (date: Date) => date.toISOString().split("T")[0];

const generatedAvailability = (propertyId: string, days: number) => {
  const today = new Date();
  const bookedDates = new Set<string>();
  const seed = Number.parseInt(propertyId, 10) * 7;

  for (let i = 0; i < 8; i += 1) {
    const offset = (seed + i * 3 + Math.floor(i * 2.7)) % days;
    for (let j = 0; j < 2 + (i % 3); j += 1) {
      const date = new Date(today);
      date.setDate(date.getDate() + offset + j);
      bookedDates.add(isoDate(date));
    }
  }

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);
    date.setDate(date.getDate() + index);
    const dateString = isoDate(date);

    return {
      date: dateString,
      available: !bookedDates.has(dateString),
    };
  });
};

export const forProperty = query({
  args: {
    propertyId: v.string(),
    days: v.optional(v.number()),
  },
  handler: async (ctx, { propertyId, days = 60 }) => {
    const generated = generatedAvailability(propertyId, days);
    const overrides = await ctx.db
      .query("availabilityOverrides")
      .withIndex("by_property_date", (q) => q.eq("propertyLegacyId", propertyId))
      .collect();

    const overridesByDate = new Map(overrides.map((entry) => [entry.date, entry]));

    return generated.map((entry) => {
      const override = overridesByDate.get(entry.date);
      if (!override) return entry;

      return {
        date: entry.date,
        available: override.available,
        price: override.price,
      };
    });
  },
});

export const setOverride = mutation({
  args: {
    propertyId: v.string(),
    date: v.string(),
    available: v.boolean(),
    price: v.optional(v.number()),
    note: v.optional(v.string()),
  },
  handler: async (ctx, { propertyId, date, available, price, note }) => {
    const existing = await ctx.db
      .query("availabilityOverrides")
      .withIndex("by_property_date", (q) =>
        q.eq("propertyLegacyId", propertyId).eq("date", date),
      )
      .first();

    const value = {
      propertyLegacyId: propertyId,
      date,
      available,
      price,
      note,
    };

    if (existing) {
      await ctx.db.patch(existing._id, value);
      return existing._id;
    }

    return await ctx.db.insert("availabilityOverrides", value);
  },
});
