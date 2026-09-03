import Reveal from './Reveal.jsx'

const STEPS = [
  {
    number: 'Step-1',
    title: 'Discover & plan',
    description: 'We dig into your goals, users and constraints — so we solve the right problem, not just build features.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    number: 'Step-2',
    title: 'Design the experience',
    description: 'Wireframes to polished UI, iterated with you. You see and shape the product before a line of code ships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.5 4.5 5 5L8 21H3v-5L14.5 4.5zM12 7l5 5" />
      </svg>
    ),
  },
  {
    number: 'Step-3',
    title: 'Build & iterate',
    description: 'Weekly demos, clean code, real progress. We engineer for performance, security and maintainability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 9-4 3 4 3m8-6 4 3-4 3M13.5 5l-3 14" />
      </svg>
    ),
  },
  {
    number: 'Step-4',
    title: 'Launch & scale',
    description: 'We ship, measure and keep improving — with support, automation and growth work beyond day one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c3 3 4 6.5 4 9.5 0 2-.5 3.5-1 4.5h-6c-.5-1-1-2.5-1-4.5C8 8.5 9 5 12 2z" />
        <circle cx="12" cy="10" r="1.6" />
        <path d="M8.5 15 6 19l3-.5L10.5 21l1.5-3m3.5-3 2.5 4-3-.5L13.5 21 12 18" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* Sticky intro column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-100">
                From idea to launch
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Four <span className="text-brand-600">steps</span> to a shipped product.
              </h2>
              <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
                No black boxes, no surprises — a tight loop from idea to launch, with you in it
                the whole way.
              </p>
            </Reveal>
          </div>

          {/* Step cards */}
          <div className="flex flex-col gap-7">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <article className="grid gap-6 rounded-2xl border border-stone-100 bg-white p-6 shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-brand-100/80 px-3.5 py-1 text-sm font-semibold text-brand-700">
                      {step.number}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold">{step.title}</h3>
                    <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-stone-600">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex h-28 items-center justify-center rounded-xl bg-brand-100/70 sm:h-36 sm:w-44">
                    <span className="text-brand-600 [&_svg]:size-14">{step.icon}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
