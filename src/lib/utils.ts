import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const arrayMaker = (quantity: number) => {
  const array = []
  for (let i = 0; i < quantity; i++) array.push(i)
  return array
}

export const CapitalizeWords = (word: string) => {
  const wordSplitted = word.trim().split(' ')
  const joinWords = wordSplitted
    .map((word) => {
      return word[0]?.toLocaleUpperCase().concat(word.substring(1))
    })
    .join(' ')

  return joinWords
}

export const getRefAttribute = (ref: HTMLElement, attribute: string, initialValue: string) => {
  const elementAttributeValue = ref?.getAttribute(attribute)

  if (!elementAttributeValue) {
    setRefAttribute(ref, attribute, initialValue)

    const elAttributeValue = ref?.getAttribute(attribute)
    const Value = elAttributeValue || initialValue

    return Value
  }

  const Value = elementAttributeValue || initialValue
  return Value
}

export const setRefAttribute = (ref: HTMLElement, attribute: string, value: unknown) => {
  ref?.setAttribute(attribute, String(value))
}

export const getCurrentDimension = () => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export const getChildrenLength = (element: HTMLElement) => {
  return element ? element.childElementCount - 1 : 0
}

export const getElementIdValue = (element: HTMLElement, attribute: string) => {
  return Number(getRefAttribute(element, attribute, '0'))
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
