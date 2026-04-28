export interface Property {
    id: string;
    name: string;
    slug: string;
    location: string;
    description: string;
    shortDescription: string;
    pricePerNight: number;
    images: string[];
    thumbnail: string;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
    sqft: number;
    amenities: string[];
    highlights: string[];
    rating: number;
    reviewCount: number;
    type: 'chalet' | 'condo';
    lakefront: boolean;
    featured: boolean;
}

export interface Availability {
    date: string;
    available: boolean;
    price?: number;
}

export interface Booking {
    propertyId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
    guestInfo: GuestInfo;
}

export interface GuestInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequests?: string;
}

export interface Review {
    id: string;
    propertyId: string;
    author: string;
    avatar?: string;
    rating: number;
    date: string;
    comment: string;
    stayDate: string;
}

export interface Season {
    name: string;
    startMonth: number;
    endMonth: number;
    priceMultiplier: number;
}
