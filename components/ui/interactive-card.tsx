"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return

      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const rotateX = (mouseY / rect.height) * 10
      const rotateY = -(mouseX / rect.width) * 10

      requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
      })
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      requestAnimationFrame(() => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
      })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    card.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
      card.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isHovering])

  return (
    <div ref={cardRef} className={`transition-transform duration-200 ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  )
}
