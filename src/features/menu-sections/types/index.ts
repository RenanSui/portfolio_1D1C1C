import { OptionStates } from '@/types'
import { LucideIcon } from 'lucide-react'

export type SectionItem = {
  id: number
  section: string
  description: string
  sectionLink: OptionStates
  imagePreview: string
}

export type SkillItem = {
  id: number
  name: string
  organization: string
  pdfLink?: string
  imageLink: string
  bgImage: string
}

export type ProjectItem = {
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

export type SocialItem = {
  id: number
  social: string
  contact: string
  contactLink: string
  icon: LucideIcon
}
