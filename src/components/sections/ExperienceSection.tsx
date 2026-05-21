"use client";

import {
  BowlFood,
  Diamond,
  Leaf,
  Snowflake,
  Sparkle,
  UserCircleGear,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { brandPromises } from "@/lib/data";

const iconMap = {
  fruit: Leaf,
  bowl: BowlFood,
  chef: UserCircleGear,
  snowflake: Snowflake,
  sparkle: Sparkle,
  diamond: Diamond,
};

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-peach/10 to-cream" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-peach/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a67c52]">
            Notre promesse
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
            L&apos;excellence Marbella, sans compromis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-warm-gray">
            Pas de promesses vides : seulement ce qui fait la difference dans
            chaque pot — qualite, fraicheur et gourmandise authentique.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {brandPromises.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <RevealItem key={item.title}>
                <motion.div
                  className="double-bezel-outer h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div className="double-bezel-inner liquid-glass flex h-full flex-col rounded-[calc(2rem-6px)] p-6 md:p-7">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal/5">
                        <Icon size={22} weight="light" className="text-charcoal" />
                      </div>
                      <span className="font-mono text-[10px] text-warm-gray/80">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
