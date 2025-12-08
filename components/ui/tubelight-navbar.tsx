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
    const anchorItems = items.filter((item) => item.url.startsWith("#"))
    const sectionIds = anchorItems.map((item) => item.url.substring(1))

    const handleScroll = () => {
      if (clickLock.current) return

      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
            currentSection = id
          }
        }
      }

      const matched = items.find((i) => i.url === `#${currentSection}`)
      if (matched && matched.name !== activeTab) {
        setActiveTab(matched.name)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, activeTab])

  const handleClick = (item: NavItem) => {
    if (item.url.startsWith("#")) {
      setActiveTab(item.name)
      clickLock.current = true
      setTimeout(() => {
        clickLock.current = false
      }, 800) // Increased timeout for smoother scroll completion
    }
  }

  return (
    <nav
      className={cn(
        `fixed z-50 w-full flex justify-center
        ${isMobile ? "bottom-3" : "top-4"}`,
        className,
      )}
    >
      <div
        className="flex items-center gap-1 
                   bg-black/40 backdrop-blur-xl backdrop-saturate-150
                   border border-[#4A70A9]/20 
                   px-3 py-2 rounded-full 
                   shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const isExternal = !item.url.startsWith("#")

          return (
            <Link
              key={item.name}
              href={item.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={() => handleClick(item)}
              className={cn(
                `relative cursor-pointer font-medium rounded-full transition-all duration-300 flex 
                ${isMobile ? "p-3" : "px-5 py-2"} 
                 items-center gap-2 text-sm select-none`,
                isActive
                  ? "text-[#EFECE3] bg-[#4A70A9]/15"
                  : "text-[#EFECE3]/50 hover:text-[#EFECE3] hover:bg-[#4A70A9]/10",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>

              <span className="md:hidden flex justify-center">
                <Icon size={20} strokeWidth={2.3} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#8FABD4] rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
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
