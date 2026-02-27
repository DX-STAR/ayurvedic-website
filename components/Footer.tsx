import Link from "next/link";
import { Leaf, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={22} className="text-gold" fill="#C9A84C" fillOpacity={0.35} />
              <span className="font-playfair text-xl font-600 text-offwhite">Shat Dhaut Ghrit</span>
            </div>
            <p className="font-lato text-offwhite/60 text-sm leading-relaxed mb-6 max-w-xs">
              Rooted in Ayurveda. Made for Modern Skin.
            </p>
            <p className="font-lato text-offwhite/45 text-sm leading-relaxed mb-6 max-w-xs">
              Pure A2 cow ghee washed 100 times in rose water using a copper vessel. An ancient
              secret for radiant, youthful skin — now available for every home.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-playfair text-sm font-600 text-gold mb-4 tracking-wide uppercase">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {[
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Privacy Policy", "#"],
                ["Shipping Policy", "#"],
                ["Returns", "#"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-lato text-sm text-offwhite/60 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-sm font-600 text-gold mb-4 tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+919595073539"
                  className="font-lato text-sm text-offwhite/60 hover:text-gold transition-colors"
                >
                  +91 95950 73539
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@shatdhautghrit.com"
                  className="font-lato text-sm text-offwhite/60 hover:text-gold transition-colors break-all"
                >
                  hello@shatdhautghrit.com
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919595073539"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-lato text-xs font-700 text-white px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="14" height="14" fill="white">
                <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.37.638 4.592 1.748 6.51L2.667 29.333l6.99-1.724A13.28 13.28 0 0016.002 29.333C23.366 29.333 29.333 23.366 29.333 16c0-7.362-5.967-13.333-13.331-13.333z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-offwhite/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-offwhite/35">
            © 2025 Shat Dhaut Ghrit. Crafted with love in India 🇮🇳
          </p>
          <p className="font-lato text-xs text-offwhite/35">
            Rooted in Ayurveda · Made for Modern Skin
          </p>
        </div>
      </div>
    </footer>
  );
}
