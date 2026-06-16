import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import { getFeaturedProperties } from "@/lib/api";
import { getAllReviews } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
    const properties = await getFeaturedProperties();
    const reviews = await getAllReviews();

    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* Properties Section */}
            <section id="properties" className="py-16 sm:py-20 lg:py-28 bg-sand-50">
                <div className="safe-container">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                        <span className="inline-block text-lake-600 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                            Nos Propriétés
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 text-balance leading-tight">
                            Trouvez votre
                            <br />
                            <span className="text-lake-600">havre de paix</span>
                        </h2>
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed text-pretty">
                            Chaque propriété a été sélectionnée pour son emplacement
                            exceptionnel et son design soigné.
                        </p>
                    </div>

                    {/* Property Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    {/* View All Link */}
                    <div className="text-center mt-12">
                        <Link
                            href="/properties"
                            id="view-all-properties"
                            className="inline-flex items-center gap-2 text-lake-600 font-semibold hover:text-lake-800 transition-colors group"
                        >
                            Voir toutes les propriétés
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <ReviewsSection reviews={reviews} />

            {/* CTA */}
            <CTASection />
        </>
    );
}
