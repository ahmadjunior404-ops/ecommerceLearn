import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles, Layers, Crown } from 'lucide-react';

const SplitScreenBanner = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-12 sm:py-16 bg-zinc-100/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Curated Menswear Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif uppercase tracking-tight text-zinc-950">
            Shop Menswear By Category
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            Explore modern everyday menswear essentials or commission bespoke handcrafted Nigerian traditional couture.
          </p>
        </div>

        {/* ASOS-Style Dual Split Screen Grid: Standard Menswear vs Traditional Couture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* ================= LEFT: STANDARD MEN'S CLOTHES ================= */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-zinc-950 min-h-[480px] sm:min-h-[540px] flex flex-col justify-end p-6 sm:p-10 border border-zinc-800 transition-all duration-500 hover:shadow-2xl">
            
            {/* Background Editorial Photo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/54/51/cd/5451cd28a19aeb7bebdfd01150a8ec1c.jpg"
                alt="Modern Standard Menswear Collection"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/25" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                <Layers className="w-3.5 h-3.5 text-zinc-700" />
                <span>Modern Essentials</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-white leading-tight">
                Standard Men's Wear
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
                Selvedge stretch jeans, 320GSM drop-shoulder tees, tapered cargo sweatpants, and handcrafted Nigerian leather summer slides.
              </p>

              {/* Quick Subcategory Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => navigateTo('mens-standard', 'Jeans & Denim')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  👖 Selvedge Jeans
                </button>
                <button
                  onClick={() => navigateTo('mens-standard', 'Tops & Shirts')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  👕 Boxy Tees & Tops
                </button>
                <button
                  onClick={() => navigateTo('mens-standard', 'Joggers & Sweats')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  🏃 Cargo Joggers
                </button>
                <button
                  onClick={() => navigateTo('mens-standard', 'Footwear & Slides')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  🩴 Leather Slides
                </button>
              </div>

              {/* Primary Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => navigateTo('mens-standard')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-white hover:bg-amber-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform group-hover:translate-x-1"
                >
                  <span>Explore Modern Menswear</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* ================= RIGHT: TRADITIONAL NIGERIAN WEAR ================= */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-zinc-950 min-h-[480px] sm:min-h-[540px] flex flex-col justify-end p-6 sm:p-10 border border-zinc-800 transition-all duration-500 hover:shadow-2xl">
            
            {/* Background Editorial Photo */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/38/d2/e2/38d2e22c6a7d0aa2e3a643d9d18d6440.jpg"
                alt="Nigerian Traditional Haute Couture Collection"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/25" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                <Crown className="w-3.5 h-3.5" />
                <span>Nigerian Couture</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-white leading-tight">
                Traditional Nigerian Wear
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
                Hand-embroidered Royal Grand Agbadas, bespoke wool Senator suits, and Egyptian linen Dashiki sets tailored to precision.
              </p>

              {/* Quick Subcategory Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => navigateTo('traditional')}
                  className="px-3 py-1.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-amber-400/30"
                >
                  👑 Grand Agbadas
                </button>
                <button
                  onClick={() => navigateTo('traditional')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  🎩 Senator Suits
                </button>
                <button
                  onClick={() => navigateTo('traditional')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  ✨ Dashiki Caftans
                </button>
                <button
                  onClick={() => navigateTo('traditional')}
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider transition-all border border-white/20"
                >
                  🧵 Hand-loomed Fila
                </button>
              </div>

              {/* Primary Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => navigateTo('traditional')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform group-hover:translate-x-1"
                >
                  <span>Explore Traditional Wears</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SplitScreenBanner;
