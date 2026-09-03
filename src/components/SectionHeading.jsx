import Reveal from './Reveal.jsx'

/*
 * RedDevs-style section header: a small pill badge, then a large display
 * heading where one keyword is highlighted in brand tan.
 * Pass the highlighted word via `highlight`; it is appended to `title`
 * unless `titleAfter` continues the sentence after it.
 */
export default function SectionHeading({ badge, title, highlight, titleAfter, description }) {
  return (
    <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
      {badge && (
        <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-100">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
        {highlight && <span className="text-brand-600"> {highlight}</span>}
        {titleAfter && <> {titleAfter}</>}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
