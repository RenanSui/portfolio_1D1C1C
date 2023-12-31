import { Icons } from '@/components/ui/icons'
import { NierLoadingText } from '@/features/nier'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface HeaderProps extends HTMLAttributes<SVGSVGElement> {
  children: string
}

export const SectionHeading = ({
  children,
  className,
  onClick,
}: HeaderProps) => {
  return (
    // <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
    <div className="flex cursor-default items-center md:pl-6">
      <Icons.chevronLeft className="h-8 w-8 cursor-pointer" onClick={onClick} />

      <h1
        className={cn(
          'text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl',
          className,
        )}
      >
        <NierLoadingText>{children}</NierLoadingText>
      </h1>
    </div>
  )
}
