"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { AppMockup } from "@/components/visual/AppMockup";
import { digitalApps } from "@/lib/data";

function AppVisual({
  app,
}: {
  app: (typeof digitalApps)[number];
}) {
  if ("image" in app && app.image) {
    return (
      <div className="relative mx-auto aspect-[16/10] w-full max-w-[300px] overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_-24px_rgba(42,36,32,0.2)] ring-1 ring-charcoal/[0.06] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]">
        <Image
          src={app.image}
          alt={`${app.name} — apercu de la plateforme`}
          fill
          sizes="(max-width: 768px) 90vw, 300px"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent" />
      </div>
    );
  }

  if ("mockupVariant" in app && app.mockupVariant) {
    return <AppMockup variant={app.mockupVariant} appName={app.name} />;
  }

  return null;
}

export function AppsSection() {
  return (
    <section id="apps" className="relative overflow-hidden py-24 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-deep/50 via-cream to-cream dark:from-chocolate/40" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <Reveal className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-charcoal/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-warm-gray">
              Ecosysteme digital
            </span>
            <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
              Applications et innovations
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-warm-gray">
            Des solutions digitales premium concues pour moderniser la
            logistique, la sante et la culture.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {digitalApps.map((app) => {
            const isExternal = app.href.startsWith("http");

            return (
              <RevealItem key={app.id}>
                <motion.article
                  className="group relative h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div className="double-bezel-outer h-full">
                    <div
                      className={`double-bezel-inner relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-gradient-to-b ${app.accent}`}
                    >
                      <div
                        className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                        style={{ backgroundColor: app.glow }}
                      />

                      <div className="flex justify-center px-5 pt-6 pb-2 sm:pt-8">
                        <AppVisual app={app} />
                      </div>

                      <div className="flex flex-1 flex-col p-6 pt-4 sm:p-7">
                        <span
                          className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${app.badgeClass}`}
                        >
                          {app.tag}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-charcoal">
                          {app.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray">
                          {app.description}
                        </p>

                        <motion.a
                          href={app.href}
                          className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full liquid-glass px-5 py-2.5 text-xs font-medium text-charcoal transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_36px_-16px_rgba(42,36,32,0.15)] active:scale-[0.98]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          {...(isExternal
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          Decouvrir
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-charcoal/5 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px">
                            <ArrowUpRight size={14} weight="light" />
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
