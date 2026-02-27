"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Leaf, Award, Heart } from "lucide-react";

const trustBadges = [
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Heart, label: "Cruelty Free" },
  { icon: Award, label: "Ayurvedic Certified" },
];

export default function HeroSection() {
  const scrollToBuy = () => {
    const el = document.querySelector("#buy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ivory"
    >
      {/* Subtle wave texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/3 right-8 w-[500px] h-[500px] rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-saffron/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 bg-forest/10 text-forest text-[11px] font-lato font-700 tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-7"
            >
              <Leaf size={13} />
              Traditional Ayurvedic Formula · Since Ancient India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-playfair text-5xl sm:text-6xl lg:text-[4.25rem] font-800 text-forest leading-[1.08] mb-6"
            >
              Ancient Ayurvedic
              <br />
              Secret for{" "}
              <span className="shimmer-text">Radiant Skin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.17 }}
              className="font-lato text-xl text-forest/65 leading-relaxed mb-10 max-w-lg"
            >
              Pure cow ghee, washed{" "}
              <strong className="text-forest font-700">100 times</strong>.
              Timelessly effective.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                onClick={scrollToBuy}
                className="bg-saffron hover:bg-amber-600 text-white font-lato font-700 text-base px-9 py-4 rounded-full shadow-lg shadow-saffron/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Buy Now — ₹599
              </button>
              <Link
                href="/about"
                className="border-2 border-forest/30 hover:border-forest text-forest font-lato font-700 text-base px-8 py-[14px] rounded-full transition-all duration-200 hover:bg-forest/5"
              >
                Learn the Story
              </Link>
            </motion.div>

            {/* Trust badge strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/80 border border-gold/20 rounded-full px-4 py-2 shadow-sm"
                >
                  <badge.icon size={14} className="text-saffron" strokeWidth={2} />
                  <span className="font-lato text-xs font-700 text-forest/70">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product in decorative golden circular frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Slow-rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute w-[370px] h-[370px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-gold/30 pointer-events-none"
            />
            {/* Second ring counter-rotating */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] rounded-full border border-gold/15 pointer-events-none"
            />

            {/* Floating animation */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Golden circular frame */}
              <div className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-br from-amber-50 via-white to-amber-100 border-[6px] border-gold shadow-2xl shadow-gold/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-gold/20" />
                <div className="absolute inset-5 rounded-full border border-gold/10" />

                <Image
                  src="/assets/FaceCream.jpg"
                  alt="Ayurvedic Cream Shat Dhaut Ghrit"
                  width={280}
                  height={280}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />

              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 sm:-left-16 top-1/3 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 border border-gold/20"
              >
                <p className="font-lato text-xs font-700 text-saffron">🌹 Rose Water</p>
                <p className="font-lato text-[10px] text-forest/50">Washed 100×</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="absolute -right-4 sm:-right-12 bottom-1/3 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 border border-gold/20"
              >
                <p className="font-lato text-xs font-700 text-forest">🐄 A2 Cow Ghee</p>
                <p className="font-lato text-[10px] text-forest/50">100% Pure</p>
              </motion.div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gold/40" />
            <div className="absolute top-10 left-10 w-1.5 h-1.5 rounded-full bg-saffron/30" />
            <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-gold/40" />
            <div className="absolute bottom-14 right-14 w-1 h-1 rounded-full bg-saffron/25" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
