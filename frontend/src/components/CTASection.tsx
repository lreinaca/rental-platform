import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/aerial-property.png"
                    alt="Vue aérienne du domaine Chalets Kamouraska"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <span className="inline-block text-lake-300 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                        Réservation Directe
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance leading-tight">
                        Réservez en direct,
                        <br />
                        <span className="text-lake-300">économisez plus</span>
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                        En réservant directement sur notre site, vous bénéficiez des
                        meilleurs tarifs garantis — sans frais de service ni commission
                        de plateforme.
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {[
                            { value: "15%", label: "d'économies vs Airbnb" },
                            { value: "0$", label: "frais de service" },
                            { value: "24h", label: "annulation gratuite" },
                        ].map((benefit) => (
                            <div
                                key={benefit.label}
                                className="glass-dark rounded-2xl p-4 text-center"
                            >
                                <p className="text-2xl font-bold text-lake-300 mb-1">
                                    {benefit.value}
                                </p>
                                <p className="text-white/60 text-sm">{benefit.label}</p>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="#properties"
                        id="cta-reserve-btn"
                        className="inline-flex items-center gap-3 gradient-cta text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
                    >
                        Voir les disponibilités
                        <svg
                            className="w-5 h-5"
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
    );
}
