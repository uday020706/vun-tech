export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-slate/10" />
      <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-moss/10" />
    </div>
  )
}

export function HeroGraphic() {
  return (
    <div className="rounded-2xl border border-fog bg-white/80 p-4">
      <svg viewBox="0 0 320 180" className="h-40 w-full">
        <defs>
          <linearGradient id="grad-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect x="12" y="16" width="296" height="148" rx="16" fill="#f5f3ef" />
        <circle cx="72" cy="60" r="26" fill="url(#grad-a)" />
        <circle cx="246" cy="60" r="20" fill="url(#grad-b)" />
        <rect x="48" y="104" width="220" height="12" rx="6" fill="#e5e7eb" />
        <rect x="48" y="124" width="160" height="10" rx="5" fill="#e5e7eb" />
        <path
          d="M60 96 L110 70 L160 82 L210 52 L260 74"
          stroke="#0f766e"
          strokeWidth="3"
          fill="none"
        />
      </svg>
      <div className="mt-2 text-xs text-slate">
        Modern UI patterns with clear information hierarchy.
      </div>
    </div>
  )
}

export function StatGraphic() {
  return (
    <div className="rounded-2xl border border-fog bg-white p-4">
      <svg viewBox="0 0 320 120" className="h-24 w-full">
        <rect x="10" y="12" width="300" height="96" rx="14" fill="#f5f3ef" />
        <rect x="28" y="70" width="32" height="26" rx="6" fill="#0f766e" />
        <rect x="76" y="52" width="32" height="44" rx="6" fill="#0f766e" />
        <rect x="124" y="34" width="32" height="62" rx="6" fill="#0f766e" />
        <rect x="172" y="58" width="32" height="38" rx="6" fill="#0f766e" />
        <rect x="220" y="40" width="32" height="56" rx="6" fill="#0f766e" />
        <rect x="268" y="66" width="32" height="30" rx="6" fill="#0f766e" />
      </svg>
      <div className="mt-2 text-xs text-slate">
        Clear reporting and readable dashboards.
      </div>
    </div>
  )
}


export function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-fog bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-ink/70">
      <span className="h-2 w-2 rounded-full bg-moss" />
      {children}
    </div>
  )
}
