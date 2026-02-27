"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Eye, Sparkles, Heart, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Moisturization",
    description:
      "Locks in skin hydration for 12+ hours. The lipid matrix forms a protective barrier that prevents moisture loss all day and night.",
  },
  {
    icon: Eye,
    title: "Reduces Dark Circles",
    description:
      "Lightens and depuffs the under-eye area over consistent use. Vitamin K in ghee helps reduce capillary leakage that causes dark pigmentation.",
  },
  {
    icon: Sparkles,
    title: "Anti-Aging Properties",
    description:
      "Rich in vitamins A, E, and K for youthful skin. Powerful antioxidants neutralize free radicals and visibly reduce fine lines over time.",
  },
  {
    icon: Heart,
    title: "Heals Dry & Cracked Skin",
    description:
      "Repairs the skin barrier overnight. Butyric acid supports cellular regeneration, healing rough patches, cracked heels, and dry elbows.",
  },
  {
    icon: Shield,
    title: "Safe for Sensitive Skin",
    description:
      "Zero chemicals, zero irritants. No synthetic fragrances, no parabens, no preservatives — making it the gentlest skincare you can use.",
  },
  {
    icon: Smile,
    title: "Natural Lip Balm",
    description:
      "Silky smooth lips, even in harsh winters. Seals in moisture, heals cracks, and keeps lips supple throughout the day without any stickiness.",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-saffron font-700 text-[11px] tracking-[0.18em] uppercase mb-3"
          >
            Nature's Best Gift for Skin
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-700 text-forest mb-4"
          >
            Why Your Skin Will Love It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="font-lato text-forest/55 text-base max-w-xl mx-auto"
          >
            Centuries of Ayurvedic wisdom, validated by modern dermatology — six profound
            benefits in one small jar.
          </motion.p>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
              className="group bg-white rounded-3xl p-7 border border-gold/15 hover:border-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-default"
            >
              {/* Hover background wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-forest/6 group-hover:bg-saffron/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <b.icon
                    size={22}
                    className="text-forest group-hover:text-saffron transition-colors duration-300"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="font-playfair text-lg font-700 text-forest mb-2.5">
                  {b.title}
                </h3>
                <p className="font-lato text-sm text-forest/62 leading-relaxed">
                  {b.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-gold/5 group-hover:bg-saffron/5 rounded-bl-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
