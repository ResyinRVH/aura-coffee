import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import FindUs from '@/components/FindUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6eee3]">
      <Navbar />
      <Hero/>
      <About/>
      <Menu/>
      <FindUs/>
    </div>
  );
}