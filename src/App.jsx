import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';
import AuthModal from './components/AuthModal';
import AccountDrawer from './components/AccountDrawer';

import Home from './pages/Home';
import MensStandardPage from './pages/MensStandardPage';
import TraditionalWearPage from './pages/TraditionalWearPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';

function AppContent() {
  const { currentPage, navigateTo } = useShop();
  const isAuthPage = currentPage === 'auth';

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-amber-400 selection:text-zinc-950">
      {/* 1. Global Navbar (Hidden on Auth Page) */}
      {!isAuthPage && <Navbar />}

      {/* Main Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && <Home />}
        {currentPage === 'mens-standard' && <MensStandardPage onNavigate={navigateTo} />}
        {currentPage === 'traditional' && <TraditionalWearPage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'auth' && <AuthPage />}
        {/* Fallback to home if legacy routes are requested */}
        {(currentPage === 'womens-standard' || currentPage === 'womens-traditional' || currentPage === 'kids-standard' || currentPage === 'kids-traditional' || currentPage === 'women' || currentPage === 'kids') && <Home />}
      </main>

      {/* Global Footer (Hidden on Auth Page) */}
      {!isAuthPage && <Footer />}

      {/* Global Drawers, Modals & Notifications */}
      <CartDrawer />
      <QuickViewModal />
      <Toast />
      <AuthModal />
      <AccountDrawer />
    </div>
  );
}

function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
