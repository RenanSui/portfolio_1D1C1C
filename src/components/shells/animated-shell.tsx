'use client'

import { HTMLMotionProps, motion } from 'framer-motion'

export const AnimatedShell = ({
  children,
  className,
  initial,
  animate,
  exit,
  ...props
}: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      className={className}
      initial={initial || { opacity: 0 }}
      animate={
        animate || { opacity: 1, transition: { delay: 0.6, duration: 1 } }
      }
      exit={exit || { opacity: 0, transition: { duration: 0.3 } }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
