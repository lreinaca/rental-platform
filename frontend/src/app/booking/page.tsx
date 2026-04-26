"use client";

import { useState } from "react";

export default function BookingPage() {
    const [nights, setNights] = useState(1);
    const pricePerNight = 120;

    const total = nights * pricePerNight;

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-4">
                Reserva
            </h1>

            <label>Noches:</label>
            <input
                type="number"
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="border p-2 ml-2"
            />

            <p className="mt-4 font-semibold">
                Total: ${total}
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                Continuar al pago
            </button>
        </main>
    );
}
