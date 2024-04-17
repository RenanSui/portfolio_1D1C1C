import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const NierVignetteVariants = cva('pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-[10000] select-none', {
  variants: {
    variant: {
      light: 'bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.125)_0%,_hsla(0,_0%,_0%,_0.125)_100%)]',
      dark: 'bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.125)_0%,_hsla(0,_0%,_0%,_0.3)_100%)]',
      darker: 'bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.125)_0%,_hsla(0,_0%,_0%,_0.5)_100%)]',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

interface NierVignetteProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof NierVignetteVariants> {}

export const NierVignette: FC<NierVignetteProps> = ({ className, variant }) => {
  return <div className={cn(NierVignetteVariants({ variant, className }))} />
}
