import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'
import { GlitchText } from './glitch'
import { useSelectMouse } from '@/hooks/use-select-mouse'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  textHidden: string
  showLine?: boolean
}

const MenuOptionComponent: FC<MenuOptionsProps> = ({
  children,
  textHidden,
  className,
  showLine,
  onClick,
  ...props
}) => {
  const { word, start } = useTypingText(children as string, 30)
  const MenuOptionRef = useRef<HTMLDivElement>(null)

  useTextHackerEffect(MenuOptionRef)
  useSelectMouse(MenuOptionRef)

  setTimeout(() => start(), 625)

  return (
    <div
      className={cn(
        'MenuOption group flex w-full max-w-[350px] flex-col items-center',
        className,
      )}
      ref={MenuOptionRef}
      onClick={onClick}
      {...props}
    >
      <GlitchText
        className="pointer-events-none select-none text-lg text-nier-100 [text-shadow:_2px_2px_1px_rgba(48,42,36,0.5)] md:text-xl"
        index={0}
        data-value={children as string}
        data-hidden={textHidden}
      >
        {word}
      </GlitchText>
      <div className="MenuLine group pointer-events-none flex items-center justify-center gap-1">
        <MenuDot showLine={showLine} />
        <MenuLine showLine={showLine} />
        <MenuDot showLine={showLine} />
      </div>
    </div>
  )
}

const MenuDot = ({ showLine }: { showLine: boolean | undefined }) => (
  <span
    className={`dot h-[6px] w-[6px] rounded-full bg-nier-100 
      ${
        showLine
          ? 'opacity-100'
          : 'opacity-0 group-data-[active=true]:opacity-100'
      }`}
  />
)

const MenuLine = ({ showLine }: { showLine: boolean | undefined }) => (
  <span
    className={`line h-[2px] bg-nier-100 transition-all duration-[30ms] 
${
  showLine
    ? 'w-48 opacity-100 md:w-72'
    : 'w-0 opacity-0 group-data-[active=true]:w-48 group-data-[active=true]:opacity-100 group-data-[active=true]:md:w-[350px]'
}`}
  />
)

export const MenuOption = memo(MenuOptionComponent)