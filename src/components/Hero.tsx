import React from 'react';
import Image from 'next/image';
import { ChevronRight, Heart, Coffee, Cookie, Sparkles } from 'lucide-react';

interface ComplementItem {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const COMPLEMENTS: ComplementItem[] = [
    {
        id: 'sippy',
        title: 'Sippy cups',
        desc: 'Are the new norm for iced coffee',
        icon: <Coffee className="w-5 h-5 text-emerald-600 stroke-[1.8]" />,
    },
    {
        id: 'donut',
        title: 'Donut',
        desc: 'Have a donut with the frappuccino',
        icon: <Sparkles className="w-5 h-5 text-emerald-600 stroke-[1.8]" />,
    },
    {
        id: 'cookies',
        title: 'Cookies',
        desc: 'Enjoy our sugar free cookies',
        icon: <Cookie className="w-5 h-5 text-amber-600 stroke-[1.8]" />,
    },
];

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f6eee3] py-8 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10">
                    <h1 className="font-adventor font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-stone-900 tracking-tight">
                        Midnight <br />
                        Frappuccino
                    </h1>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm">
                        The Midnight Mint Mocha Frappuccino features extra dark cocoa blended with Frappuccino Roast coffee.
                    </p>

                    <div className="pt-2">
                        <span className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                            $ 8.60
                        </span>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="group inline-flex items-center gap-4 bg-stone-900 text-white pl-6 pr-2.5 py-2.5 rounded-full shadow-lg hover:bg-stone-800 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            <span className="font-medium text-sm">Buy Now</span>
                            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
                                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 relative flex items-center justify-center py-6">

                    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#f67b52] flex items-center justify-center shadow-inner">
                        <div className="absolute inset-5 rounded-full border border-white/20 pointer-events-none" />

                        <div className="relative w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.30)] flex items-center justify-center">
                            <Image
                                src="/coffee-web.webp"
                                alt="Midnight Coffee Cup"
                                fill
                                priority
                                sizes="(max-width: 768px) 240px, 320px"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-2 right-8 sm:right-14 flex flex-wrap w-16 gap-1.5 opacity-60 pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                        <span className="w-2 h-2 rounded-full bg-stone-800" />
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                        <span className="w-2 h-2 rounded-full bg-stone-800" />
                    </div>

                    <div className="absolute -bottom-4 sm:bottom-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-stone-100 flex items-center gap-3 z-20">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.55)]">
                            <Heart className="w-4 h-4 text-white fill-white" />
                        </div>

                        <div className="flex items-center -space-x-1.5">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                                alt="Customer 1"
                                className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                                alt="Customer 2"
                                className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                                alt="Customer 3"
                                className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center space-y-6 sm:space-y-8 pl-0 lg:pl-6">
                    {COMPLEMENTS.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-stone-100/80 shrink-0 transition-transform duration-200 group-hover:scale-105">
                                {item.icon}
                            </div>

                            <div className="flex flex-col">
                                <h2 className="font-adventor font-bold text-sm sm:text-base text-stone-900 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-xs text-stone-500 leading-normal mt-0.5">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}