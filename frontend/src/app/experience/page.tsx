import Image from "next/image";

const experiences = [
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 15c6.667-6 13.333 0 20-6v9H2v-3z" />
            </svg>
        ),
        title: "Bord du Lac",
        description:
            "Accès direct au fleuve Saint-Laurent. Quais privés, kayaks et paddleboards à votre disposition.",
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Couchers de Soleil",
        description:
            "Des vues spectaculaires sur le fleuve, avec les montagnes Laurentiennes en toile de fond.",
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Design Scandinave",
        description:
            "Intérieurs soigneusement conçus avec des matériaux naturels, pour un confort authentique.",
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Charme Local",
        description:
            "À quelques pas du village de Kamouraska : fromageries, restaurants gastronomiques et galeries d'art.",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3c8d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="safe-container relative">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20">
                    <span className="inline-block text-lake-600 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                        L&apos;Expérience
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 text-balance leading-tight">
                        Plus qu&apos;un séjour,
                        <br />
                        <span className="text-lake-600">une évasion</span>
                    </h2>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed text-pretty">
                        Chaque détail a été pensé pour créer une expérience
                        inoubliable, entre nature préservée et confort moderne.
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
                    {experiences.map((exp) => (
                        <div
                            key={exp.title}
                            className="group text-center p-5 sm:p-6 lg:p-8 rounded-2xl bg-sand-50 hover:bg-white hover:shadow-[var(--shadow-card-hover)] transition-all duration-500"
                        >
                            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-lake-100 text-lake-600 flex items-center justify-center group-hover:bg-lake-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                {exp.icon}
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                                {exp.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Feature Image Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-gallery shadow-[var(--shadow-elevated)]">
                        <Image
                            src="/images/deck-sunset.png"
                            alt="Terrasse avec vue sur le lac au coucher du soleil"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="py-4">
                        <span className="text-lake-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                            Moments Inoubliables
                        </span>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                            Chaque saison apporte
                            <br />
                            sa propre magie
                        </h3>
                        <p className="text-slate-500 text-base leading-relaxed mb-6 text-pretty">
                            De l&apos;été vibrant avec ses activités nautiques aux hivers
                            féeriques au coin du feu, le Kamouraska offre un spectacle
                            sans pareil à chaque saison.
                        </p>
                        <div className="space-y-4">
                            {[
                                { season: "Été", desc: "Kayak, paddleboard, baignade et vélo" },
                                { season: "Automne", desc: "Couleurs flamboyantes et randonnées" },
                                { season: "Hiver", desc: "Ski de fond, raquettes et spa nordique" },
                                { season: "Printemps", desc: "Observation des oiseaux et fleuve" },
                            ].map((item) => (
                                <div key={item.season} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-lake-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg
                                            className="w-3.5 h-3.5 text-lake-600"
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
                                    <div className="min-w-0">
                                        <span className="font-semibold text-slate-800 text-sm">{item.season}</span>
                                        <span className="text-slate-500 text-sm"> — {item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
