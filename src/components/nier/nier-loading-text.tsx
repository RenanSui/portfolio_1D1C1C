'use client'

import { useTypingText } from '@/hooks/use-typing-text'
import { useEffect, useState } from 'react'

interface LoadingTextProps {
  children: string
  index?: number
}

export const NierLoadingText = ({ children, index = 0 }: LoadingTextProps) => {
  const [, setIsShowing] = useState(false)
  const { word, start } = useTypingText(children, 30)

  const Time = index ? 1250 * (index / 1.5) : 50
  const loadingTextTimeout = setTimeout(() => start(), Time)
  const showingTextTimeout = setTimeout(() => setIsShowing(true), Time)

  useEffect(() => {
    return () => {
      clearTimeout(loadingTextTimeout)
      clearTimeout(showingTextTimeout)
    }
  })

  return (
    <>
      {word}

      {/* keep first letter showing then hide */}
      {word.length === children.length ? '' : word[0]}

      {/* Fix glitch size and hide */}
      {word.length === children.length ? (
        ''
      ) : (
        <span
          className="pointer-events-none cursor-default opacity-0"
          aria-hidden={true}
          aria-disabled={true}
          hidden={word.length === children.length}
        >
          .
        </span>
      )}
    </>
  )
}
