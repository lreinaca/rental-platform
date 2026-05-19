import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Propriétés — Condos Kamouraska",
    description:
        "Explorez notre collection de Condos et condos haut de gamme au bord du fleuve Saint-Laurent à Kamouraska, Québec.",
};

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <div className="pt-20 min-h-screen bg-sand-50">
            {/* Header */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                    src="/images/aerial-property.png"
                    alt="Vue aérienne du domaine Condos Kamouraska"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-50 via-slate-900/50 to-slate-900/30" />
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
                    <span className="text-lake-300 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                        Collection
                    </span>
                    <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-2">
                        Nos Propriétés
                    </h1>
                    <p className="text-white/70 text-base max-w-lg">
                        {properties.length} propriétés d&apos;exception au bord du fleuve
                        Saint-Laurent
                    </p>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((p) => (
                        <PropertyCard key={p.id} property={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
