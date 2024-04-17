import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { NierLoadingText } from '../nier/nier-loading-text'
import { NierSelector } from '../nier/nier-selector'

type CardMenuProps = React.HTMLAttributes<HTMLDivElement>

const CardMenu = ({ children, className }: CardMenuProps) => {
  const CardShadow = 'shadow-lg'

  return (
    <div className={cn('relative z-[10000] bg-nier-light-100', CardShadow, className)}>
      <div className="mx-3 mb-2 mt-2 h-[1px] bg-nier-light-800 opacity-70" />
      {children}
    </div>
  )
}

const CardMenuItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn('clickable group data-[active=true]:animate-pulse', className)} ref={ref} {...props}>
        <div className="pointer-events-none my-1 h-[2px] w-full bg-nier-light-800 opacity-0 group-data-[active=true]:opacity-100" />
        <div className="pointer-events-none relative flex h-[50px] flex-col justify-center transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-0 bg-nier-light-800 transition-all duration-500 ease-in-out group-data-[active=true]:w-full" />
          <NierSelector className={cn('-left-11 hidden group-hover:opacity-100 md:block')} />
          {children}
        </div>
        <div className="pointer-events-none my-1 h-[2px] w-full bg-nier-light-800 opacity-0 group-data-[active=true]:opacity-100" />
      </div>
    )
  },
)
CardMenuItem.displayName = 'CardMenuItem'

const CardMenuLink = ({ className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={cn('clickable group data-[active=true]:animate-pulse', className)} {...props}>
      <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-data-[active=true]:opacity-100" />
      <span className="pointer-events-none relative flex h-[50px] flex-col justify-center transition-all duration-300">
        <span className="absolute bottom-0 left-0 right-0 top-0 h-full w-0 bg-nier-light-800 transition-all duration-500 ease-in-out group-data-[active=true]:w-full" />
        <NierSelector className={cn('-left-11 hidden group-hover:opacity-100 md:block')} />
        {children}
      </span>
      <span className="pointer-events-none my-1 block h-[2px] w-full bg-nier-light-800 opacity-0 group-data-[active=true]:opacity-100" />
    </a>
  )
}

type CardMenuHeadingProps = {
  children: string
  as?: React.ElementType
} & React.HTMLAttributes<HTMLDivElement>

const CardMenuHeading = ({ children, as: Shell = 'h1', className }: CardMenuHeadingProps) => {
  return (
    <Shell
      className={cn(
        'pointer-events-none z-10 mx-3 flex cursor-default items-center gap-3 transition-colors duration-500 group-data-[active=true]:text-nier-light-100 md:text-xl',
        className,
      )}
    >
      <CardMenuSquare />
      <NierLoadingText>{children}</NierLoadingText>
    </Shell>
  )
}

type CardMenuSquareProps = React.HTMLAttributes<HTMLDivElement>

const CardMenuSquare = ({ className }: CardMenuSquareProps) => {
  return (
    <span
      className={cn(
        'h-[20px] w-[20px] group-data-[active=false]:border-2 group-data-[active=false]:border-nier-light-800 group-data-[active=true]:bg-nier-light-100',
        className,
      )}
    ></span>
  )
}

export { CardMenu, CardMenuHeading, CardMenuItem, CardMenuLink, CardMenuSquare }
