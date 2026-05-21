"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { brandImages } from "@/lib/images";

export function AboutSection() {
  return (
    <section id="marque" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mb-14 max-w-2xl md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-strawberry/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-strawberry-deep">
            Notre histoire
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
            Une marque moderne nee de la passion du fruit.
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          <RevealStagger className="flex flex-col gap-8 lg:col-span-5">
            <RevealItem>
              <p className="text-lg leading-relaxed text-warm-gray">
                Marbella Delice est nee d&apos;une conviction simple : le yaourt
                fruité peut etre a la fois accessible et d&apos;exception. Chaque
                recette est pensee comme une experience sensorielle complete.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-base leading-relaxed text-warm-gray">
                Nous selectionnons des ingredients frais, travaillons en petites
                series et respectons un savoir-faire artisanal. Le resultat ?
                Une texture onctueuse, des parfums authentiques et une fraicheur
                qui se ressent des la premiere cuillere.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="double-bezel-outer">
                <div className="double-bezel-inner liquid-glass rounded-[calc(2rem-6px)] p-6">
                  <p className="text-sm font-medium text-charcoal">
                    &ldquo;Le luxe, c&apos;est la sincerite du gout.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-warm-gray">
                    — Equipe fondatrice, Marbella Delice
                  </p>
                </div>
              </div>
            </RevealItem>
          </RevealStagger>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 sm:items-end">
                <motion.div
                  className="sm:col-span-1"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                >
                  <div className="double-bezel-outer">
                    <div className="double-bezel-inner relative aspect-[5/4] overflow-hidden rounded-[calc(2rem-6px)]">
                      <Image
                        src={brandImages.about.main}
                        alt="Parfait yaourt fruits en couches, preparation artisanale"
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 32vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="sm:col-span-1 sm:pb-1"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <div className="double-bezel-outer shadow-[0_24px_48px_-20px_rgba(42,36,32,0.12)]">
                    <div className="double-bezel-inner relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-6px)] sm:max-h-none">
                      <Image
                        src={brandImages.about.parfait}
                        alt="Yaourt fruité aux granola, preparation artisanale"
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 28vw"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.15 }}
              >
                <div className="liquid-glass inline-block rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(42,36,32,0.12)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                    Depuis 2019
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-charcoal">
                    Atelier artisanal · Ingredients locaux · Zero compromis
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
