"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { type ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

function ButtonInner({
  children,
  variant,
  className,
  rotateX,
  rotateY,
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
  className: string;
  rotateX: ReturnType<typeof useTransform<number, number>>;
  rotateY: ReturnType<typeof useTransform<number, number>>;
}) {
  const base =
    variant === "primary"
      ? "bg-charcoal text-cream shadow-[0_20px_40px_-12px_rgba(42,36,32,0.35)] dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]"
      : "liquid-glass text-charcoal";

  return (
    <motion.span
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${base} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${
          variant === "primary" ? "bg-white/15 dark:bg-charcoal/15" : "bg-charcoal/5 dark:bg-white/10"
        }`}
      >
        <ArrowUpRight size={16} weight="light" />
      </span>
    </motion.span>
  );
}

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-12, 12], [4, -4]);
  const rotateY = useTransform(springX, [-12, 12], [-4, 4]);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <ButtonInner
      variant={variant}
      className={className}
      rotateX={rotateX}
      rotateY={rotateY}
    >
      {children}
    </ButtonInner>
  );

  if (external) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        className="inline-block"
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <Link
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      ref={ref as React.RefObject<HTMLAnchorElement>}
    >
      <motion.span style={{ x: springX, y: springY }} className="inline-block">
        {inner}
      </motion.span>
    </Link>
  );
}
