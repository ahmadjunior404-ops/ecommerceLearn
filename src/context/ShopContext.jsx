import React, { createContext, useContext, useState } from 'react';
import { CURRENCY_RATES, ALL_COLLECTION } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'mens-standard' | 'traditional' | 'womens-standard' | 'womens-traditional' | 'kids-standard' | 'kids-traditional'
  const [currency, setCurrency] = useState('NGN');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [navKey, setNavKey] = useState(0);

  // Authentication State
  const [user, setUser] = useState(null); // { name, email, phone, ordersCount: 2 }
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false);

  const navigateTo = (pageName, category = 'All') => {
    setCurrentPage(pageName);
    setActiveCategory(category);
    setNavKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const login = (email, password, name = null) => {
    const userName = name || email.split('@')[0];
    const capitalized = userName.charAt(0).toUpperCase() + userName.slice(1);
    setUser({
      name: capitalized,
      email: email,
      phone: '+234 812 345 6789',
      memberSince: '2026',
      vipTier: 'Gold Couture VIP'
    });
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${capitalized}!`);
  };

  const signup = (name, email, phone) => {
    setUser({
      name: name,
      email: email,
      phone: phone || '+234 800 000 0000',
      memberSince: '2026',
      vipTier: 'VIP Member'
    });
    setIsAuthModalOpen(false);
    showToast(`Account created! Welcome to ÀSÀ Luxe, ${name}!`);
  };

  const logout = () => {
    setUser(null);
    setIsAccountDrawerOpen(false);
    showToast('You have been signed out.', 'info');
  };

  const formatPrice = (priceInNGN) => {
    const rateInfo = CURRENCY_RATES[currency] || CURRENCY_RATES.NGN;
    const converted = priceInNGN * rateInfo.rate;
    if (currency === 'NGN') {
      return `₦${priceInNGN.toLocaleString()}`;
    }
    return `${rateInfo.symbol}${converted.toFixed(2)}`;
  };

  // Bespoke Measurements State (Pre-measurements)
  const [savedMeasurements, setSavedMeasurements] = useState({
    chest: '42',
    shoulder: '19.5',
    waist: '34',
    agbadaLength: '58',
    sleeveLength: '33',
    trouserLength: '41',
    neck: '16.5'
  });

  const addToCart = (product, size = 'L', quantity = 1, customMeasurements = null) => {
    const isCouture = product.isTraditional === true || product.category === 'Traditional' || product.isPreOrder;
    const finalSize = isCouture && customMeasurements ? 'Bespoke Custom Fit' : size;
    const finalMeasurements = isCouture ? (customMeasurements || savedMeasurements) : null;
    const cartItemId = isCouture && customMeasurements 
      ? `${product.id}-bespoke-${Date.now()}` 
      : `${product.id}-${size}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => !customMeasurements && item.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            ...product,
            cartItemId,
            selectedSize: finalSize,
            quantity,
            isPreOrder: isCouture,
            measurements: finalMeasurements
          }
        ];
      }
    });

    if (isCouture) {
      showToast(`Pre-Order placed for "${product.name}" with custom measurements!`);
    } else {
      showToast(`Added "${product.name}" to your bag!`);
    }
  };

  const updateCartQuantity = (id, size, newQty, cartItemId = null) => {
    if (newQty <= 0) {
      removeFromCart(id, size, cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        const isMatch = cartItemId 
          ? item.cartItemId === cartItemId 
          : item.id === id && item.selectedSize === size;
        return isMatch ? { ...item, quantity: newQty } : item;
      })
    );
  };

  const removeFromCart = (id, size, cartItemId = null) => {
    setCart((prevCart) =>
      prevCart.filter((item) => {
        if (cartItemId && item.cartItemId) {
          return item.cartItemId !== cartItemId;
        }
        return !(item.id === id && item.selectedSize === size);
      })
    );
    showToast('Item removed from bag', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed from wishlist`, 'info');
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to wishlist!`);
        return [...prevWishlist, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotalNGN = cart.reduce((total, item) => total + item.priceNGN * item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotalNGN,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        navKey,
        allProducts: ALL_COLLECTION,
        // Auth State & Measurements
        user,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        isAccountDrawerOpen,
        setIsAccountDrawerOpen,
        login,
        signup,
        logout,
        savedMeasurements,
        setSavedMeasurements
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
