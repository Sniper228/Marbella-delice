"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-charcoal/10 bg-cream-deep/80 text-charcoal transition-[background-color,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-strawberry/25 hover:shadow-[0_8px_24px_-10px_rgba(244,164,184,0.35)] active:scale-[0.96] dark:border-white/10 dark:bg-white/5 dark:text-cream dark:hover:border-peach/30 ${className}`}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <span className="sr-only">
        {isDark ? "Mode clair" : "Mode sombre"}
      </span>
      {mounted && (
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun size={18} weight="light" />
          ) : (
            <Moon size={18} weight="light" />
          )}
        </motion.span>
      )}
    </button>
  );
}
