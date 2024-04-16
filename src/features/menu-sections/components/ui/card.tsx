import { NierLoadingText, NierSquare } from '@/features/nier'
import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'

const Card = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('relative z-[10000] flex flex-col bg-nier-light-100 pb-3 shadow-lg md:max-w-[700px]', className)}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex items-center gap-3 bg-nier-light-800 px-3 py-2', className)}>
      <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-light-100" />
      {children}
    </div>
  )
}

const CardHeading = ({
  className,
  children,
  as: Shell = 'h1',
}: HTMLAttributes<HTMLHeadingElement> & { children: string; className?: string; as?: React.ElementType }) => {
  return (
    <Shell className={cn('text-nier-light-100 transition-all md:text-xl', className)}>
      {typeof children === 'string' ? <NierLoadingText>{children}</NierLoadingText> : children}
    </Shell>
  )
}

const CardContent = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('m-4', className)}>{children}</div>
}

const CardImage = ({ className, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      // role="button"
      className={cn('projectImage relative block aspect-video w-full bg-nier-light-800 bg-cover', className)}
      {...props}
    />
  )
}

const CardImageLink = ({ className, href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      href={href}
      className={cn('projectImage relative block aspect-video cursor-pointer bg-nier-light-800 bg-cover', className)}
      target="_blank"
    >
      {children}
    </a>
  )
}

const CardSeparator = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(' h-[1px] bg-nier-light-800 opacity-70', className)} />
}

const CardDescription = ({
  className,
  children,
  as: Shell = 'p',
}: HTMLAttributes<HTMLHeadingElement> & { children: string; as?: React.ElementType }) => {
  return (
    <Shell
      className={cn(
        'relative my-2 line-clamp-2 font-sans font-normal text-nier-light-900 md:text-lg lg:text-xl',
        className,
      )}
    >
      <NierLoadingText>{children}</NierLoadingText>
    </Shell>
  )
}

const CardFooter = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('mx-4', className)}>{children}</div>
}

const CardButton = ({
  className,
  children = '',
  ...props
}: HTMLAttributes<HTMLButtonElement> & { children?: string }) => {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-sm bg-nier-light-trans-500 px-6 py-2 text-lg text-nier-light-900 transition-all duration-150 hover:bg-nier-light-800 hover:text-nier-light-100',
        className,
      )}
      {...props}
    >
      <NierLoadingText>{children}</NierLoadingText>
    </button>
  )
}

const CardButtonLink = ({
  className,
  children = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: string }) => {
  return (
    <a
      className={cn(
        'cursor-pointer rounded-sm bg-nier-light-trans-500 px-6 py-2 text-lg text-nier-light-900 transition-all duration-150 hover:bg-nier-light-800 hover:text-nier-light-100',
        className,
      )}
      target="_blank"
      {...props}
    >
      <NierLoadingText>{children}</NierLoadingText>
    </a>
  )
}

export {
  Card,
  CardButton,
  CardButtonLink,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardImageLink,
  CardSeparator,
}
