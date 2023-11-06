import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSelector } from '../nier/nier-selector'
import { NierSquare } from '../nier/nier-square'

interface ContactButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
  reverse?: boolean
}

export const ContactButton = ({
  children,
  className,
  reverse,
  ...props
}: ContactButtonProps) => {
  return (
    <button
      className={cn(
        'transitin-all group relative flex cursor-default items-center gap-4 bg-nier-400 p-2 pl-3 pr-6 text-black duration-300 hover:bg-nier-700 hover:text-nier-600 hover:shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:pr-16 md:text-xl',
        className,
      )}
      {...props}
    >
      <NierSelector
        className={cn(
          'hidden group-hover:opacity-100 md:block',
          reverse ? '-right-12 rotate-90' : '-left-12',
        )}
      />
      <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-900 group-hover:bg-nier-600" />
      <LoadingText>{children}</LoadingText>
    </button>
  )
}
