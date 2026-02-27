"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, FlaskConical } from "lucide-react";

const ingredients = [
  {
    icon: Leaf,
    emoji: "🐄",
    title: "Pure A2 Cow Ghee",
    subtitle: "The Base",
    description:
      "Sourced exclusively from Gir and Sahiwal desi cows — breeds that produce A2 beta-casein milk. Exceptionally rich in omega fatty acids, fat-soluble vitamins (A, D, E, K), and butyric acid that nourishes and repairs skin at a cellular level.",
    highlight: "Omega-rich · Vitamins A D E K · Deeply nourishing",
  },
  {
    icon: Droplets,
    emoji: "🌹",
    title: "Rose Water",
    subtitle: "The Cleanser & Toner",
    description:
      "Fresh distilled Gulab Jal — not synthetic fragrance. Rose water is the active washing medium, a natural toner, anti-inflammatory, and skin brightener. Each of the 100 washes infuses its phytochemicals into the ghee's fat matrix.",
    highlight: "Anti-inflammatory · Brightening · pH balancing",
  },
  {
    icon: FlaskConical,
    emoji: "🫙",
    title: "Copper Vessel Processing",
    subtitle: "The Catalyst",
    description:
      "The entire 100-wash process is performed in pure copper vessels. Ayurveda classifies copper (Tamra) as purifying and healing. Copper ions lend antimicrobial properties and enhance the therapeutic quality of the final preparation.",
    highlight: "Antimicrobial · Purifying · Ayurvedic Tamra quality",
  },
];

export default function IngredientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ingredients" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-saffron font-700 text-[11px] tracking-[0.18em] uppercase mb-3"
          >
            What Goes In
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-700 text-forest mb-4"
          >
            Only Three Ingredients.
            <br />
            <span className="shimmer-text">Nothing More.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-forest/55 text-base max-w-lg mx-auto"
          >
            No fillers. No preservatives. No synthetic anything. Purity has been the only formula for millennia.
          </motion.p>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.13 }}
              className="relative bg-white rounded-3xl border border-gold/25 hover:border-gold/50 p-7 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-saffron/60 to-gold/40 rounded-t-3xl" />

              <div className="mt-2 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">{ing.emoji}</span>
                </div>
                <div>
                  <p className="font-lato text-[10px] text-saffron font-700 tracking-widest uppercase">
                    {ing.subtitle}
                  </p>
                  <h3 className="font-playfair text-lg font-700 text-forest leading-tight">
                    {ing.title}
                  </h3>
                </div>
              </div>

              <p className="font-lato text-sm text-forest/65 leading-relaxed mb-5">
                {ing.description}
              </p>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-1.5">
                {ing.highlight.split(" · ").map((tag) => (
                  <span
                    key={tag}
                    className="font-lato text-[11px] text-forest/60 bg-forest/5 border border-forest/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner leaf decoration */}
              <div className="absolute bottom-3 right-4 text-3xl opacity-8 select-none pointer-events-none">
                🌿
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
