import { properties, reviews, generateAvailability, availability } from "@/data/mockData";

export const getProperties = async () => {
    return properties;
};

export const getFeaturedProperties = async () => {
    return properties.filter((p) => p.featured);
};

export const getPropertyById = async (id: string) => {
    return properties.find((p) => p.id === id);
};

export const getPropertyBySlug = async (slug: string) => {
    return properties.find((p) => p.slug === slug);
};

export const getAvailability = async (propertyId?: string) => {
    if (propertyId) {
        return generateAvailability(propertyId);
    }
    return availability;
};

export const getReviewsForProperty = async (propertyId: string) => {
    return reviews.filter((r) => r.propertyId === propertyId);
};

export const getAllReviews = async () => {
    return reviews;
};
