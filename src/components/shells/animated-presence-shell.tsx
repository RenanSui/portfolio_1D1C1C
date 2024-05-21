'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export const AnimatedPresenceShell = ({
  children,
}: {
  children: ReactNode
}) => {
  return <AnimatePresence>{children}</AnimatePresence>
}
