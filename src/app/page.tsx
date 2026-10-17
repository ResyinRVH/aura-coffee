'use client';

import { SearchProvider } from '@/context/SearchContext';
import { CartProvider } from '@/context/CartContext';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import FindUs from '@/components/FindUs';
import CartPopUp from '@/components/CartPopUp';

export default function Home() {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#f6eee3]">
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <FindUs />
          <CartPopUp />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}