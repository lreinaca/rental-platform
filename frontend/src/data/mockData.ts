import { Property, Availability, Review } from "@/app/types";

export const properties: Property[] = [
    {
        id: "1",
        name: "Condo 10F - Vue sur le Lac Saint-Pierre",
        slug: "condo-10f-vue-lac-saint-pierre",
        location: "Kamouraska, Québec",
        description:
            "Condo avec vue sur le Lac Saint-Pierre, a quelques minutes de Kamouraska. Sejournez dans un veritable havre de paix au bord du lac, ideal pour se ressourcer seul, en couple ou en famille. Profitez de la vue panoramique, de moments de detente sur le balcon et d'activites comme le canot ou le kayak.",
        shortDescription:
            "Evasion au bord du Lac Saint-Pierre avec vue panoramique, balcon et ambiance sereine.",
        pricePerNight: 245,
        images: [
            "/images/condo-interior.png",
            "/images/bedroom-view.png",
            "/images/deck-sunset.png",
            "/images/hero-chalet.png",
        ],
        thumbnail: "/images/condo-interior.png",
        bedrooms: 2,
        bathrooms: 1,
        maxGuests: 6,
        sqft: 980,
        amenities: [
            "Lakefront View",
            "Private Balcony",
            "2 Bedrooms",
            "Full Kitchen",
            "1 Bathroom",
            "Free Wi-Fi",
            "Free Parking",
            "Self Check-in",
            "Kayak Access",
            "Canoe Access",
        ],
        highlights: [
            "Vue panoramique sur le Lac Saint-Pierre",
            "A quelques minutes du village de Kamouraska",
            "Condo chaleureux et parfaitement amenage",
            "Ideal pour familles, couples ou amis",
        ],
        rating: 4.96,
        reviewCount: 127,
        type: "condo",
        lakefront: true,
        featured: true,
    },
    {
        id: "2",
        name: "Condo 10D - Kamouraska, Lac et nature",
        slug: "condo-10d-kamouraska-lac-nature",
        location: "Kamouraska, Québec",
        description:
            "Condo charmant et paisible au bord de l'eau, pres de Kamouraska. Vous pourrez profiter d'un site bucolique, faire des activites aquatiques et visiter le village de Kamouraska ainsi que ses environs. Une pause nature parfaite entre lac et tranquillite.",
        shortDescription:
            "Un refuge bucolique entre lac, nature et Kamouraska.",
        pricePerNight: 395,
        images: [
            "/images/hero-chalet.png",
            "/images/deck-sunset.png",
            "/images/condo-interior.png",
            "/images/bedroom-view.png",
        ],
        thumbnail: "/images/hero-chalet.png",
        bedrooms: 2,
        bathrooms: 1,
        maxGuests: 5,
        sqft: 900,
        amenities: [
            "Lakefront View",
            "Quiet Natural Site",
            "Full Kitchen",
            "Near Kamouraska Village",
            "Free Wi-Fi",
            "Water Activities Nearby",
            "Free Parking",
            "Self Check-in",
        ],
        highlights: [
            "Entre lac et nature",
            "Sejour paisible au bord de l'eau",
            "Proche de Kamouraska",
            "Ideal pour detente et deconnexion",
        ],
        rating: 4.98,
        reviewCount: 89,
        type: "condo",
        lakefront: true,
        featured: true,
    },
    {
        id: "3",
        name: "Condo 10B - Bord de l'eau pres de Kamouraska",
        slug: "condo-10b-bord-eau-kamouraska",
        location: "Kamouraska, Québec",
        description:
            "Condo charmant et paisible au bord de l'eau, pres de Kamouraska. Profitez d'un acces autonome, d'un stationnement sans frais et d'un cadre naturel pour les activites aquatiques et les visites du village. Adresse GPS: 10 Chemin du Lac St-Pierre ouest, Mont-Carmel, Kamouraska, G0L 1W0 (10B adresse exacte du logement).",
        shortDescription:
            "Escapade au bord de l'eau avec nature et detente a Kamouraska.",
        pricePerNight: 185,
        images: [
            "/images/bedroom-view.png",
            "/images/condo-interior.png",
            "/images/deck-sunset.png",
            "/images/hero-chalet.png",
        ],
        thumbnail: "/images/bedroom-view.png",
        bedrooms: 2,
        bathrooms: 1,
        maxGuests: 5,
        sqft: 920,
        amenities: [
            "Lakefront View",
            "Full Kitchen",
            "Free Wi-Fi",
            "Self Check-in",
            "Secure Key Box (Code: 1948)",
            "Free Parking",
            "Kayak/Canoe Nearby",
            "Wi-Fi: Helix10E",
        ],
        highlights: [
            "Adresse exacte 10B a Mont-Carmel",
            "Acces autonome facile",
            "Site bucolique proche de Kamouraska",
            "Ideal pour nature, art et gastronomie locale",
        ],
        rating: 4.92,
        reviewCount: 64,
        type: "condo",
        lakefront: true,
        featured: false,
    },
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
