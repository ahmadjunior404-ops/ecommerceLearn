import React, { useState } from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  SlidersHorizontal, 
  ArrowLeft, 
  Layers, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Sparkle
} from 'lucide-react';

const normalizeSubcategory = (cat) => {
  if (!cat) return 'All';
  const val = cat.toLowerCase().trim();
  if (val.includes('jean') || val.includes('denim')) return 'Jeans';
  if (val.includes('top') || val.includes('shirt') || val.includes('tee')) return 'Tops';
  if (val.includes('footwear') || val.includes('slide') || val.includes('shoe')) return 'Footwear';
  if (val.includes('jogger') || val.includes('sweat')) return 'Joggers';
  return 'All';
};

const MensStandardPage = ({ onNavigate }) => {
  const { searchQuery, formatPrice, activeCategory, setActiveCategory, navKey } = useShop();
  const [selectedSubcategory, setSelectedSubcategory] = useState(() =>
    normalizeSubcategory(activeCategory)
  );
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');

  // Keep selectedSubcategory in sync when navigated from navbar dropdown, hero banner, or footer
  React.useEffect(() => {
    setSelectedSubcategory(normalizeSubcategory(activeCategory));
  }, [activeCategory, navKey]);

  // Subcategories specifically for standard modern men's wear
  const subcategories = [
    { id: 'All', label: 'All Men\'s Standard' },
    { id: 'Jeans', label: '👖 Jeans & Denim' },
    { id: 'Tops', label: '👕 Tops & Shirts' },
    { id: 'Footwear', label: '🩴 Summer Footwear & Slides' },
    { id: 'Joggers', label: '🏃 Joggers & Sweats' }
  ];

  // Filter for standard modern menswear products directly from unified ALL_COLLECTION
  const mensStandardProducts = ALL_COLLECTION.filter((p) => !p.isTraditional);

  // Apply subcategory and search filter
  const filtered = mensStandardProducts.filter((p) => {
    const matchesSearch = searchQuery 
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesSub = selectedSubcategory === 'All' 
      ? true 
      : p.subcategory === selectedSubcategory;

    let matchesPrice = true;
    if (priceRange === 'under30k') matchesPrice = p.priceNGN < 30000;
    if (priceRange === '30k-40k') matchesPrice = p.priceNGN >= 30000 && p.priceNGN <= 40000;
    if (priceRange === 'above40k') matchesPrice = p.priceNGN > 40000;

    return matchesSearch && matchesSub && matchesPrice;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.priceNGN - b.priceNGN;
    if (sortBy === 'price-high') return b.priceNGN - a.priceNGN;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount;
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      
      {/* Top Breadcrumb & Page Banner */}
      <div className="bg-zinc-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/65/d0/36/65d0368505b535fda57fca5776964923.jpg"
            alt="Men's Standard Contemporary Wear"
            className="w-full h-full object-cover opacity-20 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:underline flex items-center gap-1 text-zinc-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Men's Standard Collection</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Daily Contemporary Essentials</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
                Modern Essential Wear
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-2 font-light">
                Premium selvedge jeans, heavyweight tees, relaxed linens, luxury summer slides, and tailored joggers crafted for daily modern style.
              </p>
            </div>

            {/* Quick Switch to Traditional */}
            <button
              onClick={() => onNavigate('traditional')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Nigerian Traditional Wears →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Filter & Sorting Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubcategory(sub.id);
                  if (setActiveCategory) setActiveCategory(sub.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                  selectedSubcategory === sub.id
                    ? 'bg-zinc-950 text-white shadow-md'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-transparent'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Controls: Price Range & Sort */}
          <div className="flex items-center gap-3 self-end lg:self-auto text-xs">
            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-zinc-800 font-semibold focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under30k">Under ₦30,000</option>
              <option value="30k-40k">₦30,000 - ₦40,000</option>
              <option value="above40k">Above ₦40,000</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-zinc-800 font-semibold focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Product Grid Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Showing <strong className="text-zinc-900">{sorted.length}</strong> standard men's essentials
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All Items In Stock</span>
          </div>
        </div>

        {/* Products Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-zinc-300">
            <p className="text-base font-semibold text-zinc-700">No standard men's garments match your current filters.</p>
            <button
              onClick={() => {
                setSelectedSubcategory('All');
                if (setActiveCategory) setActiveCategory('All');
                setPriceRange('all');
              }}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline uppercase"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Men's Streetwear & Pairing Guide Banner */}
        <div className="mt-16 bg-zinc-900 rounded-3xl p-8 text-white border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
              👖
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Tailored Selvedge Denim</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Japanese & Turkish woven denim ring-spun for maximum longevity and flexible ease.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
              🩴
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Artisan Summer Slides</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                100% full-grain Nigerian cowhide leather, crafted by Lagos leather artisans for warm weather.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
              🏃
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">450GSM French Terry</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ultra-heavyweight cotton fleece that never pills or loses shape in the wash.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MensStandardPage;
