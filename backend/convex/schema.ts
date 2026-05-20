import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const guestInfo = v.object({
  firstName: v.string(),
  lastName: v.string(),
  email: v.string(),
  phone: v.string(),
  specialRequests: v.optional(v.string()),
});

export default defineSchema({
  properties: defineTable({
    legacyId: v.string(),
    name: v.string(),
    slug: v.string(),
    location: v.string(),
    description: v.string(),
    shortDescription: v.string(),
    pricePerNight: v.number(),
    images: v.array(v.string()),
    thumbnail: v.string(),
    bedrooms: v.number(),
    bathrooms: v.number(),
    maxGuests: v.number(),
    sqft: v.number(),
    amenities: v.array(v.string()),
    highlights: v.array(v.string()),
    rating: v.number(),
    reviewCount: v.number(),
    type: v.union(v.literal("chalet"), v.literal("condo")),
    lakefront: v.boolean(),
    featured: v.boolean(),
  })
    .index("by_legacy_id", ["legacyId"])
    .index("by_slug", ["slug"])
    .index("by_featured", ["featured"]),

  reviews: defineTable({
    legacyId: v.string(),
    propertyLegacyId: v.string(),
    author: v.string(),
    avatar: v.optional(v.string()),
    rating: v.number(),
    date: v.string(),
    comment: v.string(),
    stayDate: v.string(),
  })
    .index("by_legacy_id", ["legacyId"])
    .index("by_property", ["propertyLegacyId"]),

  availabilityOverrides: defineTable({
    propertyLegacyId: v.string(),
    date: v.string(),
    available: v.boolean(),
    price: v.optional(v.number()),
    note: v.optional(v.string()),
  }).index("by_property_date", ["propertyLegacyId", "date"]),

  bookings: defineTable({
    propertyLegacyId: v.string(),
    checkIn: v.string(),
    checkOut: v.string(),
    guests: v.number(),
    nights: v.number(),
    totalPrice: v.number(),
    guestEmail: v.string(),
    guestInfo,
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
    ),
    createdAt: v.number(),
  })
    .index("by_property", ["propertyLegacyId"])
    .index("by_guest_email", ["guestEmail"])
    .index("by_status", ["status"]),
});
