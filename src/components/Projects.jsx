import { ArrowUpRight, Check, ExternalLink, Info } from 'lucide-react'
import { contact, projects } from '../data/content'
import { GithubIcon } from './BrandIcons'
import Icon from './Icon'
import Reveal, { SectionHeading } from './Reveal'

// Bento rhythm: wide / narrow, then narrow / wide, repeating.
const span = (i) => (['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'][i % 4])

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Things I’ve built"
        subtitle="A few of my projects so far, from web apps to AI-based tools."
      />
      <div className="grid gap-6 lg:grid-cols-12">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12} className={span(i)}>
            <article className="group relative h-full rounded-[1.75rem] bg-gradient-to-br from-lav-soft/70 via-white to-lavender/40 p-px transition duration-500 hover:-translate-y-2 hover:from-primary hover:via-lavender hover:to-primary/60 hover:shadow-glow">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-1px)] bg-white">
                {/* consistent 16:9 visual panel */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-lav-light via-lav-soft to-lavender">
                  <div className="absolute inset-0 transition duration-700 group-hover:scale-110">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,.75),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(94,58,77,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(94,58,77,.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/50 blur-sm" />
                    <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-white text-primary shadow-glow">
                      <Icon name={p.icon} size={34} />
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-primary opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-extrabold text-ink">{p.title}</h3>
                  {p.tagline && (
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">{p.tagline}</p>
                  )}
                  <div className="mt-4 flex-1">
                    <p className="text-sm leading-relaxed text-ink/65">{p.description}</p>
                    {p.highlights && (
                      <ul className="mt-4 space-y-2">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                            <Check size={15} className="mt-[3px] shrink-0 text-primary" aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-lav-light px-3 py-1 font-mono text-xs font-medium text-primary">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {/* No repo link yet → falls back to the GitHub profile */}
                    <a href={p.github || contact.github.url} target="_blank" rel="noopener noreferrer" className="btn-ghost group/b !px-5 !py-2.5">
                      <GithubIcon width={16} height={16} /> GitHub
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/b:-translate-y-0.5 group-hover/b:translate-x-0.5" />
                    </a>
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary group/b !px-5 !py-2.5">
                        <ExternalLink size={16} /> Live Demo
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/b:-translate-y-0.5 group-hover/b:translate-x-0.5" />
                      </a>
                    ) : (
                      <span
                        className="btn-primary !cursor-not-allowed !px-5 !py-2.5 opacity-60 hover:!shadow-lg hover:!brightness-100"
                        title="Live demo coming soon"
                        aria-disabled="true"
                      >
                        <ExternalLink size={16} /> Live Demo
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">Soon</span>
                      </span>
                    )}
                  </div>
                  {p.placeholder && (
                    <p className="mt-4 flex items-center gap-1.5 text-xs text-amber-600">
                      <Info size={12} /> Demo link is a placeholder — replace with the real URL
                    </p>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
