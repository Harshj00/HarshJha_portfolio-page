"use client"

import { useEffect, useState } from "react"
import { RevolvingElement } from "@/components/ui/revolving-element"

export function BackgroundElements() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <RevolvingElement className="top-[60%] -right-40" size={350} duration={35} color="#4A70A9" opacity={0.05} />
      <RevolvingElement className="top-[40%] -left-32" size={280} duration={40} color="#8FABD4" opacity={0.04} />
    </div>
  )
}
