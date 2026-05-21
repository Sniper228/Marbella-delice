"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { products, WHATSAPP_URL } from "@/lib/data";

export function ProductsSection() {
  return (
    <section id="produits" className="relative py-24 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-deep/25 to-cream" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-mango/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mango dark:text-peach">
              Collection
            </span>
            <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
              Nos saveurs signature
            </h2>
          </div>
          <p className="max-w-sm text-base text-warm-gray">
            Quatre creations iconiques. Chaque pot raconte une histoire de fruit,
            de fraicheur et de plaisir immediat.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {products.map((product) => (
            <RevealItem key={product.id}>
              <motion.article
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {product.popular && (
                  <span className="absolute -right-1 -top-1 z-20 rounded-full bg-strawberry px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white shadow-[0_8px_20px_-6px_rgba(232,122,150,0.5)]">
                    Populaire
                  </span>
                )}

                <div className="double-bezel-outer h-full">
                  <div
                    className={`double-bezel-inner relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-gradient-to-b ${product.gradient}`}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-85"
                      style={{ backgroundColor: product.glow }}
                    />

                    <div className="relative mx-3 mt-3 overflow-hidden rounded-[1.85rem] shadow-[0_32px_64px_-28px_rgba(42,36,32,0.22)] sm:mx-5 sm:mt-5">
                      <div className="relative aspect-[5/6] w-full sm:aspect-[4/5]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-cream/10 dark:to-charcoal/20" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 pt-5 sm:p-7 sm:pt-6">
                      <span
                        className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${product.accent}`}
                      >
                        {product.badge}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-charcoal md:text-2xl">
                        {product.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray md:text-[0.9375rem]">
                        {product.description}
                      </p>

                      <div className="mt-7 flex flex-col gap-4 border-t border-charcoal/6 pt-6 sm:flex-row sm:items-end sm:justify-between">
                        <ProductPrice amount={product.priceFrom} />
                        <motion.a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full border border-charcoal/10 bg-charcoal px-5 py-2.5 text-xs font-medium text-cream shadow-[0_12px_28px_-10px_rgba(42,36,32,0.35)] transition-[box-shadow,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-charcoal/90 hover:shadow-[0_16px_36px_-12px_rgba(42,36,32,0.4)] active:scale-[0.98]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Commander
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px">
                            <ArrowUpRight size={14} weight="light" />
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
