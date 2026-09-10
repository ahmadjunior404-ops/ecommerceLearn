import React, { useState } from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Sparkles } from 'lucide-react';

const WomenPage = ({ onNavigate }) => {
  const { searchQuery } = useShop();
  const womenProducts = ALL_COLLECTION.filter((p) => p.category === 'Women');

  const filtered = womenProducts.filter((p) => {
    if (!searchQuery) return true;
    return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           p.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      <div className="bg-zinc-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
            <button onClick={() => onNavigate('home')} className="hover:underline flex items-center gap-1 text-zinc-400 hover:text-white">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span className="text-zinc-600">/</span>
            <span className="text-white">Women's Collection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
            Women's Couture & Gowns
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-2 font-light">
            Dutch Wax Ankara maxi dresses, Aso-Oke corseted mermaid skirts, and hand-dyed silk Adire kimonos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenPage;
