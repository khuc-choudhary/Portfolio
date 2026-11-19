import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-lav-light px-4 py-1.5 font-mono text-xs uppercase tracking-[0.22em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">{title}</h2>
      {subtitle && <p className="mt-4 leading-relaxed text-ink/60">{subtitle}</p>}
    </Reveal>
  )
}
