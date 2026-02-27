"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "what-is-shat-dhaut-ghrit",
    title: "What is Shat Dhaut Ghrit? The Ancient Ayurvedic Secret Explained",
    excerpt:
      "Deep in the ancient Vedic texts lies a preparation so revered it was called 'the elixir of the skin.' Discover the origins, the 100-wash process, and why modern science is finally validating what Ayurveda knew for millennia.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Ayurveda",
    categoryColor: "bg-forest/10 text-forest",
    emoji: "📜",
    live: true,
  },
  {
    slug: "benefits-of-ghee-for-skin",
    title: "7 Proven Benefits of Ghee for Skin You Didn't Know About",
    excerpt:
      "From intense moisturization to dark circle reduction, from anti-aging to healing cracked skin — here are seven science-backed ways ghee (especially Shat Dhaut Ghrit) transforms your skin's health.",
    date: "February 2, 2025",
    readTime: "6 min read",
    category: "Skin Science",
    categoryColor: "bg-saffron/10 text-saffron",
    emoji: "🔬",
    live: true,
  },
  {
    slug: "#",
    title: "A2 Milk vs Regular Milk Ghee: Why the Difference Matters for Your Skin",
    excerpt:
      "Not all ghee is created equal. The difference between A1 and A2 beta-casein protein has profound implications for both gut health and skin absorption.",
    date: "March 5, 2025",
    readTime: "5 min read",
    category: "Ingredients",
    categoryColor: "bg-amber-100 text-amber-800",
    emoji: "🐄",
    live: false,
  },
  {
    slug: "#",
    title: "The Copper Vessel Tradition: Ancient Antimicrobial Science",
    excerpt:
      "Copper (Tamra) in Ayurveda is far more than a cooking material. Discover how copper ions actively improve the therapeutic properties of Shat Dhaut Ghrit.",
    date: "March 22, 2025",
    readTime: "6 min read",
    category: "Ayurveda",
    categoryColor: "bg-forest/10 text-forest",
    emoji: "🫙",
    live: false,
  },
];

export default function BlogListingContent() {
  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50/80 via-ivory to-ivory py-20 border-b border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-forest/10 text-forest text-[11px] font-lato font-700 tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6"
          >
            <BookOpen size={13} />
            Ayurvedic Knowledge
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl sm:text-6xl font-700 text-forest mb-5 leading-tight"
          >
            The Ghrit Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="font-lato text-forest/55 text-lg max-w-xl mx-auto"
          >
            Deep dives into Ayurvedic wisdom, ingredient science, and ancient skincare rituals
            for the modern reader.
          </motion.p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-5 bg-forest rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              aria-label={posts[0].title}
            >
              <div className="lg:col-span-3 p-10 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-gold/20 text-gold font-lato text-[10px] font-700 tracking-widest uppercase px-3 py-1 rounded-full">
                    {posts[0].category}
                  </span>
                  <span className="font-lato text-xs text-offwhite/40">Featured</span>
                </div>
                <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-offwhite mb-4 leading-snug group-hover:text-gold transition-colors duration-200">
                  {posts[0].title}
                </h2>
                <p className="font-lato text-sm text-offwhite/60 leading-relaxed mb-7 max-w-md">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 font-lato text-xs text-offwhite/40">
                    <Clock size={12} />
                    {posts[0].readTime}
                  </span>
                  <span className="font-lato text-xs text-offwhite/40">{posts[0].date}</span>
                  <span className="ml-auto text-gold group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2 bg-offwhite/5 flex items-center justify-center py-14 text-8xl sm:text-9xl" aria-hidden="true">
                {posts[0].emoji}
              </div>
            </Link>
          </motion.div>

          {/* Other posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.slug + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.09 }}
              >
                <Link
                  href={post.live ? `/blog/${post.slug}` : "#"}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gold/15 hover:border-gold/35 hover:shadow-lg transition-all duration-300 h-full"
                  aria-label={post.title}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-ivory flex items-center justify-center py-10 text-6xl" aria-hidden="true">
                    {post.emoji}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`inline-block font-lato text-[10px] font-700 tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 self-start ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h3 className="font-playfair font-600 text-forest text-lg mb-3 leading-snug group-hover:text-saffron transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="font-lato text-sm text-forest/55 leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 font-lato text-xs text-forest/35">
                        <Clock size={11} />
                        {post.readTime}
                      </div>
                      <span className="text-gold group-hover:translate-x-1 transition-transform duration-200">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
