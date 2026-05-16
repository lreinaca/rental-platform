"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "15147422293";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Bonjour, je souhaiterais obtenir plus d’informations concernant les condos/chalets à Kamouraska."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className={`
                fixed bottom-6 right-6 z-50
                flex items-center justify-center
                w-14 h-14 rounded-full shadow-2xl
                bg-[#25D366] hover:bg-[#20bc5a]
                transition-all duration-500 ease-out
                hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]
                focus:outline-none focus:ring-4 focus:ring-[#25D366]/40
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
        >
            {/* WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                height="30"
                fill="white"
                aria-hidden="true"
            >
                <path d="M16.002 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.632 4.673 1.832 6.698L2.667 29.333l6.806-1.784A13.29 13.29 0 0 0 16.002 29.333c7.364 0 13.332-5.97 13.332-13.333S23.366 2.667 16.002 2.667zm0 24.222a10.86 10.86 0 0 1-5.545-1.524l-.397-.237-4.038 1.059 1.079-3.936-.26-.403A10.851 10.851 0 0 1 5.11 16c0-5.998 4.882-10.882 10.892-10.882S26.893 10.002 26.893 16c0 5.997-4.883 10.89-10.891 10.89zm5.972-8.151c-.327-.164-1.934-.954-2.234-1.063-.3-.11-.518-.164-.736.164-.218.327-.845 1.063-1.035 1.281-.19.218-.382.245-.709.082-.327-.164-1.38-.509-2.629-1.622-.97-.866-1.626-1.936-1.817-2.263-.19-.327-.02-.503.143-.666.147-.146.327-.382.49-.572.165-.19.219-.327.328-.545.11-.218.055-.41-.027-.572-.082-.163-.736-1.775-1.009-2.431-.265-.638-.535-.551-.736-.561l-.627-.01c-.218 0-.572.082-.872.41-.3.327-1.145 1.118-1.145 2.727s1.172 3.163 1.336 3.381c.163.218 2.306 3.52 5.587 4.935.781.337 1.39.538 1.865.689.784.25 1.497.215 2.06.13.629-.093 1.934-.79 2.207-1.554.273-.763.273-1.417.19-1.554-.08-.136-.299-.218-.626-.382z" />
            </svg>

            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        </a>
    );
}
