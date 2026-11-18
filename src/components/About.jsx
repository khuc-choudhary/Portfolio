import { GraduationCap, Rocket, Sparkles } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'

const highlights = [
  { Icon: GraduationCap, title: 'Education', text: 'B.Com (Gujarat University) → MCA (L.J. University)' },
  { Icon: Rocket, title: 'Currently', text: 'Building projects with Django & Laravel, learning ML with Python' },
  { Icon: Sparkles, title: 'Goal', text: 'Entry-level Software Developer / Trainee role, growing into AI engineering' },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="01 — About" title="A commerce graduate turned aspiring AI engineer" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 leading-relaxed text-slate-400 lg:col-span-3">
          <p>
            I started with a <span className="text-white">B.Com from Gujarat University</span>, but the more I worked with
            computers, the more I wanted to understand how software actually works and to build it myself. That curiosity
            led me to the <span className="text-white">MCA programme at L.J. University, Ahmedabad</span>.
          </p>
          <p>
            I enjoy programming because it turns a problem into something that works. I’ve built{' '}
            <span className="text-white">Lumetra Classora</span>, an AI teacher platform built with React, FastAPI and Gemini, and{' '}
            <span className="text-white">Full Flash</span>, a full-stack job portal with resume parsing and job matching, and I’ve explored
            Flutter and .NET along the way. I’m comfortable with Git/GitHub and enjoy the debugging that comes with building.
          </p>
          <p>
            What excites me most is <span className="text-white">Artificial Intelligence and Machine Learning</span>. I’m
            actively learning Python for data science, ML fundamentals and how to build
            AI-powered tools that are genuinely useful. I’m a fresher, I know there’s a lot ahead, and I’m happy to keep learning my way there.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:col-span-2">
          {highlights.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass flex gap-4 rounded-2xl p-5 transition hover:border-violet-400/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 to-sky-500/30 text-sky-300">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
