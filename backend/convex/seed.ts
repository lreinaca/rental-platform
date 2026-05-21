import { mutation } from "./_generated/server";
import { properties, reviews } from "./seedData";

export const initial = mutation({
  args: {},
  handler: async (ctx) => {
    const upsertByLegacyId = async (
      table: "properties" | "reviews",
      legacyId: string,
      value: (typeof properties)[number] | (typeof reviews)[number],
    ) => {
      const existing = await ctx.db
        .query(table)
        .withIndex("by_legacy_id", (q) => q.eq("legacyId", legacyId))
        .first();

      if (existing) {
        await ctx.db.replace(existing._id, value);
        return existing._id;
      }

      return await ctx.db.insert(table, value);
    };

    for (const property of properties) {
      await upsertByLegacyId("properties", property.legacyId, property);
    }

    for (const review of reviews) {
      await upsertByLegacyId("reviews", review.legacyId, review);
    }

    return {
      properties: properties.length,
      reviews: reviews.length,
    };
  },
});
