import { Icons } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'

export type ScreenStates = 'boot-screen' | 'loading-screen' | 'menu-screen' | 'devices'

export type MenuStates = '' | 'press-any' | 'menu' | 'menu-sections'

export type OptionStates = '' | 'about-me' | 'projects' | 'settings' | 'contact' | 'exit-game'

export type NavItem = {
  id: number
  title: string
  href: string
}

export type Socials = {
  title: string
  href: string
  icon?: keyof typeof Icons
}

export type NavbarConfig = {
  sidebarNav: NavItem[]
  socials: Socials[]
}

export type SiteConfig = ReturnType<typeof siteConfig>
