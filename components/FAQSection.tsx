"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Shat Dhaut Ghrit suitable for oily skin?",
    a: "Yes! The 100-time washing process transforms the heavy ghee into an ultra-light cream that absorbs quickly without leaving any greasy residue. Many people with oily skin use it as a night cream with excellent results.",
  },
  {
    q: "How long does one jar last?",
    a: "A 50ml jar typically lasts 2-3 months when used for all three applications (face, under-eyes, and lips) twice daily. For single use (e.g., just as a face moisturizer), it can last up to 4 months.",
  },
  {
    q: "Can I use it during summer months?",
    a: "Absolutely. The rose water infusion gives this ghee cooling properties, making it suitable for year-round use. It's particularly soothing after sun exposure.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Shat Dhaut Ghrit is known for its gentle, soothing properties. However, we recommend a patch test: apply a small amount on your inner wrist and wait 24 hours before full use.",
  },
  {
    q: "Can pregnant women use this product?",
    a: "The ingredients (A2 ghee and rose water) are natural and generally considered safe topically. However, we always recommend consulting your healthcare provider before adding any new skincare product during pregnancy.",
  },
  {
    q: "Does this expire?",
    a: "Shelf life is 12 months from the date of production. Store in a cool, dry place away from direct sunlight. The natural composition makes it self-preserving to a great extent.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-ivory" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-saffron font-700 text-sm tracking-widest uppercase mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl font-700 text-forest"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="bg-white rounded-2xl border border-gold/15 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors"
              >
                <span className="font-lato font-700 text-forest text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 font-lato text-sm text-forest/70 leading-relaxed border-t border-gold/10 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
