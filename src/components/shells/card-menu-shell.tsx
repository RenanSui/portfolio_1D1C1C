'use client'

import { CardMenuHeading, CardMenuLink } from '@/features/menu-sections/components/ui/card-menu'
import { activateAndClick } from '@/lib/utils'
import { NavItem } from '@/types'
import { HTMLAttributes } from 'react'

type CardMenuShellProps = HTMLAttributes<HTMLDivElement> & {
  nav: NavItem
}

export const CardMenuShell = ({ nav }: CardMenuShellProps) => {
  return (
    <CardMenuLink
      href={`#${nav.href}`}
      key={`project-${nav.id}`}
      data-active={nav.id === 0 ? 'true' : 'false'}
      // onMouseOver={(e) => activateAndClick(e.currentTarget, false)}
      onClick={(e) => activateAndClick(e.currentTarget, false)}
    >
      <CardMenuHeading as="span">{nav.title.toUpperCase()}</CardMenuHeading>
    </CardMenuLink>
  )
}
