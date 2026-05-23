"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ProductCarousel } from "@/components/products/ProductCarousel";

export function ProductsSection() {
  return (
    <section id="produits" className="relative overflow-hidden py-24 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-deep/25 to-cream" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-mango/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mango dark:text-peach">
              Collection
            </span>
            <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
              Nos saveurs signature
            </h2>
          </div>
          <p className="max-w-sm text-base text-warm-gray">
            Quatre creations iconiques. Faites defiler pour decouvrir chaque
            saveur, sa description et son prix.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ProductCarousel />
        </Reveal>
      </div>
    </section>
  );
}
