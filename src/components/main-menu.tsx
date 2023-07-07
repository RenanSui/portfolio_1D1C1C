import { RodinPro } from '@/lib/fonts'
import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { StarsBackground } from './stars-background'
import { ShellAnimated } from './ui/ShellAnimated'
import { MenuOption } from './ui/menu-option'
import { MenuOptions } from './ui/menu-options'

const MainMenu = () => {
  const [showPressAny, setShowPressAny] = useState(true)
  const [showMenuOptions, setShowMenuOptions] = useState(false)

  const HandlePressAny = () => setShowPressAny(false)
  const HandleExitGame = () => setShowMenuOptions(false)

  const onKeyPressed = useCallback(
    (e: KeyboardEvent) => {
      if (showPressAny) HandlePressAny()
      if (e.key === 'Escape' && showMenuOptions) HandleExitGame()
    },
    [showMenuOptions, showPressAny],
  )

  // linear-gradient(180deg,_hsla(231,_39%,_6%,_1)_0%,_hsla(222,_67%,_10%,_1)_60%,_hsla(199,_17%,_19%,_1)_90%,_hsla(105,_7%,_34%,_1)_100%)
  // linear-gradient(180deg,_hsla(231,_39%,_6%,_1)_0%,_hsla(222,_67%,_10%,_1)_59%,_hsla(206,_15%,_18%,_1)_83%,_hsla(105,_7%,_34%,_1)_100%)
  // linear-gradient(180deg,_hsla(231,_39%,_6%,_1)_0%,_hsla(222,_67%,_10%,_1)_60%,_hsla(199,_17%,_19%,_1)_90%,_hsla(106,_10%,_40%,_1)_100%)

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [onKeyPressed])

  return (
    <ShellAnimated
      className={`flex h-full w-full flex-col bg-[linear-gradient(180deg,_hsla(227,_88%,_3%,_1)_0%,_hsla(222,_67%,_10%,_1)_60%,_hsla(199,_17%,_19%,_1)_90%,_hsla(105,_7%,_34%,_1)_100%)] font-medium tracking-[0.15em] ${RodinPro.className}`}
    >
      <StarsBackground />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(255,0,0,0)] backdrop-blur-[0.7px]" />
      <AnimatePresence onExitComplete={() => setShowMenuOptions(true)}>
        {showPressAny && (
          <div className="h-full w-full" onClick={HandlePressAny}>
            <ShellAnimated className="absolute bottom-48 left-1/2 -translate-x-1/2 sm:bottom-60">
              <MenuOptions>
                <MenuOption>Press Any Button</MenuOption>
              </MenuOptions>
            </ShellAnimated>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence onExitComplete={() => setShowPressAny(true)}>
        {showMenuOptions && (
          <ShellAnimated className="absolute bottom-20 left-1/2 -translate-x-1/2 sm:bottom-40">
            <MenuOptions className="flex flex-col gap-3">
              <MenuOption>Continue</MenuOption>
              <MenuOption>New Game</MenuOption>
              <MenuOption>Settings</MenuOption>
              <MenuOption>License</MenuOption>
              <MenuOption onClick={HandleExitGame}>Exit Game</MenuOption>
            </MenuOptions>
          </ShellAnimated>
        )}
      </AnimatePresence>
    </ShellAnimated>
  )
}

export { MainMenu }
