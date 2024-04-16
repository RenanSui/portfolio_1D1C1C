'use client'

import { NierLoadingText } from '@/features/nier'
import { useLocalStorageBoolean } from '@/hooks/use-local-storage-state'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'

interface LoadinTextProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  index?: number
}

export const TextGlitched = ({ children, index, className }: LoadinTextProps) => {
  const [isChecked] = useLocalStorageBoolean('glitchAnimation', true)

  if (!isChecked)
    return (
      <p className={cn('inline-block select-none', className)}>
        <NierLoadingText index={index}>{children}</NierLoadingText>
      </p>
    )

  return (
    <span
      className={cn(
        'relative text-transparent [text-shadow:_0.03em_0.03em_0.05em_#91433B50,_-0.03em_-0.03em_0.05em_#314E4550]',
      )}
    >
      <GlitchTop className={className}>
        <NierLoadingText index={index}>{children}</NierLoadingText>
      </GlitchTop>
      <span className="inline-block">
        <NierLoadingText index={index}>{children}</NierLoadingText>
      </span>
      <GlitchBottom className={className}>
        <NierLoadingText index={index}>{children}</NierLoadingText>
      </GlitchBottom>
    </span>
  )
}

const GlitchTop = ({ children, className }: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className={cn('absolute left-0 top-0', className)}
    initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
    animate={{
      x: [-4, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
      },
    }}
  >
    {children}
  </motion.span>
)

const GlitchBottom = ({ children, className }: HTMLAttributes<HTMLSpanElement>) => (
  <motion.span
    className={cn('absolute left-0 top-0', className)}
    initial={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
    animate={{
      x: [-4, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: ((2 * Math.floor(Math.random() * 35)) / 40) * 10,
      },
    }}
  >
    {children}
  </motion.span>
)
