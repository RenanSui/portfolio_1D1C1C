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

      const sectionOffsetTop = element.offsetTop
      const sectionHeight = element.clientHeight
      const windowScrollY = window.scrollY + 97 // margin-bottom-24 + 1 pixel

      const calc1 = windowScrollY > sectionOffsetTop
      const calc2 = windowScrollY < sectionOffsetTop + sectionHeight

      if (calc1 && calc2) {
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
