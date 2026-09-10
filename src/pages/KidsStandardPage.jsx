import React, { useState } from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

const KidsStandardPage = ({ onNavigate }) => {
  const { searchQuery } = useShop();
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');

  const subcategories = [
    { id: 'All', label: 'All Kids Standard' },
    { id: 'Jeans', label: '👖 Kids Stretch Denim' },
    { id: 'Tops', label: '👕 Organic Cotton Tees' },
    { id: 'Joggers', label: '🏃 Fleece Joggers' }
  ];

  const kidsStandardProducts = ALL_COLLECTION.filter((p) => {
    return p.category === 'Kids' && p.isTraditional === false;
  });

  const filtered = kidsStandardProducts.filter((p) => {
    const matchesSearch = searchQuery 
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesSub = selectedSubcategory === 'All' 
      ? true 
      : p.subcategory === selectedSubcategory;

    let matchesPrice = true;
    if (priceRange === 'under20k') matchesPrice = p.priceNGN < 20000;
    if (priceRange === '20k-30k') matchesPrice = p.priceNGN >= 20000 && p.priceNGN <= 30000;
    if (priceRange === 'above30k') matchesPrice = p.priceNGN > 30000;

    return matchesSearch && matchesSub && matchesPrice;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:underline flex items-center gap-1 text-zinc-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Kids Standard Collection</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Everyday Play & School Essentials (Ages 2-13)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
                Standard Kids Clothes
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-2 font-light">
                Durable stretch denim jeans, hypoallergenic organic cotton tees, and cozy brushed fleece jogger sweatpants.
              </p>
            </div>

            <button
              onClick={() => onNavigate('kids-traditional')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Kids Agbada & Ankara Page →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(sub.id)}
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

          <div className="flex items-center gap-3 self-end lg:self-auto text-xs">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-zinc-800 font-semibold focus:outline-none focus:border-amber-600 cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under20k">Under ₦20,000</option>
              <option value="20k-30k">₦20,000 - ₦30,000</option>
              <option value="above30k">Above ₦30,000</option>
            </select>

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

        {/* Product Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Showing <strong className="text-zinc-900">{sorted.length}</strong> kids modern everyday garments
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Soft, Safe & Hypoallergenic Fabrics</span>
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
            <p className="text-base font-semibold text-zinc-700">No kids standard garments match your filters.</p>
            <button
              onClick={() => { setSelectedSubcategory('All'); setPriceRange('all'); }}
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

export default KidsStandardPage;
