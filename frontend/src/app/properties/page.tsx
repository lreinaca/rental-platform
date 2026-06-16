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
        <div className="pt-16 sm:pt-20 min-h-screen bg-sand-50">
            {/* Header */}
            <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden">
                <Image
                    src="/images/aerial-property.png"
                    alt="Vue aérienne du domaine Condos Kamouraska"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-50 via-slate-900/50 to-slate-900/30" />
                <div className="safe-container relative h-full flex flex-col justify-end pb-8 sm:pb-10">
                    <span className="text-lake-300 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                        Collection
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                        Nos Propriétés
                    </h1>
                    <p className="text-white/70 text-sm sm:text-base max-w-lg text-pretty">
                        {properties.length} propriétés d&apos;exception au bord du fleuve
                        Saint-Laurent
                    </p>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="safe-container py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {properties.map((p) => (
                        <PropertyCard key={p.id} property={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
