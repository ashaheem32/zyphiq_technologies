const VARIANTS = {
  /* Solid brand blue — the primary action everywhere */
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-700/30',
  /* Near-black — the secondary action next to a primary */
  dark: 'bg-stone-900 text-white shadow-lg shadow-stone-900/20 hover:bg-stone-800',
  /* White pill — for use on the espresso-blue CTA banner */
  light: 'bg-white text-stone-900 shadow-lg shadow-black/15 hover:bg-brand-50',
  /* Quiet outline — tertiary actions */
  outline:
    'border border-stone-200 bg-white text-stone-700 hover:border-brand-300 hover:text-brand-700',
}

const SIZES = {
  md: 'px-7 py-3.5 text-base',
  sm: 'px-5 py-2.5 text-sm',
}

export default function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  children,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 ${
        VARIANTS[variant] ?? VARIANTS.primary
      } ${SIZES[size] ?? SIZES.md} ${className}`}
    >
      {children}
    </a>
  )
}
