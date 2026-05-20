import { query } from "./_generated/server";
import { Doc } from "./_generated/dataModel";
import { v } from "convex/values";

const publicProperty = (property: Doc<"properties">) => ({
  ...property,
  id: property.legacyId,
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const properties = await ctx.db.query("properties").collect();
    return properties.map(publicProperty);
  },
});

export const featured = query({
  args: {},
  handler: async (ctx) => {
    const properties = await ctx.db
      .query("properties")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();

    return properties.map(publicProperty);
  },
});

export const byId = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    const property = await ctx.db
      .query("properties")
      .withIndex("by_legacy_id", (q) => q.eq("legacyId", id))
      .first();

    return property ? publicProperty(property) : null;
  },
});

export const bySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const property = await ctx.db
      .query("properties")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    return property ? publicProperty(property) : null;
  },
});
