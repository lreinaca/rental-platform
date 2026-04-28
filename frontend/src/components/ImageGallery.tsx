"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
    propertyName: string;
}

export default function ImageGallery({ images, propertyName }: ImageGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const nextImage = () =>
        setLightboxIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-3xl overflow-hidden">
                {/* Main Image */}
                <div
                    className="md:col-span-2 md:row-span-2 relative aspect-hero md:aspect-auto md:h-full cursor-pointer group"
                    onClick={() => openLightbox(0)}
                >
                    <Image
                        src={images[0]}
                        alt={`${propertyName} - Photo principale`}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Secondary Images */}
                {images.slice(1, 5).map((img, i) => (
                    <div
                        key={i}
                        className={`relative aspect-gallery cursor-pointer group ${
                            i >= 2 ? "hidden md:block" : ""
                        }`}
                        onClick={() => openLightbox(i + 1)}
                    >
                        <Image
                            src={img}
                            alt={`${propertyName} - Photo ${i + 2}`}
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                            sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Show All Photos Button on Last Thumbnail */}
                        {i === images.length - 2 && images.length > 4 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <span className="text-white font-semibold text-sm flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                    Toutes les photos
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                        aria-label="Fermer"
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                        aria-label="Photo précédente"
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                        aria-label="Photo suivante"
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-5xl mx-4 aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[lightboxIndex]}
                            alt={`${propertyName} - Photo ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
