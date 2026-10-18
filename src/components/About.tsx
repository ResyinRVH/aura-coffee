import AboutImage from '@/components/about/AboutImage'
import AboutContent from '@/components/about/AboutContent'


export default function About() {
  return (
    <section id="about" className="w-full bg-[#f6eee3] py-20 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <AboutImage />
        <div className="lg:col-span-6 space-y-8">
          <AboutContent />
        </div>
      </div>
    </section>
  )
}