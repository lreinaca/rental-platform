import { getPropertyById, getAvailability, getReviewsForProperty } from "@/lib/api";
import { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import BookingWidget from "@/components/BookingWidget";
import ReviewsSection from "@/components/ReviewsSection";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const property = await getPropertyById(id);
    if (!property) return { title: "Propriété non trouvée" };
    return {
        title: `${property.name} — Chalets Kamouraska`,
        description: property.shortDescription,
    };
}

export default async function PropertyDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const property = await getPropertyById(id);
    const availability = await getAvailability(id);
    const reviews = await getReviewsForProperty(id);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-3xl font-bold text-slate-800 mb-3">
                        Propriété non trouvée
                    </h1>
                    <p className="text-slate-500 mb-6">
                        Cette propriété n&apos;existe pas ou a été retirée.
                    </p>
                    <Link
                        href="/"
                        className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-sand-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center gap-2 text-sm text-slate-400">
                    <Link href="/" className="hover:text-lake-600 transition-colors">
                        Accueil
                    </Link>
                    <span>/</span>
                    <Link
                        href="/properties"
                        className="hover:text-lake-600 transition-colors"
                    >
                        Propriétés
                    </Link>
                    <span>/</span>
                    <span className="text-slate-700 font-medium">{property.name}</span>
                </nav>
            </div>

            {/* Gallery */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <ImageGallery images={property.images} propertyName={property.name} />
            </div>

            {/* Content + Booking Widget */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left: Property Info */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Header */}
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="bg-lake-100 text-lake-700 text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                    {property.type === "chalet" ? "Chalet" : "Condo"}
                                </span>
                                {property.lakefront && (
                                    <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                                        Bord du lac
                                    </span>
                                )}
                            </div>
                            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                                {property.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4"
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
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-semibold text-slate-800">
                                        {property.rating}
                                    </span>{" "}
                                    ({property.reviewCount} avis)
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                {
                                    label: "Chambres",
                                    value: property.bedrooms,
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Salles de bain",
                                    value: property.bathrooms,
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 12h8M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Voyageurs",
                                    value: `Max ${property.maxGuests}`,
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Surface",
                                    value: `${property.sqft} pi²`,
                                    icon: (
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                    ),
                                },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-4 text-center shadow-[var(--shadow-card)]"
                                >
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-lake-50 text-lake-600 flex items-center justify-center">
                                        {stat.icon}
                                    </div>
                                    <p className="text-lg font-bold text-slate-800">{stat.value}</p>
                                    <p className="text-xs text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                                À propos
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {property.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                                Points forts
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {property.highlights.map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-[var(--shadow-card)]"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center flex-shrink-0">
                                            <svg
                                                className="w-4 h-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-slate-700 text-sm font-medium">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                                Équipements
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {property.amenities.map((amenity) => (
                                    <div
                                        key={amenity}
                                        className="flex items-center gap-2.5 text-sm text-slate-600 py-2"
                                    >
                                        <svg
                                            className="w-4 h-4 text-lake-500 flex-shrink-0"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews for this property */}
                        {reviews.length > 0 && (
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                                    Avis des voyageurs
                                </h2>
                                <div className="space-y-4">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)]"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full gradient-lake flex items-center justify-center text-white font-semibold text-sm">
                                                    {review.author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800 text-sm">
                                                        {review.author}
                                                    </p>
                                                    <p className="text-slate-400 text-xs">
                                                        {review.stayDate}
                                                    </p>
                                                </div>
                                                <div className="ml-auto flex items-center gap-1">
                                                    <svg
                                                        className="w-4 h-4 text-yellow-500"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-sm font-semibold text-slate-800">
                                                        {review.rating}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                &ldquo;{review.comment}&rdquo;
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Booking Widget */}
                    <div className="lg:col-span-1">
                        <BookingWidget property={property} availability={availability} />
                    </div>
                </div>
            </div>
        </div>
    );
}
