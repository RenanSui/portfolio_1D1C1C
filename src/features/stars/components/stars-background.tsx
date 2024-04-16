'use client'

import { AnimatedShell } from '@/components/shells/animated-shell'
import { arrayMaker, getCurrentDimension } from '@/lib/utils'
import { HTMLAttributes, memo, useEffect, useState } from 'react'
import { StarsBig } from './stars-big'
import { StarsMedium } from './stars-medium'
import { StarsSmall } from './stars-small'

const Stars = (props: HTMLAttributes<HTMLDivElement>) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  const small = arrayMaker(Math.floor(screenSize.width / 32))
  const medium = arrayMaker(Math.floor(screenSize.width / 19))
  const big = arrayMaker(Math.floor(screenSize.width / 32))

  const Stars = {
    Small: small.map((_, index) => <StarsSmall key={`A${index}`} index={index} size={screenSize} />),
    Medium: medium.map((_, index) => <StarsMedium key={`B${index}`} index={index} size={screenSize} />),
    Big: big.map((_, index) => <StarsBig key={`C${index}`} index={index} size={screenSize} />),
  }

  useEffect(() => {
    const updateDimension = () => setScreenSize(getCurrentDimension())

    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  return (
    <AnimatedShell exit={{ opacity: 0, transition: { duration: 2 } }}>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-[10000] h-full w-full" {...props}>
        <div className="fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
          {Stars.Small}
          {Stars.Medium}
          {Stars.Big}
        </div>

        <div className="absolute bottom-0 z-10 h-[30px] w-full backdrop-blur-[3px] md:h-[100px]" />
      </div>
    </AnimatedShell>
  )
}

export const StarsOrbiting = memo(Stars)
