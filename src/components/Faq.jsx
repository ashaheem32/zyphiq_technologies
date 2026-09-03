import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/* Placeholder FAQs — adjust answers to your real policies later. */
const FAQS = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Every project is scoped individually. A marketing website usually starts around $3k, mobile apps and custom software from $8k. After a free discovery call you get a fixed quote with a clear breakdown — no hidden costs.',
  },
  {
    question: 'How long does it take to launch?',
    answer:
      'A marketing site ships in 2–4 weeks, an MVP app in 6–10 weeks. We work in weekly sprints with demos every Friday, so you always know exactly where the project stands.',
  },
  {
    question: 'Do I own the code and designs?',
    answer:
      'Yes — 100%. On final payment you receive full ownership of the source code, design files and all accounts. No lock-in, ever.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'Every project includes 30 days of free support. After that, most clients stay on a care plan covering hosting, monitoring, updates and small improvements — or we hand everything over to your team.',
  },
  {
    question: 'Can you work with our existing product or team?',
    answer:
      'Absolutely. We regularly join existing codebases, redesign live products and plug into in-house teams — as builders, reviewers or an extra pair of senior hands.',
  },
]

function FaqItem({ faq, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-stone-100 bg-white shadow-[0_1px_3px_rgb(0_0_0/0.04)] transition-shadow duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <span className="font-display text-base font-semibold sm:text-lg">{faq.question}</span>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full text-brand-600 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-stone-600 sm:px-8">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Straight answers to the things clients ask us most. Something else on your mind? Just reach out."
        />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <FaqItem
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
