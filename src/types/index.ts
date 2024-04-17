import { Icons } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'

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

export type SiteConfig = ReturnType<typeof siteConfig>

export type Project = {
  id: string
  title: string
  slug: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titleImage: any
  description: string
  liveDemoLink: string
  githubLink: string
  technologies?: string[]
}
