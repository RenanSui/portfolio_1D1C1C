import { TextGlitched } from '@/components/ui/text-glitched'
import { useSelectMouse } from '@/hooks/use-select-mouse'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, memo, useRef } from 'react'
import { MenuDot } from './menu-dot'
import { MenuLine } from './menu-line'

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  textHidden: string
  showLine?: boolean
  index?: number
}

const MenuItemComponent: FC<MenuItemProps> = ({
  children,
  textHidden,
  className,
  showLine,
  index = 1,
  onClick,
  ...props
}) => {
  const MenuOptionRef = useRef<HTMLDivElement>(null)

  useSelectMouse(MenuOptionRef, '', false)

  return (
    <div
      className={cn(
        'MenuOption group flex w-full max-w-[350px] flex-col items-center text-lg md:text-xl',
        className,
      )}
      ref={MenuOptionRef}
      onClick={onClick}
      {...props}
    >
      <TextGlitched
        className="pointer-events-none select-none text-nier-100 [text-shadow:_2px_2px_1px_rgba(48,42,36,0.5)]"
        index={index}
        data-value={children as string}
        data-hidden={textHidden}
      >
        {children}
      </TextGlitched>
      <div className="MenuLine group pointer-events-none flex items-center justify-center gap-1">
        <MenuDot showLine={showLine} />
        <MenuLine showLine={showLine} />
        <MenuDot showLine={showLine} />
      </div>
    </div>
  )
}

export const MenuItem = memo(MenuItemComponent)