import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useTypingText = (words: string, keySpeed = 1000) => {
  const [wordIndex, setWordIndex] = useState(0) // 0
  const [currentWord, setCurrentWord] = useState(['']) // I
  const [isStopped, setIsStopped] = useState(true)

  const stop = () => {
    clearInterval(typingInterval.current)
    setIsStopped(true)
  }

  const typingInterval: MutableRefObject<number | undefined> = useRef()

  useEffect(() => {
    if (isStopped) return

    typingInterval.current = window.setInterval(() => {
      typeLetter()
    }, keySpeed)

    const typeLetter = () => {
      if (wordIndex === words.length) return

      setWordIndex((prev) => prev + 1)
      const segmentedWord = words[wordIndex]
        ? words[wordIndex]?.split('')
        : ['']
      if (segmentedWord) setCurrentWord(currentWord.concat(segmentedWord))
    }

    return () => {
      window.clearInterval(typingInterval.current)
    }
  }, [currentWord, isStopped, keySpeed, wordIndex, words])

  return {
    word: currentWord.length ? currentWord.join('') : '0',
    start: () => setIsStopped(false),
    stop,
  }
}
