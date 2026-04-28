import { Property, Availability, Review } from "@/app/types";

export const properties: Property[] = [
    {
        id: "1",
        name: "Condo 10F — Vue Panoramique",
        slug: "condo-10f-vue-panoramique",
        location: "Kamouraska, Québec",
        description:
            "Perched on the 10th floor with floor-to-ceiling windows, this stunning lakefront condo offers a 180° panoramic view of the St. Lawrence River. The open-concept living space features Scandinavian-inspired design with natural oak floors, a modern fireplace, and a fully equipped gourmet kitchen with marble countertops. Wake up to spectacular sunrises over the river from the master bedroom, and enjoy evening cocktails on the private balcony as the sun sets behind the Laurentian mountains.",
        shortDescription:
            "Stunning 10th-floor lakefront condo with 180° panoramic views of the St. Lawrence, Scandinavian design, and private balcony.",
        pricePerNight: 245,
        images: [
            "/images/condo-interior.png",
            "/images/bedroom-view.png",
            "/images/deck-sunset.png",
            "/images/hero-chalet.png",
        ],
        thumbnail: "/images/condo-interior.png",
        bedrooms: 2,
        bathrooms: 2,
        maxGuests: 6,
        sqft: 1200,
        amenities: [
            "Lakefront View",
            "Private Balcony",
            "Fireplace",
            "Full Kitchen",
            "Washer & Dryer",
            "Free Wi-Fi",
            "Smart TV",
            "Air Conditioning",
            "Heated Floors",
            "Underground Parking",
            "Kayak Access",
            "BBQ Grill",
        ],
        highlights: [
            "180° panoramic lake view",
            "Direct lake access with private dock",
            "Designer Scandinavian furnishings",
            "Steps from village restaurants",
        ],
        rating: 4.96,
        reviewCount: 127,
        type: "condo",
        lakefront: true,
        featured: true,
    },
    {
        id: "2",
        name: "Chalet Boréal — Bord du Lac",
        slug: "chalet-boreal-bord-du-lac",
        location: "Kamouraska, Québec",
        description:
            "Nestled among towering pines on the water's edge, Chalet Boréal is the ultimate lakefront retreat. This modern timber-frame chalet features vaulted ceilings with exposed beams, a wood-burning fireplace, and walls of glass that blur the line between indoors and out. The wraparound deck includes a private hot tub overlooking the St. Lawrence, while the landscaped grounds offer a fire pit, hammocks, and direct lake access with a private dock.",
        shortDescription:
            "Modern timber-frame lakefront chalet with hot tub, wraparound deck, and direct lake access among towering pines.",
        pricePerNight: 395,
        images: [
            "/images/hero-chalet.png",
            "/images/deck-sunset.png",
            "/images/condo-interior.png",
            "/images/bedroom-view.png",
        ],
        thumbnail: "/images/hero-chalet.png",
        bedrooms: 3,
        bathrooms: 2,
        maxGuests: 8,
        sqft: 1800,
        amenities: [
            "Lakefront View",
            "Private Hot Tub",
            "Wood-Burning Fireplace",
            "Full Kitchen",
            "Wraparound Deck",
            "Free Wi-Fi",
            "Smart TV",
            "Private Dock",
            "Fire Pit",
            "Kayaks & Paddleboards",
            "BBQ Grill",
            "Hammocks",
        ],
        highlights: [
            "Private hot tub with lake view",
            "Wraparound deck with fire pit",
            "Vaulted ceilings with exposed beams",
            "Direct lake access with dock",
        ],
        rating: 4.98,
        reviewCount: 89,
        type: "chalet",
        lakefront: true,
        featured: true,
    },
    {
        id: "3",
        name: "Suite Aurore — Lever de Soleil",
        slug: "suite-aurore-lever-de-soleil",
        location: "Kamouraska, Québec",
        description:
            "Named for the breathtaking sunrise views, Suite Aurore is a cozy yet luxurious condo perfect for couples. The east-facing bedroom captures the first light over the St. Lawrence each morning, while the intimate living space features a curated blend of modern comfort and Québécois charm.",
        shortDescription:
            "Intimate lakefront condo perfect for couples, with east-facing sunrise views and curated Québécois charm.",
        pricePerNight: 185,
        images: [
            "/images/bedroom-view.png",
            "/images/condo-interior.png",
            "/images/deck-sunset.png",
            "/images/hero-chalet.png",
        ],
        thumbnail: "/images/bedroom-view.png",
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        sqft: 750,
        amenities: [
            "Lakefront View",
            "Private Balcony",
            "Fireplace",
            "Kitchenette",
            "Free Wi-Fi",
            "Smart TV",
            "Air Conditioning",
            "Parking",
            "Shared Kayaks",
        ],
        highlights: [
            "East-facing sunrise views",
            "Perfect for romantic getaways",
            "Curated local art & décor",
            "Walking distance to village",
        ],
        rating: 4.92,
        reviewCount: 64,
        type: "condo",
        lakefront: true,
        featured: false,
    },
    {
        id: "4",
        name: "Chalet du Cap — Grand Familial",
        slug: "chalet-du-cap-grand-familial",
        location: "Kamouraska, Québec",
        description:
            "The largest property in our collection, Chalet du Cap is designed for family gatherings and friend reunions. Spread across two levels, this grand chalet features four spacious bedrooms, a chef's kitchen, a games room, and an expansive outdoor area with both covered and open-air spaces. The private beach area and shallow swimming zone make it ideal for families with children.",
        shortDescription:
            "Our grandest lakefront chalet with 4 bedrooms, games room, and private beach — perfect for family reunions.",
        pricePerNight: 520,
        images: [
            "/images/aerial-property.png",
            "/images/hero-chalet.png",
            "/images/condo-interior.png",
            "/images/deck-sunset.png",
        ],
        thumbnail: "/images/aerial-property.png",
        bedrooms: 4,
        bathrooms: 3,
        maxGuests: 12,
        sqft: 2800,
        amenities: [
            "Lakefront View",
            "Private Beach",
            "Hot Tub",
            "Games Room",
            "Chef's Kitchen",
            "Washer & Dryer",
            "Free Wi-Fi",
            "Smart TV x3",
            "Private Dock",
            "Fire Pit",
            "Kayaks & Paddleboards",
            "BBQ Station",
            "Outdoor Dining",
            "Playground",
        ],
        highlights: [
            "Private beach with shallow swimming",
            "Games room with billiards & foosball",
            "Chef's kitchen seats 14",
            "Multiple outdoor living spaces",
        ],
        rating: 4.94,
        reviewCount: 53,
        type: "chalet",
        lakefront: true,
        featured: true,
    },
];

export const reviews: Review[] = [
    {
        id: "r1",
        propertyId: "1",
        author: "Marie-Claire D.",
        rating: 5,
        date: "2026-03-15",
        comment:
            "Absolutely breathtaking views! The condo was immaculate and beautifully designed. We watched the sunrise every morning from the bedroom — magical. The kitchen had everything we needed, and the location in Kamouraska is perfect for exploring.",
        stayDate: "March 2026",
    },
    {
        id: "r2",
        propertyId: "1",
        author: "James & Sophie R.",
        rating: 5,
        date: "2026-02-20",
        comment:
            "This was our second stay and it keeps getting better. The Scandinavian design is stunning, the heated floors are a dream in winter, and the hosts are incredibly responsive. Already planning our summer trip back!",
        stayDate: "February 2026",
    },
    {
        id: "r3",
        propertyId: "2",
        author: "François L.",
        rating: 5,
        date: "2026-01-10",
        comment:
            "The hot tub overlooking the frozen lake at night — unforgettable. The chalet is warm, beautifully appointed, and the fireplace crackling while snow falls outside is pure bliss. Kamouraska in winter is a hidden gem.",
        stayDate: "January 2026",
    },
    {
        id: "r4",
        propertyId: "2",
        author: "The Chen Family",
        rating: 5,
        date: "2025-08-22",
        comment:
            "Perfect summer retreat. The kids loved the kayaks and paddleboards, and we spent every evening at the fire pit making s'mores. The wraparound deck is huge and the views are stunning from every angle.",
        stayDate: "August 2025",
    },
    {
        id: "r5",
        propertyId: "4",
        author: "Isabelle M.",
        rating: 5,
        date: "2025-12-28",
        comment:
            "We hosted our family Christmas here — 10 of us — and it was perfect. The games room kept the teenagers happy, the kitchen was fully stocked, and the private beach (even in winter!) was magical. Truly a special place.",
        stayDate: "December 2025",
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
