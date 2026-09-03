import Reveal from './Reveal.jsx'
import { PROJECTS } from '../data/projects.js'

function MarqueeRow() {
  return (
    <>
      {PROJECTS.map((project) => (
        <li key={project.name} className="w-56 shrink-0 sm:w-72">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-stone-200/70 bg-white shadow-[0_2px_10px_rgb(69_57_49/0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-600/15"
          >
            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={`${project.name} — ${project.category}`}
                width="1600"
                height="900"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-stone-800 backdrop-blur-sm">
                {project.name}
              </span>
            </div>
          </a>
        </li>
      ))}
    </>
  )
}

/* Scrolling strip of project covers shown at the bottom of the hero. */
export default function ProjectMarquee() {
  return (
    <Reveal delay={450} className="mt-12 sm:mt-20">
      <p className="text-center text-sm font-semibold tracking-widest text-stone-500 uppercase">
        Trusted by teams &amp; brands we've built for
      </p>

      <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Two identical rows animate -50% for a seamless infinite loop */}
        <ul className="flex w-max animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
          <MarqueeRow />
          <MarqueeRow />
        </ul>
      </div>
    </Reveal>
  )
}
