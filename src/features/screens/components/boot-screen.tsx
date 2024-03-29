'use client'

import { AnimatedShell } from '@/components/shells/animated-shell'
import { Icons } from '@/components/ui/icons'
import { NierVignette } from '@/features/nier'
import { Concielian } from '@/lib/fonts'
import { useSkipScreen } from '../hooks/use-skip-screen'

export const BootScreen = () => {
  const { finishAnimation } = useSkipScreen('bootAnimation', 'loading-screen')

  return (
    <AnimatedShell
      className="absolute bottom-0 left-0 right-0 top-0 flex cursor-default select-none items-center justify-center bg-nier-light-100 text-9xl font-bold text-nier-light-900 blur-[1.2px]"
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
      onClick={finishAnimation}
    >
      <NierVignette variant={'dark'} />
      <h1 className="sr-only">Boot Screen</h1>
      <p className={`${Concielian.className}`}>R</p>
      <Icons.stars />
    </AnimatedShell>
  )
}
