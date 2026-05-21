"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Envelope,
  InstagramLogo,
  MapPin,
  MapPinLine,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { contactInfo, MAPS_URL, navLinks, WHATSAPP_URL } from "@/lib/data";

const explorerLinks = [
  [navLinks[0], navLinks[2], navLinks[4]],
  [navLinks[1], navLinks[3], navLinks[5]],
] as const;

function FooterLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5ebe0]/90">
      {children}
    </p>
  );
}

function ContactLine({
  href,
  icon: Icon,
  children,
  external = false,
}: {
  href?: string;
  icon: typeof Phone;
  children: ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      <Icon size={15} weight="light" className="shrink-0 text-[#ffd4a8]/80" />
      <span className="text-[13px] leading-snug text-[#fdf8f3]/90 transition-colors duration-300 group-hover:text-[#fdf8f3]">
        {children}
      </span>
    </>
  );

  const className =
    "group flex items-start gap-2.5 py-1 transition-opacity duration-300 hover:opacity-100";

  if (!href) return <div className={className}>{content}</div>;

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
  variant = "default",
}: {
  href: string;
  label: string;
  children: ReactNode;
  variant?: "default" | "whatsapp";
}) {
  const isWa = variant === "whatsapp";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-400 ${
        isWa
          ? "border-[#25D366]/50 bg-[#25D366]/20 text-white shadow-[0_0_20px_-8px_rgba(37,211,102,0.4)] hover:bg-[#25D366]/35 hover:shadow-[0_0_28px_-6px_rgba(37,211,102,0.5)]"
          : "border-[#fdf8f3]/20 bg-[#fdf8f3]/8 text-[#fdf8f3] hover:border-[#ffd4a8]/40 hover:bg-[#fdf8f3]/12"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-28 overflow-hidden text-[#fdf8f3] md:scroll-mt-32"
    >
      {/* Fond chaleureux — lisible, sans brume */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#3a322c]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#4a4038] via-[#3a322c] to-[#2f2823]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f5ebe0]/[0.04] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(88%,680px)] -translate-x-1/2 bg-[#ffd4a8]/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-11 md:px-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-7 lg:gap-9">
          {/* Marque */}
          <div>
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#ffd4a8]">
                Marbella
              </span>
              <p className="text-[1.85rem] font-semibold leading-none tracking-tight text-[#fdf8f3] md:text-[2rem]">
                Delice
              </p>
            </div>

            <p className="mt-3 text-[13px] font-medium text-[#f5ebe0]">
              Fraîcheur · Gourmandise · Élégance
            </p>

            <p className="mt-2 text-[13px] italic leading-relaxed text-[#f5ebe0]/75">
              Le plaisir fruité, pensé comme un rituel du quotidien.
            </p>

            <div className="mt-5 flex gap-2.5">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <InstagramLogo size={18} weight="light" />
              </SocialIcon>
              <SocialIcon href={WHATSAPP_URL} label="WhatsApp" variant="whatsapp">
                <WhatsappLogo size={18} weight="fill" />
              </SocialIcon>
            </div>
          </div>

          {/* Explorer — grille horizontale 3×2 */}
          <div>
            <FooterLabel>Explorer</FooterLabel>
            <nav className="grid grid-cols-3 gap-x-3 gap-y-2.5 sm:gap-x-4">
              {explorerLinks.flat().map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-[#f5ebe0]/85 transition-colors duration-300 hover:text-[#ffd4a8]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact — intégré, sans card */}
          <div>
            <FooterLabel>Nous trouver</FooterLabel>

            <div className="space-y-1">
              <ContactLine href={MAPS_URL} icon={MapPin} external>
                {contactInfo.address}
              </ContactLine>
              {contactInfo.phones.map((phone) => (
                <ContactLine key={phone.href} href={phone.href} icon={Phone}>
                  {phone.display}
                </ContactLine>
              ))}
              <ContactLine
                href={`mailto:${contactInfo.email}`}
                icon={Envelope}
              >
                {contactInfo.email}
              </ContactLine>
            </div>

            <div className="my-4 h-px bg-[#fdf8f3]/10" />

            <div className="flex items-center gap-2 text-[#f5ebe0]/80">
              <Clock size={14} weight="light" className="text-[#ffd4a8]/90" />
              <span className="text-[12px] leading-relaxed">
                {contactInfo.hours.weekdays}
                <span className="mx-1.5 text-[#fdf8f3]/25">·</span>
                {contactInfo.hours.sunday}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] text-[#f5ebe0]/55">
              {contactInfo.hours.note}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(37,211,102,0.45)] transition-[transform,box-shadow,background-color] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#20bd5a] hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.55)] active:scale-[0.98]"
              >
                <WhatsappLogo size={15} weight="fill" />
                WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[#ffd4a8]/35 bg-[#fdf8f3]/[0.07] px-4 py-2.5 text-[12px] font-semibold text-[#f5ebe0] transition-[border-color,background-color,box-shadow,transform] duration-400 hover:border-[#ffd4a8]/55 hover:bg-[#fdf8f3]/10 hover:shadow-[0_4px_24px_-8px_rgba(255,212,168,0.2)] active:scale-[0.98]"
              >
                <MapPinLine size={15} weight="light" />
                Localisation
                <ArrowUpRight
                  size={13}
                  weight="light"
                  className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-px"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-9 border-t border-[#fdf8f3]/10 pt-6 md:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-[#f5ebe0]/50">
              2026 Marbella Delice — Tous droits réservés.
            </p>
            <p className="text-[11px] text-[#f5ebe0]/45 sm:text-right">
              <span className="text-[#ffd4a8]/70">Crafted with care</span>
              <span className="mx-2 text-[#fdf8f3]/15">·</span>
              Le goût du vrai, sans compromis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
