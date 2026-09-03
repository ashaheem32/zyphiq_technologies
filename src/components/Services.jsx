import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Production-grade marketing sites, web apps and platforms — fast, accessible and built to convert.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20M8 15l2 2-2 2m5 0h3" />
      </svg>
    ),
  },
  {
    title: 'AI Automation',
    description: 'Custom AI agents, chatbots and workflow automations that cut manual work and scale operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <circle cx="10" cy="11" r="1" fill="currentColor" />
        <circle cx="14" cy="11" r="1" fill="currentColor" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description: 'Native-quality iOS and Android apps with polished UX — from MVP to full product, shipped to the stores.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    title: 'Custom Software',
    description: 'Bespoke tools, dashboards, integrations and APIs — software shaped exactly around how you work.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 9-4 3 4 3m8-6 4 3-4 3M13.5 5l-3 14" />
      </svg>
    ),
  },
  {
    title: 'UI / UX Design',
    description: 'Research-driven interfaces and design systems that feel effortless and make your brand memorable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.5 4.5 5 5L8 21H3v-5L14.5 4.5zM12 7l5 5" />
      </svg>
    ),
  },
  {
    title: 'Growth & Support',
    description: 'SEO, performance tuning, analytics and ongoing maintenance — we stay with you long after launch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17 9 11l4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          badge="Services"
          title="Our Core"
          highlight="Services"
          description="One team for design, engineering and automation — everything you need to build and grow, under one roof."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="group h-full rounded-2xl border border-stone-100 bg-white p-5 shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                {/* Light-blue icon tile */}
                <div className="flex h-32 items-center justify-center rounded-xl bg-brand-100/70 sm:h-40">
                  <span className="text-brand-600 drop-shadow-[0_6px_12px_rgb(0_124_245/0.35)] transition-transform duration-300 group-hover:scale-110 [&_svg]:size-14">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mt-6 px-2 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-2.5 px-2 pb-2 text-[15px] leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
