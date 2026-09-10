import React, { useState } from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  ArrowLeft, 
  Crown, 
  Scissors, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

const normalizeTraditionalCategory = (cat) => {
  if (!cat) return 'All';
  const val = cat.toLowerCase().trim();
  if (val.includes('agbada')) return 'Agbada';
  if (val.includes('senator')) return 'Senator';
  if (val.includes('dashiki') || val.includes('kaftan')) return 'Dashiki';
  if (val.includes('aso') || val.includes('fila') || val.includes('cap')) return 'Aso-Oke';
  return 'All';
};

const TraditionalWearPage = ({ onNavigate }) => {
  const { searchQuery, activeCategory, setActiveCategory } = useShop();
  const [selectedSubcategory, setSelectedSubcategory] = useState(() =>
    normalizeTraditionalCategory(activeCategory)
  );
  const [sortBy, setSortBy] = useState('popular');

  React.useEffect(() => {
    setSelectedSubcategory(normalizeTraditionalCategory(activeCategory));
  }, [activeCategory]);

  const subcategories = [
    { id: 'All', label: 'All Traditional' },
    { id: 'Agbada', label: '👑 Grand Agbada 3-Piece' },
    { id: 'Senator', label: '👔 Senator Suits' },
    { id: 'Dashiki', label: '🌿 Dashiki & Kaftans' },
    { id: 'Aso-Oke', label: '🧵 Aso-Oke Fila Caps' }
  ];

  // Filter for traditional pieces directly from unified ALL_COLLECTION
  const traditionalProducts = ALL_COLLECTION.filter((p) => p.isTraditional === true);

  const filtered = traditionalProducts.filter((p) => {
    const matchesSearch = searchQuery 
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesSub = selectedSubcategory === 'All' 
      ? true 
      : p.name.toLowerCase().includes(selectedSubcategory.toLowerCase()) ||
        p.subcategory?.toLowerCase().includes(selectedSubcategory.toLowerCase()) ||
        p.description.toLowerCase().includes(selectedSubcategory.toLowerCase());

    return matchesSearch && matchesSub;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.priceNGN - b.priceNGN;
    if (sortBy === 'price-high') return b.priceNGN - a.priceNGN;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount;
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      
      {/* Top Banner */}
      <div className="bg-zinc-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/ea/3b/92/ea3b92489fc51cc6a9aef9fea01fcc62.jpg"
            alt="Traditional Nigerian Haute Couture"
            className="w-full h-full object-cover opacity-25 filter saturate-150"
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
            <span className="text-white">Traditional Nigerian Collection</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Indigenous Craftsmanship & Regal Silhouettes</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
                Traditional Nigerian Wear
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-2 font-light">
                Hand-embroidered Grand Agbadas, bespoke Senator suits, linen Dashiki sets, and authentic Yoruba woven Aso-Oke fila caps.
              </p>
            </div>

            {/* Switch to Modern Essentials */}
            <button
              onClick={() => onNavigate('mens-standard')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm shrink-0"
            >
              <span>View Modern Essentials (Jeans & Tees) →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Filter & Sorting */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Subcategories */}
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
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 self-end lg:self-auto text-xs">
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

        {/* Product Count Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Showing <strong className="text-zinc-900">{sorted.length}</strong> bespoke traditional pieces
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold">
            <Scissors className="w-3.5 h-3.5" />
            <span>Made-to-Measure Available</span>
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
            <p className="text-base font-semibold text-zinc-700">No traditional garments found matching your filter.</p>
            <button
              onClick={() => setSelectedSubcategory('All')}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TraditionalWearPage;
