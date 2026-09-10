import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote, ThumbsUp, MapPin, Award } from 'lucide-react';

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-zinc-950 text-white scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Customer Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-white mb-4">
            Customer Reviews
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Read authentic feedback from Nigerians at home & the diaspora who trust ÀSÀ for their landmark celebrations.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-zinc-900/90 border border-zinc-800 px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="text-xs sm:text-sm text-zinc-300 font-medium">
              Over <strong className="text-white font-bold">2,450+</strong> Verified 5-Star Reviews
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>99.4% Fit Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold text-white mb-2 font-serif">
                  "{review.title}"
                </h3>

                {/* Review Body */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              {/* Customer Info & Purchased Garment */}
              <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{review.name}</h4>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-amber-300/80 bg-amber-950/30 px-2.5 py-1 rounded border border-amber-500/20 truncate">
                  Purchased: <strong>{review.productPurchased}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 text-center">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-3">
            Tag us in your fits on Instagram with <span className="text-amber-400">#AsaLuxeStyle</span> to be featured
          </p>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
