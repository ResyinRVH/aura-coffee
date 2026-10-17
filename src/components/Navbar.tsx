'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Find Us', href: '#location' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#f6eee3] text-stone-900 transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-2.5 shrink-0">

                    <span className="font-extrabold tracking-tight text-lg text-stone-900 uppercase">
                        AURORA
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-[14px] font-adventor font-bold text-stone-700">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-stone-950 transition-colors duration-150"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <div className="relative hidden sm:block">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                            <Search className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-44 md:w-56 bg-white text-stone-800 placeholder-stone-400 text-sm rounded-full pl-10 pr-4 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-stone-200/50 focus:outline-none focus:ring-2 focus:ring-stone-300 transition-all duration-200"
                        />
                    </div>

                    <button
                        aria-label="Shopping Bag"
                        className="relative p-2 text-stone-800 hover:text-stone-950 transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-[#f6eee3]" />
                    </button>

                    <button
                        type="button"
                        className="lg:hidden p-2 text-stone-700 hover:text-stone-950"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden px-6 pt-2 pb-6 border-t border-stone-200/60 bg-[#f6eee3] flex flex-col gap-4">
                    <div className="relative mt-2 sm:hidden">
                        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-white text-sm rounded-full pl-10 pr-4 py-2 border border-stone-200 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3 pt-2 text-sm font-medium text-stone-700">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-1 hover:text-stone-950"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}