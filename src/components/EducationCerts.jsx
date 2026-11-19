import { Award, GraduationCap } from 'lucide-react'
import { education, certifications } from '../data/content'
import Reveal, { SectionHeading } from './Reveal'

export function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading eyebrow="04 — Education" title="Academic journey" />
      <ol className="relative ml-4 space-y-8 border-l-2 border-dashed border-lav-soft pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <li className="relative list-none">
              <span className="absolute -left-[3.2rem] top-4 grid h-10 w-10 place-items-center rounded-full border-4 border-canvas bg-gradient-to-br from-primary to-lavender text-white shadow-lg shadow-primary/30">
                <GraduationCap size={16} />
              </span>
              <div className="card p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-ink">{e.degree}</h3>
                  <span className="rounded-full bg-lav-light px-3 py-1 text-xs font-semibold text-primary">{e.period}</span>
                </div>
                <p className="mt-1 font-medium text-primary">{e.school}</p>
                <p className="mt-2 text-sm text-ink/60">{e.note}</p>
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
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.08}>
            <div className="card group flex h-full gap-4 p-5 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lav-light text-primary transition duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Award size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold leading-snug text-ink">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{c.issuer}</p>
                {c.note && <p className="mt-2 text-sm text-ink/60">{c.note}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
