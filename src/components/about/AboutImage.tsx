import Image from 'next/image'

export default function AboutImage() {
  return (
    <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-start">
      <div className="relative w-full h-full -ml-6 sm:-ml-10 lg:-ml-16">
        <Image
          src="/coffee-about-web.webp"
          alt="Artisan Coffee Roasting and Beans"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-left pointer-events-none select-none drop-shadow-2xl"
        />
      </div>
    </div>
  )
}