"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandImages } from "@/lib/images";

export function HeroProductVisual() {
  return (
    <div className="relative w-full max-w-[580px] md:max-w-none md:ml-auto">
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[8%] h-[55%] w-[55%] rounded-full bg-strawberry/30 blur-[70px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[12%] right-[0%] h-[48%] w-[48%] rounded-full bg-mango/25 blur-[65px]"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[18%] top-[35%] h-[32%] w-[32%] rounded-full bg-fresh-blue/15 blur-[50px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 65, damping: 18, delay: 0.25 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="double-bezel-outer shadow-[0_40px_80px_-24px_rgba(232,122,150,0.22)]">
            <div className="double-bezel-inner relative overflow-hidden rounded-[calc(2rem-6px)] bg-gradient-to-b from-white/90 via-cream to-cream-deep/40">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] md:min-h-[520px] md:aspect-auto">
                <Image
                  src={brandImages.hero}
                  alt="Selection de fruits frais premium Marbella Delice"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent md:from-cream/40" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -left-2 bottom-[18%] z-10 hidden sm:block md:-left-6"
          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="liquid-glass rounded-2xl px-4 py-3 shadow-[0_16px_40px_-12px_rgba(42,36,32,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
              Signature
            </p>
            <p className="text-sm font-medium text-charcoal">Fruits frais du jour</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-1 top-[12%] z-10 hidden sm:block md:-right-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-[0_12px_32px_-8px_rgba(245,169,98,0.35)] ring-1 ring-white">
            <span className="font-mono text-xs font-medium text-charcoal">7+</span>
          </div>
          <p className="mt-1 text-center text-[9px] uppercase tracking-widest text-warm-gray">
            Saveurs
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
