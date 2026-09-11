import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

const ProductCard = ({ product, dark = false }) => {
  const { formatPrice, addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, setIsCartOpen } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'L');

  const isFavorited = isInWishlist(product.id);

  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        dark
          ? 'bg-zinc-900/90 border border-zinc-800 hover:border-amber-400/60 shadow-lg hover:shadow-2xl'
          : 'bg-white rounded-xl border border-zinc-200/70 hover:border-amber-500/40 hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Box */}
      <div 
        className={`relative aspect-[3/4] overflow-hidden cursor-pointer ${dark ? 'bg-zinc-950' : 'bg-zinc-100'}`} 
        onClick={() => setQuickViewProduct(product)}
      >
        {/* Main & Secondary Image on hover */}
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.isTraditional ? (
            <span className="bg-zinc-950/75 backdrop-blur-md text-amber-300 text-[9px] font-semibold uppercase px-2 py-0.5 rounded tracking-wider border border-amber-400/20">
              Pre-Order
            </span>
          ) : product.tag ? (
            <span className="bg-zinc-950/85 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider shadow-sm border border-amber-400/20">
              {product.tag}
            </span>
          ) : null}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            isFavorited 
              ? 'bg-rose-50 text-rose-600 shadow-md' 
              : dark
                ? 'bg-zinc-900/80 backdrop-blur-md text-zinc-300 hover:text-rose-400 border border-zinc-700/80 shadow-sm'
                : 'bg-white/90 text-zinc-700 hover:text-rose-600 hover:bg-white shadow-sm'
          }`}
          aria-label="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Overlay Quick Actions */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className={`flex-1 py-2.5 backdrop-blur-md text-xs font-bold rounded-lg shadow-lg flex items-center justify-center gap-1.5 transition-colors ${
              dark
                ? 'bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700'
                : 'bg-white/95 hover:bg-white text-zinc-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{product.isTraditional ? 'Custom Fit & Pre-Order' : 'Quick View'}</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (product.isTraditional) {
                setQuickViewProduct(product);
              } else {
                addToCart(product, selectedSize, 1);
                setIsCartOpen(true);
              }
            }}
            className={`p-2.5 rounded-lg shadow-lg flex items-center justify-center transition-colors ${
              product.isTraditional 
                ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold' 
                : dark
                  ? 'bg-white hover:bg-amber-400 hover:text-zinc-950 text-zinc-950'
                  : 'bg-zinc-950 hover:bg-amber-500 hover:text-zinc-950 text-white'
            }`}
            title={product.isTraditional ? 'Pre-Order with measurements' : 'Quick Add to Cart'}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Rating */}
          <div className={`flex items-center justify-between text-xs mb-1.5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <span className={`uppercase tracking-wider font-semibold text-[11px] font-sans ${dark ? 'text-amber-400 font-bold' : 'text-amber-800'}`}>
              {product.isTraditional ? 'Nigerian Couture' : 'Modern Essentials'}
            </span>
            <div className={`flex items-center gap-1 font-medium ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className={`text-[10px] ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className={`font-semibold text-sm transition-colors line-clamp-2 cursor-pointer font-sans ${
              dark
                ? 'text-white hover:text-amber-300'
                : 'text-zinc-900 hover:text-amber-700'
            }`}
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Cart button */}
        <div className={`pt-2 border-t ${dark ? 'border-zinc-800' : 'border-zinc-100'}`}>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className={`text-base font-black ${dark ? 'text-amber-300 font-serif' : 'text-zinc-950'}`}>
                {formatPrice(product.priceNGN)}
              </span>
              {product.originalPriceNGN && (
                <span className={`text-xs line-through ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {formatPrice(product.originalPriceNGN)}
                </span>
              )}
            </div>

            {/* Quick Sizing Tag */}
            <div className={`text-[10px] font-bold px-2 py-0.5 rounded border hidden sm:block ${
              dark
                ? 'text-amber-300 bg-amber-400/10 border-amber-400/20'
                : 'text-amber-900 bg-amber-50 border-amber-200/60'
            }`}>
              {product.isTraditional ? 'Bespoke Fit' : `${product.sizes?.length || 4} Sizes`}
            </div>
          </div>

          {/* Direct Add to Cart Button */}
          <button
            onClick={() => {
              if (product.isTraditional) {
                setQuickViewProduct(product);
              } else {
                addToCart(product, selectedSize, 1);
                setIsCartOpen(true);
              }
            }}
            style={{ backgroundColor: '#09090b', color: '#ffffff' }}
            className="mt-3 w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer border border-zinc-800 active:scale-[0.99]"
          >
            <ShoppingBag 
              className="w-3.5 h-3.5 shrink-0 text-white" 
              style={{ color: '#ffffff', stroke: '#ffffff' }} 
            />
            <span style={{ color: '#ffffff' }} className="text-white font-black tracking-wider text-xs uppercase">
              {product.isTraditional ? 'Pre-Order (Bespoke)' : 'Add to Cart — Checkout'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
