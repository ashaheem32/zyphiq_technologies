import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/* Placeholder testimonials — replace with real client quotes later. */
const TESTIMONIALS = [
  {
    quote:
      'Zyphiq Tech rebuilt our platform in three months and it simply works. The team communicates like an in-house squad — weekly demos, zero surprises.',
    name: 'Amara Osei',
    role: 'CEO, Nexora',
    initials: 'AO',
    color: 'bg-brand-600',
  },
  {
    quote:
      'The AI automation they shipped now handles most of our support queue. It paid for itself in the first quarter — genuinely transformative for us.',
    name: 'Daniel Kim',
    role: 'COO, Quantia',
    initials: 'DK',
    color: 'bg-stone-500',
  },
  {
    quote:
      'From first sketch to app-store launch, everything felt effortless. Our users constantly compliment the design — that credit goes to Zyphiq Tech.',
    name: 'Sofia Marques',
    role: 'Founder, Orbitly',
    initials: 'SM',
    color: 'bg-espresso-500',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="size-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3l-6.1 3.3 1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-transparent via-brand-50/60 to-transparent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Over"
          highlight="150+ Reviews"
          titleAfter="from our clients"
          description="We measure success by our clients' outcomes — here's what a few of them say."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-stone-100 bg-white p-8 shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                <div>
                  <Stars />
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-stone-700">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-stone-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
