export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-105">
        Z
      </span>
      <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap text-stone-900">
        Zyphiq<span className="text-brand-600"> Tech</span>
      </span>
    </a>
  )
}
