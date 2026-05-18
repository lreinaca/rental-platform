import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative Wave */}
            <div className="absolute top-0 left-0 right-0 h-1 gradient-lake" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-xl gradient-lake flex items-center justify-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-serif font-bold text-lg text-white block leading-tight">
                                    Chalets
                                </span>
                                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-lake-400 leading-none">
                                    Kamouraska
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Découvrez le charme du Kamouraska dans nos chalets et condos
                            haut de gamme, au bord du fleuve Saint-Laurent.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            {[
                                {
                                    label: "Instagram",
                                    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
                                },
                                {
                                    label: "Facebook",
                                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                                },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-lake-600 hover:text-white transition-all duration-300"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-lake-400 mb-5">
                            Explorer
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "/properties", label: "Tous les chalets" },
                                { href: "/#experience", label: "L'expérience" },
                                { href: "/#reviews", label: "Avis clients" },
                                { href: "/#contact", label: "Nous contacter" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-lake-400 mb-5">
                            Informations
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Politique d'annulation",
                                "FAQ",
                                "Conditions d'utilisation",
                                "Vie privée",
                            ].map((text) => (
                                <li key={text}>
                                    <a
                                        href="#"
                                        className="text-slate-400 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-lake-400 mb-5">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-lake-400 mt-0.5 shrink-0"
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
                                <div>
                                    <span className="text-slate-400 text-sm block">
                                        10 Chemin du Lac St Pierre East
                                        <br />
                                        Mont-Carmel, QC G0L 1W0
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/LrCETCKWy8pcCU6C7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 mt-2 text-lake-300 text-sm hover:text-white transition-colors duration-300"
                                    >
                                        Voir sur Google Maps
                                        <svg
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-lake-400 shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span className="text-slate-400 text-sm">
                                    +1 (418) 555-0123
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-lake-400 shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span className="text-slate-400 text-sm">
                                    info@chaletskamouraska.ca
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Chalets Kamouraska. Tous droits
                        réservés.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Fait avec ❤️ au Québec
                    </p>
                </div>
            </div>
        </footer>
    );
}
