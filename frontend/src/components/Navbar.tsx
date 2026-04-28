"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            id="main-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "glass shadow-[var(--shadow-glass)] py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl gradient-lake flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
                    <div className="flex flex-col">
                        <span
                            className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                                scrolled ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Chalets
                        </span>
                        <span
                            className={`text-[10px] font-medium tracking-[0.2em] uppercase leading-none transition-colors duration-300 ${
                                scrolled ? "text-lake-600" : "text-lake-200"
                            }`}
                        >
                            Kamouraska
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { href: "/#properties", label: "Nos Chalets" },
                        { href: "/#experience", label: "L'Expérience" },
                        { href: "/#reviews", label: "Avis" },
                        { href: "/#contact", label: "Contact" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 hover:text-lake-500 ${
                                scrolled ? "text-slate-600" : "text-white/90"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#properties"
                        id="nav-book-now"
                        className="gradient-cta text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Réserver
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        scrolled
                            ? "bg-slate-100 text-slate-700"
                            : "bg-white/15 text-white"
                    }`}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        {mobileOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-[var(--ease-smooth)] ${
                    mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="glass mx-4 mt-3 rounded-2xl p-4 shadow-[var(--shadow-elevated)]">
                    {[
                        { href: "/#properties", label: "Nos Chalets" },
                        { href: "/#experience", label: "L'Expérience" },
                        { href: "/#reviews", label: "Avis" },
                        { href: "/#contact", label: "Contact" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-lake-50 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#properties"
                        onClick={() => setMobileOpen(false)}
                        className="block mt-2 text-center gradient-cta text-white font-semibold py-3 rounded-xl"
                    >
                        Réserver maintenant
                    </Link>
                </div>
            </div>
        </header>
    );
}
