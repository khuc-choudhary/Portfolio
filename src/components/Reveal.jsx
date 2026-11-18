import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-sky-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
