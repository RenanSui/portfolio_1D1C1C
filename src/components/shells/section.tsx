'use client'

import { HTMLAttributes, useEffect } from 'react'

interface ShellProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  id: string
}

export const Section = ({ children, as: Shell = 'section', id, ...props }: ShellProps) => {
  useEffect(() => {
    function changeBodySection() {
      const element = document.querySelector(`#${id}`) as HTMLElement

      const offsetTop = element.offsetTop
      const height = element.clientHeight
      const scrollTop = window.scrollY + 97 // margin-bottom-24 + 1 pixel

      const isScrollGreaterThanOffset = scrollTop > offsetTop
      const isScrollLessThanOffsetAndHeight = scrollTop < offsetTop + height

      if (isScrollGreaterThanOffset && isScrollLessThanOffsetAndHeight) {
        document.body.setAttribute('data-nav', id ?? '')
      }
    }

    document.addEventListener('scroll', changeBodySection)
    return () => document.removeEventListener('scroll', changeBodySection)
  }, [id])

  return (
    <Shell id={id} {...props}>
      {children}
    </Shell>
  )
}
