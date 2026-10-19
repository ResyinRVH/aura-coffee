'use client';

import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroCenterpiece from './hero/HeroCenterpiece';
import HeroComplements from './hero/HeroComplements';

export default function Hero() {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 relative w-full overflow-hidden bg-silver-100 py-8 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <HeroContent onOrderClick={handleScrollToMenu} />
        <HeroCenterpiece />
        <HeroComplements />
      </div>
    </section>
  );
}