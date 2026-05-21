"use client";

import { motion } from "framer-motion";
import { MeshBackground } from "@/components/motion/MeshBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroProductVisual } from "@/components/visual/HeroProductVisual";
import { WHATSAPP_URL } from "@/lib/data";

const marqueeWords = [
  "Frais",
  "Fruite",
  "Artisanal",
  "Premium",
  "Gourmand",
  "Naturel",
];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-[100dvh] overflow-hidden pt-28 pb-12 md:pt-32 md:pb-20"
    >
      <MeshBackground />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-6 lg:gap-10 md:px-8 lg:px-12">
        <motion.div
          className="flex flex-col justify-center md:max-w-xl md:py-8 lg:pr-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
        >
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-charcoal/10 bg-cream-deep/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-warm-gray backdrop-blur-sm dark:border-white/15 dark:bg-white/5">
            Yaourt fruité artisanal
          </span>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-charcoal sm:text-5xl md:text-[3.25rem] lg:text-7xl">
            Le plaisir
            <br />
            <span className="gradient-text-fruit">fruité</span>
            <br />
            réinventé.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-warm-gray md:mt-6 md:text-lg">
            Marbella Delice transforme des fruits d&apos;exception et un lait frais
            en yaourts d&apos;une douceur rare. Une experience gourmande, elegante,
            irresistible.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
            <MagneticButton href="#produits" variant="primary">
              Decouvrir les saveurs
            </MagneticButton>
            <MagneticButton href={WHATSAPP_URL} variant="secondary" external>
              Commander sur WhatsApp
            </MagneticButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-charcoal/8 pt-7 transition-colors duration-500 dark:border-white/10 md:mt-12 md:gap-8 md:pt-8">
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-charcoal">
                7+
              </p>
              <p className="text-xs uppercase tracking-widest text-warm-gray">
                Saveurs
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-charcoal">
                100%
              </p>
              <p className="text-xs uppercase tracking-widest text-warm-gray">
                Fruits naturels
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tracking-tight text-charcoal">
                2h
              </p>
              <p className="text-xs uppercase tracking-widest text-warm-gray">
                Livraison locale
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center md:justify-end">
          <HeroProductVisual />
        </div>
      </div>

      <div
        className="relative z-10 mt-6 overflow-hidden border-y border-charcoal/5 py-4 backdrop-blur-sm md:mt-10 dark:border-white/10"
        style={{ background: "var(--marquee-bg)" }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-8 text-sm font-medium uppercase tracking-[0.3em] text-warm-gray/80"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
