import { Property, Availability } from "@/app/types";

export const properties: Property[] = [
    {
        id: "1",
        name: "Apartamento Downtown Toronto",
        location: "Toronto, Canadá",
        pricePerNight: 120,
        image: "https://via.placeholder.com/400x300",
    },
    {
        id: "2",
        name: "Loft Moderno en Vancouver",
        location: "Vancouver, Canadá",
        pricePerNight: 150,
        image: "https://via.placeholder.com/400x300",
    },
    ];

export const availability: Availability[] = [
    { date: "2026-05-10", available: false },
    { date: "2026-05-11", available: false },
    { date: "2026-05-12", available: true },
    { date: "2026-05-13", available: true },
    { date: "2026-05-14", available: true },
];
