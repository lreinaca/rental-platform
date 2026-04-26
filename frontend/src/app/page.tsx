import Link from "next/link";

export default function Home() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">
                Booking App
            </h1>

            <Link href="/properties">
                <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                    Ver propiedades
                </button>
            </Link>
        </main>
    );
}
