import { motion, useReducedMotion } from 'motion/react'
import { revealVariants } from './variants.js'

function Reveal({ children, className = '', delay = 0, ...props }) {
  const prefersReducedMotion = useReducedMotion()
  const variants = {
    ...revealVariants,
    visible: {
      ...revealVariants.visible,
      transition: {
        ...revealVariants.visible.transition,
        delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.18 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
