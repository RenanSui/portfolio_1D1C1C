import { Icons } from '@/components/ui/icons'
import { getFormattedTranslation } from '@/lib/utils'

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

export type localeConfig = Awaited<ReturnType<typeof getFormattedTranslation>>

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
