import { Property, Availability, Review } from "@/app/types";

export const properties: Property[] = [
    
];

export const reviews: Review[] = [
    {
        id: "r1",
        propertyId: "1",
        author: "Camille R.",
        rating: 5,
        date: "2026-03-15",
        comment:
            "Vue magnifique sur le lac et condo tres agreable. Nous avons adore le calme et le balcon pour nos fins de journee.",
        stayDate: "March 2026",
    },
    {
        id: "r2",
        propertyId: "1",
        author: "Nadia et Louis",
        rating: 5,
        date: "2026-02-20",
        comment:
            "Parfait pour un sejour en famille: cuisine fonctionnelle, vue panoramique et acces facile aux activites sur l'eau.",
        stayDate: "February 2026",
    },
    {
        id: "r3",
        propertyId: "2",
        author: "Sonia M.",
        rating: 5,
        date: "2026-01-10",
        comment:
            "Le condo 10D est un vrai refuge nature. Site paisible, proche de Kamouraska et ideal pour deconnecter.",
        stayDate: "January 2026",
    },
    {
        id: "r4",
        propertyId: "2",
        author: "Patrick G.",
        rating: 5,
        date: "2025-08-22",
        comment:
            "Entre lac et nature, tout etait conforme a la description. Tres bon point de depart pour visiter les environs.",
        stayDate: "August 2025",
    },
    {
        id: "r5",
        propertyId: "3",
        author: "Melanie T.",
        rating: 5,
        date: "2025-12-28",
        comment:
            "Le 10B est tres pratique avec l'acces autonome et le stationnement gratuit. Endroit calme au bord de l'eau.",
        stayDate: "December 2025",
    },
    {
        id: "r6",
        propertyId: "3",
        author: "Jean-Philippe B.",
        rating: 5,
        date: "2026-04-04",
        comment:
            "Excellent sejour a Kamouraska. L'adresse et les infos d'arrivee etaient claires, et le condo est parfait pour une escapade detente.",
        stayDate: "April 2026",
    },
];

// Generate availability for the next 60 days
export const generateAvailability = (propertyId: string): Availability[] => {
    const today = new Date();
    const avail: Availability[] = [];
    const bookedDates = new Set<string>();

    // Simulate some booked dates
    const seed = parseInt(propertyId) * 7;
    for (let i = 0; i < 8; i++) {
        const offset = (seed + i * 3 + Math.floor(i * 2.7)) % 60;
        for (let j = 0; j < 2 + (i % 3); j++) {
            const d = new Date(today);
            d.setDate(d.getDate() + offset + j);
            bookedDates.add(d.toISOString().split("T")[0]);
        }
    }

    for (let i = 0; i < 60; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const dateStr = d.toISOString().split("T")[0];
        avail.push({
            date: dateStr,
            available: !bookedDates.has(dateStr),
        });
    }

    return avail;
};

export const availability: Availability[] = generateAvailability("1");
