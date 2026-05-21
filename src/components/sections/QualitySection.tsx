"use client";

import {
  Drop,
  Factory,
  Leaf,
  ShieldCheck,
} from "@phosphor-icons/react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { qualityPillars, stats } from "@/lib/data";

const iconMap = {
  drop: Drop,
  leaf: Leaf,
  factory: Factory,
  shield: ShieldCheck,
};

export function QualitySection() {
  return (
    <section id="qualite" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-fresh-blue/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-fresh-blue dark:text-peach">
            Fraicheur et qualite
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
            L&apos;excellence dans chaque detail
          </h2>
          <p className="mt-4 text-base leading-relaxed text-warm-gray">
            De la collecte du lait a la livraison, chaque etape est controlee
            pour garantir une experience premium, saine et memorable.
          </p>
        </Reveal>

        <RevealStagger className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <RevealItem key={pillar.title}>
                <div className="double-bezel-outer h-full">
                  <div className="double-bezel-inner liquid-glass flex h-full flex-col rounded-[calc(2rem-6px)] p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal/5">
                      <Icon size={24} weight="light" className="text-charcoal" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal>
          <div className="double-bezel-outer">
            <div className="double-bezel-inner grid gap-8 rounded-[calc(2rem-6px)] bg-gradient-to-br from-cream-deep/80 via-cream to-peach/20 p-8 dark:from-chocolate/60 dark:via-cream-deep dark:to-peach/10 md:grid-cols-2 md:gap-12 md:p-12 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-sm text-warm-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
