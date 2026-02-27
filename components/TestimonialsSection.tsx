"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "My skin has never felt this soft! I use it every night before bed. The texture is unbelievably light — nothing like what you'd expect from ghee. My friends keep asking what I've changed in my routine!",
    author: "Priya S.",
    location: "Mumbai",
    rating: 5,
    weeks: "6 weeks of use",
  },
  {
    text: "Dark circles reduced in just 3 weeks. Completely natural and it works! I was skeptical at first but my dermatologist friend said the science behind it is solid. Now I recommend it to everyone.",
    author: "Anjali R.",
    location: "Delhi",
    rating: 5,
    weeks: "3 weeks of use",
  },
  {
    text: "Best winter skincare product I have ever used. My lips and face stay moisturized all day — even in Rajasthan's brutal dry weather. No more cracked lips or flaky skin. This jar is pure gold.",
    author: "Meera K.",
    location: "Jaipur",
    rating: 5,
    weeks: "2 months of use",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 bg-forest text-offwhite relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FAF7F0 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-saffron/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-gold font-700 text-[11px] tracking-[0.18em] uppercase mb-3"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-700 text-offwhite mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#C9A84C" className="text-gold" />
              ))}
            </div>
            <span className="font-lato text-sm text-offwhite/50">4.9 / 5 · 2,000+ customers</span>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll · Desktop: 3-column grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-4 md:px-0 scrollbar-hide">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-auto snap-start bg-offwhite/8 hover:bg-offwhite/12 border border-offwhite/10 hover:border-gold/30 rounded-3xl p-7 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/30 mb-4" fill="#C9A84C" fillOpacity={0.2} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, si) => (
                  <Star key={si} size={15} fill="#C9A84C" className="text-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-lato text-sm text-offwhite/75 leading-relaxed mb-6 italic">
                "{r.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-offwhite/10 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/40 to-saffron/30 flex items-center justify-center font-playfair text-white font-700 text-sm">
                    {r.author[0]}
                  </div>
                  <div>
                    <p className="font-lato text-sm font-700 text-offwhite">{r.author}</p>
                    <p className="font-lato text-xs text-offwhite/45">{r.location}</p>
                  </div>
                </div>
                <span className="font-lato text-[10px] text-gold/70 bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                  {r.weeks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
