import Link from 'next/link'
import { 
  FaTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn 
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="w-full bg-coffee text-silver rounded-t-[32px] sm:rounded-t-[48px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          <div className="space-y-4">
            <h4 className="text-silver font-semibold text-base tracking-wide">Privacy</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-silver">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-silver font-semibold text-base tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-silver">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Order ahead
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Menu
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-silver font-semibold text-base tracking-wide">About us</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-silver">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Find a location
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Our story
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-silver font-semibold text-base tracking-wide">Information</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-silver">
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Plans & pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Sell your product
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-silver font-semibold text-base tracking-wide">Social media</h4>
            <div className="flex items-center gap-3.5 pt-1 text-silver">
              <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
                <FaTwitter className="w-4 h-4 fill-current stroke-none" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
                <FaFacebookF className="w-4 h-4 fill-current stroke-none" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors duration-200">
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
                <FaLinkedinIn className="w-4 h-4 fill-current stroke-none" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-navy py-4 border-t border-white/5 text-white flex justify-center">
          <p>Copyright &copy;  2026 Aura</p>
      </div>
    </footer>
  )
}