import { Socials } from '@/types'
import { getTranslations } from 'next-intl/server'

export const locales = ['en', 'pt-br']

export const socials: Socials[] = [
  { title: 'GitHub', href: 'https://github.com/RenanSui', icon: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/renansui/', icon: 'linkedin' },
  { title: 'Gmail', href: 'mailto: renanddtao@gmail.com', icon: 'gmail' },
  { title: 'Whatsapp', href: 'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello', icon: 'whatsapp' },
]

export const links = {
  github: 'https://github.com/RenanSui/portfolio_1d1c1c',
  githubAccount: 'https://github.com/RenanSui',
}

export const siteConfig = (intl?: Awaited<ReturnType<typeof getTranslations>>) => {
  const keys = ['about', 'experience', 'projects'] as const

  const dynamicLanguage = {
    author: intl?.('author') ?? '',
    description: intl?.('description') ?? '',
    position: intl?.('position') ?? '',
    navbarConfig: {
      navTitles: {
        about: intl?.('navItems.about.title') ?? '',
        experience: intl?.('navItems.experience.title') ?? '',
        projects: intl?.('navItems.projects.title') ?? '',
      },
      navItems: keys.map((key) => ({
        id: Number(intl?.(`navItems.${key}.id`)) ?? 0,
        title: intl?.(`navItems.${key}.title`) ?? '',
        href: intl?.(`navItems.${key}.href`) ?? '',
      })),
    },
  }

  return {
    website: 'portfolio_1d1c1c',
    links,
    socials,
    ...dynamicLanguage,
  }
}
