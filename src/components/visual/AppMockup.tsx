"use client";

type AppMockupProps = {
  variant: "logistics" | "health" | "culture";
  appName: string;
};

export function AppMockup({ variant, appName }: AppMockupProps) {
  const headerGradients = {
    logistics: "from-[#7ec8e3]/40 to-cream-deep/60",
    health: "from-emerald-200/50 to-cream-deep/50",
    culture: "from-mango/35 to-peach/40",
  };

  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="rounded-[1.25rem] bg-charcoal/90 p-1.5 shadow-[0_24px_48px_-16px_rgba(42,36,32,0.25)]">
        <div className="overflow-hidden rounded-[1rem] bg-white">
          <div
            className={`flex items-center justify-between bg-gradient-to-r px-3 py-2.5 ${headerGradients[variant]}`}
          >
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-charcoal/15" />
              <span className="h-2 w-2 rounded-full bg-charcoal/10" />
              <span className="h-2 w-2 rounded-full bg-charcoal/10" />
            </div>
            <span className="text-[9px] font-medium uppercase tracking-wider text-charcoal/70">
              {appName}
            </span>
          </div>

          <div className="space-y-2 p-3">
            {variant === "logistics" && (
              <>
                <div className="flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-fresh-blue/15" />
                  <div className="h-8 w-14 rounded-lg bg-mango/20" />
                </div>
                <div className="h-20 rounded-xl bg-gradient-to-br from-cream-deep/80 to-cream p-2">
                  <div className="h-1.5 w-2/3 rounded-full bg-charcoal/10" />
                  <div className="mt-3 flex gap-1">
                    <div className="h-10 flex-1 rounded-lg bg-fresh-blue/20" />
                    <div className="h-10 flex-1 rounded-lg bg-strawberry/15" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded-full bg-charcoal/6" />
                  <div className="h-2 w-4/5 rounded-full bg-charcoal/5" />
                </div>
              </>
            )}

            {variant === "health" && (
              <>
                <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/50 p-2.5">
                  <div className="h-1.5 w-1/2 rounded-full bg-emerald-700/20" />
                  <div className="mt-2 h-6 rounded-lg bg-emerald-200/40" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg ${i === 2 ? "bg-emerald-300/40 ring-1 ring-emerald-400/50" : "bg-charcoal/5"}`}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <div className="h-7 flex-1 rounded-full bg-emerald-200/50" />
                  <div className="h-7 flex-1 rounded-full bg-charcoal/8" />
                </div>
              </>
            )}

            {variant === "culture" && (
              <>
                <div className="h-14 rounded-xl bg-gradient-to-r from-mango/30 via-strawberry/20 to-berry-soft/25 p-2">
                  <div className="h-1.5 w-1/3 rounded-full bg-charcoal/15" />
                  <div className="mt-2 h-6 w-2/3 rounded-lg bg-white/50" />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="aspect-[4/3] rounded-lg bg-mango/20" />
                  <div className="aspect-[4/3] rounded-lg bg-berry-soft/25" />
                </div>
                <div className="h-2 w-full rounded-full bg-charcoal/6" />
                <div className="h-2 w-3/5 rounded-full bg-charcoal/5" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl bg-gradient-to-br from-white/80 to-peach/30" />
    </div>
  );
}
