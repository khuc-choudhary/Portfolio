import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Short, non-blocking intro: shows initials for ~1.1s then lifts away.
export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center bg-canvas"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="relative grid h-28 w-28 place-items-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#F4E1D2" strokeWidth="3" />
              <motion.circle
                cx="50" cy="50" r="46" fill="none" stroke="#5E3A4D" strokeWidth="3" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </svg>
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="gradient-text font-display text-4xl font-extrabold"
            >
              KM
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
