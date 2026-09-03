import Logo from './Logo.jsx'

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'AI Automation', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Custom Software', href: '#services' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '#top' },
      { label: 'Terms & Conditions', href: '#top' },
    ],
  },
]

const SOCIALS = [
  {
    name: 'X / Twitter',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.3zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="9" />
        <path d="M5.5 5.8c4 4.2 6.5 9 7.7 15M18.6 5.6c-3.4 4.6-8.7 6-15.4 6.2M21 12.7c-5.2-1.5-9.7-.7-13.6 2.5" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-600">
              A digital agency building production-grade websites, AI automations, apps and
              software for ambitious teams.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href="#top"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-colors duration-300 hover:bg-brand-600 hover:text-white [&_svg]:size-4.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold tracking-widest text-stone-500 uppercase">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-600 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone-100 pt-8 sm:flex-row">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Zyphiq Tech. All rights reserved.
          </p>
          <a href="mailto:hello@zyphiq.tech" className="text-sm text-stone-500 transition-colors hover:text-brand-600">
            hello@zyphiq.tech
          </a>
        </div>
      </div>
    </footer>
  )
}
