import { query } from "./_generated/server";
import { Doc } from "./_generated/dataModel";
import { v } from "convex/values";

const publicReview = (review: Doc<"reviews">) => ({
  ...review,
  id: review.legacyId,
  propertyId: review.propertyLegacyId,
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const reviews = await ctx.db.query("reviews").collect();
    return reviews.map(publicReview);
  },
});

export const forProperty = query({
  args: { propertyId: v.string() },
  handler: async (ctx, { propertyId }) => {
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_property", (q) => q.eq("propertyLegacyId", propertyId))
      .collect();

    return reviews.map(publicReview);
  },
});
