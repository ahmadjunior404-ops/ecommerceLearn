import React from 'react';
import { ALL_COLLECTION } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Sparkles } from 'lucide-react';

const KidsPage = ({ onNavigate }) => {
  const { searchQuery } = useShop();
  const kidsProducts = ALL_COLLECTION.filter((p) => p.category === 'Kids');

  const filtered = kidsProducts.filter((p) => {
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
            <span className="text-white">Kids Traditional & Ankara</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
            Kids Nigerian Fashion
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mt-2 font-light">
            Miniature luxury Agbada sets with matching caps for boys, and breathable organic cotton Ankara dresses for girls.
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

export default KidsPage;
