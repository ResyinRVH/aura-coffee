import React from 'react';
import Image from 'next/image';
import { Sparkles, Flame, ShieldCheck } from 'lucide-react';

const PILLARS = [
    {
        icon: <Flame className="w-5 h-5 text-orange-500" />,
        title: 'Precision Micro-Roasting',
        desc: 'Biji kopi disangrai batch kecil dengan profil suhu terukur untuk memunculkan kompleksitas rasa alami.',
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
        title: 'Direct-Trade Single Origin',
        desc: 'Bermitra langsung dengan petani lokal Gayo, Toraja, hingga Ethiopia tanpa rantai perantara berlebih.',
    },
    {
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
        title: 'Sensory Sanctuary',
        desc: 'Ruang tenang yang didesain estetik dan hening untuk berkarya, membaca, dan menikmati artisan coffee.',
    },
];

export default function About() {
    return (
        <section id="about" className="w-full bg-[#f6eee3] py-20 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 relative flex items-center justify-center">
                    <div className="relative w-full max-w-[460px] h-[480px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                        <Image
                            src="/aurora-web.webp"
                            alt="Artisan Roasting Process"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-stone-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#f67b52] flex items-center justify-center text-white font-adventor font-bold text-lg shadow-sm">
                            100%
                        </div>
                        <div>
                            <p className="font-adventor font-bold text-stone-900 text-sm">Specialty Grade Arabica</p>
                            <p className="text-xs text-stone-500">Ethically & sustainably harvested</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-8">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#f67b52]">
                            Our Craft & Origin
                        </span>
                        <h2 className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight mt-2 leading-tight">
                            Menghidupkan Kembali Seni Seduh Kopi dengan Pendekatan Presisi
                        </h2>
                        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4">
                            Aura Roast & Brew lahir dari apresiasi terhadap proses. Setiap cangkir bukan sekadar minuman berkafein, melainkan narasi rasa mulai dari tanah tempat pohon kopi tumbuh hingga ekstraksi di atas bar kami.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {PILLARS.map((pillar, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 hover:bg-white transition-colors duration-200 shadow-sm border border-stone-200/40">
                                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-stone-100">
                                    {pillar.icon}
                                </div>
                                <div>
                                    <h3 className="font-adventor font-bold text-sm text-stone-900">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}