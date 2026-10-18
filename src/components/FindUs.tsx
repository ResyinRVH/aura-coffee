import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function FindUs() {
    return (
        <section id="location" className="w-full bg-[#f6eee3] py-20 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-xl mx-auto mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-coffee">
                        Visit Our Studio
                    </span>
                    <h2 className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight mt-2">
                        Discover Our Warm Sanctuary
                    </h2>
                    <p className="text-stone-600 text-sm mt-2">
                        Featuring air conditioned indoor seating, an outdoor roastery deck, and spacious parking
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
                    <div className="lg:col-span-5  flex flex-col justify-between space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#f6eee3] flex items-center justify-center shrink-0 text-stone-800">
                                    <MapPin className="w-5 h-5 text-[#f67b52]" />
                                </div>
                                <div>
                                    <h3 className="font-adventor font-bold text-sm text-stone-900">Studio Address</h3>
                                    <p className="text-xs text-stone-600 leading-relaxed mt-1">
                                        Jl. Senopati Raya No. 42, Kebayoran Baru, South Jakarta, 12190
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#f6eee3] flex items-center justify-center shrink-0 text-stone-800">
                                    <Clock className="w-5 h-5 text-[#f67b52]" />
                                </div>
                                <div>
                                    <h3 className="font-adventor font-bold text-sm text-stone-900">Opening Hours</h3>
                                    <p className="text-xs text-stone-600 mt-1">Mon – Fri: 07:00 – 22:00 WIB</p>
                                    <p className="text-xs text-stone-600">Sat – Sun: 08:00 – 23:00 WIB</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#f6eee3] flex items-center justify-center shrink-0 text-stone-800">
                                    <Phone className="w-5 h-5 text-[#f67b52]" />
                                </div>
                                <div>
                                    <h3 className="font-adventor font-bold text-sm text-stone-900">WhatsApp & Reservations</h3>
                                    <p className="text-xs text-stone-600 mt-1">+62 812-3456-7890</p>
                                </div>
                            </div>
                    </div>

                    <div className="lg:col-span-7 h-[380px] lg:h-auto rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-stone-200/70 relative">
                        <iframe
                            title="Aurora Coffee Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.297495208643!2d106.8066531!3d-6.2244498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505c24e6cf%3A0x6b2e389cb4325a7!2sSenopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                            className="w-full h-full border-0 grayscale-[30%] contrast-[1.05]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}