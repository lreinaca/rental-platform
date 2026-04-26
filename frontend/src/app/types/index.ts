export interface Property {
    id: string;
    name: string;
    location: string;
    pricePerNight: number;
    image: string;
}

export interface Availability {
    date: string;
    available: boolean;
}
