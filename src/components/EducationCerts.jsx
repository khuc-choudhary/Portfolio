import { Award, GraduationCap } from 'lucide-react'
import { education, certifications } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading eyebrow="04 — Education" title="Academic journey" />
      <ol className="relative ml-3 space-y-8 border-l border-white/15 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <li className="relative list-none">
              <span className="absolute -left-[2.85rem] top-1 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-navy text-sky-300">
                <GraduationCap size={16} />
              </span>
              <div className="glass rounded-2xl p-5 transition hover:border-violet-400/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">{e.degree}</h3>
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-300">{e.period}</span>
                </div>
                <p className="mt-1 text-sky-300">{e.school}</p>
                <p className="mt-2 text-sm text-slate-400">{e.note}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <SectionHeading eyebrow="05 — Certifications" title="Always learning" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <Reveal key={c.title}>
            <div className="glass flex h-full gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-400/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-white shadow-lg shadow-violet-600/30">
                <Award size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-white">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-300">{c.issuer}</p>
                {c.note && <p className="mt-2 text-sm text-slate-400">{c.note}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
