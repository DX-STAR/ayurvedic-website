"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Take a Pea-Sized Amount",
    description:
      "Scoop out just a small pea-sized amount onto your fingertip. A little goes a very long way — the ultra-concentrated formula means you never need more.",
    emoji: "🖐️",
    side: "right" as const,
    tip: "Less is more. Start small and add more only if needed.",
  },
  {
    number: "02",
    title: "Warm Between Your Fingers",
    description:
      "Rub the ghee between your fingertips for a few seconds. Your body heat melts it instantly into a silky, translucent oil that glides effortlessly on skin.",
    emoji: "✋",
    side: "left" as const,
    tip: "Takes just 3-5 seconds to transform completely.",
  },
  {
    number: "03",
    title: "Apply Before Bedtime",
    description:
      "Gently pat and massage onto your face, under eyes, or lips. Use upward circular motions on the face. For under-eyes, tap lightly with your ring finger. Best applied before bed for overnight healing.",
    emoji: "🌙",
    side: "right" as const,
    tip: "Night application gives 8 hours of uninterrupted repair.",
  },
];

export default function HowToUseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-to-use" className="py-24 bg-amber-50/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-lato text-saffron font-700 text-[11px] tracking-[0.18em] uppercase mb-3"
          >
            Application Guide
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-700 text-forest"
          >
            How to Use It
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical golden line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isRight = step.side === "right";
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.18 }}
                  className={`relative flex items-center gap-0 md:gap-8 ${isRight ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
                    }`}
                >

                  {/* Mobile bubble — shows ABOVE card on mobile only */}
                  <div className="block md:hidden relative z-10 mb-2 shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 + i * 0.18 }}
                      className="w-16 h-16 rounded-full bg-saffron shadow-lg shadow-saffron/30 flex flex-col items-center justify-center"
                    >
                      <span className="font-lato text-[10px] text-white/70 leading-none">STEP</span>
                      <span className="font-playfair text-xl font-800 text-white leading-none">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <div
                      className={`bg-white rounded-3xl p-7 border border-gold/15 shadow-sm hover:shadow-md transition-shadow duration-300 ${isRight ? "md:mr-8" : "md:ml-8"
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl shrink-0 mt-1">{step.emoji}</span>
                        <div>
                          <h3 className="font-playfair text-xl font-700 text-forest mb-2">
                            {step.title}
                          </h3>
                          <p className="font-lato text-sm text-forest/65 leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <div className="flex items-start gap-2 bg-amber-50 rounded-xl px-4 py-2.5 border border-gold/15">
                            <span className="text-sm shrink-0">💡</span>
                            <p className="font-lato text-xs text-forest/60">{step.tip}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop bubble — centered in timeline row on desktop only */}
                  <div className="hidden md:block relative z-10 shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 + i * 0.18 }}
                      className="w-16 h-16 rounded-full bg-saffron shadow-lg shadow-saffron/30 flex flex-col items-center justify-center"
                    >
                      <span className="font-lato text-[10px] text-white/70 leading-none">STEP</span>
                      <span className="font-playfair text-xl font-800 text-white leading-none">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Caution note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center font-lato text-sm text-forest/40 mt-14"
        >
          ⚠️ For external use only. Patch test recommended for sensitive skin. Avoid direct eye contact.
        </motion.p>
      </div>
    </section>
  );
}
