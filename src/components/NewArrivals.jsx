import React from 'react';
import { NEW_ARRIVALS } from '../data/products';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import { Flame, ArrowUpRight } from 'lucide-react';

const NewArrivals = () => {
  const { searchQuery } = useShop();

  const filteredNewArrivals = NEW_ARRIVALS.filter((product) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subcategory?.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  return (
    <section id="new-arrivals" className="py-16 sm:py-20 bg-white border-b border-zinc-200/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 text-rose-600 text-xs font-extrabold uppercase tracking-widest mb-1.5 font-sans">
              <Flame className="w-3.5 h-3.5 fill-rose-600" />
              <span>Just Dropped This Week</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-zinc-950 uppercase tracking-tight">
              New Arrivals
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Fresh cargo joggers, summer linen shirts, woven leather slides, and limited edition Nigerian couture.
            </p>
          </div>

          <a
            href="#new-arrivals"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:text-amber-700 uppercase tracking-wider transition-colors pt-2 sm:pt-0"
          >
            <span>View All New Drops ({NEW_ARRIVALS.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Grid Layout (Card 1 | Card 2 | Card 3 | Card 4) */}
        {filteredNewArrivals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNewArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-dashed border-zinc-300">
            <p className="text-sm font-semibold text-zinc-700">No new arrivals matching your search query.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewArrivals;
