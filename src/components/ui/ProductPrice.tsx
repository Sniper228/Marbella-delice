export function ProductPrice({ amount }: { amount: number }) {
  const formatted = amount.toLocaleString("fr-FR");

  return (
    <div className="flex flex-col gap-0.5">
      <span className="inline-flex w-fit rounded-full border border-charcoal/8 bg-cream-deep/80 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-warm-gray dark:border-white/10 dark:bg-white/5">
        A partir de
      </span>
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-2xl font-medium tracking-tight text-charcoal md:text-[1.65rem]">
          {formatted}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-warm-gray">
          FCFA
        </span>
      </div>
    </div>
  );
}
