'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = ref.current?.querySelectorAll('[data-scroll-animate]')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useParallaxScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-parallax]')
      elements.forEach((element) => {
        const scrollPosition = window.scrollY
        const elementOffset = (element as HTMLElement).offsetTop
        const distance = scrollPosition - elementOffset
        const moveValue = distance * 0.5

        ;(element as HTMLElement).style.transform = `translateY(${moveValue}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
