import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const NierSquare = ({ className, children }: HTMLAttributes<HTMLDivElement>) => (
  <span
    className={`${cn(
      'h-[25px] w-[25px] cursor-pointer bg-nier-light-800 transition-all group-data-[active=true]:bg-nier-light-100',
      className,
    )}`}
  >
    {children}
  </span>
)
