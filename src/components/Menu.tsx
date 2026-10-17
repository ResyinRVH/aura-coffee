'use client';

import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import { Plus } from 'lucide-react';

const CATEGORIES = [
    { id: 'all', label: 'All Offerings' },
    { id: 'espresso', label: 'Espresso' },
    { id: 'manual-brew', label: 'Manual Brew' },
    { id: 'signature', label: 'Signatures' },
    { id: 'pastry', label: 'Pastry' },
] as const;

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredItems =
        activeCategory === 'all'
            ? MENU_ITEMS
            : MENU_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="w-full bg-[#f6eee3] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#f67b52]">
                        Curated Offerings
                    </span>
                    <h2 className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight mt-2">
                        Eksplorasi Menu Pilihan Aura
                    </h2>
                    <p className="text-stone-600 text-sm mt-3">
                        Dipadukan dari biji kopi single-origin pilihan dan bahan alami musiman tanpa perisa buatan.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === cat.id
                                    ? 'bg-stone-900 text-white shadow-md'
                                    : 'bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 shadow-sm border border-stone-200/40'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item: MenuItem) => (
                        <div
                            key={item.id}
                            className="group relative bg-white/80 hover:bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-stone-200/50 transition-all duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        {item.isPopular && (
                                            <span className="inline-block text-[10px] font-semibold text-orange-600 bg-orange-100/70 px-2.5 py-0.5 rounded-full mb-2">
                                                Roaster&apos;s Pick
                                            </span>
                                        )}
                                        <h3 className="font-adventor font-bold text-lg text-stone-900 group-hover:text-[#f67b52] transition-colors">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <span className="font-adventor font-bold text-base text-stone-900 shrink-0">
                                        {item.price}
                                    </span>
                                </div>

                                <p className="text-stone-500 text-xs leading-relaxed mt-2.5 line-clamp-2">
                                    {item.description}
                                </p>

                                {item.tastingNotes && item.tastingNotes.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {item.tastingNotes.map((note, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                                            >
                                                {note}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                                <span className="text-xs text-stone-400 capitalize">
                                    {item.category.replace('-', ' ')}
                                </span>
                                <button
                                    type="button"
                                    aria-label={`Order ${item.name}`}
                                    className="w-8 h-8 rounded-full bg-stone-900 group-hover:bg-[#f67b52] text-white flex items-center justify-center transition-colors shadow-sm"
                                >
                                    <Plus className="w-4 h-4 stroke-[2.2]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}