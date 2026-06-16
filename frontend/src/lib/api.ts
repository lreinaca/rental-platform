import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convexApi";
import {
    properties,
    reviews,
    generateAvailability,
    availability,
} from "@/data/mockData";

const hasConvexUrl = Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);

export const getProperties = async () => {
    if (!hasConvexUrl) return properties;

    console.log("Using Convex URL:", process.env.NEXT_PUBLIC_CONVEX_URL);
const convexProperties = await fetchQuery(api.properties.list, {});
console.log("Convex properties:", convexProperties.length);
    return convexProperties.length > 0 ? convexProperties : properties;
};

export const getFeaturedProperties = async () => {
    if (!hasConvexUrl) return properties.filter((p) => p.featured);

    const convexProperties = await fetchQuery(api.properties.featured, {});
    return convexProperties.length > 0
        ? convexProperties
        : properties.filter((p) => p.featured);
};

export const getPropertyById = async (id: string) => {
    if (!hasConvexUrl) return properties.find((p) => p.id === id);

    return (
        (await fetchQuery(api.properties.byId, { id })) ??
        properties.find((p) => p.id === id)
    );
};

export const getPropertyBySlug = async (slug: string) => {
    if (!hasConvexUrl) return properties.find((p) => p.slug === slug);

    return (
        (await fetchQuery(api.properties.bySlug, { slug })) ??
        properties.find((p) => p.slug === slug)
    );
};

export const getAvailability = async (propertyId?: string) => {
    if (!propertyId) return availability;
    if (!hasConvexUrl) return generateAvailability(propertyId);

    const convexAvailability = await fetchQuery(api.availability.forProperty, {
        propertyId,
    });

    if (convexAvailability.length > 0) {
        return convexAvailability;
    }

    return generateAvailability(propertyId);
};

export const getReviewsForProperty = async (propertyId: string) => {
    if (!hasConvexUrl) return reviews.filter((r) => r.propertyId === propertyId);

    const convexReviews = await fetchQuery(api.reviews.forProperty, { propertyId });
    return convexReviews.length > 0
        ? convexReviews
        : reviews.filter((r) => r.propertyId === propertyId);
};

export const getAllReviews = async () => {
    if (!hasConvexUrl) return reviews;

    const convexReviews = await fetchQuery(api.reviews.list, {});
    return convexReviews.length > 0 ? convexReviews : reviews;
};
