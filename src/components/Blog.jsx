import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Button from './Button.jsx'

/* Placeholder articles — wire up to a real blog/CMS later. */
const POSTS = [
  {
    title: 'How AI Automation Saves Growing Teams 20+ Hours a Week',
    excerpt:
      'From support inboxes to internal reporting — where automation actually pays off first, and where it does not.',
    tag: 'AI & Automation',
    date: 'Aug 2026',
    gradient: 'from-brand-500 to-espresso-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        <circle cx="10" cy="11" r="1" fill="currentColor" />
        <circle cx="14" cy="11" r="1" fill="currentColor" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages That Convert: 7 Patterns We Use on Every Build',
    excerpt:
      'A single clear action beats a full sitemap. The layout, copy and speed patterns behind our best-converting pages.',
    tag: 'Web Design',
    date: 'Jul 2026',
    gradient: 'from-stone-400 to-stone-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20M6 13h6m-6 3.5h9" />
      </svg>
    ),
  },
  {
    title: 'MVP in 8 Weeks: How Startups Should Scope a First Release',
    excerpt:
      'Cut the roadmap, not the quality. A practical guide to shipping a first version users actually want to pay for.',
    tag: 'Product',
    date: 'Jun 2026',
    gradient: 'from-brand-400 to-brand-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c3 3 4 6.5 4 9.5 0 2-.5 3.5-1 4.5h-6c-.5-1-1-2.5-1-4.5C8 8.5 9 5 12 2z" />
        <circle cx="12" cy="10" r="1.6" />
        <path d="M8.5 15 6 19l3-.5L10.5 21l1.5-3m3.5-3 2.5 4-3-.5L13.5 21 12 18" />
      </svg>
    ),
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-gradient-to-b from-transparent via-brand-50/60 to-transparent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          badge="Articles and Resources"
          title="Welcome To Our"
          highlight="Blog"
          description="Practical notes on design, engineering and automation — written from real client work."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 100}>
              <article className="group h-full cursor-pointer rounded-2xl border border-stone-100 bg-white p-4 shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/10">
                {/* Thumbnail */}
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${post.gradient}`}
                >
                  <div className="absolute inset-0 bg-[image:linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <span className="text-white/80 transition-transform duration-500 group-hover:scale-110 [&_svg]:size-14">
                    {post.icon}
                  </span>
                </div>

                <div className="px-2 pt-5 pb-2">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700">{post.tag}</span>
                    <span className="text-stone-400">{post.date}</span>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg leading-snug font-bold transition-colors duration-300 group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href="#blog" variant="outline">
            More Articles
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
