import { cn } from '@/lib/utils'

export const FocusText = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'font-bold transition-colors duration-150 hover:text-red-600',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
