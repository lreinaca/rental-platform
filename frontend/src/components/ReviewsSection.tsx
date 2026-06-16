import { Review } from "@/app/types";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-yellow-500" : "text-slate-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
    return (
        <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-sand-50">
            <div className="safe-container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <span className="inline-block text-lake-600 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                        Témoignages
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 text-balance leading-tight">
                        Ce que nos invités
                        <br />
                        <span className="text-lake-600">en disent</span>
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-6">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-5 h-5 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-slate-700 font-bold text-lg">4.96</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 text-sm">333+ avis vérifiés</span>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
                        >
                            {/* Stars */}
                            <StarRating rating={review.rating} />

                            {/* Comment */}
                            <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 flex-1 text-pretty">
                                &ldquo;{review.comment}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className="w-10 h-10 rounded-full gradient-lake flex items-center justify-center text-white font-semibold text-sm">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800 text-sm">
                                        {review.author}
                                    </p>
                                    <p className="text-slate-400 text-xs">{review.stayDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
