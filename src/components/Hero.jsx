import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, MapPin, Mail } from 'lucide-react'
import { profile, typingPhrases, contact } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Magnetic from './Magnetic'

function useTyping(phrases) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = phrases[i % phrases.length]
    const done = !deleting && text === full
    const empty = deleting && text === ''
    const t = setTimeout(
      () => {
        if (done) setDeleting(true)
        else if (empty) { setDeleting(false); setI((n) => n + 1) }
        else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
      },
      done ? 1400 : deleting ? 35 : 75,
    )
    return () => clearTimeout(t)
  }, [text, deleting, i, phrases])

  return text
}

// Isometric 3D cube drawn in SVG
const Cube = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 4 42 14v20L24 44 6 34V14Z" fill="#EDE5FF" stroke="#7950E8" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 24 6 14M24 24l18-10M24 24v20" stroke="#7950E8" strokeWidth="1.5" />
    <path d="M24 24 6 14 24 4l18 10Z" fill="#B69CFF" opacity=".55" />
  </svg>
)

// Little neural-net motif
const Net = () => (
  <svg width="74" height="60" viewBox="0 0 74 60" aria-hidden="true">
    <g stroke="#B69CFF" strokeWidth="1.2">
      {[8, 30, 52].map((y1) => [14, 30, 46].map((y2) => <line key={`${y1}-${y2}`} x1="10" y1={y1} x2="37" y2={y2} />))}
      {[14, 30, 46].map((y1) => [10, 30, 50].map((y2) => <line key={`b${y1}-${y2}`} x1="37" y1={y1} x2="64" y2={y2} />))}
    </g>
    {[[10, 8], [10, 30], [10, 52], [37, 14], [37, 30], [37, 46], [64, 10], [64, 30], [64, 50]].map(([x, y], k) => (
      <circle key={k} cx={x} cy={y} r="4" fill={k % 2 ? '#B69CFF' : '#7950E8'} />
    ))}
  </svg>
)

const chip = 'glass absolute grid place-items-center rounded-2xl shadow-soft'

function Portrait() {
  // gentle mouse-driven parallax on the floating decorations
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18 })
  const sy = useSpring(my, { stiffness: 80, damping: 18 })
  const dx = useTransform(sx, (v) => v * 14)
  const dy = useTransform(sy, (v) => v * 14)
  const dx2 = useTransform(sx, (v) => v * -10)
  const dy2 = useTransform(sy, (v) => v * -10)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="relative mx-auto aspect-square w-full max-w-[30rem]">
      {/* scene: everything sits BEHIND her; flat cut at the bottom like the reference */}
      <div className="absolute inset-0" style={{ clipPath: 'inset(-40% -15% 0 -15%)' }}>
        <div className="absolute bottom-0 left-1/2 h-[82%] w-[58%] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-lav-soft to-lav-light/40" />
        <div className="absolute -left-[14%] -bottom-[6%] h-[40%] w-[66%] rounded-[50%] bg-lav-soft/70" />
        <div className="absolute -right-[14%] -bottom-[8%] h-[34%] w-[62%] rounded-[50%] bg-lavender/40" />

        <img
          src="/khushi.png"
          alt="Portrait of Khushi Mangal Singh"
          width="908" height="1599"
          className="absolute bottom-0 left-1/2 z-10 h-[108%] w-auto max-w-none -translate-x-1/2 object-contain"
          fetchPriority="high"
        />
      </div>

      {/* decorations (all around her, not over her) */}
      <motion.div style={{ x: dx, y: dy }} className="absolute -left-3 top-[36%] z-20">
        <div className="glass animate-float rounded-2xl px-4 py-3 text-center shadow-soft">
          <span className="font-mono text-lg font-bold text-primary">{'</>'}</span>
          <p className="mt-1 text-[11px] font-semibold leading-tight text-ink/70">Code<br />Create<br />Innovate</p>
        </div>
      </motion.div>
      <motion.div style={{ x: dx2, y: dy2 }} className="absolute bottom-[26%] left-[12%] z-20">
        <div className="animate-float-slow drop-shadow-lg"><Cube size={30} /></div>
      </motion.div>
      <motion.div style={{ x: dx, y: dy }} className="absolute bottom-[8%] right-[2%] z-20">
        <div className="animate-float-slow drop-shadow-lg [animation-delay:-3s]"><Cube size={34} /></div>
      </motion.div>
    </div>
  )
}

const socials = [
  { label: 'LinkedIn', href: contact.linkedin.url, Icon: LinkedinIcon },
  { label: 'GitHub', href: contact.github.url, Icon: GithubIcon },
  { label: 'Email', href: `mailto:${contact.email}`, Icon: Mail },
]

export default function Hero() {
  const typed = useTyping(typingPhrases)
  // delays start after the loader (~1s) so the entrance is actually seen
  const rise = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 + d, ease: [0.22, 1, 0.36, 1] } })

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="dots-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <div>
          <motion.p {...rise(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-lav-soft bg-white/80 px-4 py-1.5 text-xs font-medium text-ink/70 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <MapPin size={13} className="text-primary" /> {profile.location}
          </motion.p>

          <motion.h1 {...rise(0.1)} className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]">
            Hi, I’m <span className="gradient-text animate-shimmer">{profile.name}</span>
          </motion.h1>

          <motion.p {...rise(0.2)} className="mt-4 text-lg font-semibold text-ink/80 sm:text-xl">
            Aspiring AI Engineer | MCA Student | Software Developer
          </motion.p>
          <motion.p {...rise(0.3)} className="mt-3 h-8 font-mono text-base text-primary" aria-hidden="true">
            &gt; {typed}<span className="animate-blink">▍</span>
          </motion.p>

          <motion.p {...rise(0.4)} className="mt-5 max-w-xl leading-relaxed text-ink/60">
            I’m an MCA student who enjoys turning ideas into working software. I’m building a strong foundation in
            programming, data and machine learning, with the goal of creating useful AI-powered products.
          </motion.p>

          <motion.div {...rise(0.5)} className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#projects" className="btn-primary group">
                Explore My Work <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-ghost group">
                <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" /> Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div {...rise(0.6)} className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-ink/40">Find me</span>
            <span className="h-px w-8 bg-lav-soft" />
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} title={label}
                 target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                 className="grid h-10 w-10 place-items-center rounded-full border border-lav-soft bg-white text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-glow">
                <Icon width={17} height={17} size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.88, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <Portrait />
        </motion.div>
      </div>
    </section>
  )
}
