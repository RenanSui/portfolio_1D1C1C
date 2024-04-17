import { clsx, type ClassValue } from 'clsx'
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

export const activateItem = (element: HTMLElement, parentElement: HTMLElement) => {
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
