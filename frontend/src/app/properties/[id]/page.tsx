import { getPropertyById, getAvailability } from "@/lib/api";
import Calendar from "@/components/Calendar";
import Link from "next/link";

export default async function PropertyDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const property = await getPropertyById(id);
    const availability = await getAvailability();

    if (!property) return <div>No encontrado</div>;

    const message = `Hola, quiero reservar ${property.name}`;

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">{property.name}</h1>
            <p>{property.location}</p>

            <img src={property.image} className="my-4" />

            <p className="font-semibold">
                ${property.pricePerNight} / noche
            </p>

            <Calendar availability={availability} />

            <div className="mt-6 flex gap-4">
                <Link href="/booking">
                <button className="bg-black text-white px-4 py-2 rounded">
                    Reservar
                </button>
                </Link>

                <a
                href={`https://wa.me/XXXXXXXX?text=${encodeURIComponent(message)}`}
                target="_blank"
                >
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    WhatsApp
                </button>
                </a>
            </div>
        </main>
    );
}
