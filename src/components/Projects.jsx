import { Check, ExternalLink, Info } from 'lucide-react'
import { projects } from '../data/content'
import { GithubIcon } from './BrandIcons'
import Icon from './Icon'
import Reveal, { SectionHeading } from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Things I’ve built"
        subtitle="A few of my projects so far, from web apps to AI-based tools."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-600/10">
              <div className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.12),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <span className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-ink/40 text-white backdrop-blur transition duration-300 group-hover:scale-110">
                  <Icon name={p.icon} size={34} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                {p.tagline && (
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-sky-300">{p.tagline}</p>
                )}
                <div className="mt-3 flex-1">
                  <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>
                  {p.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                          <Check size={15} className="mt-[3px] shrink-0 text-emerald-400" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-sky-300">{t}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2">
                    <GithubIcon width={16} height={16} /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
                {p.placeholder && (
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-amber-300/80">
                    <Info size={12} /> Demo link is a placeholder — replace with the real URL
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
