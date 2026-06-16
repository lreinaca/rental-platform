"use client";

import { useState, useEffect, useMemo } from "react";
import { Property, Availability } from "@/app/types";

interface BookingWidgetProps {
    property: Property;
    availability: Availability[];
}

export default function BookingWidget({ property, availability }: BookingWidgetProps) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(2);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const nights = useMemo(() => {
        if (!checkIn || !checkOut) return 0;
        const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
        return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }, [checkIn, checkOut]);

    const subtotal = nights * property.pricePerNight;
    const cleaningFee = nights > 0 ? 85 : 0;
    const total = subtotal + cleaningFee;

    // Count available days in next 14 days
    const soonAvailable = availability
        .slice(0, 14)
        .filter((a) => a.available).length;

    return (
        <div
            id="booking-widget"
            className={`bg-white rounded-2xl lg:rounded-3xl shadow-[var(--shadow-elevated)] border border-slate-100 transition-all duration-500 ${
                isSticky ? "lg:sticky lg:top-24" : ""
            }`}
        >
            <div className="p-5 sm:p-6 lg:p-8">
                {/* Price Header */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                        ${property.pricePerNight}
                    </span>
                    <span className="text-slate-500 text-sm">CAD / nuit</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-sm text-slate-800">
                        {property.rating}
                    </span>
                    <span className="text-slate-400 text-sm">
                        · {property.reviewCount} avis
                    </span>
                </div>

                {/* Urgency Marker */}
                {soonAvailable < 10 && (
                    <div className="bg-sunset-500/10 border border-sunset-500/20 rounded-xl px-4 py-3 mb-6 flex items-start gap-2">
                        <svg
                            className="w-5 h-5 text-sunset-500 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm text-sunset-600 font-medium">
                            Seulement {soonAvailable} nuits disponibles dans les 2 prochaines semaines
                        </p>
                    </div>
                )}

                {/* Date Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden mb-4">
                    <div className="p-3 border-b border-slate-200 sm:border-b-0 sm:border-r">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Arrivée
                        </label>
                        <input
                            id="widget-checkin"
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full min-w-0 text-sm font-medium text-slate-800 bg-transparent focus:outline-none"
                        />
                    </div>
                    <div className="p-3">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Départ
                        </label>
                        <input
                            id="widget-checkout"
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full min-w-0 text-sm font-medium text-slate-800 bg-transparent focus:outline-none"
                        />
                    </div>
                </div>

                {/* Guests */}
                <div className="border border-slate-200 rounded-2xl p-3 mb-6">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Voyageurs
                    </label>
                    <select
                        id="widget-guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full min-w-0 text-sm font-medium text-slate-800 bg-transparent focus:outline-none appearance-none"
                    >
                        {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map(
                            (n) => (
                                <option key={n} value={n}>
                                    {n} {n === 1 ? "voyageur" : "voyageurs"}
                                </option>
                            )
                        )}
                    </select>
                </div>

                {/* Book Button */}
                <button
                    id="widget-book-btn"
                    className="w-full gradient-cta text-white font-semibold py-3.5 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base sm:text-lg mb-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    disabled={nights === 0}
                    onClick={() => {
                        if (nights > 0) {
                            window.location.href = `/booking?property=${property.id}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`;
                        }
                    }}
                >
                    {nights > 0 ? "Réserver maintenant" : "Choisissez vos dates"}
                </button>

                {nights > 0 && (
                    <p className="text-center text-slate-400 text-xs mb-6">
                        Aucun montant ne sera débité pour le moment
                    </p>
                )}

                {/* Price Breakdown */}
                {nights > 0 && (
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                        <div className="flex justify-between gap-4 text-sm">
                            <span className="text-slate-500 underline decoration-dotted">
                                ${property.pricePerNight} × {nights} nuit
                                {nights > 1 ? "s" : ""}
                            </span>
                            <span className="text-slate-800 font-medium">${subtotal}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-sm">
                            <span className="text-slate-500 underline decoration-dotted">
                                Frais de ménage
                            </span>
                            <span className="text-slate-800 font-medium">${cleaningFee}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-sm">
                            <span className="text-slate-500 underline decoration-dotted">
                                Frais de service
                            </span>
                            <span className="text-forest-600 font-medium">$0</span>
                        </div>
                        <div className="flex justify-between gap-4 font-bold text-base pt-3 border-t border-slate-200">
                            <span className="text-slate-900">Total</span>
                            <span className="text-slate-900">${total} CAD</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Trust Signals */}
            <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8">
                <div className="bg-sand-50 rounded-2xl p-4 space-y-3">
                    {[
                        { icon: "🛡️", text: "Meilleur prix garanti — réservation directe" },
                        { icon: "✓", text: "Annulation gratuite jusqu'à 24h avant" },
                        { icon: "💬", text: "Support 24/7 en français" },
                    ].map((signal) => (
                        <div key={signal.text} className="flex items-center gap-3">
                            <span className="text-sm">{signal.icon}</span>
                            <span className="text-xs text-slate-500">{signal.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
