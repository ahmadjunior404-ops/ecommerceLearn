import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Crown, 
  CheckCircle2, 
  Ruler, 
  Truck, 
  Gift, 
  KeyRound,
  Scissors
} from 'lucide-react';

const AuthPage = () => {
  const { 
    authMode, 
    setAuthMode, 
    login, 
    signup, 
    navigateTo, 
    user, 
    setIsAccountDrawerOpen,
    showToast
  } = useShop();

  const [mode, setMode] = useState(authMode || 'login'); // 'login' | 'signup' | 'forgot'
  const [showPassword, setShowPassword] = useState(false);

  // Sign In Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up Form State
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [includeMeasurements, setIncludeMeasurements] = useState(false);
  const [customChest, setCustomChest] = useState('42');
  const [customWaist, setCustomWaist] = useState('34');
  const [customLength, setCustomLength] = useState('58');
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  // Forgot Password State
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail) return;
    login(loginEmail, loginPassword);
    navigateTo('home');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupEmail || !signupName) return;
    signup(signupName, signupEmail, signupPhone);
    navigateTo('home');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    showToast(`Password recovery link sent to ${forgotEmail}`, 'info');
  };

  const handleQuickDemo = () => {
    login('babatunde@asaluxe.ng', 'password123', 'Babatunde Adeleke');
    navigateTo('home');
  };

  // If user is already logged in, show authenticated state card
  if (user) {
    return (
      <div className="min-h-[80vh] bg-zinc-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 border border-zinc-200 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-amber-400 text-zinc-950 font-serif font-black text-3xl rounded-3xl flex items-center justify-center mx-auto shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Crown className="w-3.5 h-3.5" /> VIP Member Active
            </span>
            <h1 className="text-2xl font-black font-serif text-zinc-950 uppercase">
              Welcome, {user.name}!
            </h1>
            <p className="text-zinc-500 text-sm mt-1">{user.email}</p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-left space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-zinc-200/60">
              <span className="text-zinc-500">Tier Status</span>
              <span className="font-bold text-amber-800">{user.vipTier || 'Gold Couture Member'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-200/60">
              <span className="text-zinc-500">Tailoring Fit Profile</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-500">Member Since</span>
              <span className="font-bold text-zinc-900">2026</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsAccountDrawerOpen(true)}
              className="flex-1 py-3 px-4 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Open Account Drawer
            </button>
            <button
              onClick={() => navigateTo('home')}
              className="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-500 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-start lg:justify-center p-3 sm:p-5 relative overflow-hidden selection:bg-amber-400 selection:text-zinc-950">
      
      {/* Dynamic Animated Ambient Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shifting background ambient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/30 via-zinc-950 to-zinc-950 opacity-90" />
        
        {/* Floating Orb 1: Warm Amber Gold */}
        <div className="absolute top-[5%] left-[5%] w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] bg-gradient-to-br from-amber-500/35 via-amber-600/20 to-transparent rounded-full blur-[90px] animate-slow-orbit-1" />
        
        {/* Floating Orb 2: Royal Bronze / Warm Orange */}
        <div className="absolute bottom-[5%] right-[5%] w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] bg-gradient-to-tl from-amber-400/30 via-orange-600/20 to-transparent rounded-full blur-[100px] animate-slow-orbit-2" />
        
        {/* Floating Orb 3: Deep Emerald Luxury Glow */}
        <div className="absolute top-[40%] right-[25%] w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] bg-gradient-to-r from-emerald-600/20 via-amber-500/15 to-transparent rounded-full blur-[90px] animate-slow-orbit-3" />

        {/* Subtle Luxury Geometric Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        
        {/* Back navigation */}
        <div className="mb-2 sm:mb-3 flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back to Store</span>
          </button>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
            Secure Authentication Portal
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          
          {/* LEFT COLUMN: Luxury Brand Branding & VIP Perks */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-5 sm:p-7 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800">
            <div className="space-y-4">
              {/* Brand Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-amber-400 text-zinc-950 font-serif font-black text-xl rounded-lg flex items-center justify-center shadow-md">
                  À
                </div>
                <div>
                  <h2 className="text-xl font-black font-serif tracking-widest text-white uppercase leading-none">
                    ÀSÀ<span className="text-amber-500 font-sans font-bold ml-1 text-base">LUXE</span>
                  </h2>
                  <p className="text-[9px] font-bold text-zinc-400 tracking-[0.2em] uppercase mt-0.5">
                    Signature Menswear Portal
                  </p>
                </div>
              </div>

              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-400/10 border border-amber-400/30 text-amber-300 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Crown className="w-3 h-3 text-amber-400" /> VIP Member Access
                </span>
                <h1 className="text-xl sm:text-2xl font-black font-serif tracking-tight text-white uppercase leading-tight">
                  Elevate Your Sartorial Presence
                </h1>
                <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed font-light">
                  Sign in to manage bespoke measurements, monitor tailor embroidery progress, and claim member discounts.
                </p>
              </div>

              {/* VIP Benefits List */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-800/80">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-400 shrink-0 mt-0.5">
                    <Scissors className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-zinc-200 uppercase tracking-wide">Bespoke Fit Storage</h3>
                    <p className="text-[10px] text-zinc-400">Tailoring pre-measurements saved for 1-click ordering.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-400 shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-zinc-200 uppercase tracking-wide">15% Welcome VIP Perk</h3>
                    <p className="text-[10px] text-zinc-400">Use code <span className="text-amber-300 font-mono font-bold">NAIJASTYLE</span> on registration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-400 shrink-0 mt-0.5">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-zinc-200 uppercase tracking-wide">Express Delivery Guarantee</h3>
                    <p className="text-[10px] text-zinc-400">Complimentary priority delivery across Nigeria & globally.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Login Box */}
            <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
              <div>
                <p className="text-xs font-bold text-zinc-200">1-Click VIP Demo</p>
                <p className="text-[10px] text-zinc-400">Babatunde Adeleke</p>
              </div>
              <button
                type="button"
                onClick={handleQuickDemo}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-zinc-950 text-xs font-black uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Authentication Form */}
          <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-center bg-white text-zinc-900">
            
            {/* Form Mode Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl mb-4 border border-zinc-200">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  mode === 'login'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  mode === 'signup'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* 1. SIGN IN FORM */}
            {mode === 'login' && (
              <div className="animate-fade-in space-y-3.5">
                <div>
                  <h2 className="text-xl font-bold font-serif text-zinc-950">Welcome Back</h2>
                  <p className="text-[11px] text-zinc-500">
                    Sign in with your email or social credentials to access your portal.
                  </p>
                </div>

                {/* Social Logins */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => { login('google.user@gmail.com', 'google', 'Google VIP User'); navigateTo('home'); }}
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-zinc-300 rounded-xl hover:bg-zinc-50 text-xs font-bold text-zinc-700 transition-colors shadow-2xs"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { login('apple.user@icloud.com', 'apple', 'Apple VIP User'); navigateTo('home'); }}
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-zinc-300 rounded-xl hover:bg-zinc-50 text-xs font-bold text-zinc-700 transition-colors shadow-2xs"
                  >
                    <svg className="w-4 h-4 fill-current text-zinc-900" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.95-2.92-.92.04-2.02.62-2.67 1.38-.58.66-1.09 1.74-.95 2.8 1.02.08 2.05-.49 2.67-1.26z"/>
                    </svg>
                    <span>Apple</span>
                  </button>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-zinc-200 w-full" />
                  <span className="bg-white px-2.5 text-[10px] text-zinc-400 uppercase tracking-widest font-semibold absolute">
                    or email
                  </span>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1">
                      Email or Username
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="adeleke@asaluxe.ng"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-zinc-700">
                        Password
                      </label>
                      <button 
                        type="button" 
                        onClick={() => setMode('forgot')}
                        className="text-[11px] text-amber-700 hover:text-amber-900 font-bold"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-9 pr-9 py-2 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="rememberMeCheckbox"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-3.5 h-3.5 text-amber-600 rounded border-zinc-300 focus:ring-amber-500 cursor-pointer"
                    />
                    <label htmlFor="rememberMeCheckbox" className="ml-2 text-xs text-zinc-600 select-none cursor-pointer">
                      Keep me signed in
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Sign In to Member Portal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-400" />
                  </button>
                </form>

                <div className="text-center pt-1">
                  <span className="text-xs text-zinc-500">Need an account? </span>
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                  >
                    Create one (15% Off)
                  </button>
                </div>
              </div>
            )}

            {/* 2. SIGN UP FORM */}
            {mode === 'signup' && (
              <div className="animate-fade-in space-y-3">
                <div>
                  <h2 className="text-xl font-bold font-serif text-zinc-950">Join the ÀSÀ Circle</h2>
                  <p className="text-[11px] text-zinc-500">
                    Get your 15% VIP discount & save your bespoke tailoring profile.
                  </p>
                </div>

                <form onSubmit={handleSignupSubmit} className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 mb-0.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Babatunde Adeleke"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-zinc-50 border border-zinc-300 rounded-lg focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-700 mb-0.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="+234 812 345 6789"
                          value={signupPhone}
                          onChange={(e) => setSignupPhone(e.target.value)}
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-zinc-50 border border-zinc-300 rounded-lg focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 mb-0.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="adeleke@example.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-zinc-50 border border-zinc-300 rounded-lg focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 mb-0.5">
                      Create Password
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="At least 6 characters"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="w-full pl-8 pr-8 py-1.5 text-xs bg-zinc-50 border border-zinc-300 rounded-lg focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Optional Tailoring Fit Profile Expandable */}
                  <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-amber-700" />
                        <span className="text-[11px] font-bold text-amber-950">Add Tailoring Dimensions? (Optional)</span>
                      </div>
                      <input
                        type="checkbox"
                        id="measurementToggle"
                        checked={includeMeasurements}
                        onChange={(e) => setIncludeMeasurements(e.target.checked)}
                        className="w-3.5 h-3.5 text-amber-600 rounded cursor-pointer"
                      />
                    </div>

                    {includeMeasurements && (
                      <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-amber-200">
                        <div>
                          <label className="block text-[9px] font-bold text-zinc-600 uppercase">Chest (in)</label>
                          <input
                            type="text"
                            value={customChest}
                            onChange={(e) => setCustomChest(e.target.value)}
                            className="w-full text-xs font-bold px-2 py-1 bg-white border border-amber-300 rounded text-zinc-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-zinc-600 uppercase">Waist (in)</label>
                          <input
                            type="text"
                            value={customWaist}
                            onChange={(e) => setCustomWaist(e.target.value)}
                            className="w-full text-xs font-bold px-2 py-1 bg-white border border-amber-300 rounded text-zinc-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-zinc-600 uppercase">Length (in)</label>
                          <input
                            type="text"
                            value={customLength}
                            onChange={(e) => setCustomLength(e.target.value)}
                            className="w-full text-xs font-bold px-2 py-1 bg-white border border-amber-300 rounded text-zinc-900"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-1.5 pt-0.5">
                    <input
                      id="newsletterCheck"
                      type="checkbox"
                      checked={newsletterOptIn}
                      onChange={(e) => setNewsletterOptIn(e.target.checked)}
                      className="w-3.5 h-3.5 mt-0.5 text-amber-600 rounded border-zinc-300 focus:ring-amber-500 cursor-pointer"
                    />
                    <label htmlFor="newsletterCheck" className="text-[10px] text-zinc-600 leading-tight cursor-pointer">
                      Send me exclusive couture releases & 15% VIP discount code.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group mt-1"
                  >
                    <span>Register & Claim 15% Off</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-400" />
                  </button>
                </form>

                <div className="text-center">
                  <span className="text-xs text-zinc-500">Already registered? </span>
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                  >
                    Sign in here
                  </button>
                </div>
              </div>
            )}

            {/* 3. FORGOT PASSWORD FORM */}
            {mode === 'forgot' && (
              <div className="animate-fade-in space-y-4">
                <div>
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-950 font-bold mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
                  </button>
                  <h2 className="text-xl font-bold font-serif text-zinc-950">Reset Password</h2>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Enter your email to receive recovery instructions.
                  </p>
                </div>

                {forgotSent ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                    <h3 className="text-xs font-bold text-emerald-950">Recovery Link Sent</h3>
                    <p className="text-[11px] text-emerald-800">
                      We've dispatched instructions to <span className="font-bold">{forgotEmail}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setForgotSent(false); setMode('login'); }}
                      className="mt-2 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                    >
                      Return to Sign In
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleForgotSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1">
                        Registered Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="adeleke@example.com"
                          value={forgotEmail}
                          onChange={(e) => setForgotEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 font-medium"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                      <span>Send Recovery Link</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Security Guarantee Footer */}
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-center gap-1.5 text-[10px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit SSL Encrypted & Tailored Security Protocol</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthPage;
