import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Globe, 
  Heart,
  ChevronDown,
  Sparkles,
  Layers,
  Crown,
  User,
  UserCheck,
  LogOut,
  Clock
} from 'lucide-react';

const Navbar = () => {
  const { 
    currency, 
    setCurrency, 
    cartCount, 
    setIsCartOpen, 
    searchQuery, 
    setSearchQuery,
    currentPage,
    navigateTo,
    wishlist,
    user,
    setIsAuthModalOpen,
    setAuthMode,
    setIsAccountDrawerOpen,
    logout
  } = useShop();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEssentialsDropdownOpen, setIsEssentialsDropdownOpen] = useState(false);
  const [isCoutureDropdownOpen, setIsCoutureDropdownOpen] = useState(false);

  const handleNavClick = (pageName, category = 'All', hash = null) => {
    navigateTo(pageName, category);
    setIsMobileMenuOpen(false);
    setIsEssentialsDropdownOpen(false);
    setIsCoutureDropdownOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-200 shadow-xs">
      {/* Top Notice & Currency Bar */}
      <div className="bg-zinc-950 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-300 font-medium tracking-wide">
            <span className="bg-amber-400 text-zinc-950 px-1.5 py-0.5 rounded text-[10px] font-black uppercase">
              Free Delivery
            </span>
            <span className="hidden sm:inline">Orders over ₦100,000 nationwide & Express Global Shipping</span>
            <span className="sm:hidden">Orders over ₦100k ship free</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            {/* Account / VIP Quick Link */}
            {user ? (
              <button
                onClick={() => setIsAccountDrawerOpen(true)}
                className="hidden md:flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <Crown className="w-3.5 h-3.5" />
                <span>Hi, {user.name.split(' ')[0]}</span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">VIP</span>
              </button>
            ) : (
              <div className="hidden md:flex items-center gap-2 text-xs">
                <button
                  onClick={() => { setAuthMode('login'); navigateTo('auth'); }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Sign In
                </button>
                <span className="text-zinc-600">|</span>
                <button
                  onClick={() => { setAuthMode('signup'); navigateTo('auth'); }}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Join VIP (15% Off)</span>
                </button>
              </div>
            )}

            <span className="hidden md:inline text-zinc-700">|</span>

            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-zinc-900 border border-zinc-700 text-white text-xs rounded px-1.5 py-0.5 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="NGN">NGN (₦)</option>
                <option value="USD">USD ($)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar: LOGO | Home | Modern Essential Wear | Nigerian Traditional | About Us | Contact | Cart (0) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-4 flex-nowrap">
          
          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 1. LOGO */}
          <div className="flex items-center shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2 text-left focus:outline-none"
            >
              <div className="w-9 h-9 bg-zinc-950 text-amber-400 font-serif font-black text-xl rounded-lg flex items-center justify-center shadow-md group-hover:bg-amber-400 group-hover:text-zinc-950 transition-colors">
                À
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-serif tracking-widest text-zinc-950 uppercase group-hover:text-amber-700 transition-colors leading-none">
                  ÀSÀ<span className="text-amber-600 font-sans text-lg font-bold ml-1">LUXE</span>
                </span>
                <span className="text-[9px] font-bold text-zinc-400 tracking-[0.2em] uppercase mt-0.5">
                  Premium Menswear
                </span>
              </div>
            </button>
          </div>

          {/* 2. CENTER NAVIGATION */}
          <nav className="hidden lg:flex items-center text-sm font-semibold tracking-wide uppercase shrink-0">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 transition-all duration-150 relative group ${
                currentPage === 'home' ? 'text-amber-800 font-bold' : 'text-zinc-700 hover:text-zinc-950'
              }`}
            >
              <span>Home</span>
              <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 transition-all duration-200 ${
                currentPage === 'home' ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
              }`} />
            </button>

            <span className="text-zinc-300 font-light select-none px-0.5">|</span>

            {/* Modern Essential Wear (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsEssentialsDropdownOpen(true)}
              onMouseLeave={() => setIsEssentialsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('mens-standard')}
                className={`px-3 py-1.5 transition-all duration-150 flex items-center gap-1.5 ${
                  currentPage === 'mens-standard'
                    ? 'text-amber-800 font-bold' 
                    : 'text-zinc-700 hover:text-zinc-950'
                }`}
              >
                <span>Modern Essentials</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {isEssentialsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-3 z-50 animate-fade-in text-left">
                  <div className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase px-2 mb-2">
                    Modern Essentials Categories
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('mens-standard', 'Jeans')}
                    className="w-full text-left p-2 rounded-xl hover:bg-zinc-100 text-zinc-800 flex items-center justify-between text-xs font-semibold transition-colors"
                  >
                    <span>Jeans & Denim</span>
                    <span className="text-[10px] text-zinc-400">Pants</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('mens-standard', 'Tops')}
                    className="w-full text-left p-2 rounded-xl hover:bg-zinc-100 text-zinc-800 flex items-center justify-between text-xs font-semibold transition-colors"
                  >
                    <span>Tops & Shirts</span>
                    <span className="text-[10px] text-zinc-400">Polos & Tees</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('mens-standard', 'Footwear')}
                    className="w-full text-left p-2 rounded-xl hover:bg-zinc-100 text-zinc-800 flex items-center justify-between text-xs font-semibold transition-colors"
                  >
                    <span>Summer Footwear & Slides</span>
                    <span className="text-[10px] text-zinc-400">Shoes</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('mens-standard', 'Joggers')}
                    className="w-full text-left p-2 rounded-xl hover:bg-zinc-100 text-zinc-800 flex items-center justify-between text-xs font-semibold transition-colors"
                  >
                    <span>Joggers & Sweats</span>
                    <span className="text-[10px] text-zinc-400">Loungewear</span>
                  </button>

                  <div className="border-t border-zinc-100 mt-2 pt-2">
                    <button
                      onClick={() => handleNavClick('mens-standard', 'All')}
                      className="w-full text-center py-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      View All Modern Essentials →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <span className="text-zinc-300 font-light select-none px-0.5">|</span>

            {/* Nigerian Traditional Wear (Dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCoutureDropdownOpen(true)}
              onMouseLeave={() => setIsCoutureDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('traditional')}
                className={`px-3 py-1.5 transition-all duration-150 flex items-center gap-1.5 ${
                  currentPage === 'traditional'
                    ? 'text-amber-800 font-bold' 
                    : 'text-zinc-700 hover:text-zinc-950'
                }`}
              >
                <span>Traditional Wears</span>
                <span className="text-[8px] bg-amber-100 text-amber-900 border border-amber-300/60 px-1.5 py-0.2 rounded font-semibold uppercase tracking-wide">
                  Pre-Order
                </span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>

              {isCoutureDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-3 z-50 animate-fade-in text-left">
                  {/* Discreet Pre-Order Notice */}
                  <div className="bg-amber-50/80 border border-amber-200/60 rounded-lg px-2.5 py-1.5 mb-2 flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-amber-900 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-amber-700" />
                      <span>Bespoke Pre-Order</span>
                    </span>
                    <span className="text-[9px] text-zinc-500 font-medium">7-12 Days</span>
                  </div>

                  <div className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase px-2 mb-1.5">
                    Nigerian Traditional &amp; Couture
                  </div>
                  
                  <button
                    onClick={() => handleNavClick('traditional', 'Agbada')}
                    className="w-full text-left p-2 rounded-xl hover:bg-amber-50 text-zinc-900 flex items-start gap-2.5 transition-colors group/item"
                  >
                    <Crown className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 flex items-center justify-between">
                        <span>Royal Grand Agbadas</span>
                        <span className="text-[8px] font-medium text-amber-800/80 bg-amber-50/80 px-1 py-0.2 rounded">
                          Pre-Order
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-500 font-normal">
                        Hand-embroidered 3-piece sets in luxury damask
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('traditional', 'Senator')}
                    className="w-full text-left p-2 rounded-xl hover:bg-amber-50 text-zinc-900 flex items-start gap-2.5 transition-colors group/item mt-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 flex items-center justify-between">
                        <span>Imperial Senator Suits</span>
                        <span className="text-[8px] font-medium text-amber-800/80 bg-amber-50/80 px-1 py-0.2 rounded">
                          Pre-Order
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-500 font-normal">
                        Italian wool blend with geometric chest embroidery
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('traditional', 'Dashiki')}
                    className="w-full text-left p-2 rounded-xl hover:bg-amber-50 text-zinc-900 flex items-start gap-2.5 transition-colors group/item mt-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 flex items-center justify-between">
                        <span>Dashiki &amp; Kaftans</span>
                        <span className="text-[8px] font-medium text-amber-800/80 bg-amber-50/80 px-1 py-0.2 rounded">
                          Pre-Order
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-500 font-normal">
                        Egyptian linen caftans &amp; tailored sets
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('traditional', 'Aso-Oke')}
                    className="w-full text-left p-2 rounded-xl hover:bg-amber-50 text-zinc-900 flex items-start gap-2.5 transition-colors group/item mt-0.5"
                  >
                    <Crown className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-zinc-900 group-hover/item:text-amber-800 flex items-center justify-between">
                        <span>Aso-Oke Fila Caps</span>
                        <span className="text-[8px] font-medium text-amber-800/80 bg-amber-50/80 px-1 py-0.2 rounded">
                          Pre-Order
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-500 font-normal">
                        Authentic Yoruba handwoven ceremonial caps
                      </div>
                    </div>
                  </button>

                  <div className="border-t border-zinc-100 mt-2.5 pt-2">
                    <button
                      onClick={() => handleNavClick('traditional', 'All')}
                      className="w-full text-center py-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      View All Traditional Couture →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <span className="text-zinc-300 font-light select-none px-0.5">|</span>



            {/* About Us */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 transition-all duration-150 ${
                currentPage === 'about'
                  ? 'text-amber-800 font-bold'
                  : 'text-zinc-700 hover:text-zinc-950 font-semibold'
              }`}
            >
              <span>About Us</span>
            </button>

            <span className="text-zinc-300 font-light select-none px-0.5">|</span>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 transition-all duration-150 ${
                currentPage === 'contact'
                  ? 'text-amber-800 font-bold'
                  : 'text-zinc-700 hover:text-zinc-950 font-semibold'
              }`}
            >
              <span>Contact</span>
            </button>

          </nav>

          {/* 3. RIGHT ACTIONS & CART (0) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Search Bar - Open by default */}
            <div className="relative flex items-center">
              <div className="flex items-center bg-zinc-100 rounded-full pl-3 pr-2.5 py-1.5 border border-zinc-200 focus-within:border-zinc-950 focus-within:bg-white focus-within:ring-2 focus-within:ring-zinc-950/10 transition-all">
                <Search className="w-3.5 h-3.5 text-zinc-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search menswear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (currentPage === 'about' || currentPage === 'contact') {
                        handleNavClick('home', '#featured');
                      } else {
                        const el = document.querySelector('#featured');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="bg-transparent text-xs text-zinc-900 focus:outline-none w-24 sm:w-36 md:w-44 lg:w-52 placeholder:text-zinc-400 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[10px] text-zinc-400 hover:text-zinc-700 px-1 font-bold uppercase transition-colors"
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Wishlist Link */}
            <button
              onClick={() => handleNavClick('home', '#featured')}
              className="relative p-2 text-zinc-700 hover:text-rose-600 hover:bg-zinc-100 rounded-full transition-colors hidden sm:flex"
              aria-label="Wishlist"
              title="Saved items"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* My Account / Sign In Action */}
            {user ? (
              <button
                onClick={() => setIsAccountDrawerOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-zinc-900 rounded-full text-xs font-bold transition-all shadow-xs"
                aria-label="My Account"
                title="Account & Bespoke Fit Profile"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400 text-zinc-950 text-[11px] font-bold flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden md:inline">Account</span>
              </button>
            ) : (
              <button
                onClick={() => { setAuthMode('login'); navigateTo('auth'); }}
                className="flex items-center gap-1.5 px-3 py-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-colors text-xs font-semibold"
                aria-label="Sign In or Register"
                title="Sign In or Register"
              >
                <User className="w-4.5 h-4.5 text-zinc-600" />
                <span className="hidden md:inline">Sign In</span>
              </button>
            )}

            {/* Exact "Cart (0)" Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{ backgroundColor: '#09090b', color: '#ffffff' }}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-sm hover:shadow-md group border border-zinc-800 cursor-pointer"
              aria-label="Shopping Cart and Checkout"
            >
              <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" style={{ color: '#ffffff', stroke: '#ffffff' }} />
              <span className="text-white font-black" style={{ color: '#ffffff' }}>Cart ({cartCount})</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xs flex">
          <div className="bg-white w-4/5 max-w-sm h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-zinc-950 text-amber-400 font-serif font-black text-lg rounded-lg flex items-center justify-center">
                    À
                  </div>
                  <span className="text-xl font-black font-serif tracking-widest text-zinc-950">
                    ÀSÀ<span className="text-amber-600 font-sans text-base ml-1">LUXE</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile User Profile or Sign In Card */}
              <div className="mt-4">
                {user ? (
                  <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 text-white rounded-2xl p-3.5 flex items-center justify-between border border-zinc-800 shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400 text-zinc-950 font-serif font-black text-base flex items-center justify-center">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{user.name}</span>
                          <span className="text-[9px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.2 rounded">VIP</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 truncate max-w-[140px]">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsAccountDrawerOpen(true);
                      }}
                      className="text-xs font-bold bg-amber-400 text-zinc-950 px-3 py-1.5 rounded-lg hover:bg-amber-300 transition-colors shadow-xs"
                    >
                      My Fit
                    </button>
                  </div>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-amber-950 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Join ÀSÀ Club
                      </span>
                      <p className="text-[10px] text-amber-800">15% off first order + tailor tracker</p>
                    </div>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setAuthMode('login');
                        navigateTo('auth');
                      }}
                      className="text-xs font-bold bg-zinc-950 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs"
                    >
                      Sign In
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Search Bar */}
              <div className="mt-4 relative">
                <div className="flex items-center bg-zinc-100 rounded-xl px-3 py-2.5 border border-zinc-300 focus-within:border-zinc-950 focus-within:ring-2 focus-within:ring-zinc-950/10">
                  <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search jeans, tops, agbadas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full placeholder:text-zinc-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-zinc-400 hover:text-zinc-700 px-1 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Nav Links */}
              <div className="mt-4 flex flex-col divide-y divide-zinc-100 text-left">
                <button
                  onClick={() => handleNavClick('home')}
                  className="py-3 px-2 text-base font-semibold uppercase tracking-wider text-left text-zinc-800 hover:text-amber-800"
                >
                  Home
                </button>

                {/* Brand Pillars: Modern Essential Wear & Nigerian Traditional */}
                <div className="py-2 px-2 bg-zinc-50/80 rounded-2xl space-y-2 my-2 border border-zinc-200/80">
                  {/* Modern Essential Wear & Categories */}
                  <div className="space-y-1">
                    <button
                      onClick={() => handleNavClick('mens-standard')}
                      className="w-full py-2.5 px-3 text-xs font-bold uppercase text-left text-zinc-900 hover:text-amber-800 flex items-center justify-between bg-white rounded-xl border border-zinc-200 shadow-xs"
                    >
                      <span>Modern Essential Wear</span>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                    </button>
                    <div className="pl-3 pr-1 py-1 space-y-1 text-xs">
                      <button
                        onClick={() => handleNavClick('mens-standard', 'Jeans')}
                        className="w-full text-left py-1.5 px-2 text-zinc-600 hover:text-zinc-950 font-medium hover:bg-white rounded-lg transition-colors flex justify-between"
                      >
                        <span>• Jeans & Denim</span>
                        <span className="text-[10px] text-zinc-400">Pants</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('mens-standard', 'Tops')}
                        className="w-full text-left py-1.5 px-2 text-zinc-600 hover:text-zinc-950 font-medium hover:bg-white rounded-lg transition-colors flex justify-between"
                      >
                        <span>• Tops & Shirts</span>
                        <span className="text-[10px] text-zinc-400">Polos & Tees</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('mens-standard', 'Footwear')}
                        className="w-full text-left py-1.5 px-2 text-zinc-600 hover:text-zinc-950 font-medium hover:bg-white rounded-lg transition-colors flex justify-between"
                      >
                        <span>• Summer Footwear & Slides</span>
                        <span className="text-[10px] text-zinc-400">Shoes</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('mens-standard', 'Joggers')}
                        className="w-full text-left py-1.5 px-2 text-zinc-600 hover:text-zinc-950 font-medium hover:bg-white rounded-lg transition-colors flex justify-between"
                      >
                        <span>• Joggers & Sweats</span>
                        <span className="text-[10px] text-zinc-400">Loungewear</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavClick('traditional')}
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase text-left text-zinc-900 hover:text-amber-800 flex items-center justify-between bg-amber-100/60 rounded-xl border border-amber-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-amber-700" />
                      <span>Nigerian Traditional Wears</span>
                    </span>
                    <span className="text-[9px] bg-amber-400 text-zinc-950 px-2 py-0.5 rounded font-black uppercase">
                      👑 Pre-Order
                    </span>
                  </button>
                </div>



                <button
                  onClick={() => handleNavClick('about')}
                  className={`py-3 px-2 text-base font-semibold uppercase tracking-wider text-left transition-colors ${
                    currentPage === 'about' ? 'text-amber-800 font-bold' : 'text-zinc-800 hover:text-amber-800'
                  }`}
                >
                  About Us
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`py-3 px-2 text-base font-semibold uppercase tracking-wider text-left transition-colors ${
                    currentPage === 'contact' ? 'text-amber-800 font-bold' : 'text-zinc-800 hover:text-amber-800'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-zinc-200 space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 bg-zinc-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Open Cart ({cartCount})</span>
              </button>

              <div className="text-xs text-zinc-500 text-center">
                © 2026 ÀSÀ Luxe Nigeria. Handcrafted in Lagos.
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
