import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-6">
                Propiedades disponibles
            </h1>

            <div className="grid grid-cols-3 gap-6">
                {properties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                ))}
            </div>
        </main>
    );
}
