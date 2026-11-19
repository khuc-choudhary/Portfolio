import { skillGroups } from '../data/content'
import Icon from './Icon'
import Reveal, { SectionHeading } from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tech stack"
        subtitle="The languages, frameworks and tools I build with, grouped by what they're for."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={(i % 3) * 0.1}
            className={`${g.wide ? 'lg:col-span-2' : ''} ${i === skillGroups.length - 1 && skillGroups.length % 2 ? 'sm:col-span-2' : ''}`}
          >
            <article className="group h-full">
              <div className="card relative h-full overflow-hidden bg-gradient-to-br from-white to-lav-light/50 p-6 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender/20 blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-primary/20" />
                <header className="relative flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-lavender text-white shadow-lg shadow-primary/25 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon name={g.icon} size={22} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">{g.title}</h3>
                    <p className="mt-0.5 text-sm text-ink/55">{g.blurb}</p>
                  </div>
                  <span className="ml-auto shrink-0 font-mono text-xs text-primary/50">
                    {String(g.items.length).padStart(2, '0')}
                  </span>
                </header>

                <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${g.title} skills`}>
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-lav-soft bg-white px-3.5 py-1.5 text-sm font-medium text-ink/80 transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
