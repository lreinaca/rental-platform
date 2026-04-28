import { Property } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <Link
            href={`/properties/${property.id}`}
            id={`property-card-${property.id}`}
            className="group block bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative aspect-property overflow-hidden">
                <Image
                    src={property.thumbnail}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[var(--ease-smooth)]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {property.lakefront && (
                        <span className="glass-dark text-white/95 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                            <svg
                                className="w-3.5 h-3.5 text-lake-300"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M2 15c6.667-6 13.333 0 20-6v9H2v-3z" opacity="0.3" />
                                <path d="M2 18c6.667-6 13.333 0 20-6v3c-6.667 6-13.333 0-20 6v-3z" />
                            </svg>
                            Bord du lac
                        </span>
                    )}
                    {property.featured && (
                        <span className="bg-sunset-500/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                            Coup de cœur
                        </span>
                    )}
                </div>

                {/* Quick Price */}
                <div className="absolute bottom-3 right-3 glass-dark text-white rounded-xl px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-lg font-bold">${property.pricePerNight}</span>
                    <span className="text-white/70 text-sm"> / nuit</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 lg:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2.5">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-800">{property.rating}</span>
                    <span className="text-sm text-slate-400">({property.reviewCount})</span>
                </div>

                {/* Title & Location */}
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-1 group-hover:text-lake-700 transition-colors duration-300">
                    {property.name}
                </h3>
                <p className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                    <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    {property.location}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {property.shortDescription}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                        </svg>
                        {property.bedrooms} ch.
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12h8M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M7 12v4M17 12v4" />
                        </svg>
                        {property.bathrooms} sdb.
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        {property.maxGuests} pers.
                    </span>
                </div>
            </div>
        </Link>
    );
}
