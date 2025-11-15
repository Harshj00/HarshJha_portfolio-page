"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  const clickLock = useRef(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.url.startsWith("#") ? item.url.substring(1) : null)
      .filter(Boolean) as string[]

    const handleScroll = () => {
      if (clickLock.current) return // <-- Prevent scroll spy during click

      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 150) {
            currentSection = id
          }
        }
      }

      const matched = items.find((i) => i.url === `#${currentSection}`)
      if (matched && matched.name !== activeTab) {
        setActiveTab(matched.name)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, activeTab])

  // Unlock scrollspy after click
  const handleClick = (name: string) => {
    setActiveTab(name)
    clickLock.current = true
    setTimeout(() => {
      clickLock.current = false
    }, 300) // 300ms prevents glitch
  }

  return (
    <nav
      className={cn(
        `fixed z-50 w-full flex justify-center
        ${isMobile ? "bottom-3" : "top-4"}`,
        className
      )}
    >
      <div
        className="flex items-center gap-1 bg-background/60 border border-border 
                   backdrop-blur-xl px-3 py-2 rounded-full shadow-lg"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => handleClick(item.name)}
              className={cn(
                `relative cursor-pointer font-medium rounded-full transition-colors flex 
                ${isMobile ? "p-3" : "px-6 py-2"} 
                 items-center gap-2 text-sm select-none`,
                "text-foreground/80 hover:text-primary",
                isActive && "text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>

              <span className="md:hidden flex justify-center">
                <Icon size={20} strokeWidth={2.3} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-background"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
