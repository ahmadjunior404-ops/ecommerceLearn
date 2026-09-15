import React from 'react';
import { 
  ArrowRight, 
  Crown, 
  Shirt, 
  Globe, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const AboutPage = ({ onNavigate }) => {
  const { navigateTo } = useShop();
  const handleNav = onNavigate || navigateTo;

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-20">
      {/* 1. CLEAN HERO */}
      <section className="bg-zinc-950 text-white py-16 sm:py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Lagos, Nigeria</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white leading-tight">
            Crafted in Lagos. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Designed for the World.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            ÀSÀ LUXE bridges the gap between high-grade modern everyday menswear essentials and the timeless majesty of bespoke Nigerian traditional couture.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & ATELIER (2-COLUMN EDITORIAL) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Image */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 border border-zinc-200">
              <img
                src="https://i.pinimg.com/736x/15/a8/3a/15a83aab151b872b42ee7181c2a7da60.jpg"
                alt="Atelier Tailoring in Lagos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] uppercase tracking-widest text-amber-300 font-bold">
                  Flagship Atelier
                </div>
                <div className="text-sm font-serif font-semibold">
                  13 Admiralty Way, Lekki Phase 1, Lagos
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-800">
              The Essence of ÀSÀ
            </div>

            <h2 className="text-2xl sm:text-3xl font-black font-serif uppercase tracking-tight text-zinc-950">
              Where Heritage Meets Modern Masculinity
            </h2>

            <p className="text-zinc-600 text-sm leading-relaxed">
              In Yoruba, <em>"Àsà"</em> represents culture, heritage, and distinction. Founded in Lagos, Nigeria, our mission is straightforward: to give the discerning man a complete wardrobe that effortlessly commands respect.
            </p>

            <p className="text-zinc-600 text-sm leading-relaxed">
              We focus on two signature pillars: <strong>Everyday Essentials</strong>—crafted with 320GSM heavy combed cottons, rigid selvedge denim, double-brushed fleece, and Kano cowhide slides—alongside <strong>Royal Traditional Couture</strong>—including hand-embroidered 3-piece Grand Agbadas, tailored Senator suits, and handwoven Aso-Oke fila caps.
            </p>

            {/* 3 Quick Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="font-bold text-xs text-zinc-900">Authentic Sourcing</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Swiss Damask, Kano leather, & heavy jersey</div>
              </div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="font-bold text-xs text-zinc-900">Custom Fit</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Bespoke tailoring with zero-compromise finish</div>
              </div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div className="font-bold text-xs text-zinc-900">Global Shipping</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Nationwide delivery & 3–5 day DHL worldwide</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TWO PILLARS CARDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Modern Essentials */}
          <div className="p-7 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-950 text-amber-400 flex items-center justify-center mb-4">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black font-serif uppercase tracking-tight text-zinc-950 mb-2">
                Modern Everyday Wear
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                Clean silhouettes designed for daily comfort. Selvedge denim jeans, 320GSM boxy tees, fleece joggers, and handmade leather footwear.
              </p>
            </div>
            <button
              onClick={() => handleNav('mens-standard')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:text-amber-800 transition-colors"
            >
              <span>Shop Modern Essentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Nigerian Traditional */}
          <div className="p-7 bg-zinc-950 text-white rounded-2xl border border-zinc-800 hover:border-amber-400/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center mb-4">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-2">
                Nigerian Traditional Couture
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Regal attire tailored to your exact measurements. 3-piece Grand Agbadas, crisp Senator sets, and handwoven Aso-Oke fila caps.
              </p>
            </div>
            <button
              onClick={() => handleNav('traditional')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Explore Traditional Wear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. SIMPLE BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <div className="p-8 bg-zinc-900 text-white rounded-2xl border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-black font-serif uppercase text-white">
              Looking for a bespoke fitting or inquiry?
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Visit our Lekki atelier or contact our concierge online.
            </p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Contact Concierge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
