import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const guestInfo = v.object({
  firstName: v.string(),
  lastName: v.string(),
  email: v.string(),
  phone: v.string(),
  specialRequests: v.optional(v.string()),
});

const nightsBetween = (checkIn: string, checkOut: string) => {
  const milliseconds =
    new Date(checkOut).getTime() - new Date(checkIn).getTime();
  return Math.max(1, Math.ceil(milliseconds / (1000 * 60 * 60 * 24)));
};

export const create = mutation({
  args: {
    propertyId: v.string(),
    checkIn: v.string(),
    checkOut: v.string(),
    guests: v.number(),
    totalPrice: v.number(),
    guestInfo,
  },
  handler: async (ctx, args) => {
    const property = await ctx.db
      .query("properties")
      .withIndex("by_legacy_id", (q) => q.eq("legacyId", args.propertyId))
      .first();

    if (!property) {
      throw new Error("Property not found.");
    }

    if (args.guests < 1 || args.guests > property.maxGuests) {
      throw new Error("Guest count is outside the allowed range.");
    }

    const nights = nightsBetween(args.checkIn, args.checkOut);

    return await ctx.db.insert("bookings", {
      propertyLegacyId: args.propertyId,
      checkIn: args.checkIn,
      checkOut: args.checkOut,
      guests: args.guests,
      nights,
      totalPrice: args.totalPrice,
      guestEmail: args.guestInfo.email,
      guestInfo: args.guestInfo,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const list = query({
  args: {
    propertyId: v.optional(v.string()),
    status: v.optional(
      v.union(v.literal("pending"), v.literal("confirmed"), v.literal("cancelled")),
    ),
  },
  handler: async (ctx, { propertyId, status }) => {
    if (propertyId) {
      const bookings = await ctx.db
        .query("bookings")
        .withIndex("by_property", (q) => q.eq("propertyLegacyId", propertyId))
        .collect();

      return status
        ? bookings.filter((booking) => booking.status === status)
        : bookings;
    }

    if (status) {
      return await ctx.db
        .query("bookings")
        .withIndex("by_status", (q) => q.eq("status", status))
        .collect();
    }

    return await ctx.db.query("bookings").collect();
  },
});
