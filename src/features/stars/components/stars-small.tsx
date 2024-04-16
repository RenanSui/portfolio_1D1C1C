import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { StarsStyles } from '../config'

interface StarsSmallProps {
  index: number
  size: { width: number; height: number }
}

export const StarsSmall = ({ index, size: screenSize }: StarsSmallProps) => {
  const randomStar = Math.floor(Math.random() * StarsStyles.length)
  const AnimationDuration = Math.floor(Math.random() * 30)

  const { height, width } = screenSize

  // Range between -160 ~ 160
  const randomStarAnimation = () => Math.trunc(Math.random() * 320 - 160)

  return (
    <motion.div
      layout
      key={index}
      className={cn(
        'fixed bg-white shadow-[0px_0px_10px_0px_rgba(255,255,255,1)] will-change-auto',
        StarsStyles[randomStar],
      )}
      style={{
        top: Math.floor(Math.random() * height),
        left: Math.floor(Math.random() * width),
      }}
      animate={{
        x: [0, randomStarAnimation()],
        y: [0, randomStarAnimation()],
        opacity: [0, 0, 1, 0, 1, 1, 1, 0, 0],
      }}
      transition={{
        repeat: Infinity,
        delay: Math.floor(Math.random() * 15),
        repeatDelay: Math.floor(Math.random() * 30),
        duration: AnimationDuration <= 3 ? 3 : AnimationDuration,
      }}
    ></motion.div>
  )
}
