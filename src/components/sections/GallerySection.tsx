"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { galleryItems } from "@/lib/data";

type GalleryItem = (typeof galleryItems)[number];

function GalleryCard({
  item,
  featured = false,
  index,
}: {
  item: GalleryItem;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.figure
      className={`group relative w-full overflow-hidden ${
        featured
          ? "aspect-[5/4] md:aspect-[21/9]"
          : "aspect-[4/5]"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        delay: index * 0.06,
        type: "spring",
        stiffness: 90,
        damping: 22,
      }}
    >
      <div
        className={`pointer-events-none absolute -inset-3 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
          featured ? "bg-strawberry/25" : "bg-peach/30"
        }`}
        aria-hidden
      />

      <div
        className={`relative h-full w-full overflow-hidden rounded-[1.75rem] bg-cream-deep/30 shadow-[0_24px_48px_-28px_rgba(42,36,32,0.2)] ring-1 ring-charcoal/[0.06] transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:shadow-[0_32px_64px_-24px_rgba(42,36,32,0.22)] ${
          featured ? "md:rounded-[2rem]" : ""
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 900px"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />

        <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <div className="liquid-glass rounded-xl px-3 py-2.5 md:px-4 md:py-3">
            <span className="mb-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-warm-gray">
              Marbella Delice
            </span>
            <p className="text-sm font-medium tracking-tight text-charcoal md:text-base">
              {item.caption}
            </p>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export function GallerySection() {
  const featured = galleryItems.find((item) => item.featured)!;
  const gridItems = galleryItems.filter((item) => !item.featured);

  return (
    <section
      id="galerie"
      className="relative scroll-mt-28 overflow-hidden pt-32 pb-24 md:scroll-mt-32 md:pt-44 md:pb-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-peach/15 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <Reveal className="mb-12 max-w-2xl md:mb-14">
          <span className="mb-4 inline-block rounded-full bg-strawberry/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-strawberry-deep">
            Galerie immersive
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
            L&apos;univers Marbella en images
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-warm-gray md:text-base">
            Nos yaourts et fruits, presentes avec la meme exigence que nos
            recettes : clarte, equilibre et gourmandise.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5 md:gap-6">
          <GalleryCard item={featured} featured index={0} />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {gridItems.map((item, index) => (
              <GalleryCard
                key={item.src}
                item={item}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
