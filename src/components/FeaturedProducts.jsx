import React, { useState } from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, Layers, Crown } from 'lucide-react';

const FeaturedProducts = () => {
  const { searchQuery, activeCategory, setActiveCategory } = useShop();
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  // Main Category Tabs
  const mainCategories = [
    { label: 'All Menswear', id: 'All' },
    { label: 'Modern Essentials', id: 'Standard' },
    { label: 'Nigerian Traditional', id: 'Traditional' }
  ];

  // Men Subcategories (Jeans, Tops, Joggers, Footwear, Traditional)
  const subcategories = [
    { id: 'All', label: 'All Items' },
    { id: 'Jeans', label: '👖 Jeans & Denim' },
    { id: 'Tops', label: '👕 Tees & Tops' },
    { id: 'Joggers', label: '🏃 Cargo & Joggers' },
    { id: 'Footwear', label: '🩴 Leather Footwear' },
    { id: 'Traditional', label: '👑 Nigerian Traditional' }
  ];

  const filteredProducts = ALL_COLLECTION.filter((product) => {
    // Only Menswear products (exclude any legacy women/kids items)
    if (product.category === 'Women' || product.category === 'Kids') return false;

    const query = searchQuery.toLowerCase();
    const matchesSearch = searchQuery 
      ? product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) ||
        product.subcategory?.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      : true;

    if (!matchesSearch) return false;

    // Filter by Main Category Tab
    if (activeCategory === 'Standard') {
      if (product.isTraditional === true) return false;
    } else if (activeCategory === 'Traditional') {
      if (product.isTraditional !== true) return false;
    }

    // Filter by Subcategory chip
    if (activeSubcategory === 'All') return true;
    if (activeSubcategory === 'Traditional') return product.isTraditional === true;
    return product.subcategory?.toLowerCase().includes(activeSubcategory.toLowerCase());
  });

  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <section id="featured" className="relative py-14 sm:py-20 bg-zinc-950 text-white scroll-mt-20 border-b border-zinc-800/80">
      {/* Ambient background glow matching hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contemporary Menswear &amp; Nigerian Traditional Wear</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-serif text-white tracking-tight">
              Featured Menswear
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-light max-w-xl leading-relaxed">
              Explore everyday modern menswear essentials and bespoke Nigerian traditional couture.
            </p>
          </div>

          {/* Main Category Tabs: All | Standard Clothes | Traditional Wears */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveSubcategory('All');
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider cursor-pointer ${
                  activeCategory.toLowerCase() === cat.id.toLowerCase()
                    ? 'bg-amber-400 text-zinc-950 shadow-md font-black'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory Pills: Jeans, Tops, Joggers, Footwear, Traditional */}
        <div className="mb-10 p-3 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800/80 shadow-xl flex items-center gap-2 overflow-x-auto no-scrollbar animate-fade-in">
          <span className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider px-2 shrink-0">
            Filter:
          </span>
          {subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubcategory(sub.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider cursor-pointer ${
                activeSubcategory === sub.id
                  ? 'bg-amber-400 text-zinc-950 shadow-sm font-black'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* 4-Column Grid Layout (Card 1 | Card 2 | Card 3 | Card 4) */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} dark={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-800">
            <p className="text-base font-medium text-zinc-300">No items found for the selected category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveSubcategory('All');
              }}
              className="mt-3 text-xs font-bold text-amber-400 hover:underline uppercase cursor-pointer"
            >
              Reset to All Products
            </button>
          </div>
        )}

        {/* Callout Banner */}
        <div className="mt-14 bg-zinc-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-zinc-800/80">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 items-center justify-center font-serif font-black text-xl shrink-0">
              ✦
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium font-serif text-white">
                Modern Menswear &amp; Nigerian Traditional Wear
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light leading-relaxed">
                Switch seamlessly between selvedge stretch jeans, boxy heavyweight tees, cargo joggers, handcrafted leather footwear, and bespoke grand Agbadas.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setActiveCategory('All');
              setActiveSubcategory('All');
            }}
            className="px-6 py-3 bg-white hover:bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-full transition-all shrink-0 shadow-lg cursor-pointer"
          >
            Explore Complete Catalog
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
