import { useEffect } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'

// Page-wide ambient layer: drifting gradient blobs (parallax),
// a soft cursor glow and a scroll progress bar. All pointer-events-none.
export default function Background() {
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const blobY1 = useTransform(scrollY, [0, 3000], [0, -220])
  const blobY2 = useTransform(scrollY, [0, 3000], [0, 160])

  const mx = useSpring(useMotionValue(-300), { stiffness: 120, damping: 20 })
  const my = useSpring(useMotionValue(-300), { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const move = (e) => { mx.set(e.clientX - 200); my.set(e.clientY - 200) }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])


  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary to-lavender" style={{ scaleX: progress }} />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y: blobY1 }} className="absolute -left-40 top-0 h-[34rem] w-[34rem] animate-drift rounded-full bg-lav-soft/60 blur-[120px]" />
        <motion.div style={{ y: blobY2 }} className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] animate-drift rounded-full bg-periwinkle/25 blur-[120px] [animation-delay:-8s]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-drift rounded-full bg-sage/20 blur-[110px] [animation-delay:-4s]" />
        <motion.div
          style={{ x: mx, y: my }}
          className="absolute left-0 top-0 hidden h-[25rem] w-[25rem] rounded-full bg-primary/[0.07] blur-3xl [@media(hover:hover)]:block"
        />
      </div>
    </>
  )
}
