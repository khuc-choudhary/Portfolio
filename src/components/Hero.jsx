import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Brain, Database, Code2, MapPin } from 'lucide-react'
import { profile, typingPhrases } from '../data/content'

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

const Str = ({ children }) => <span className="text-emerald-300">{children}</span>
const Kw = ({ children }) => <span className="text-violet-400">{children}</span>
const Fn = ({ children }) => <span className="text-sky-300">{children}</span>

function Visual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-violet-600/30 to-sky-500/20 blur-3xl" />
      <div className="relative animate-float">
        <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-violet-900/30">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-slate-500">khushi.py</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
            <Kw>class</Kw> <Fn>Developer</Fn>:{'\n'}
            {'    '}<Kw>def</Kw> <Fn>__init__</Fn>(self):{'\n'}
            {'        '}self.name = <Str>"Khushi"</Str>{'\n'}
            {'        '}self.degree = <Str>"MCA"</Str>{'\n'}
            {'        '}self.focus = [<Str>"AI"</Str>, <Str>"ML"</Str>]{'\n'}
            {'        '}self.learning = <span className="text-amber-300">True</span>
          </pre>
        </div>

        {[
          { Icon: Brain, cls: '-left-6 top-10', d: 0 },
          { Icon: Database, cls: '-right-5 top-1/2', d: 1.2 },
          { Icon: Code2, cls: 'left-10 -bottom-6', d: 2.4 },
        ].map(({ Icon, cls, d }, k) => (
          <motion.div key={k} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: d }}
            className={`glass absolute ${cls} grid h-12 w-12 place-items-center rounded-xl text-sky-300 shadow-lg`}>
            <Icon size={22} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const typed = useTyping(typingPhrases)
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } })

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[26rem] w-[26rem] rounded-full bg-sky-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.p {...fade(0)} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <MapPin size={13} /> {profile.location}
          </motion.p>
          <motion.h1 {...fade(0.1)} className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="gradient-text">Khushi Mangal Singh</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
            Aspiring AI Engineer | MCA Student | Software Developer
          </motion.p>
          <motion.p {...fade(0.3)} className="mt-3 h-8 font-mono text-base text-sky-300" aria-hidden="true">
            &gt; {typed}<span className="animate-blink">▍</span>
          </motion.p>
          <motion.p {...fade(0.4)} className="mt-5 max-w-xl leading-relaxed text-slate-400">
            I’m an MCA student who enjoys turning ideas into working software. I’m building a strong foundation in
            programming, data and machine learning, with the goal of creating useful AI-powered products.
          </motion.p>
          <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">Explore My Work <ArrowRight size={16} /></a>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <Visual />
        </motion.div>
      </div>
    </section>
  )
}
