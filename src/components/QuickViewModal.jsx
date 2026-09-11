import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Scissors, 
  ShieldCheck, 
  Ruler, 
  Crown, 
  Clock, 
  CheckCircle2, 
  RotateCcw 
} from 'lucide-react';

const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    formatPrice,
    savedMeasurements,
    user,
    setIsCartOpen
  } = useShop();
  
  if (!quickViewProduct) return null;

  const isCouture = quickViewProduct.isTraditional === true || quickViewProduct.category === 'Traditional';

  const [selectedSize, setSelectedSize] = useState(
    quickViewProduct.sizes ? quickViewProduct.sizes[0] : 'L'
  );
  const [selectedImage, setSelectedImage] = useState(quickViewProduct.image);
  const [quantity, setQuantity] = useState(1);

  // Pre-measurements state for Bespoke Couture
  const [measurements, setMeasurements] = useState({
    chest: savedMeasurements?.chest || '42',
    shoulder: savedMeasurements?.shoulder || '19.5',
    waist: savedMeasurements?.waist || '34',
    agbadaLength: savedMeasurements?.agbadaLength || '58',
    sleeveLength: savedMeasurements?.sleeveLength || '33',
    trouserLength: savedMeasurements?.trouserLength || '41',
    neck: savedMeasurements?.neck || '16.5'
  });

  // Sync if saved measurements change
  useEffect(() => {
    if (savedMeasurements) {
      setMeasurements({
        chest: savedMeasurements.chest || '42',
        shoulder: savedMeasurements.shoulder || '19.5',
        waist: savedMeasurements.waist || '34',
        agbadaLength: savedMeasurements.agbadaLength || '58',
        sleeveLength: savedMeasurements.sleeveLength || '33',
        trouserLength: savedMeasurements.trouserLength || '41',
        neck: savedMeasurements.neck || '16.5'
      });
    }
  }, [savedMeasurements]);

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    if (isCouture) {
      addToCart(quickViewProduct, 'Bespoke Custom Fit', quantity, measurements);
    } else {
      addToCart(quickViewProduct, selectedSize, quantity);
    }
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  const handleResetToSaved = () => {
    if (savedMeasurements) {
      setMeasurements(savedMeasurements);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/80 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 animate-scale border border-zinc-200 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto">
          
          {/* Images Gallery Side */}
          <div className="bg-zinc-100 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-200">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-xs relative">
              <img
                src={selectedImage}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />

              {isCouture && (
                <div className="absolute top-3 left-3 bg-amber-400 text-zinc-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  👑 Pre-Order Couture
                </div>
              )}
            </div>

            {/* Thumbnail previews if available */}
            {quickViewProduct.secondaryImage && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSelectedImage(quickViewProduct.image)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === quickViewProduct.image ? 'border-amber-600 shadow-md' : 'border-zinc-200 opacity-70'
                  }`}
                >
                  <img src={quickViewProduct.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setSelectedImage(quickViewProduct.secondaryImage)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === quickViewProduct.secondaryImage ? 'border-amber-600 shadow-md' : 'border-zinc-200 opacity-70'
                  }`}
                >
                  <img src={quickViewProduct.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Product Details Side */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category and Rating */}
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
                <span className="uppercase tracking-wider font-bold text-amber-800 font-sans">
                  {isCouture ? 'Nigerian Couture' : 'Modern Essential Wear'}
                </span>
                <div className="flex items-center gap-1 text-zinc-800 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-zinc-400 font-normal">({quickViewProduct.reviewsCount})</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black font-serif text-zinc-950 leading-snug">
                {quickViewProduct.name}
              </h2>

              {/* Pricing & Availability */}
              <div className="flex items-baseline gap-3 mt-2.5">
                <span className="text-2xl font-black text-zinc-950">
                  {formatPrice(quickViewProduct.priceNGN)}
                </span>
                {quickViewProduct.originalPriceNGN && (
                  <span className="text-sm text-zinc-400 line-through">
                    {formatPrice(quickViewProduct.originalPriceNGN)}
                  </span>
                )}
                
                {isCouture ? (
                  <span className="text-[11px] bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-700" /> Pre-Order (7-12 Days)
                  </span>
                ) : (
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                    In Stock & Ready To Ship
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Fabric Specs */}
              {quickViewProduct.fabric && (
                <div className="mt-3.5 p-2.5 bg-zinc-50 border border-zinc-200/80 rounded-xl text-xs text-zinc-700 flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>Fabric:</strong> {quickViewProduct.fabric}</span>
                </div>
              )}

              {/* ================= SECTION A: NIGERIAN COUTURE PRE-MEASUREMENTS ================= */}
              {isCouture ? (
                <div className="mt-5 p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Ruler className="w-4 h-4 text-amber-700" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-amber-950">
                        Bespoke Pre-Measurements (Inches)
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetToSaved}
                      className="text-[11px] text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1"
                      title="Reset to saved profile measurements"
                    >
                      <RotateCcw className="w-3 h-3" /> Auto-Fill Saved
                    </button>
                  </div>

                  <p className="text-[11px] text-amber-800 leading-snug">
                    Enter your tailored dimensions below. Our master artisans in Lagos will cut this garment precisely to these measurements.
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Chest / Bust
                      </label>
                      <input
                        type="text"
                        value={measurements.chest}
                        onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 42"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Shoulder
                      </label>
                      <input
                        type="text"
                        value={measurements.shoulder}
                        onChange={(e) => setMeasurements({ ...measurements, shoulder: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 19.5"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Waist
                      </label>
                      <input
                        type="text"
                        value={measurements.waist}
                        onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 34"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Agbada Length
                      </label>
                      <input
                        type="text"
                        value={measurements.agbadaLength}
                        onChange={(e) => setMeasurements({ ...measurements, agbadaLength: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 58"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Sleeve
                      </label>
                      <input
                        type="text"
                        value={measurements.sleeveLength}
                        onChange={(e) => setMeasurements({ ...measurements, sleeveLength: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 33"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-600 uppercase mb-0.5">
                        Trouser
                      </label>
                      <input
                        type="text"
                        value={measurements.trouserLength}
                        onChange={(e) => setMeasurements({ ...measurements, trouserLength: e.target.value })}
                        className="w-full px-2 py-1.5 bg-white border border-amber-300 rounded-lg text-xs font-bold text-zinc-900 focus:outline-none focus:border-zinc-950"
                        placeholder="e.g. 41"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-800 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free re-fitting guarantee included with every custom pre-order.</span>
                  </div>
                </div>
              ) : (
                /* ================= SECTION B: STANDARD SIZING (JEANS, TEES, JOGGERS, SLIDES) ================= */
                quickViewProduct.sizes && (
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-bold text-zinc-900 mb-2">
                      <span>Select Size</span>
                      <span className="text-amber-800 font-semibold cursor-pointer hover:underline flex items-center gap-1">
                        <Ruler className="w-3.5 h-3.5" /> Size Guide
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedSize === size
                              ? 'bg-zinc-950 text-white shadow-sm'
                              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              )}

            </div>

            {/* Actions: Add to Cart / Pre-Order & Wishlist */}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  style={{ backgroundColor: '#09090b', color: '#ffffff' }}
                  className="flex-1 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-zinc-800 hover:border-zinc-700 active:scale-[0.99]"
                >
                  <ShoppingBag 
                    className="w-4 h-4 shrink-0 text-white" 
                    style={{ color: '#ffffff', stroke: '#ffffff' }} 
                  />
                  <span 
                    className="font-black text-xs sm:text-sm uppercase tracking-wider text-white select-none"
                    style={{ color: '#ffffff' }}
                  >
                    {isCouture ? 'Pre-Order (Bespoke Tailored)' : 'Add to Cart'}
                  </span>
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`p-3.5 rounded-xl border transition-colors flex items-center justify-center ${
                    isFavorited
                      ? 'border-rose-300 bg-rose-50 text-rose-600'
                      : 'border-zinc-300 bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Express courier delivery across Nigeria & Worldwide with DHL</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickViewModal;
