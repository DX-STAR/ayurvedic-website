"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const sizes = [
  { label: "50g", price: 599, priceLabel: "₹599" },
  { label: "100g", price: 999, priceLabel: "₹999" },
];

export default function BuySection() {
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const size = sizes[selectedSize];
  const total = size.price * qty;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I want to order Shat Dhaut Ghrit ${size.label} × ${qty} for ₹${total}. Please confirm availability and share payment details.`
    );
    window.open(`https://wa.me/919595073539?text=${msg}`, "_blank");
  };

  return (
    <section id="buy" className="py-10 sm:py-24 bg-ivory" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-saffron font-700 text-[11px] tracking-[0.18em] uppercase mb-3"
          >
            Get Yours Today
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-2xl sm:text-5xl font-700 text-forest leading-tight"
          >
            Begin Your Skin's
            <br />
            Ayurvedic Journey Today
          </motion.h2>
        </div>

        {/* Product card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-xl border border-gold/20 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Product visual */}
            <div className="bg-forest relative flex flex-col items-center justify-center p-3 lg:p-10 overflow-hidden min-h-[160px] sm:min-h-[220px] lg:min-h-[320px]">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-gold/8 blur-2xl" />

              {/* Floating Image */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/assets/FaceCream.jpg"
                  alt="Ayurvedic Cream Shat Dhaut Ghrit"
                  width={180}
                  height={180}
                  className="rounded-full object-cover w-[110px] h-[110px] sm:w-[180px] sm:h-[180px]"
                  priority
                />
              </motion.div>

              <p className="relative z-10 font-playfair text-offwhite text-base sm:text-lg font-600 mt-2 sm:mt-5">
                Shat Dhaut Ghrit
              </p>
              <p className="relative z-10 font-lato text-gold/70 text-xs sm:text-sm mt-0.5 sm:mt-1">
                Premium Glass Jar · {size.label}
              </p>
            </div>

            {/* Right — Order controls */}
            <div className="p-3 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Price display */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-playfair text-3xl sm:text-5xl font-800 text-forest">
                  ₹{total.toLocaleString("en-IN")}
                </span>
                {qty > 1 && (
                  <span className="font-lato text-sm text-forest/40">
                    ({size.priceLabel} × {qty})
                  </span>
                )}
              </div>
              <p className="font-lato text-xs sm:text-sm text-forest/45 mb-2 sm:mb-8">
                Free shipping above ₹499 · Pan India Delivery
              </p>

              {/* Size selector */}
              <div className="mb-3 sm:mb-6">
                <p className="font-lato text-xs font-700 text-forest/50 uppercase tracking-wider mb-2.5">
                  Select Size
                </p>
                <div className="flex gap-3">
                  {sizes.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(i)}
                      className={`flex-1 py-2 sm:py-3 rounded-2xl font-lato font-700 text-sm border-2 transition-all duration-200 ${selectedSize === i
                        ? "border-saffron bg-saffron text-white shadow-md shadow-saffron/20"
                        : "border-gold/25 text-forest hover:border-saffron/50"
                        }`}
                    >
                      {s.label}
                      <br />
                      <span
                        className={`text-xs font-400 ${selectedSize === i ? "text-white/80" : "text-forest/50"
                          }`}
                      >
                        {s.priceLabel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mb-3 sm:mb-8">
                <p className="font-lato text-xs font-700 text-forest/50 uppercase tracking-wider mb-2.5">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gold/25 hover:border-saffron flex items-center justify-center text-forest hover:text-saffron transition-all"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-playfair text-2xl font-700 text-forest w-8 text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(10, q + 1))}
                    className="w-10 h-10 rounded-full border-2 border-gold/25 hover:border-saffron flex items-center justify-center text-forest hover:text-saffron transition-all"
                  >
                    <Plus size={16} />
                  </button>
                  <span className="font-lato text-xs text-forest/40 ml-2">Max 10 per order</span>
                </div>
              </div>

              {/* WhatsApp order button */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-2 sm:py-4 rounded-2xl font-lato font-700 text-sm sm:text-base text-white shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 active:translate-y-0 mb-2 sm:mb-4"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">
                  <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.37.638 4.592 1.748 6.51L2.667 29.333l6.99-1.724A13.28 13.28 0 0016.002 29.333C23.366 29.333 29.333 23.366 29.333 16c0-7.362-5.967-13.333-13.331-13.333zm0 2.4c6.03 0 10.933 4.905 10.933 10.933 0 6.03-4.903 10.933-10.933 10.933a10.89 10.89 0 01-5.529-1.504l-.388-.232-4.152 1.023 1.054-4.03-.255-.41a10.88 10.88 0 01-1.663-5.78C5.07 10.972 9.972 5.067 16.002 5.067zm-3.285 5.267c-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.1 3.2 5.1 4.375 2.55 1 3 .8 3.525.75s1.7-.7 1.94-1.375c.24-.675.24-1.25.167-1.375-.075-.125-.275-.2-.575-.35-.3-.15-1.7-.84-1.965-.935-.265-.1-.458-.15-.65.15-.195.3-.75.935-.918 1.125-.17.19-.337.213-.637.063-.3-.15-1.265-.466-2.41-1.485-.892-.794-1.493-1.774-1.668-2.074-.175-.3-.019-.462.132-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.65-1.564-.9-2.14-.237-.562-.48-.484-.65-.493-.168-.008-.363-.01-.558-.01z" />
                </svg>
                Order on WhatsApp
              </button>

              {/* Trust line */}
              <p className="font-lato text-xs text-forest/45 text-center">
                🔒 Safe &amp; Secure &nbsp;·&nbsp; 🚚 Pan India Delivery &nbsp;·&nbsp; 💬 WhatsApp Support
              </p>
            </div>
          </div>
        </motion.div >
      </div >
    </section >
  );
}
