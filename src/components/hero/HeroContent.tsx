import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroContentProps {
  onOrderClick?: () => void;
}

export default function HeroContent({ onOrderClick }: HeroContentProps) {
  return (
    <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10">
      <h1 className="font-adventor font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-stone-900 tracking-tight">
        Signature <br />
        Espresso Shot
      </h1>

      <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm">
        Our house roasted single origin pulled to perfection, featuring deep
        cacao sweetness, delicate fruit acidity, and an exceptionally rich
        crema.
      </p>

      <div className="pt-2">
        <span className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
          $ 8.60
        </span>
      </div>

      <div>
        <button
          type="button"
          onClick={onOrderClick}
          className="group inline-flex items-center gap-4 bg-navy text-white pl-6 pr-2.5 py-2.5 rounded-full shadow-lg hover:bg-navy-light transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <span className="font-medium text-sm">Buy Now</span>
          <span className="w-8 h-8 rounded-full bg-coffee  flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </button>
      </div>
    </div>
  );
}