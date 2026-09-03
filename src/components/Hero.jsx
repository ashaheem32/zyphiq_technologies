import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import ProjectMarquee from './ProjectMarquee.jsx'

/* Placeholder avatars for the social-proof strip. */
const AVATARS = [
  { initials: 'AO', color: 'bg-brand-600' },
  { initials: 'DK', color: 'bg-stone-500' },
  { initials: 'SM', color: 'bg-amber-700' },
  { initials: 'RV', color: 'bg-espresso-500' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-44 sm:pb-24 lg:pb-32">
      {/* Soft tan wash rising from the bottom of the hero; the page's check
          pattern shows through the transparent upper half. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_45%,#f1e9dd)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Build and Launch <span className="text-brand-600">Digital Products</span> That Grow
              Your Business
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 sm:mt-7 sm:text-lg">
              Zyphiq Tech is a digital agency crafting production-grade websites, AI automations,
              mobile apps and custom software. Designed to look great, perform better and help
              your business grow faster.
            </p>
          </Reveal>

          <Reveal
            delay={220}
            className="mt-9 flex w-full max-w-xs flex-col items-stretch gap-3.5 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
          >
            <Button href="#contact">
              Start Your Project
              <svg
                className="size-4.5 transition-transform duration-300 group-hover:translate-x-1"
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
            <Button href="#work" variant="dark">
              See Our Work
            </Button>
          </Reveal>

          {/* Social proof */}
          <Reveal delay={320} className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((avatar) => (
                  <span
                    key={avatar.initials}
                    className={`flex size-9 items-center justify-center rounded-full ${avatar.color} text-[11px] font-bold text-white ring-2 ring-white`}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-stone-700">150+ Satisfied Clients</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Project covers strip — the hero's closing band */}
      <ProjectMarquee />
    </section>
  )
}
