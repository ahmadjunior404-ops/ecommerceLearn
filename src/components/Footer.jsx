import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { showToast, navigateTo } = useShop();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Success! Check your email for your 15% discount code: NAIJASTYLE');
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-zinc-950 text-white border-t border-zinc-900">
      
      {/* Newsletter Signup Bar (ASOS Style) */}
      <div className="bg-amber-400 text-zinc-950 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start font-black text-xs uppercase tracking-widest text-zinc-900 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Join The ÀSÀ VIP Circle</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-serif uppercase tracking-tight">
              Get 15% Off Your First Order
            </h3>
            <p className="text-sm font-medium text-zinc-800 mt-0.5">
              Plus private access to runway drops, bespoke fittings & Nigerian fashion guides.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white text-zinc-900 placeholder:text-zinc-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-950 shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 text-left"
            >
              <span className="text-3xl font-black font-serif tracking-widest text-white uppercase">
                ÀSÀ
              </span>
              <span className="text-xs bg-amber-400 text-zinc-950 font-black px-2 py-0.5 rounded uppercase font-sans">
                Luxe
              </span>
            </button>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              ÀSÀ LUXE is a premier contemporary menswear brand crafted for the modern man — delivering high-grade everyday essentials, denim, and footwear alongside authentic bespoke Nigerian traditional tailoring.
            </p>

            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <button 
                onClick={() => navigateTo('about')}
                className="flex items-center gap-2 hover:text-amber-400 text-left transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Flagship Atelier: 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
              </button>
              <a 
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>WhatsApp VIP Concierge: +234 812 345 6789</span>
              </a>
              <button 
                onClick={() => navigateTo('contact')}
                className="flex items-center gap-2 hover:text-amber-400 text-left transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>concierge@asaluxe.ng</span>
              </button>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-3">
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 text-zinc-300 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.556 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Collections */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => navigateTo('traditional')} className="hover:text-amber-400 transition-colors text-left">Royal Grand Agbadas</button></li>
              <li><button onClick={() => navigateTo('traditional')} className="hover:text-amber-400 transition-colors text-left">Imperial Senator Suits</button></li>
              <li><button onClick={() => navigateTo('mens-standard', 'Jeans & Denim')} className="hover:text-amber-400 transition-colors text-left">Selvedge Denim Jeans</button></li>
              <li><button onClick={() => navigateTo('mens-standard', 'Tops & Shirts')} className="hover:text-amber-400 transition-colors text-left">Heavyweight 320GSM Boxy Tees</button></li>
              <li><button onClick={() => navigateTo('mens-standard', 'Joggers & Sweats')} className="hover:text-amber-400 transition-colors text-left">Tapered Cargo Joggers</button></li>
              <li><button onClick={() => navigateTo('mens-standard', 'Footwear & Slides')} className="hover:text-amber-400 transition-colors text-left">Handmade Leather Slides</button></li>
              <li><button onClick={() => navigateTo('traditional')} className="hover:text-amber-400 transition-colors text-left">Hand-loomed Fila Caps</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Maison & Care
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors text-left">About ÀSÀ LUXE & Our Story</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors text-left">Atelier Craftsmanship</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors text-left">Bespoke Fitting Appointment</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors text-left">VIP Concierge Desk</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors text-left">Nigeria & Global Shipping</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors text-left">Wedding Groomsmen Inquiry</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors text-left">Frequently Asked Questions (FAQ)</button></li>
            </ul>
          </div>

          {/* Trust & Guarantee */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">
              Our Guarantee
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Authentic Fabric</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Every thread is sourced directly from certified African weavers and Dutch wax mills.
                </p>
              </div>

              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Secure Payments</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Secured with Paystack, Flutterwave, and 256-bit bank-grade encryption.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Payment Methods & Bottom Legal */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} ÀSÀ LUXE NIGERIA LTD. All Rights Reserved. Crafted with pride in Lagos.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 mr-2">Accepted Payments:</span>
            <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] font-bold text-emerald-400">Paystack</span>
            <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] font-bold text-amber-400">Flutterwave</span>
            <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] font-bold text-zinc-300">Mastercard</span>
            <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] font-bold text-blue-400">Visa</span>
            <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[11px] font-bold text-white">Apple Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
