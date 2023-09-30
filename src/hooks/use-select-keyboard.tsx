import { getRefAttribute, setRefAttribute } from '@/lib/utils'
import { RefObject, useEffect } from 'react'

export const useSelectKeyboard = (elementRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyboard(e, elementRef))
    return () =>
      document.removeEventListener('keydown', (e) =>
        handleKeyboard(e, elementRef),
      )
  }, [elementRef])
}

const handleActivateOption = (elementRef: RefObject<HTMLElement>) => {
  if (elementRef.current) {
    const currentElement = elementRef.current
    const elementDataIdValue = Number(
      getRefAttribute(currentElement, 'data-element-id', '0'),
    )

    for (let i = 0; i < currentElement.childElementCount; i++) {
      currentElement.children[i]?.setAttribute('data-active', 'false')
    }

    currentElement?.children[elementDataIdValue]?.setAttribute(
      'data-active',
      'true',
    )
  }
}

const handleElementClickEvent = (elementRef: RefObject<HTMLElement>) => {
  if (elementRef.current) {
    const elementDataIdValue = getRefAttribute(
      elementRef.current,
      'data-elementType',
      'about-me',
    )

    if (elementDataIdValue === 'settings') {
      const settingsDataIdValue = Number(
        getRefAttribute(elementRef.current, 'data-element-id', '0'),
      )

      const elementOption = elementRef.current.children[
        settingsDataIdValue
      ] as HTMLDivElement

      elementOption.click()
    }

    // const elementDataIdValue = Number(
    //   getRefAttribute(elementRef.current, 'data-element-id', '0'),
    // )

    // const elementOption = elementRef.current.children[
    //   elementDataIdValue
    // ] as HTMLDivElement

    // if (elementOption) elementOption.click()
  }
}

const handleArrowUp = (elementRef: RefObject<HTMLElement>) => {
  if (elementRef.current) {
    const currentElement = elementRef.current

    const elementChildrenLength = currentElement
      ? currentElement.childElementCount - 1
      : 0

    const elementDataIdValueValue =
      Number(getRefAttribute(currentElement, 'data-element-id', '0')) - 1

    // if less than 0 return Length
    const elementNewDataValue =
      elementDataIdValueValue < 0
        ? elementChildrenLength
        : elementDataIdValueValue

    setRefAttribute(currentElement, 'data-element-id', elementNewDataValue)
  }
}

const handleArrowDown = (elementRef: RefObject<HTMLElement>) => {
  if (elementRef.current) {
    const currentElement = elementRef.current

    const elementChildrenLength = currentElement
      ? currentElement.childElementCount - 1
      : 0

    const elementDataIdValue =
      Number(getRefAttribute(currentElement, 'data-element-id', '0')) + 1

    // if greater than length return 0
    const elementNewDataValue =
      elementDataIdValue > elementChildrenLength ? 0 : elementDataIdValue

    setRefAttribute(currentElement, 'data-element-id', elementNewDataValue)
  }
}

const handleKeyboard = (
  e: KeyboardEvent,
  elementRef: RefObject<HTMLElement>,
) => {
  if (elementRef.current) {
    if (e.key === 'Enter' || e.key === 'e' || e.key === 'f') {
      handleElementClickEvent(elementRef)
    }

    if (e.key === 'ArrowUp') handleArrowUp(elementRef)
    if (e.key === 'ArrowDown') handleArrowDown(elementRef)
  }

  handleActivateOption(elementRef)
}
