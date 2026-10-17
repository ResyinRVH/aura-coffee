'use client';

import { SearchProvider } from '@/context/SearchContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import FindUs from '@/components/FindUs';

export default function Home() {
  return (
    <SearchProvider>
    <div className="min-h-screen bg-[#f6eee3]">
      <Navbar />
      <Hero/>
      <About/>
      <Menu/>
      <FindUs/>
    </div>
    </SearchProvider>
  );
}