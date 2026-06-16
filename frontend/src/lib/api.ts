import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convexApi";
import {
    properties,
    reviews,
    generateAvailability,
    availability,
} from "@/data/mockData";
import { Availability, Property, Review } from "@/app/types";

const hasConvexUrl = Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);

export const getProperties = async (): Promise<Property[]> => {
    if (!hasConvexUrl) return properties;

    const convexProperties = (await fetchQuery(
        api.properties.list,
        {}
    )) as Property[];
    return convexProperties.length > 0 ? convexProperties : properties;
};

export const getFeaturedProperties = async (): Promise<Property[]> => {
    if (!hasConvexUrl) return properties.filter((p) => p.featured);

    const convexProperties = (await fetchQuery(
        api.properties.featured,
        {}
    )) as Property[];
    return convexProperties.length > 0
        ? convexProperties
        : properties.filter((p) => p.featured);
};

export const getPropertyById = async (
    id: string
): Promise<Property | undefined> => {
    if (!hasConvexUrl) return properties.find((p) => p.id === id);

    return (
        ((await fetchQuery(api.properties.byId, { id })) as
            | Property
            | null
            | undefined) ??
        properties.find((p) => p.id === id)
    );
};

export const getPropertyBySlug = async (
    slug: string
): Promise<Property | undefined> => {
    if (!hasConvexUrl) return properties.find((p) => p.slug === slug);

    return (
        ((await fetchQuery(api.properties.bySlug, { slug })) as
            | Property
            | null
            | undefined) ??
        properties.find((p) => p.slug === slug)
    );
};

export const getAvailability = async (
    propertyId?: string
): Promise<Availability[]> => {
    if (!propertyId) return availability;
    if (!hasConvexUrl) return generateAvailability(propertyId);

    const convexAvailability = (await fetchQuery(
        api.availability.forProperty,
        {
            propertyId,
        }
    )) as Availability[];

    if (convexAvailability.length > 0) {
        return convexAvailability;
    }

    return generateAvailability(propertyId);
};

export const getReviewsForProperty = async (
    propertyId: string
): Promise<Review[]> => {
    if (!hasConvexUrl) return reviews.filter((r) => r.propertyId === propertyId);

    const convexReviews = (await fetchQuery(api.reviews.forProperty, {
        propertyId,
    })) as Review[];
    return convexReviews.length > 0
        ? convexReviews
        : reviews.filter((r) => r.propertyId === propertyId);
};

export const getAllReviews = async (): Promise<Review[]> => {
    if (!hasConvexUrl) return reviews;

    const convexReviews = (await fetchQuery(api.reviews.list, {})) as Review[];
    return convexReviews.length > 0 ? convexReviews : reviews;
};
