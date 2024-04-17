'use client'

import { CardMenu, CardMenuHeading, CardMenuLink } from '@/features/menu-sections/components/ui/card-menu'
import { activateAndClick } from '@/lib/utils'
import { NavItem } from '@/types'
import { HTMLAttributes, useEffect, useState } from 'react'

type CardMenuShellProps = HTMLAttributes<HTMLDivElement> & {
  sidebarNav: NavItem[]
}

export const CardMenuShell = ({ sidebarNav }: CardMenuShellProps) => {
  const [MenuActive, setMenuActive] = useState('about')

  useEffect(() => {
    function changeActive() {
      const dataNav = document.body.getAttribute('data-nav')
      if (!dataNav) return null

      if (dataNav !== MenuActive) {
        setMenuActive(dataNav)
      }
    }

    document.addEventListener('scroll', changeActive)
    return () => document.removeEventListener('scroll', changeActive)
  }, [MenuActive])

  return (
    <CardMenu className="mt-12 py-2 text-nier-light-900">
      {sidebarNav.map((nav) => (
        <CardMenuLink
          href={`#${nav.href}`}
          key={`nav-${nav.id}`}
          data-active={nav.href.toLowerCase() === MenuActive.toLowerCase() ? 'true' : 'false'}
          onClick={(e) => activateAndClick(e.currentTarget, false)}
        >
          <CardMenuHeading as="span">{nav.title.toUpperCase()}</CardMenuHeading>
        </CardMenuLink>
      ))}
    </CardMenu>
  )
}
