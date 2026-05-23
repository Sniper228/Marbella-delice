"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/data";

export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(maxScroll > 10 && el.scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollState]);

  const scrollByStep = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-product-card]");
    const gap = 24;
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.88;

    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return;

    const el = trackRef.current;
    if (!el) return;

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    const drag = dragState.current;
    if (!el || !drag.active) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;
    el.scrollLeft = drag.scrollLeft - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;

    dragState.current.active = false;
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
    updateScrollState();
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragState.current.moved = false;
    }
  };

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream via-cream/80 to-transparent dark:from-cream dark:via-cream/80 md:w-14"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream via-cream/80 to-transparent dark:from-cream dark:via-cream/80 md:w-14"
        aria-hidden
      />

      <motion.button
        type="button"
        onClick={() => scrollByStep("left")}
        disabled={!canScrollLeft}
        className="absolute left-0 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full liquid-glass text-charcoal transition-opacity duration-300 hover:scale-105 disabled:pointer-events-none disabled:opacity-0 md:flex"
        whileTap={{ scale: 0.94 }}
        aria-label="Saveur precedente"
      >
        <CaretLeft size={20} weight="light" />
      </motion.button>

      <motion.button
        type="button"
        onClick={() => scrollByStep("right")}
        disabled={!canScrollRight}
        className="absolute right-0 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full liquid-glass text-charcoal transition-opacity duration-300 hover:scale-105 disabled:pointer-events-none disabled:opacity-0 md:flex"
        whileTap={{ scale: 0.94 }}
        aria-label="Saveur suivante"
      >
        <CaretRight size={20} weight="light" />
      </motion.button>

      <div
        ref={trackRef}
        role="region"
        aria-label="Carrousel des saveurs signature"
        tabIndex={0}
        onScroll={updateScrollState}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className="scrollbar-hide flex cursor-grab gap-6 overflow-x-auto overscroll-x-contain scroll-smooth px-1 pb-2 pt-1 snap-x snap-mandatory active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-mango/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 120,
              damping: 22,
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
        <motion.button
          type="button"
          onClick={() => scrollByStep("left")}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full liquid-glass text-charcoal disabled:opacity-35"
          whileTap={{ scale: 0.94 }}
          aria-label="Saveur precedente"
        >
          <CaretLeft size={18} weight="light" />
        </motion.button>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-warm-gray">
          Glisser pour explorer
        </p>
        <motion.button
          type="button"
          onClick={() => scrollByStep("right")}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full liquid-glass text-charcoal disabled:opacity-35"
          whileTap={{ scale: 0.94 }}
          aria-label="Saveur suivante"
        >
          <CaretRight size={18} weight="light" />
        </motion.button>
      </div>
    </div>
  );
}
