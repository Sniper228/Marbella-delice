"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function FloatingFruit({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, 6, -4, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function YogurtHeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[8%] rounded-full bg-gradient-to-br from-strawberry/25 via-peach/20 to-fresh-blue/15 blur-2xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.2 }}
      >
        <svg
          viewBox="0 0 400 480"
          className="h-full w-full drop-shadow-[0_40px_80px_rgba(232,122,150,0.25)]"
          aria-hidden
        >
          <defs>
            <linearGradient id="cupBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f5ebe0" />
            </linearGradient>
            <linearGradient id="yogurtFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd4a8" />
              <stop offset="45%" stopColor="#f4a4b8" />
              <stop offset="100%" stopColor="#e87a96" />
            </linearGradient>
            <linearGradient id="splash" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5a962" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f4a4b8" stopOpacity="0.4" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="200" cy="430" rx="120" ry="18" fill="rgba(42,36,32,0.08)" />

          <path
            d="M120 180 Q200 120 280 180 L295 380 Q200 420 105 380 Z"
            fill="url(#cupBody)"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
          />
          <path
            d="M130 200 Q200 150 270 200 L280 360 Q200 395 120 360 Z"
            fill="url(#yogurtFill)"
          />
          <ellipse cx="200" cy="200" rx="72" ry="22" fill="#fff8f5" opacity="0.9" />

          <motion.path
            d="M160 195 Q200 160 240 195 Q220 210 200 205 Q180 210 160 195"
            fill="#ffffff"
            opacity="0.6"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <path
            d="M90 220 Q60 200 80 180 Q120 190 100 240 Q70 250 90 220"
            fill="url(#splash)"
            opacity="0.7"
          />
          <path
            d="M310 210 Q340 190 320 170 Q280 185 300 235 Q330 245 310 210"
            fill="url(#splash)"
            opacity="0.5"
          />

          <circle cx="155" cy="250" r="14" fill="#e87a96" opacity="0.9" />
          <circle cx="185" cy="265" r="10" fill="#f4a4b8" />
          <circle cx="220" cy="255" r="12" fill="#f5a962" />
          <circle cx="250" cy="270" r="9" fill="#9b6dd7" opacity="0.8" />
        </svg>
      </motion.div>

      <FloatingFruit className="left-[2%] top-[18%]" delay={0}>
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-strawberry to-strawberry-deep shadow-[0_12px_30px_rgba(232,122,150,0.4)] ring-4 ring-white/50" />
      </FloatingFruit>
      <FloatingFruit className="right-[0%] top-[28%]" delay={0.6}>
        <div className="h-14 w-20 rotate-12 rounded-[50%] bg-gradient-to-br from-mango to-peach shadow-[0_12px_30px_rgba(245,169,98,0.35)] ring-4 ring-white/50" />
      </FloatingFruit>
      <FloatingFruit className="left-[12%] bottom-[22%]" delay={1.2}>
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-berry-soft to-berry shadow-[0_10px_24px_rgba(155,109,215,0.35)] ring-4 ring-white/50" />
      </FloatingFruit>
      <FloatingFruit className="right-[8%] bottom-[30%]" delay={0.3}>
        <div className="h-10 w-14 -rotate-6 rounded-[40%] bg-gradient-to-br from-fresh-blue/80 to-fresh-blue shadow-[0_10px_24px_rgba(126,200,227,0.35)] ring-4 ring-white/50" />
      </FloatingFruit>
    </div>
  );
}
