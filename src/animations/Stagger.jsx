import { motion, useReducedMotion } from 'motion/react'
import { staggerContainerVariants, staggerItemVariants } from './variants.js'

export function Stagger({ children, className = '', ...props }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainerVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', ...props }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : 'hidden'}
      variants={staggerItemVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
