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
    <p className="footer-accent mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]">
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
      <Icon size={15} weight="light" className="footer-accent shrink-0 opacity-80" />
      <span className="text-[13px] leading-snug opacity-90 transition-opacity duration-300 group-hover:opacity-100">
        {children}
      </span>
    </>
  );

  const className = "group flex items-start gap-2.5 py-1";

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
          ? "border-[#25D366]/50 bg-[#25D366]/20 text-white shadow-[0_0_20px_-8px_rgba(37,211,102,0.4)] hover:bg-[#25D366]/35"
          : "border-[color:color-mix(in_srgb,var(--footer-fg)_20%,transparent)] bg-[color:color-mix(in_srgb,var(--footer-fg)_8%,transparent)] hover:border-[color:color-mix(in_srgb,var(--footer-accent)_40%,transparent)]"
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
      className="footer-surface relative scroll-mt-28 overflow-hidden transition-colors duration-500 md:scroll-mt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_srgb,var(--footer-accent)_6%,transparent)] via-transparent to-[color:color-mix(in_srgb,#000_25%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(88%,680px)] -translate-x-1/2 bg-[color:color-mix(in_srgb,var(--footer-accent)_25%,transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-11 md:px-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-7 lg:gap-9">
          <div>
            <span className="footer-accent text-[10px] font-medium uppercase tracking-[0.32em]">
              Marbella
            </span>
            <p className="mt-0.5 text-[1.85rem] font-semibold leading-none tracking-tight md:text-[2rem]">
              Delice
            </p>
            <p className="footer-muted mt-3 text-[13px] font-medium">
              Fraîcheur · Gourmandise · Élégance
            </p>
            <p className="footer-muted mt-2 text-[13px] italic leading-relaxed opacity-80">
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

          <div className="md:pt-1">
            <FooterLabel>Explorer</FooterLabel>
            <nav className="grid grid-cols-3 gap-x-3 gap-y-2.5">
              {explorerLinks.flat().map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-muted text-[13px] font-medium transition-colors duration-300 hover:text-[var(--footer-fg)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

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

            <div className="my-4 h-px bg-[color:color-mix(in_srgb,var(--footer-fg)_12%,transparent)]" />

            <div className="footer-muted flex items-center gap-2 text-[12px]">
              <Clock size={14} weight="light" className="footer-accent opacity-90" />
              <span>
                {contactInfo.hours.weekdays}
                <span className="mx-1.5 opacity-30">·</span>
                {contactInfo.hours.sunday}
              </span>
            </div>
            <p className="footer-muted mt-1.5 text-[11px] opacity-70">
              {contactInfo.hours.note}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_4px_20px_-4px_rgba(37,211,102,0.45)] transition-all duration-400 hover:bg-[#20bd5a] hover:shadow-[0_6px_28px_-4px_rgba(37,211,102,0.55)] active:scale-[0.98]"
              >
                <WhatsappLogo size={15} weight="fill" />
                WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--footer-accent)_35%,transparent)] bg-[color:color-mix(in_srgb,var(--footer-fg)_7%,transparent)] px-4 py-2.5 text-[12px] font-semibold transition-all duration-400 hover:border-[color:color-mix(in_srgb,var(--footer-accent)_55%,transparent)] active:scale-[0.98]"
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

        <div className="mt-9 border-t border-[color:color-mix(in_srgb,var(--footer-fg)_10%,transparent)] pt-6 md:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="footer-muted text-[11px]">
              2026 Marbella Delice — Tous droits réservés.
            </p>
            <p className="footer-muted text-[11px] opacity-80 sm:text-right">
              <span className="footer-accent">Crafted with care</span>
              <span className="mx-2 opacity-25">·</span>
              Le goût du vrai, sans compromis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
