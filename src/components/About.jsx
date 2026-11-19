import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Sparkles } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'

const highlights = [
  { Icon: GraduationCap, title: 'Education', text: 'B.Com (Gujarat University) → MCA (L.J. University)' },
  { Icon: Rocket, title: 'Currently', text: 'Building projects with Django & Laravel, learning ML with Python' },
  { Icon: Sparkles, title: 'Goal', text: 'Entry-level Software Developer / Trainee role, growing into AI engineering' },
]

// Glowing neural-network "brain": layered nodes with animated connections.
function NeuralBrain() {
  const { nodes, edges } = useMemo(() => {
    const layers = [3, 5, 6, 5, 3]
    const nodes = []
    layers.forEach((n, l) => {
      for (let k = 0; k < n; k++) {
        nodes.push({ x: 36 + l * 82, y: 200 / 2 + (k - (n - 1) / 2) * 34 + 20 + (l % 2 ? 6 : -4), l })
      }
    })
    const edges = []
    nodes.forEach((a, i) => nodes.forEach((b, j) => {
      if (b.l === a.l + 1 && (i * 7 + j * 3) % 3 !== 0) edges.push([a, b])
    }))
    return { nodes, edges }
  }, [])

  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#8b66f0] to-lavender p-1 shadow-glow">
      <div className="relative grid h-full place-items-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#2a1f55] via-[#3b2a7c] to-[#5a3fc0]">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/40 blur-3xl" />
        <svg viewBox="0 0 400 260" className="relative w-full" role="img" aria-label="Illustration of a glowing neural network">
          <defs>
            <radialGradient id="nodeGlow"><stop offset="0%" stopColor="#fff" /><stop offset="100%" stopColor="#B69CFF" /></radialGradient>
          </defs>
          {edges.map(([a, b], i) => (
            <motion.line
              key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#D9C8FF" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 + (i % 12) * 0.05 }}
            />
          ))}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="9" fill="#B69CFF" opacity=".25" className="animate-pulse-node" style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${(i % 7) * 0.4}s` }} />
              <circle cx={n.x} cy={n.y} r="4.5" fill="url(#nodeGlow)" />
            </g>
          ))}
        </svg>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="absolute animate-rise rounded-full bg-white/70"
            style={{ left: `${8 + i * 9}%`, bottom: `${(i * 13) % 40}%`, width: 3, height: 3, animationDelay: `${i * 0.8}s` }} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="01 — About" title="A commerce graduate turned aspiring AI engineer" />
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="card space-y-5 p-7 leading-relaxed text-ink/65 lg:col-span-5">
          <p>
            I started with a <span className="font-semibold text-primary">B.Com from Gujarat University</span>, but the more I worked with
            computers, the more I wanted to understand how software actually works and to build it myself. That curiosity
            led me to the <span className="font-semibold text-primary">MCA programme at L.J. University, Ahmedabad</span>.
          </p>
          <p>
            I enjoy programming because it turns a problem into something that works. I’ve built{' '}
            <span className="font-semibold text-ink">Lumetra Classora</span>, an AI teacher platform built with React, FastAPI and Gemini, and{' '}
            <span className="font-semibold text-ink">Full Flash</span>, a full-stack job portal with resume parsing and job matching, and I’ve explored
            Flutter and .NET along the way. I’m comfortable with Git/GitHub and enjoy the debugging that comes with building.
          </p>
          <p>
            What excites me most is <span className="font-semibold text-primary">Artificial Intelligence and Machine Learning</span>. I’m
            actively learning Python for data science, ML fundamentals and how to build
            AI-powered tools that are genuinely useful. I’m a fresher, I know there’s a lot ahead, and I’m happy to keep learning my way there.
          </p>
        </Reveal>

        <div className="grid content-start gap-4 lg:col-span-4">
          {highlights.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="card group flex gap-4 p-5 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lav-light text-primary transition duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  <Icon size={21} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="lg:col-span-3">
          <NeuralBrain />
        </Reveal>
      </div>
    </section>
  )
}
