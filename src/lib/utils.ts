import { clsx, type ClassValue } from 'clsx'
import { getTranslations } from 'next-intl/server'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const activateAndClick = (elementRef: HTMLElement, clickable = true) => {
  const element = elementRef
  const parentElement = elementRef.parentElement

  if (!(parentElement && element)) return null
  activateItem(element, parentElement)

  if (!clickable) return null
  if (!localStorage) return null
  elementClick(element)
}

export const activateItem = (
  element: HTMLElement,
  parentElement: HTMLElement,
) => {
  // iterate over all childs
  for (let i = 0; i < parentElement.childElementCount; i++) {
    // Set all Children data-active=false
    parentElement.children[i]?.setAttribute('data-active', 'false')
  }
  element.setAttribute('data-active', 'true')
}

export const elementClick = (element: HTMLElement) => {
  element.click()
}

export const getFormattedTranslation = async (locale: string) => {
  const intl = await getTranslations({ locale, namespace: 'Index' })
  const keys = ['about', 'experience', 'projects'] as const

  return {
    description: intl('description') ?? '',
    position: intl('position') ?? '',
    navbarConfig: {
      titles: {
        about: intl('navItems.about.title') ?? '',
        experience: intl('navItems.experience.title') ?? '',
        projects: intl('navItems.projects.title') ?? '',
      },
      navItems: keys.map((key) => ({
        id: Number(intl(`navItems.${key}.id`)) ?? 0,
        title: intl(`navItems.${key}.title`) ?? '',
        href: intl(`navItems.${key}.href`) ?? '',
      })),
    },
  }
}
