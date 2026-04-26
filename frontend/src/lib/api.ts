import { properties, availability } from "@/data/mockData";

export const getProperties = async () => {
    return properties;
};

export const getPropertyById = async (id: string) => {
    return properties.find(p => p.id === id);
};

export const getAvailability = async () => {
    return availability;
};
