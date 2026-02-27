"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Benefits", href: "#benefits" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#buy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#buy";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${scrolled || menuOpen
        ? "bg-ivory/90 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div style={{ width: 180, height: 90, position: "relative" }}>
            <Image
              src="/assets/VasuAyurvedicLogo.png"
              alt="Vasu Ayurvedic Cream logo"
              fill
              style={{ objectFit: "contain", mixBlendMode: "multiply" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={`font-lato text-sm font-400 tracking-wide transition-colors duration-200 hover:text-saffron ${pathname === link.href ? "text-saffron" : "text-forest"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToBuy}
            className="ml-2 bg-saffron hover:bg-amber-600 text-white font-lato font-700 text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Buy Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-forest p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ivory/95 backdrop-blur-md border-t border-gold/20"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      handleAnchorClick(e, link.href);
                      setMenuOpen(false);
                    }}
                    className="block py-3 px-2 font-lato text-forest hover:text-saffron border-b border-gold/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={(e) => {
                  scrollToBuy(e as unknown as React.MouseEvent);
                  setMenuOpen(false);
                }}
                className="mt-3 bg-saffron text-white font-lato font-700 py-3 rounded-full text-center"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
