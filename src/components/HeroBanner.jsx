import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  Scissors, 
  ShoppingBag, 
  Crown, 
  ShieldCheck, 
  Eye, 
  Pause, 
  Play 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ALL_COLLECTION } from '../data/products';

// 6 distinct clothing types representing the complete breadth of modern menswear & Nigerian traditional wear
const CLOTHING_SHOWCASE = [
  {
    id: 'senator',
    productId: 'm-trad-2',
    typeLabel: 'senator',
    categoryTag: 'Handmade Native Top',
    badge: 'Bespoke Handmade',
    title: 'Onyx Wool Senator Kaftan',
    fabricDetail: 'Italian Merino Wool · Broad Shoulder Drape',
    priceNGN: 82000,
    statKey: 'traditional',
    image: 'https://i.pinimg.com/736x/29/f1/40/29f14021c97b853a9df0cdd37a39da89.jpg',
    backdropImage: 'https://i.pinimg.com/736x/43/7a/63/437a6330cf749535c8b5a72142ec7736.jpg',
    targetPage: 'traditional',
    targetCategory: 'Senator'
  },
  {
    id: 'agbada',
    productId: 'm-trad-5',
    typeLabel: 'agbada',
    categoryTag: 'Ceremonial 3-Piece Set',
    badge: 'Royal Couture',
    title: 'Royal Gold & Silk Damask Grand Agbada',
    fabricDetail: 'Hand-Loomed Damask · Gold Silk Threading',
    priceNGN: 145000,
    statKey: 'traditional',
    image: 'https://i.pinimg.com/736x/98/e7/8f/98e78fdd7789aca06f1ed82e6c513e13.jpg',
    backdropImage: 'https://i.pinimg.com/736x/38/d2/e2/38d2e22c6a7d0aa2e3a643d9d18d6440.jpg',
    targetPage: 'traditional',
    targetCategory: 'Agbada'
  },
  {
    id: 'tee',
    productId: 'm-std-2',
    typeLabel: 'tee',
    categoryTag: 'Heavyweight Streetwear',
    badge: 'Ready to Ship',
    title: '320GSM Heavyweight Streetwear Boxy Tee',
    fabricDetail: '100% Combed Organic Cotton · 320 GSM',
    priceNGN: 24000,
    statKey: 'everyday',
    image: 'https://i.pinimg.com/736x/0e/06/24/0e062486f229dc2aa6a678f716fb7a55.jpg',
    backdropImage: 'https://i.pinimg.com/736x/67/5a/4d/675a4d106808b0a9a6e51a0bec38f011.jpg',
    targetPage: 'mens-standard',
    targetCategory: 'Tops & Shirts'
  },
  {
    id: 'denim',
    productId: 'm-std-1',
    typeLabel: 'denim',
    categoryTag: 'Everyday Denim',
    badge: 'In Stock Dispatch',
    title: 'Vintage Indigo Selvedge Stretch Jeans',
    fabricDetail: '13.5oz Selvedge Stretch · Copper Hardware',
    priceNGN: 38000,
    statKey: 'everyday',
    image: 'https://i.pinimg.com/736x/54/51/cd/5451cd28a19aeb7bebdfd01150a8ec1c.jpg',
    backdropImage: 'https://i.pinimg.com/736x/1b/0d/8f/1b0d8f0a34df6d8224c33077d787a3ab.jpg',
    targetPage: 'mens-standard',
    targetCategory: 'Jeans & Denim'
  },
  {
    id: 'slides',
    productId: 'm-std-3',
    typeLabel: 'slides',
    categoryTag: 'Handmade Footwear',
    badge: 'Artisanal Leather',
    title: 'Handcrafted Nigerian Cowhide Leather Slides',
    fabricDetail: '100% Full-Grain Cowhide · Ergonomic Footbed',
    priceNGN: 28000,
    statKey: 'footwear',
    image: 'https://i.pinimg.com/736x/32/eb/df/32ebdfc24b58af7868b8af3f9a5e0281.jpg',
    backdropImage: 'https://i.pinimg.com/736x/13/fe/24/13fe247616b6b97d0e487ffceb467538.jpg',
    targetPage: 'mens-standard',
    targetCategory: 'Footwear & Slides'
  },
  {
    id: 'joggers',
    productId: 'm-std-4',
    typeLabel: 'joggers',
    categoryTag: 'Urban Fleece Jogger',
    badge: 'New Atelier Drop',
    title: 'French Terry Tapered Cargo Joggers',
    fabricDetail: '450GSM Plush Heavyweight French Terry',
    priceNGN: 34000,
    statKey: 'everyday',
    image: 'https://i.pinimg.com/736x/9a/52/86/9a52863536e7789583fbc7c4f7163776.jpg',
    backdropImage: 'https://i.pinimg.com/736x/cb/39/a8/cb39a8c4359c605940cab0545d090dc0.jpg',
    targetPage: 'mens-standard',
    targetCategory: 'Joggers & Sweats'
  }
];

const HeroBanner = () => {
  const { navigateTo, formatPrice, setQuickViewProduct } = useShop();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCloth = CLOTHING_SHOWCASE[currentIndex];

  // Auto-advance clothing animation every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLOTHING_SHOWCASE.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleSelectCloth = (index) => {
    setCurrentIndex(index);
  };

  const handleStatClick = (statKey) => {
    const foundIndex = CLOTHING_SHOWCASE.findIndex((c) => c.statKey === statKey);
    if (foundIndex !== -1) {
      handleSelectCloth(foundIndex);
    }
  };

  // Find exact product in ALL_COLLECTION for Quick View modal
  const handleOpenQuickView = (e, cloth) => {
    e.stopPropagation();
    const product = ALL_COLLECTION.find((p) => p.id === cloth.productId);
    if (product) {
      setQuickViewProduct(product);
    } else {
      navigateTo(cloth.targetPage, cloth.targetCategory || 'All');
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white select-none">
      
      {/* Dynamic Ambient Background with Subtle Tint and Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          key={activeCloth.backdropImage}
          src={activeCloth.backdropImage}
          alt={activeCloth.title}
          className="w-full h-full object-cover object-top opacity-15 filter saturate-150 scale-105 transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: User's Exact Headline, Description, CTAs & 4 Interactive Stats */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Luxury Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wider uppercase mb-6 backdrop-blur-md shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-200 font-bold">Premium Menswear &amp; Nigerian Traditional Wear</span>
            </div>

            {/* Exact Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Modern Men's Fashion.<br />
              <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                For Every Occasion.
              </span>
            </h1>

            {/* Exact Subtext Description */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed mb-8">
              Discover high-grade everyday menswear — selvedge stretch denim, 320GSM boxy tees, fleece joggers, and handmade leather slides — alongside bespoke handcrafted Nigerian Agbadas and Senator suits.
            </p>

            {/* Exact Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => navigateTo('mens-standard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-amber-300 text-zinc-950 font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-amber-400/20 group cursor-pointer"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Shop Menswear Essentials</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('traditional')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-xs tracking-widest uppercase hover:border-amber-400/50 transition-all cursor-pointer"
              >
                <Crown className="h-4 w-4 text-amber-400" />
                <span>Explore Nigerian Traditional</span>
              </button>
            </div>

            {/* Exact Social Proof Stats Grid (Interactive: Click to preview that clothing type!) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-zinc-800/80 w-full text-left">
              
              {/* 1. Everyday Wear: Denim, Tees & Sweats */}
              <button
                type="button"
                onClick={() => handleStatClick('everyday')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeCloth.statKey === 'everyday'
                    ? 'bg-zinc-900 border-amber-400 ring-1 ring-amber-400/30'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
                title="Click to view Denim, Tees & Sweats"
              >
                <div className="text-base sm:text-lg font-serif font-medium text-white">
                  Everyday Wear
                </div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase mt-0.5">
                  Denim, Tees &amp; Sweats
                </div>
              </button>

              {/* 2. Leather Footwear: 100% Genuine Cowhide */}
              <button
                type="button"
                onClick={() => handleStatClick('footwear')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeCloth.statKey === 'footwear'
                    ? 'bg-zinc-900 border-amber-400 ring-1 ring-amber-400/30'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
                title="Click to view Leather Footwear"
              >
                <div className="text-base sm:text-lg font-serif font-medium text-emerald-400">
                  Leather Footwear
                </div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase mt-0.5">
                  100% Genuine Cowhide
                </div>
              </button>

              {/* 3. Traditional Wears: Bespoke Grand Agbadas */}
              <button
                type="button"
                onClick={() => handleStatClick('traditional')}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeCloth.statKey === 'traditional'
                    ? 'bg-zinc-900 border-amber-400 ring-1 ring-amber-400/30'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
                title="Click to view Traditional Wears"
              >
                <div className="text-base sm:text-lg font-serif font-medium text-amber-300">
                  Traditional Wears
                </div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase mt-0.5">
                  Bespoke Grand Agbadas
                </div>
              </button>

              {/* 4. Fast Shipping: Nigeria & Worldwide */}
              <div className="p-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 text-left">
                <div className="text-base sm:text-lg font-serif font-medium text-white">
                  Fast Shipping
                </div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase mt-0.5">
                  Nigeria &amp; Worldwide
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Exact Curated Lookbook & 6-Item Rotating Wardrobe from Veyra-Nig */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-full max-w-[490px] rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/90 backdrop-blur-xl">
              
              {/* Header: Scissors Icon + "Curated Lookbook | Sartorial Lagos" + "Verified Quality" badge + Pause/Play toggle */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 rounded-full bg-amber-400/10 border border-amber-400/20 items-center justify-center text-amber-400">
                    <Scissors className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      Curated Lookbook
                    </span>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      Sartorial Lagos
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold uppercase tracking-wider">
                    Verified Quality
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title={isPaused ? "Resume Rotation" : "Pause Rotation"}
                    aria-label={isPaused ? "Resume Rotation" : "Pause Rotation"}
                  >
                    {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                  </button>
                </div>
              </div>

              {/* Main Image Stage: h-[290px] sm:h-[310px] w-full rounded-2xl my-3 bg-black overflow-hidden group */}
              <div className="relative h-[290px] sm:h-[310px] w-full rounded-2xl my-3 bg-black overflow-hidden group">
                <img
                  key={activeCloth.id}
                  src={activeCloth.image}
                  alt={activeCloth.title}
                  className="w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                {/* Top-Left Badge: Bespoke Handmade / In Stock */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-amber-400 border border-amber-400/30 font-bold">
                    {activeCloth.badge}
                  </span>
                </div>

                {/* Top-Right Badge: ✦ Curated Drop */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-white border border-white/20 flex items-center gap-1.5 font-bold">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    <span>Curated Drop</span>
                  </span>
                </div>

                {/* Bottom Floating Glassmorphic Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-zinc-300 font-bold tracking-wider">
                      {activeCloth.categoryTag}
                    </span>
                    <span className="text-sm font-serif font-bold text-amber-400">
                      {formatPrice(activeCloth.priceNGN)}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white truncate">
                    {activeCloth.title}
                  </h4>
                  <p className="text-[10px] text-zinc-300 font-mono truncate">
                    {activeCloth.fabricDetail}
                  </p>
                </div>
              </div>

              {/* Rotating Wardrobe Collection: 6 Thumbnail Selector Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-zinc-400 font-bold px-1">
                  <span>Rotating Wardrobe Collection:</span>
                  <span className="text-amber-400">{currentIndex + 1} of {CLOTHING_SHOWCASE.length}</span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {CLOTHING_SHOWCASE.map((cloth, idx) => (
                    <button
                      key={cloth.id}
                      onClick={() => handleSelectCloth(idx)}
                      className={`group relative h-16 sm:h-18 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                        currentIndex === idx
                          ? 'border-amber-400 ring-2 ring-amber-400/40 shadow-lg scale-105 opacity-100'
                          : 'border-zinc-800 opacity-65 hover:opacity-100 hover:border-zinc-600'
                      }`}
                      aria-label={`View ${cloth.typeLabel}`}
                    >
                      <img
                        src={cloth.image}
                        alt={cloth.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {currentIndex === idx && (
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-400/30 to-transparent pointer-events-none" />
                      )}
                      <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[7px] sm:text-[8px] font-mono text-white text-center py-0.5 truncate uppercase font-bold tracking-wider">
                        {cloth.typeLabel}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-3.5 flex items-center justify-between border-t border-zinc-800/80 mt-3">
                <div className="text-[11px] font-mono text-zinc-400">
                  Handcrafted &amp; Ready to Wear
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleOpenQuickView(e, activeCloth)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer border border-zinc-700"
                    title="Quick preview"
                  >
                    <Eye className="h-3 w-3 text-amber-400" />
                    <span>Quick View</span>
                  </button>

                  <button
                    onClick={() => navigateTo(activeCloth.targetPage, activeCloth.targetCategory || 'All')}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-950 font-mono uppercase tracking-wider text-[10px] font-bold hover:bg-amber-300 transition-all shadow-md group cursor-pointer"
                  >
                    <span>Explore Drops</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Feature Highlights Banner: 100% Fit Guarantee, Doorstep Nationwide Delivery, Authentic Craft */}
      <div className="border-t border-b border-zinc-800/70 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                100% Fit Guarantee
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                If your Senator set or native fit does not drape accurately, return it free within 7 days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                Doorstep Nationwide Delivery
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Direct doorstep delivery from each verified designer across all 36 Nigerian states.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                Authentic Nigerian Craft
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                Direct partnerships with verified boutiques, fashion houses, footwear artisans, and streetwear ateliers.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroBanner;
