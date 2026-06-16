"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("2");

    return (
        <section id="hero" className="relative min-h-[760px] overflow-hidden sm:min-h-[820px] lg:h-screen lg:min-h-[720px] lg:max-h-[1000px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-chalet.jpeg"
                    alt="Condos Kamouraska — Lakefront luxury on the St. Lawrence"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="gradient-hero absolute inset-0" />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-28 right-6 lg:right-12 z-10 hidden lg:block animate-float">
                <div className="glass-dark rounded-2xl px-5 py-4 text-center">
                    <div className="flex items-center gap-1.5 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-white/90 text-sm font-medium">4.96 / 5</p>
                    <p className="text-white/60 text-xs">333+ avis</p>
                </div>
            </div>

            {/* Content */}
            <div className="safe-container relative z-10 flex min-h-[760px] flex-col justify-end pb-8 pt-28 sm:min-h-[820px] sm:pb-12 lg:h-full lg:min-h-[720px] lg:pb-20">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex max-w-full items-center gap-2 glass-dark rounded-full px-3 py-2 sm:px-4 mb-5 sm:mb-6 animate-fade-in-up opacity-0">
                        <span className="w-2 h-2 shrink-0 rounded-full bg-forest-400 animate-pulse-soft" />
                        <span className="min-w-0 text-white/90 text-xs font-medium sm:text-sm">
                            Disponibilité limitée — Été 2026
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.05] sm:leading-[1.1] mb-4 animate-fade-in-up opacity-0 stagger-1 text-balance">
                        Votre refuge
                        <br />
                        <span className="text-lake-300 whitespace-nowrap">au bord du lac Saint-Pierre</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/80 text-base sm:text-xl max-w-lg mb-7 sm:mb-8 animate-fade-in-up opacity-0 stagger-2 leading-relaxed text-pretty">
                        Des condos d’exception face au majestueux fleuve Saint-Laurent, dans la magnifique région du Kamouraska.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up opacity-0 stagger-3">
                        <Link
                            href="#properties"
                            id="hero-explore-btn"
                            className="gradient-cta text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base sm:text-lg"
                        >
                            Explorer nos Condos
                        </Link>
                        <Link
                            href="/experience"
                            className="glass-dark text-white font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
                        >
                            Découvrir l&apos;expérience
                        </Link>
                    </div>
                </div>

                {/* Availability Widget */}
                <div className="animate-fade-in-up opacity-0 stagger-4">
                    <div className="glass rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-[var(--shadow-elevated)] max-w-4xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                            {/* Check-in */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
                                    Arrivée
                                </label>
                                <input
                                    id="hero-checkin"
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-full min-w-0 bg-white/70 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Check-out */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
                                    Départ
                                </label>
                                <input
                                    id="hero-checkout"
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="w-full min-w-0 bg-white/70 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Guests */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
                                    Voyageurs
                                </label>
                                <select
                                    id="hero-guests"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    className="w-full min-w-0 bg-white/70 border border-slate-200 rounded-xl px-3 sm:px-4 py-3 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all appearance-none"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                                        <option key={n} value={n}>
                                            {n} {n === 1 ? "voyageur" : "voyageurs"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Search Button */}
                            <div className="flex items-end">
                                <Link
                                    href="#properties"
                                    id="hero-search-btn"
                                    className="w-full gradient-cta text-white font-semibold py-3 px-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                    Rechercher
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-float hidden lg:block">
                <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse-soft" />
                </div>
            </div>
        </section>
    );
}
