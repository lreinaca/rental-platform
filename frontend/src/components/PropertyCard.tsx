import { Property } from "@/app/types";
import Link from "next/link";

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow">
            <img src={property.image} alt={property.name} />
            <div className="p-4">
                <h2 className="text-lg font-bold">{property.name}</h2>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="mt-2 font-semibold">
                    ${property.pricePerNight} / noche
                </p>

                <Link href={`/properties/${property.id}`}>
                    <button className="mt-3 bg-black text-white px-4 py-2 rounded">
                        Ver detalles
                    </button>
                </Link>
            </div>
        </div>
    );
}
