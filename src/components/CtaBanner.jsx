import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

/* Grid cells lit up on the banner background, aligned to the 72px grid. */
const LIT_CELLS = [
  { left: '4.5rem', top: '4.5rem', opacity: 'bg-white/10' },
  { left: '18rem', top: '13.5rem', opacity: 'bg-white/20' },
  { left: '31.5rem', top: '4.5rem', opacity: 'bg-white/10' },
  { right: '9rem', top: '9rem', opacity: 'bg-white/15' },
  { right: '22.5rem', bottom: '4.5rem', opacity: 'bg-white/10' },
  { left: '9rem', bottom: '9rem', opacity: 'bg-white/15' },
  { right: '4.5rem', bottom: '13.5rem', opacity: 'bg-white/20' },
]

export default function CtaBanner() {
  return (
    <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-espresso-600 px-6 py-16 text-center sm:px-16 sm:py-28">
            {/* Grid pattern + lit cells */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[image:linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
              {LIT_CELLS.map((cell, i) => (
                <span
                  key={i}
                  className={`absolute size-18 ${cell.opacity}`}
                  style={{ left: cell.left, right: cell.right, top: cell.top, bottom: cell.bottom }}
                />
              ))}
            </div>

            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
                Free Strategy &amp; Project Consultation Session
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Tell us what you're building and get expert advice, a rough timeline and a clear
                price — within 24 hours, no strings attached.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="mailto:hello@zyphiq.tech" variant="light">
                  Book Your Free Session
                  <svg
                    className="size-4.5 text-brand-600 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Button>
              </div>

              <p className="mt-8 text-sm text-white/70">
                Prefer email? Write to us at{' '}
                <a href="mailto:hello@zyphiq.tech" className="font-semibold text-white underline underline-offset-4">
                  hello@zyphiq.tech
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
