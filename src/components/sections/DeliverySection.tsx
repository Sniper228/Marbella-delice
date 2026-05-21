"use client";

import {
  Clock,
  Sparkle,
  Truck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { deliveryFeatures, WHATSAPP_URL } from "@/lib/data";

const deliveryIcons = {
  truck: Truck,
  whatsapp: WhatsappLogo,
  clock: Clock,
  sparkle: Sparkle,
};

export function DeliverySection() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-b from-transparent via-strawberry/5 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-mango/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#c47a2e]">
              Livraison
            </span>
            <h2 className="text-3xl font-semibold tracking-tighter text-charcoal md:text-5xl">
              Commandez en trois clics, recevez en fraicheur.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-gray">
              Pas de compte, pas de friction. Envoyez-nous votre commande sur
              WhatsApp et notre equipe prepare votre selection avec soin.
            </p>
            <div className="mt-8">
              <MagneticButton href={WHATSAPP_URL} variant="primary" external>
                Lancer une commande
              </MagneticButton>
            </div>
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {deliveryFeatures.map((feature) => {
              const Icon = deliveryIcons[feature.icon];
              return (
                <RevealItem key={feature.title}>
                  <div className="double-bezel-outer h-full">
                    <div className="double-bezel-inner liquid-glass flex h-full flex-col rounded-[calc(2rem-6px)] p-5 transition-transform duration-500 hover:-translate-y-1">
                      <Icon
                        size={28}
                        weight="light"
                        className="mb-3 text-strawberry-deep"
                      />
                      <h3 className="font-semibold tracking-tight text-charcoal">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-warm-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
