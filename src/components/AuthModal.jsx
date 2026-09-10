import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Crown
} from 'lucide-react';

const AuthModal = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    authMode, 
    setAuthMode, 
    login, 
    signup 
  } = useShop();

  const [showPassword, setShowPassword] = useState(false);
  
  // Login Form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Signup Form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail) return;
    login(loginEmail, loginPassword);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupEmail || !signupName) return;
    signup(signupName, signupEmail, signupPhone);
  };

  const handleQuickDemoLogin = () => {
    login('babatunde@asaluxe.ng', 'password123', 'Babatunde Adeleke');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-xs animate-fade-in">
      {/* Backdrop click */}
      <div 
        className="absolute inset-0" 
        onClick={() => setIsAuthModalOpen(false)}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-zinc-100 transition-all">
        {/* Header with Luxury Brand Accent */}
        <div className="bg-zinc-950 text-white p-6 pb-5 relative">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 bg-amber-400 text-zinc-950 font-serif font-black text-sm rounded-md flex items-center justify-center">
              À
            </span>
            <span className="font-serif font-bold text-lg tracking-widest text-amber-300">
              ÀSÀ LUXE
            </span>
            <span className="text-[10px] bg-zinc-800 text-amber-400 font-bold px-2 py-0.5 rounded-full uppercase ml-auto">
              Member Portal
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white">
            {authMode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {authMode === 'login' 
              ? 'Sign in to access your bespoke orders, VIP perks & measurements.' 
              : 'Join the ÀSÀ Luxe circle & get 15% off your first order.'}
          </p>

          {/* Exclusive Promo Badge */}
          <div className="mt-4 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/30 rounded-xl p-2.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="text-[11px] text-zinc-200">
              <span className="text-amber-300 font-bold">VIP Perk:</span> Use code <span className="font-mono font-bold bg-amber-400/20 px-1 py-0.5 rounded text-amber-300">NAIJASTYLE</span> for 15% off
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-zinc-200 bg-zinc-50">
          <button
            type="button"
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              authMode === 'login'
                ? 'bg-white text-zinc-950 border-b-2 border-zinc-950 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              authMode === 'signup'
                ? 'bg-white text-zinc-950 border-b-2 border-zinc-950 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Create Account
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Demo Login Option */}
          <div className="mb-5 p-3 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <p className="text-xs font-bold text-amber-950">Quick One-Click Demo</p>
                <p className="text-[10px] text-amber-800">Test as Babatunde Adeleke (VIP)</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="text-[11px] font-bold bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg transition-colors shadow-xs"
            >
              Sign In Now
            </button>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => login('google.user@gmail.com', 'google', 'Google VIP User')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 border border-zinc-200 rounded-xl hover:bg-zinc-50 text-xs font-semibold text-zinc-700 transition-colors"
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
              onClick={() => login('apple.user@icloud.com', 'apple', 'Apple VIP User')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 border border-zinc-200 rounded-xl hover:bg-zinc-50 text-xs font-semibold text-zinc-700 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-zinc-900" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.95-2.92-.92.04-2.02.62-2.67 1.38-.58.66-1.09 1.74-.95 2.8 1.02.08 2.05-.49 2.67-1.26z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-5">
            <div className="border-t border-zinc-200 w-full"></div>
            <span className="bg-white px-3 text-[11px] text-zinc-400 uppercase tracking-widest font-medium absolute">
              or continue with email
            </span>
          </div>

          {/* SIGN IN FORM */}
          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Email or Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. adeleke@gmail.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
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
                    onClick={() => alert('Password reset link sent to your registered email.')}
                    className="text-[11px] text-amber-700 hover:text-amber-900 font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded border-zinc-300 focus:ring-amber-500 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 text-xs text-zinc-600 select-none cursor-pointer">
                  Remember me on this browser
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Sign In to ÀSÀ Luxe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-zinc-500">Don't have an account yet? </span>
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                >
                  Create one here
                </button>
              </div>
            </form>
          ) : (
            /* SIGN UP FORM */
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Adeleke"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. adeleke@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Phone Number (For Delivery & Measurements)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+234 812 345 6789"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Create Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="At least 6 characters"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="w-4 h-4 mt-0.5 text-amber-600 rounded border-zinc-300 focus:ring-amber-500 cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-[11px] text-zinc-600 leading-snug cursor-pointer">
                  Send me exclusive fashion drops, private couture sales, and 15% VIP discount codes.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-2"
              >
                <span>Complete Registration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-zinc-500">Already registered? </span>
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                >
                  Sign in here
                </button>
              </div>
            </form>
          )}

          {/* Guarantee Security */}
          <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-center gap-2 text-[10px] text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-bit SSL Encrypted & Tailored Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
