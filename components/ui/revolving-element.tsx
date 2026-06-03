"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

interface RevolvingElementProps {
  className?: string
  size?: number
  duration?: number
  color?: string
  opacity?: number
}

export function RevolvingElement({
  className = "",
  size = 400,
  duration = 20,
  color = "#4A70A9",
  opacity = 0.15,
}: RevolvingElementProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted || isMobile || shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="0.5" />

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 100 + 40 * Math.cos(angle)
          const y1 = 100 + 40 * Math.sin(angle)
          const x2 = 100 + 95 * Math.cos(angle)
          const y2 = 100 + 95 * Math.sin(angle)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.5" />
        })}

        {[40, 60, 80, 95].map((radius) =>
          Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const cx = 100 + radius * Math.cos(angle)
            const cy = 100 + radius * Math.sin(angle)
            return <circle key={`${radius}-${i}`} cx={cx} cy={cy} r="1.5" fill={color} opacity={0.6} />
          }),
        )}

        <circle cx="100" cy="100" r="5" fill={color} opacity={0.4} />
        <circle cx="100" cy="100" r="2" fill={color} opacity={0.8} />
      </svg>
    </motion.div>
  )
}
