'use client'

import { BootScreen } from '@/components/boot-screen'
import { Devices } from '@/components/devices'
import { LoadingScreen } from '@/components/loading-screen'
import { MainMenu } from '@/components/main-menu'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export type ScreenStates =
  | 'boot-screen'
  | 'loading-screen'
  | 'menu-screen'
  | 'devices'

export default function Home() {
  const [screenState, setScreenState] = useState<ScreenStates>('boot-screen')

  // const BootScreen = dynamic(() =>
  //   import('../../components/boot-screen').then((mod) => mod.BootScreen),
  // )

  // const LoadingScreen = dynamic(() =>
  //   import('../../components/loading-screen').then((mod) => mod.LoadingScreen),
  // )

  // const MainMenu = dynamic(() =>
  //   import('../../components/main-menu').then((mod) => mod.MainMenu),
  // )

  return (
    <main className="relative h-screen w-screen text-zinc-100">
      <AnimatePresence>
        {screenState === 'boot-screen' && (
          <BootScreen {...{ setScreenState }} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {screenState === 'loading-screen' && (
          <LoadingScreen {...{ setScreenState }} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {screenState === 'menu-screen' && <MainMenu {...{ setScreenState }} />}
      </AnimatePresence>

      <AnimatePresence>
        {screenState === 'devices' && <Devices {...{ setScreenState }} />}
      </AnimatePresence>
    </main>
  )
}
