'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/data/menu';

interface ExtendedMenuItem extends MenuItem {
  originalPrice?: string;
  discountPercentage?: number;
}

interface MenuItemCardProps {
  item: ExtendedMenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuItemCard({
  item,
  onAddToCart,
}: MenuItemCardProps) {
  return (
    <div className="group relative bg-white rounded-[32px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-stone-200/60 transition-all duration-300 flex flex-col justify-between">
      <div className="relative w-full h-48 sm:h-52 flex items-center justify-center my-2">
        <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#f4ece4]/70 transition-transform duration-300 group-hover:scale-105" />
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 z-[1] drop-shadow-[0_14px_16px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src={item.image || '/coffee-cup.webp'}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 140px, 160px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="pt-2">
        <p className="text-[11px] text-silver/50 capitalize font-medium tracking-wide">
          {item.category ? item.category.replace('-', ' ') : 'Coffee'}
        </p>

        <h3 className="font-adventor font-bold text-base text-stone-900 mt-1 line-clamp-1 group-hover:text-[#5c3a21] transition-colors">
          {item.name}
        </h3>

        {item.description && (
          <p className="text-stone-500 text-xs leading-relaxed mt-2 line-clamp-2 pr-4">
            {item.description}
          </p>
        )}
      </div>

      <div className="pt-4 mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {item.originalPrice && (
            <span className="text-xs text-stone-400 line-through">
              {item.originalPrice}
            </span>
          )}
          <span className="font-adventor font-bold text-lg text-stone-900">
            {item.price}
          </span>
        </div>

        <div className="relative -mr-6 -mb-6">
          <div className="bg-[#f6eee3] p-3 rounded-tl-[24px]">
            <button
              type="button"
              onClick={() => onAddToCart(item)}
              aria-label={`Add ${item.name} to cart`}
              className="w-11 h-14 rounded-[20px] bg-white border border-stone-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:border-stone-300 active:scale-95 text-stone-800 hover:text-[#f67b52] flex items-center justify-center transition-all duration-200"
            >
              <Plus className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}