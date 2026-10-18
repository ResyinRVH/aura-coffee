import React from 'react';
import Image from 'next/image';

interface HeroCenterpieceProps {
  imageSrc?: string;
  altText?: string;
}

export default function HeroCenterpiece({
  imageSrc = '/coffee-web.webp',
  altText = 'Signature Artisan Espresso Cup',
}: HeroCenterpieceProps) {
  return (
    <div className="lg:col-span-5 relative flex items-center justify-center py-6">
      <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-navy flex items-center justify-center shadow-inner">
        <div className="absolute inset-5 rounded-full border border-white/20 pointer-events-none" />

        <div className="relative w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.30)] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            priority
            sizes="(max-width: 768px) 320px, 500px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}