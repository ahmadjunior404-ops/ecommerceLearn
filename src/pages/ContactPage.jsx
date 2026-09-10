import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ContactPage = ({ onNavigate }) => {
  const { showToast, navigateTo } = useShop();
  const handleNav = onNavigate || navigateTo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Traditional Wear',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const quickFaqs = [
    {
      q: "How long does bespoke tailoring take?",
      a: "Bespoke Grand Agbadas and Senator suits take 7 to 12 working days. Expedited 72-hour service is available for urgent events."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes. We deliver across Nigeria (24–48h) and worldwide via DHL Express (3–5 business days to the US, UK, Canada, and UAE)."
    },
    {
      q: "How do I submit measurements if I am abroad?",
      a: "Our master tailor schedules a short WhatsApp video call or sends our illustrated self-measurement guide to ensure an exact fit."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Message sent! Our concierge will reply within a few hours.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Bespoke Traditional Wear',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-20">
      {/* 1. CLEAN HEADER */}
      <section className="bg-zinc-950 text-white py-14 sm:py-18 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-2">
            Client Concierge
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-serif uppercase tracking-tight text-white">
            Get in Touch
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-3 font-light">
            Have a question about an order, want to commission a bespoke piece, or need styling advice? We're here to help.
          </p>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CONTACT LAYOUT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Direct Contact
            </div>

            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/2348123456789?text=Hello%20ÀSÀ%20LUXE,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl flex items-start gap-4 hover:border-emerald-400 transition-colors group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  WhatsApp Concierge
                </div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">
                  +234 812 345 6789
                </div>
                <div className="text-xs text-emerald-700 mt-1 flex items-center gap-1 font-medium">
                  <span>Chat directly with a stylist</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>

            {/* Email */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Email Desk
                </div>
                <a 
                  href="mailto:concierge@asaluxe.ng" 
                  className="text-sm font-bold text-zinc-900 hover:text-amber-800 transition-colors block mt-0.5"
                >
                  concierge@asaluxe.ng
                </a>
                <div className="text-xs text-zinc-500 mt-1">
                  Average response in 2–4 hours
                </div>
              </div>
            </div>

            {/* Flagship Address */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Flagship Atelier
                </div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">
                  14 Admiralty Way, Lekki Phase 1
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  Lagos, Nigeria
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Opening Hours
                </div>
                <div className="text-sm font-bold text-zinc-900 mt-0.5">
                  Mon – Sat: 9:00 AM – 7:30 PM
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  Sun: Private fittings by appointment
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-black font-serif uppercase tracking-tight text-zinc-950">
                  Send a Message
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {submitted && (
                <div className="mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been received. We'll be in touch shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Adeyemi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white"
                  >
                    <option value="Bespoke Traditional Wear">Bespoke Agbada or Senator Fitting</option>
                    <option value="Wedding & Groomsmen">Wedding & Groomsmen Consultation</option>
                    <option value="Order Tracking & Essentials">Order Status & Everyday Essentials</option>
                    <option value="General Inquiry">General Question / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Message <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMPACT QUICK FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Quick Answers</span>
          </div>
        </div>

        <div className="space-y-2.5">
          {quickFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-zinc-900 hover:bg-zinc-100/60 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180 text-zinc-900' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-200/60 bg-white pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
