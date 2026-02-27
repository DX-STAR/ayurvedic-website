import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Shat Dhaut Ghrit? Ancient Ayurvedic Secret Explained",
  description:
    "Learn what Shat Dhaut Ghrit is, how it is made by washing ghee 100 times in rose water using a copper vessel, and why it is one of Ayurveda's most powerful skin treatments.",
  keywords: [
    "shat dhaut ghrit",
    "ayurvedic ghee for skin",
    "cow ghee moisturizer",
    "traditional skincare india",
    "100 times washed ghee",
    "shat dhauta ghrita",
    "ghee face cream ayurveda",
  ],
  alternates: {
    canonical: "https://shatdhautghrit.com/blog/what-is-shat-dhaut-ghrit",
  },
  openGraph: {
    title: "What is Shat Dhaut Ghrit? Ancient Ayurvedic Secret Explained",
    description:
      "The origins, the 100-wash process, copper vessel significance, and modern skin science validation of Shat Dhaut Ghrit.",
    url: "https://shatdhautghrit.com/blog/what-is-shat-dhaut-ghrit",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "What is Shat Dhaut Ghrit — Ayurvedic skincare explained",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is Shat Dhaut Ghrit? The Ancient Ayurvedic Secret Explained",
  description:
    "Discover the Vedic origins, the copper vessel process, and the skin science behind Shat Dhaut Ghrit — the 100-times washed ayurvedic ghee for skin.",
  author: {
    "@type": "Organization",
    name: "Shat Dhaut Ghrit",
    url: "https://shatdhautghrit.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Shat Dhaut Ghrit",
    logo: {
      "@type": "ImageObject",
      url: "https://shatdhautghrit.com/logo.png",
    },
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  image: "https://shatdhautghrit.com/og-image.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shatdhautghrit.com/blog/what-is-shat-dhaut-ghrit",
  },
  keywords:
    "shat dhaut ghrit, ayurvedic ghee for skin, cow ghee moisturizer, traditional skincare india",
};

export default function BlogPost1() {
  return (
    <>
      <Script
        id="article-schema-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
      <div className="pt-20 bg-ivory">
        {/* Hero banner */}
        <section className="bg-forest text-offwhite py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-lato text-sm mb-8 transition-colors"
              aria-label="Back to blog"
            >
              <ArrowLeft size={13} />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-gold/20 text-gold text-[10px] font-lato font-700 tracking-widest uppercase px-3 py-1 rounded-full">
                Ayurveda
              </span>
              <span className="flex items-center gap-1.5 text-offwhite/45 text-xs font-lato">
                <Clock size={11} aria-hidden="true" />
                8 min read
              </span>
              <time dateTime="2025-01-15" className="text-offwhite/45 text-xs font-lato">
                January 15, 2025
              </time>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[2.75rem] font-700 text-offwhite leading-tight">
              What is Shat Dhaut Ghrit? The Ancient Ayurvedic Secret Explained
            </h1>
          </div>
        </section>

        {/* Article */}
        <article className="py-16" itemScope itemType="https://schema.org/Article">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="font-lato text-forest/75 text-base leading-loose space-y-5">

              <p className="text-lg text-forest font-400 leading-relaxed">
                Somewhere in the palm-leaf manuscripts of ancient India, between verses on medicine, cosmology,
                and longevity, lies a skincare formula that modern dermatologists are only beginning to understand.
                It is called <strong className="text-forest">Shat Dhaut Ghrit</strong> — literally, &quot;ghee washed
                one hundred times&quot; — and for those who know it, nothing else compares.
              </p>

              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-10 mb-3">
                The Origin in Ayurvedic Texts
              </h2>
              <p>
                Ayurveda is not merely a system of medicine. It is an entire philosophy of life — a 5,000-year-old
                science of healing that treats the body, mind, and spirit as inseparable. Within this tradition,
                skincare was elevated to an art form called <em>Twak Chikitsa</em> (skin therapy), and Shat Dhaut
                Ghrit was its crown jewel.
              </p>
              <p>
                References to this preparation appear in the <em>Charaka Samhita</em>, one of the oldest surviving
                complete texts on Ayurvedic medicine. The <em>Ashtanga Hridayam</em> and the <em>Sushruta Samhita</em>
                also describe it — not just as a cosmetic, but as a medically active formulation for conditions
                ranging from chronic skin dryness to inflammatory disorders. Ancient physicians prescribed it for
                <em>Vata</em>-type skin conditions (dry, rough, aged) and as a general rasayana (rejuvenating agent)
                for the skin.
              </p>
              <p>
                The name itself is the recipe: <strong>Shat</strong> = one hundred, <strong>Dhaut</strong> = washed,
                <strong>Ghrit</strong> = ghee. Three words that conceal centuries of empirical wisdom.
              </p>

              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-10 mb-3">
                The Sacred Preparation Process
              </h2>
              <p>
                The preparation of Shat Dhaut Ghrit is both a science and a meditation. It begins with pure A2 cow
                ghee — the most prized form in Ayurveda, produced from the milk of desi Gir, Sahiwal, or Red
                Sindhi cows. These indigenous breeds produce milk rich in A2 beta-casein protein, a structural
                difference from the A1 protein found in most commercial dairy breeds that makes the ghee both
                more nutritious and gentler on the body.
              </p>

              <h3 className="font-playfair text-xl font-700 text-forest mt-7 mb-2">
                The Role of the Copper Vessel
              </h3>
              <p>
                The ghee is placed in a <strong>pure copper vessel</strong> — this is not incidental. In Ayurveda,
                copper (Tamra) is classified as having <em>Pitta</em>-reducing, purifying, and antimicrobial
                properties. Water stored in copper vessels develops documented antibacterial activity. In the
                same way, the copper vessel actively participates in the transformation of the ghee, lending trace
                copper ions that enhance the final product&apos;s therapeutic and antimicrobial quality.
              </p>

              <h3 className="font-playfair text-xl font-700 text-forest mt-7 mb-2">
                The Rose Water Washing Ritual
              </h3>
              <p>
                Fresh <strong>rose water (Gulab Jal)</strong> is added to the ghee in the copper vessel. The
                preparer churns vigorously until the ghee and rose water are completely combined. Then the water
                — now carrying some of the ghee&apos;s heavier volatile compounds along with any impurities — is
                carefully drained away.
              </p>
              <p>
                Fresh rose water is added, and the entire process repeats. One hundred times.
              </p>
              <p>
                This is not merely washing. With each cycle, the rose water&apos;s own phytochemicals — phenylethanol,
                geraniol, nerol, and dozens of flavonoids — are incorporated into the ghee&apos;s fat matrix. The heavy
                saturated compounds that make raw ghee feel greasy on skin are progressively removed. The fatty
                acid profile is altered. The ghee is not just cleaned — it is fundamentally transformed.
              </p>

              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-10 mb-3">
                The Transformation: From Gold to White
              </h2>
              <p>
                By the 10th wash, the ghee begins to lighten. By the 30th, it has become noticeably paler and
                thinner. By the 50th wash, it has taken on an almost creamy-white appearance. By the 100th — the
                transformation is complete.
              </p>
              <p>
                What began as a rich, golden, heavy ghee has become a silky, feather-light, white cream. It absorbs
                into skin within seconds. It leaves no grease. It smells of faint, fresh roses. It is, to the touch,
                unlike anything a modern laboratory has yet replicated.
              </p>
              <p>
                This is the power of the Shat Dhaut process — not magic, but careful, patient chemistry performed
                without a single synthetic compound.
              </p>

              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-10 mb-3">
                What Modern Science Says
              </h2>
              <p>
                Contemporary research on cow ghee confirms what Ayurveda knew empirically. Ghee&apos;s fatty acid
                profile — rich in butyric acid, oleic acid, and conjugated linoleic acid — provides remarkable
                benefits when applied topically. Butyric acid in particular supports epidermal cell regeneration,
                reduces inflammation, and strengthens the skin barrier.
              </p>
              <p>
                The vitamins A, D, E, and K present in ghee are fat-soluble, meaning they penetrate the skin
                deeply rather than remaining on the surface. Vitamin A (retinol precursors) stimulates collagen
                production. Vitamin E is a potent antioxidant. Vitamin K reduces dark pigmentation under eyes.
              </p>
              <p>
                The addition of rose water introduces its own evidence-based benefits: documented anti-inflammatory
                effects, pH-balancing properties, and a mild astringency that helps regulate oiliness and tighten
                pores. The copper vessel processing adds trace amounts of bioavailable copper that support
                collagen synthesis and have antimicrobial effects.
              </p>
              <p>
                Together, these three ingredients — enhanced by the extraordinary 100-wash process — create a
                skincare formulation that no modern cream has yet matched in its natural complexity.
              </p>

              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-10 mb-3">
                Who Should Use It
              </h2>
              <p>
                Shat Dhaut Ghrit is remarkable in its universality. It is recommended in Ayurveda for all
                skin types, including oily and acne-prone skin (the washing process removes the comedogenic
                compounds from raw ghee). It is particularly beneficial for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>People with chronically dry or dehydrated skin</li>
                <li>Those experiencing dark circles and under-eye puffiness</li>
                <li>Anyone seeking a natural anti-aging solution</li>
                <li>People with sensitive skin who react to synthetic ingredients</li>
                <li>Anyone dealing with chapped lips, cracked heels, or rough elbows</li>
                <li>New mothers looking for safe skincare during breastfeeding</li>
              </ul>

              {/* FAQ Section */}
              <h2 className="font-playfair text-2xl sm:text-3xl font-700 text-forest mt-14 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {[
                  {
                    q: "Is Shat Dhaut Ghrit the same as regular ghee?",
                    a: "No. Regular ghee is a cooking ingredient not intended for skin application. Shat Dhaut Ghrit undergoes 100 washes in rose water, which fundamentally alters its texture, fatty acid profile, and skin compatibility. The result is a lightweight cream — not the heavy, greasy ghee you'd cook with.",
                  },
                  {
                    q: "Can I use it on my face if I have oily or acne-prone skin?",
                    a: "Yes, with some caution. The washing process removes many of the heavier fatty compounds that could clog pores. Many people with oily skin use it successfully as a night cream. We recommend a patch test first and starting with a very small amount to see how your skin responds.",
                  },
                  {
                    q: "How long before I see results from using Shat Dhaut Ghrit?",
                    a: "Moisturization effects are immediate. Dark circle reduction typically takes 3–4 weeks of nightly application. Improvements in skin texture and tone are usually visible within 4–6 weeks of regular use. Anti-aging benefits accumulate over months of consistent use.",
                  },
                  {
                    q: "Why does Shat Dhaut Ghrit smell like roses?",
                    a: "Each of the 100 washes infuses rose water's phytochemicals — including rose's signature aroma compounds like phenylethanol and geraniol — into the ghee's fat matrix. The result is a faint, natural rose fragrance that is intrinsic to the product, not added artificially.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gold/15 p-6">
                    <h3 className="font-playfair text-lg font-700 text-forest mb-3">{faq.q}</h3>
                    <p className="font-lato text-sm text-forest/65 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-forest rounded-3xl text-center">
                <p className="font-playfair text-2xl font-600 text-offwhite mb-2">
                  Ready to Try the Ancient Secret?
                </p>
                <p className="font-lato text-offwhite/60 text-sm mb-6">
                  Your jar of Shat Dhaut Ghrit is one order away.
                </p>
                <Link
                  href="/#buy"
                  className="inline-block bg-saffron hover:bg-amber-600 text-white font-lato font-700 px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  Buy Now — ₹599
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-saffron font-lato font-700 hover:gap-3 transition-all"
                >
                  <ArrowLeft size={15} />
                  Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
