import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const STATS = [
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 12, suffix: '+', label: 'Countries served' },
  { value: 5, suffix: '.0', label: 'Average rating' },
]

/* Counts from 0 to `target` the first time the element scrolls into view. */
function CountUp({ target, suffix }) {
  const ref = useRef(null)
  // Reduced motion skips the animation and renders the final value directly.
  const [value, setValue] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? target : 0,
  )

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-transparent to-brand-50/80 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-stone-100 bg-white px-6 py-9 shadow-[0_1px_3px_rgb(0_0_0/0.04)]"
              >
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-brand-600 sm:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="order-2 text-sm font-medium text-stone-600">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
