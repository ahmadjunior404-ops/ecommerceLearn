import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  User, 
  Crown, 
  Package, 
  Ruler, 
  MapPin, 
  LogOut, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Scissors, 
  Edit3, 
  Save,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const AccountDrawer = () => {
  const { 
    user, 
    isAccountDrawerOpen, 
    setIsAccountDrawerOpen, 
    logout, 
    showToast,
    formatPrice,
    savedMeasurements,
    setSavedMeasurements
  } = useShop();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'measurements' | 'profile'

  // Editable Bespoke Measurements state
  const [isEditingMeasurements, setIsEditingMeasurements] = useState(false);
  const [measurements, setMeasurements] = useState(savedMeasurements || {
    chest: '42',
    shoulder: '19.5',
    waist: '34',
    agbadaLength: '58',
    sleeveLength: '33',
    trouserLength: '41',
    neck: '16.5'
  });

  // Keep local form in sync with global savedMeasurements when opened
  React.useEffect(() => {
    if (savedMeasurements) {
      setMeasurements(savedMeasurements);
    }
  }, [savedMeasurements, isAccountDrawerOpen]);

  if (!isAccountDrawerOpen || !user) return null;

  const handleSaveMeasurements = (e) => {
    e.preventDefault();
    setSavedMeasurements(measurements);
    setIsEditingMeasurements(false);
    showToast('Bespoke tailoring fit profile saved and synced with pre-orders!');
  };

  const sampleOrders = [
    {
      id: 'ASA-8921',
      date: 'Sept 5, 2026',
      status: 'In Tailoring / Embroidery',
      statusStep: 3, // out of 4
      statusColor: 'amber',
      items: [
        {
          name: 'Handcrafted Royal Grand Agbada 3-Piece',
          color: 'Royal Gold & White Silk',
          size: 'Custom Tailored',
          priceNGN: 145000,
          image: 'https://i.pinimg.com/736x/38/d2/e2/38d2e22c6a7d0aa2e3a643d9d18d6440.jpg'
        }
      ],
      deliveryAddress: '13 Admiralty Way, Lekki Phase 1, Lagos'
    },
    {
      id: 'ASA-7402',
      date: 'Aug 28, 2026',
      status: 'Delivered',
      statusStep: 4,
      statusColor: 'emerald',
      items: [
        {
          name: 'Boxy Vintage Heavyweight 280GSM Tee',
          color: 'Washed Charcoal Black',
          size: 'L',
          priceNGN: 24500,
          image: 'https://i.pinimg.com/736x/0e/06/24/0e062486f229dc2aa6a678f716fb7a55.jpg'
        },
        {
          name: 'Relaxed Fit Vintage Wash Jeans',
          color: 'Vintage Indigo Blue',
          size: '34/32',
          priceNGN: 42000,
          image: 'https://i.pinimg.com/736x/54/51/cd/5451cd28a19aeb7bebdfd01150a8ec1c.jpg'
        }
      ],
      deliveryAddress: '13 Admiralty Way, Lekki Phase 1, Lagos'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAccountDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Header Profile Summary */}
          <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white p-6 relative">
            <button
              onClick={() => setIsAccountDrawerOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close Account Panel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-zinc-950 font-serif font-black text-2xl flex items-center justify-center shadow-lg border-2 border-amber-300/60">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="absolute -bottom-1 -right-1 bg-zinc-900 border border-amber-400 p-1 rounded-full text-amber-400">
                  <Crown className="w-3 h-3" />
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white truncate">
                    {user.name}
                  </h2>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                    VIP
                  </span>
                </div>
                <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                <div className="mt-1 flex items-center gap-3 text-[11px] text-zinc-300">
                  <span className="flex items-center gap-1 text-amber-400 font-semibold">
                    <Sparkles className="w-3 h-3" /> 1,450 ÀSÀ Points
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">Tier: {user.vipTier || 'Gold Couture'}</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-zinc-900/90 p-1 rounded-xl mt-5 border border-zinc-800">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'orders'
                    ? 'bg-amber-400 text-zinc-950 shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>Orders</span>
              </button>

              <button
                onClick={() => setActiveTab('measurements')}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'measurements'
                    ? 'bg-amber-400 text-zinc-950 shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>Fit Profile</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'profile'
                    ? 'bg-amber-400 text-zinc-950 shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Account</span>
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 bg-zinc-50/50">
            
            {/* 1. ORDERS TAB */}
            {activeTab === 'orders' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Active & Recent Orders ({sampleOrders.length})
                  </h3>
                  <span className="text-[11px] text-amber-700 font-semibold cursor-pointer hover:underline">
                    Download Invoices
                  </span>
                </div>

                {sampleOrders.map((order) => (
                  <div 
                    key={order.id} 
                    className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-xs space-y-3.5 transition-all hover:border-zinc-300"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                      <div>
                        <span className="text-xs font-black text-zinc-950 tracking-wider">
                          ORDER #{order.id}
                        </span>
                        <div className="text-[11px] text-zinc-400">{order.date}</div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.statusColor === 'amber' 
                          ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    {/* Progress timeline */}
                    <div className="py-1">
                      <div className="flex justify-between text-[10px] font-semibold text-zinc-500 mb-1">
                        <span className="text-amber-800">Placed</span>
                        <span className="text-amber-800">Tailoring</span>
                        <span className={order.statusStep >= 3 ? 'text-amber-800' : 'text-zinc-400'}>Embroidery</span>
                        <span className={order.statusStep === 4 ? 'text-emerald-700' : 'text-zinc-400'}>Delivered</span>
                      </div>
                      <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden flex">
                        <div 
                          className={`h-full ${order.statusStep === 4 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          style={{ width: `${(order.statusStep / 4) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Item list */}
                    <div className="space-y-2 pt-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-zinc-50 p-2 rounded-xl">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-14 object-cover rounded-lg shrink-0 border border-zinc-200"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-zinc-900 truncate">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-zinc-500">
                              {item.color} • Size: <span className="font-semibold text-zinc-700">{item.size}</span>
                            </p>
                            <p className="text-xs font-bold text-amber-800 mt-0.5">
                              {formatPrice(item.priceNGN)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-100">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="truncate max-w-[200px]">{order.deliveryAddress}</span>
                      </span>
                      <button 
                        onClick={() => showToast(`Live tracking details sent for Order #${order.id}`)}
                        className="text-amber-800 hover:text-amber-950 font-bold"
                      >
                        Track Status →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. BESPOKE MEASUREMENTS TAB */}
            {activeTab === 'measurements' && (
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-3">
                  <Scissors className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-amber-950">Nigerian Tailoring Fit Profile</h4>
                    <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                      Our master tailors in Lagos use these precision measurements to cut Agbadas, Senator Suits, and Couture Gowns to your exact silhouette.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                    <h4 className="text-xs font-bold text-zinc-900">Custom Dimensions</h4>
                    <button
                      type="button"
                      onClick={() => setIsEditingMeasurements(!isEditingMeasurements)}
                      className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1"
                    >
                      {isEditingMeasurements ? (
                        <>Cancel</>
                      ) : (
                        <><Edit3 className="w-3.5 h-3.5" /> Edit Measurements</>
                      )}
                    </button>
                  </div>

                  {isEditingMeasurements ? (
                    <form onSubmit={handleSaveMeasurements} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(measurements).map(([key, value]) => (
                          <div key={key}>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                              type="text"
                              value={value}
                              onChange={(e) => setMeasurements({ ...measurements, [key]: e.target.value })}
                              className="w-full text-xs font-semibold px-3 py-2 bg-zinc-50 border border-zinc-300 rounded-lg focus:bg-white focus:outline-none focus:border-zinc-950"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
                      >
                        <Save className="w-3.5 h-3.5 text-amber-400" />
                        <span>Save Fit Profile</span>
                      </button>
                    </form>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5">
                      {Object.entries(measurements).map(([key, value]) => (
                        <div key={key} className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                          <span className="block text-[10px] font-bold text-zinc-400 uppercase">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <span className="text-xs font-black text-zinc-900 mt-0.5 block">
                            {value.toString().includes('in') || value.toString().includes('"') ? value : `${value}"`}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tailor Guarantee */}
                <div className="p-3 bg-zinc-100 rounded-xl flex items-center gap-2 text-[11px] text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free re-fitting guarantee on all traditional couture orders.</span>
                </div>
              </div>
            )}

            {/* 3. PROFILE & VIP SETTINGS */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-xs space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Contact & Security
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-2 border-b border-zinc-100">
                      <span className="text-zinc-500">Full Name</span>
                      <span className="font-bold text-zinc-900">{user.name}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100">
                      <span className="text-zinc-500">Email</span>
                      <span className="font-bold text-zinc-900">{user.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100">
                      <span className="text-zinc-500">Phone</span>
                      <span className="font-bold text-zinc-900">{user.phone}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-100">
                      <span className="text-zinc-500">VIP Tier</span>
                      <span className="font-bold text-amber-700">{user.vipTier || 'Gold Member'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-zinc-500">Member Since</span>
                      <span className="font-bold text-zinc-900">2026</span>
                    </div>
                  </div>
                </div>

                {/* VIP Perks Card */}
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-2xl p-4 shadow-md space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-bold text-white tracking-wide">Gold Tier Privileges</h4>
                    </div>
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <ul className="text-[11px] text-zinc-300 space-y-1.5 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> Free Nationwide & Express Global Delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> Complimentary Bespoke Alterations & Re-fits
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✓</span> 48-Hour Early Access to Limited Edition Drops
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Drawer Footer with Sign Out */}
          <div className="p-4 bg-white border-t border-zinc-200 space-y-2">
            <button
              type="button"
              onClick={logout}
              className="w-full py-3 border border-rose-200 bg-rose-50/50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Account</span>
            </button>
            <p className="text-[10px] text-center text-zinc-400">
              Need assistance? WhatsApp Couture Concierge: +234 812 000 9999
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountDrawer;
