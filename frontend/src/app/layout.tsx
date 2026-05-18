import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Chalets Kamouraska — Location de Chalets & Condos au Bord du Lac",
    description:
        "Découvrez nos chalets et condos haut de gamme au bord du fleuve Saint-Laurent à Kamouraska, Québec. Réservation directe aux meilleurs tarifs. Vue panoramique, design scandinave, accès direct au lac.",
    keywords:
        "chalets kamouraska, location chalet québec, condo bord du lac, saint-laurent, kamouraska hébergement, chalet lakefront, location vacances québec",
    openGraph: {
        title: "Chalets Kamouraska — Votre Refuge au Bord du Lac",
        description:
            "Chalets et condos d'exception face au fleuve Saint-Laurent. Réservation directe, meilleur prix garanti.",
        type: "website",
        locale: "fr_CA",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full`}>
            <body className="min-h-full flex flex-col antialiased">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
