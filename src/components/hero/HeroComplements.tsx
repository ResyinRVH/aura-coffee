import React from 'react';
import { Wine, CalendarDays, Coffee } from 'lucide-react';

interface ComplementItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const COMPLEMENTS: ComplementItem[] = [
  {
    id: 'sippy',
    title: 'Medium Roast',
    desc: 'Slow roasted to preserve natural floral & cacao notes',
    icon: <Coffee className="w-10 h-10 text-coffee stroke-[1.8]" />,
  },
  {
    id: 'donut',
    title: 'Freshly Roasted',
    desc: 'Pulled within 14 days of resting post-roast',
    icon: <CalendarDays className="w-10 h-10 text-navy stroke-[1.8]" />,
  },
  {
    id: 'cookies',
    title: 'Sparkling Cleanser',
    desc: 'Served with cold sparkling water to refresh your palate',
    icon: <Wine className="w-10 h-10 text-coffee stroke-[1.8]" />,
  },
];

export default function HeroComplements() {
  return (
    <div className="lg:col-span-3 flex flex-col justify-center space-y-6 sm:space-y-8 pl-0 lg:pl-6">
      {COMPLEMENTS.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-stone-100/80 shrink-0 transition-transform duration-200 group-hover:scale-105">
            {item.icon}
          </div>

          <div className="flex flex-col">
            <h2 className="font-adventor font-bold text-sm sm:text-base text-silver leading-tight">
              {item.title}
            </h2>
            <p className="font-poppins font-regular text-xs text-silver leading-normal mt-0.5">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}