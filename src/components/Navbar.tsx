"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5 md:px-6">
        <nav className="liquid-glass flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 md:px-6">
          <Link
            href="#accueil"
            className="flex flex-col leading-none"
            onClick={() => setOpen(false)}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-warm-gray">
              Marbella
            </span>
            <span className="text-lg font-semibold tracking-tight text-charcoal">
              Delice
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.slice(1, 5).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-warm-gray transition-colors duration-300 hover:text-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton href="#produits" variant="primary">
              Commander
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span className="relative h-5 w-5">
              <motion.span
                className="absolute left-0 top-1 h-0.5 w-5 rounded-full bg-charcoal"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
              <motion.span
                className="absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-charcoal"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              />
              <motion.span
                className="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-charcoal"
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-cream/90 px-6 pt-28 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
            >
              <X size={20} weight="light" />
            </button>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-3xl font-medium tracking-tight text-charcoal"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <MagneticButton href="#produits" variant="primary">
                Commander maintenant
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
