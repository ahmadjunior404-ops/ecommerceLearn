import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';

function Home() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <HeroBanner />

      {/* 2. FEATURED PRODUCTS */}
      <FeaturedProducts />
    </>
  );
}

export default Home;
