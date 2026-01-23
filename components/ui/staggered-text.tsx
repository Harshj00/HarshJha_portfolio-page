"use client"

import { useEffect, useRef, useState } from "react"

interface StaggeredTextProps {
  text: string
  className?: string
  staggerDelay?: number
}

export function StaggeredText({ text, className = "", staggerDelay = 30 }: StaggeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
