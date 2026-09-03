import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Button from './Button.jsx'
import { PROJECTS } from '../data/projects.js'

const FILTERS = ['All', 'Web', 'AI', 'Automation', 'E-commerce']

export default function Work() {
  const [active, setActive] = useState('All')
  const visible = PROJECTS.filter((p) => active === 'All' || p.filter === active)

  return (
    <section id="work" className="bg-gradient-to-b from-transparent via-brand-50/60 to-transparent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          badge="Our Work"
          title="Projects We're"
          highlight="Proud Of"
          description="A snapshot of recent work across web, AI and automation — from client platforms to shipped products."
        />

        {/* Filter tabs */}
        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === filter
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:text-brand-600 hover:ring-brand-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 100}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-stone-100 bg-white p-4 shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10"
              >
                {/* Cover */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-brand-100">
                  <img
                    src={project.image}
                    alt={`${project.name} — ${project.category}`}
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-stone-800 backdrop-blur-sm">
                    {project.badge}
                  </span>
                  <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center rounded-full bg-espresso-600/25 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-espresso-600 group-hover:text-white">
                    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>

                {/* Copy */}
                <div className="flex items-start justify-between gap-3 px-2 pt-5 pb-2">
                  <div>
                    <h3 className="font-display text-xl font-bold">{project.name}</h3>
                    <p className="mt-1 text-sm text-stone-500">{project.category}</p>
                  </div>
                  <span className="mt-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {project.filter}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href="#contact">Start a Project Like This</Button>
        </Reveal>
      </div>
    </section>
  )
}
