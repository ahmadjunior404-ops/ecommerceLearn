import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    cartCount, 
    cartSubtotalNGN, 
    updateCartQuantity, 
    removeFromCart, 
    formatPrice,
    clearCart,
    showToast
  } = useShop();

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'NAIJASTYLE' || couponCode.toUpperCase() === 'ASALUXE15') {
      setDiscountPercent(15);
      showToast('15% Discount coupon applied successfully!');
    } else {
      showToast('Invalid promo code. Use NAIJASTYLE for 15% off', 'info');
    }
  };

  const discountAmountNGN = (cartSubtotalNGN * discountPercent) / 100;
  const finalTotalNGN = cartSubtotalNGN - discountAmountNGN;

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      setIsCartOpen(false);
      alert('🎉 Paystack Payment Successful!\n\nYour order has been confirmed. Order reference: #PSTK-' + Math.floor(100000 + Math.random() * 900000) + '\nYour receipt and tailoring confirmation have been processed.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity cursor-pointer z-40"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Wrapper & Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10 z-50 pointer-events-none">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between relative z-50 pointer-events-auto overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-zinc-900" />
              <h2 className="text-lg font-black font-serif uppercase tracking-tight text-zinc-900">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1 font-serif">Your shopping bag is empty</h3>
                <p className="text-xs text-zinc-500 max-w-xs mb-6">
                  Explore our luxury Agbadas, Senator suits, and Ankara gowns to start styling.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.cartItemId || `${item.id}-${item.selectedSize}`} 
                  className="flex gap-4 p-3.5 bg-zinc-50 rounded-2xl border border-zinc-200/80 shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-xl shrink-0 border border-zinc-200"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          {item.isPreOrder && (
                            <span className="inline-block bg-amber-400 text-zinc-950 text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider mb-1">
                              👑 Pre-Order Bespoke
                            </span>
                          )}
                          <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">{item.name}</h4>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.cartItemId)}
                          className="text-zinc-400 hover:text-rose-600 p-0.5 ml-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        Fit: <span className="font-semibold text-zinc-700">{item.selectedSize}</span>
                      </div>

                      {/* Custom Measurements Summary if pre-order */}
                      {item.measurements && (
                        <div className="mt-1.5 p-2 bg-amber-50/80 border border-amber-200/70 rounded-lg text-[10px] text-amber-950 space-y-0.5">
                          <div className="font-bold text-amber-900">Submitted Pre-Measurements:</div>
                          <div className="text-zinc-600 flex flex-wrap gap-x-2 gap-y-0.5">
                            <span>Chest: <strong>{item.measurements.chest}"</strong></span>
                            <span>Shoulder: <strong>{item.measurements.shoulder}"</strong></span>
                            <span>Waist: <strong>{item.measurements.waist}"</strong></span>
                            <span>Length: <strong>{item.measurements.agbadaLength}"</strong></span>
                          </div>
                        </div>
                      )}

                      <div className="text-xs font-black text-zinc-950 mt-1.5">
                        {formatPrice(item.priceNGN)}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-zinc-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity - 1, item.cartItemId)}
                          className="p-1 hover:bg-zinc-100 text-zinc-600 rounded-l"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity + 1, item.cartItemId)}
                          className="p-1 hover:bg-zinc-100 text-zinc-600 rounded-r"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Panel */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-200 bg-zinc-50 space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Promo code (NAIJASTYLE)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 text-xs bg-white border border-zinc-300 rounded-lg uppercase tracking-wider focus:outline-none focus:border-amber-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 text-xs font-bold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900">{formatPrice(cartSubtotalNGN)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (15%)</span>
                    <span>-{formatPrice(discountAmountNGN)}</span>
                  </div>
                )}
                <div className="flex justify-between text-zinc-600">
                  <span>Estimated Delivery</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-black text-zinc-950 pt-2 border-t border-zinc-200">
                  <span>Total</span>
                  <span className="text-base text-zinc-950">{formatPrice(finalTotalNGN)}</span>
                </div>
              </div>

              {/* Payment Channel Indicator */}
              <div className="bg-white p-2.5 rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-[11px] font-semibold text-zinc-700">Payment Channel</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md font-bold text-[10px]">
                  <span>Paystack</span>
                  <span className="text-[8px] bg-emerald-600 text-white px-1 rounded uppercase">Exclusive</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                style={{ backgroundColor: '#fbbf24', color: '#09090b' }}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl shadow-amber-400/25 transition-all flex items-center justify-center gap-2.5 group cursor-pointer border border-amber-300"
              >
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-zinc-950 border-t-transparent"></span>
                    <span className="text-zinc-950 font-black">Connecting to Paystack...</span>
                  </span>
                ) : (
                  <>
                    <span className="text-zinc-950 font-black tracking-wider text-xs" style={{ color: '#09090b' }}>PROCEED TO CHECKOUT</span>
                    <span className="bg-zinc-950 text-amber-400 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-normal" style={{ backgroundColor: '#09090b', color: '#fbbf24' }}>Paystack</span>
                    <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" style={{ color: '#09090b' }} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Secured Exclusively by Paystack (Card, Transfer &amp; USSD)</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
