import { skillGroups } from '../data/content'
import Icon from './Icon'
import Reveal, { SectionHeading } from './Reveal'

// Full class strings so Tailwind keeps them in the build.
const accents = {
  violet: {
    tile: 'from-violet-500/30 to-violet-500/5 text-violet-300 ring-violet-400/30',
    dot: 'bg-violet-400',
    glow: 'group-hover:border-violet-400/40 group-hover:shadow-violet-600/15',
    line: 'from-violet-400/70',
  },
  sky: {
    tile: 'from-sky-500/30 to-sky-500/5 text-sky-300 ring-sky-400/30',
    dot: 'bg-sky-400',
    glow: 'group-hover:border-sky-400/40 group-hover:shadow-sky-600/15',
    line: 'from-sky-400/70',
  },
  fuchsia: {
    tile: 'from-fuchsia-500/30 to-fuchsia-500/5 text-fuchsia-300 ring-fuchsia-400/30',
    dot: 'bg-fuchsia-400',
    glow: 'group-hover:border-fuchsia-400/40 group-hover:shadow-fuchsia-600/15',
    line: 'from-fuchsia-400/70',
  },
  emerald: {
    tile: 'from-emerald-500/30 to-emerald-500/5 text-emerald-300 ring-emerald-400/30',
    dot: 'bg-emerald-400',
    glow: 'group-hover:border-emerald-400/40 group-hover:shadow-emerald-600/15',
    line: 'from-emerald-400/70',
  },
  rose: {
    tile: 'from-rose-500/30 to-rose-500/5 text-rose-300 ring-rose-400/30',
    dot: 'bg-rose-400',
    glow: 'group-hover:border-rose-400/40 group-hover:shadow-rose-600/15',
    line: 'from-rose-400/70',
  },
  indigo: {
    tile: 'from-indigo-500/30 to-indigo-500/5 text-indigo-300 ring-indigo-400/30',
    dot: 'bg-indigo-400',
    glow: 'group-hover:border-indigo-400/40 group-hover:shadow-indigo-600/15',
    line: 'from-indigo-400/70',
  },
  amber: {
    tile: 'from-amber-500/30 to-amber-500/5 text-amber-300 ring-amber-400/30',
    dot: 'bg-amber-400',
    glow: 'group-hover:border-amber-400/40 group-hover:shadow-amber-600/15',
    line: 'from-amber-400/70',
  },
}


export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tech stack"
        subtitle="The languages, frameworks and tools I build with, grouped by what they're for."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const a = accents[g.accent] || accents.violet
          return (
            <Reveal
              key={g.title}
              delay={(i % 3) * 0.08}
              className={`${g.wide ? 'lg:col-span-2' : ''} ${i === skillGroups.length - 1 && skillGroups.length % 2 ? 'sm:col-span-2' : ''}`}
            >
              <article className="group h-full">
                <div className={`glass relative h-full overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${a.glow}`}>
                  <span className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${a.line} via-white/10 to-transparent`} />
                  <header className="flex items-start gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ring-1 transition duration-300 group-hover:scale-105 ${a.tile}`}>
                      <Icon name={g.icon} size={22} strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold leading-snug text-white">{g.title}</h3>
                      <p className="mt-0.5 text-sm text-slate-400">{g.blurb}</p>
                    </div>
                    <span className="ml-auto shrink-0 font-mono text-xs text-slate-500">
                      {String(g.items.length).padStart(2, '0')}
                    </span>
                  </header>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${g.title} skills`}>
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200 transition duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
