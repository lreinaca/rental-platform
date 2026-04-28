"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/mockData";

type BookingStep = "details" | "payment" | "confirmation";

function BookingFlow() {
    const searchParams = useSearchParams();
    const propertyId = searchParams.get("property") || "1";
    const checkInParam = searchParams.get("checkIn") || "";
    const checkOutParam = searchParams.get("checkOut") || "";
    const guestsParam = searchParams.get("guests") || "2";

    const property = properties.find((p) => p.id === propertyId) || properties[0];

    const [step, setStep] = useState<BookingStep>("details");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");
    const [checkIn] = useState(checkInParam);
    const [checkOut] = useState(checkOutParam);
    const [guests] = useState(Number(guestsParam));

    const nights = useMemo(() => {
        if (!checkIn || !checkOut) return 3;
        const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
        return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }, [checkIn, checkOut]);

    const subtotal = nights * property.pricePerNight;
    const cleaningFee = 85;
    const total = subtotal + cleaningFee;

    const isDetailsValid = firstName && lastName && email && phone;

    const handleSubmitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDetailsValid) setStep("payment");
    };

    const handleSubmitPayment = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("confirmation");
    };

    // Progress Steps
    const steps = [
        { key: "details", label: "Informations", number: 1 },
        { key: "payment", label: "Paiement", number: 2 },
        { key: "confirmation", label: "Confirmation", number: 3 },
    ];

    const currentStepIndex = steps.findIndex((s) => s.key === step);

    if (step === "confirmation") {
        return (
            <div className="pt-28 pb-20 min-h-screen bg-sand-50">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    {/* Success Animation */}
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-forest-100 flex items-center justify-center animate-scale-in">
                        <svg
                            className="w-12 h-12 text-forest-600"
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

                    <h1 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Réservation confirmée!
                    </h1>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        Merci, {firstName}! Votre séjour au{" "}
                        <span className="font-semibold text-slate-700">
                            {property.name}
                        </span>{" "}
                        est confirmé. Un courriel de confirmation a été envoyé à{" "}
                        <span className="font-semibold text-slate-700">{email}</span>.
                    </p>

                    {/* Booking Summary Card */}
                    <div className="bg-white rounded-3xl shadow-[var(--shadow-elevated)] overflow-hidden text-left mb-8">
                        <div className="relative h-48">
                            <Image
                                src={property.thumbnail}
                                alt={property.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                        </div>
                        <div className="p-6 lg:p-8">
                            <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                                {property.name}
                            </h2>
                            <p className="text-slate-500 text-sm mb-4">{property.location}</p>
                            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                                        Arrivée
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 mt-1">
                                        {checkIn || "À confirmer"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                                        Départ
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 mt-1">
                                        {checkOut || "À confirmer"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                                        Voyageurs
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 mt-1">
                                        {guests}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-4">
                                <span>Total</span>
                                <span>${total} CAD</span>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 gradient-cta text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen bg-sand-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href={`/properties/${property.id}`}
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lake-600 transition-colors mb-4"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Retour à la propriété
                    </Link>
                    <h1 className="font-serif text-3xl font-bold text-slate-900">
                        Finaliser votre réservation
                    </h1>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center gap-0 mb-10 max-w-md">
                    {steps.map((s, i) => (
                        <div key={s.key} className="flex items-center flex-1">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                        i <= currentStepIndex
                                            ? "gradient-lake text-white shadow-md"
                                            : "bg-slate-200 text-slate-400"
                                    }`}
                                >
                                    {i < currentStepIndex ? (
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        s.number
                                    )}
                                </div>
                                <span
                                    className={`text-sm font-medium hidden sm:block ${
                                        i <= currentStepIndex
                                            ? "text-slate-800"
                                            : "text-slate-400"
                                    }`}
                                >
                                    {s.label}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div
                                    className={`flex-1 h-0.5 mx-3 rounded transition-colors duration-300 ${
                                        i < currentStepIndex
                                            ? "bg-lake-500"
                                            : "bg-slate-200"
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Form */}
                    <div className="lg:col-span-3">
                        {step === "details" && (
                            <form onSubmit={handleSubmitDetails} className="space-y-6">
                                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[var(--shadow-card)]">
                                    <h2 className="font-serif text-xl font-bold text-slate-900 mb-6">
                                        Vos informations
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Prénom
                                            </label>
                                            <input
                                                id="booking-firstname"
                                                type="text"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                placeholder="Marie"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Nom de famille
                                            </label>
                                            <input
                                                id="booking-lastname"
                                                type="text"
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                placeholder="Tremblay"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Courriel
                                            </label>
                                            <input
                                                id="booking-email"
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                placeholder="marie@exemple.ca"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Téléphone
                                            </label>
                                            <input
                                                id="booking-phone"
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                placeholder="+1 (418) 555-0123"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Demandes spéciales{" "}
                                            <span className="text-slate-400">(optionnel)</span>
                                        </label>
                                        <textarea
                                            id="booking-requests"
                                            rows={3}
                                            value={specialRequests}
                                            onChange={(e) => setSpecialRequests(e.target.value)}
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Arrivée tardive, lit bébé, etc."
                                        />
                                    </div>
                                </div>

                                <button
                                    id="booking-continue-btn"
                                    type="submit"
                                    disabled={!isDetailsValid}
                                    className="w-full gradient-cta text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    Continuer au paiement
                                </button>
                            </form>
                        )}

                        {step === "payment" && (
                            <form onSubmit={handleSubmitPayment} className="space-y-6">
                                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[var(--shadow-card)]">
                                    <h2 className="font-serif text-xl font-bold text-slate-900 mb-6">
                                        Informations de paiement
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Numéro de carte
                                            </label>
                                            <input
                                                id="payment-card"
                                                type="text"
                                                required
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                    Date d&apos;expiration
                                                </label>
                                                <input
                                                    id="payment-expiry"
                                                    type="text"
                                                    required
                                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                    placeholder="MM/AA"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                    CVV
                                                </label>
                                                <input
                                                    id="payment-cvv"
                                                    type="text"
                                                    required
                                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Nom sur la carte
                                            </label>
                                            <input
                                                id="payment-name"
                                                type="text"
                                                required
                                                defaultValue={`${firstName} ${lastName}`}
                                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Trust Signals */}
                                    <div className="mt-6 flex items-center gap-4 text-slate-400">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <span className="text-xs">
                                            Paiement sécurisé SSL 256-bit
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep("details")}
                                        className="flex-1 bg-white text-slate-700 font-semibold py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
                                    >
                                        Retour
                                    </button>
                                    <button
                                        id="payment-submit-btn"
                                        type="submit"
                                        className="flex-[2] gradient-cta text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
                                    >
                                        Payer ${total} CAD
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Booking Summary Sidebar */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] overflow-hidden lg:sticky lg:top-24">
                            <div className="relative h-48">
                                <Image
                                    src={property.thumbnail}
                                    alt={property.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 400px"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                                    {property.name}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
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

                                <div className="space-y-3 py-4 border-y border-slate-100">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">
                                            ${property.pricePerNight} × {nights} nuit{nights > 1 ? "s" : ""}
                                        </span>
                                        <span className="text-slate-800 font-medium">
                                            ${subtotal}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Frais de ménage</span>
                                        <span className="text-slate-800 font-medium">
                                            ${cleaningFee}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Frais de service</span>
                                        <span className="text-forest-600 font-medium">$0</span>
                                    </div>
                                </div>

                                <div className="flex justify-between font-bold text-lg mt-4">
                                    <span className="text-slate-900">Total</span>
                                    <span className="text-slate-900">${total} CAD</span>
                                </div>

                                <div className="mt-4 bg-forest-50 text-forest-700 text-xs font-medium px-4 py-2.5 rounded-xl text-center">
                                    💰 Vous économisez ~$
                                    {Math.round(subtotal * 0.15)} vs Airbnb
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense
            fallback={
                <div className="pt-28 pb-20 min-h-screen bg-sand-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-lake-200 border-t-lake-600 rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-slate-500">Chargement...</p>
                    </div>
                </div>
            }
        >
            <BookingFlow />
        </Suspense>
    );
}
