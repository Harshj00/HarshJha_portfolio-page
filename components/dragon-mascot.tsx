"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function DragonMascot() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showGreeting, setShowGreeting] = useState(true)
  const [showFlames, setShowFlames] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrolled = window.scrollY
      const totalScroll = docHeight - windowHeight
      const progress = Math.min(scrolled / totalScroll, 1)

      setScrollProgress(progress)

      // Hide greeting after initial scroll
      if (scrolled > 100) {
        setShowGreeting(false)
      }

      // Show flames at the end (90% of scroll)
      if (progress > 0.85) {
        setShowFlames(true)
      } else {
        setShowFlames(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dragon position: starts at top-right, follows scroll
  const dragonY = scrollProgress * 80 - 20 // -20vh at start, +80vh at end
  const dragonX = scrollProgress > 0.5 ? (scrollProgress - 0.5) * 40 : 0

  return (
    <>
      {/* Dragon Mascot */}
      <motion.div
        className="fixed right-0 z-40 pointer-events-none"
        style={{
          top: `${Math.max(10, dragonY)}vh`,
          right: `${Math.max(10, dragonX)}%`,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Dragon SVG */}
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          className="drop-shadow-lg"
        >
          {/* Dragon Body */}
          <ellipse cx="60" cy="50" rx="35" ry="30" fill="#3b82f6" opacity="0.9" />

          {/* Dragon Head */}
          <circle cx="90" cy="35" r="25" fill="#3b82f6" opacity="0.95" />

          {/* Dragon Eyes */}
          <circle cx="98" cy="30" r="4" fill="#f5f3f0" />
          <circle cx="98" cy="30" r="2" fill="#0f1419" />

          {/* Dragon Snout */}
          <ellipse cx="110" cy="40" rx="12" ry="10" fill="#3b82f6" opacity="0.85" />
          <circle cx="118" cy="38" r="3" fill="#f5f3f0" />
          <circle cx="118" cy="42" r="3" fill="#f5f3f0" />

          {/* Dragon Horns */}
          <path
            d="M 85 15 Q 80 5 75 10"
            stroke="#9d7f6f"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 95 10 Q 100 0 105 8"
            stroke="#9d7f6f"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Dragon Wings */}
          <ellipse
            cx="45"
            cy="30"
            rx="20"
            ry="28"
            fill="#3b82f6"
            opacity="0.6"
            transform="rotate(-25 45 30)"
          />
          <ellipse
            cx="75"
            cy="30"
            rx="20"
            ry="28"
            fill="#3b82f6"
            opacity="0.6"
            transform="rotate(25 75 30)"
          />

          {/* Dragon Tail */}
          <path
            d="M 30 50 Q 10 60 5 40 Q 8 35 15 38"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Dragon Spikes */}
          <circle cx="50" cy="25" r="3" fill="#9d7f6f" />
          <circle cx="60" cy="22" r="3" fill="#9d7f6f" />
          <circle cx="70" cy="25" r="3" fill="#9d7f6f" />
        </svg>

        {/* Flames when at bottom */}
        <AnimatePresence>
          {showFlames && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -left-20 top-8"
            >
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                animate={{
                  scale: [1, 1.1, 0.95, 1.05, 1],
                  opacity: [0.8, 1, 0.7, 1, 0.8],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Flame 1 */}
                <path
                  d="M 30 20 Q 20 10 25 40 Q 30 25 35 40 Q 40 10 30 20"
                  fill="#ef4444"
                  opacity="0.8"
                />

                {/* Flame 2 */}
                <path
                  d="M 30 25 Q 22 15 26 42 Q 30 28 34 42 Q 38 15 30 25"
                  fill="#f97316"
                  opacity="0.9"
                />

                {/* Flame tip */}
                <path
                  d="M 30 30 Q 26 20 28 40 Q 30 32 32 40 Q 34 20 30 30"
                  fill="#fbbf24"
                  opacity="1"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Greeting Bubble */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="fixed right-32 top-20 z-40 pointer-events-none"
          >
            <div className="relative">
              {/* Speech bubble */}
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] rounded-2xl px-6 py-3 text-[#f5f3f0] font-semibold shadow-xl border border-[#3b82f6]/50 max-w-xs">
                <p className="text-lg">Hey, I'm your Dev Dragon! 🐉</p>
                <p className="text-sm opacity-90 mt-1">
                  Scroll down to see me in action...
                </p>

                {/* Speech bubble pointer */}
                <div className="absolute bottom-2 right-4 w-0 h-0 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-[#06b6d4] transform rotate-45" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End Message with Flames */}
      <AnimatePresence>
        {showFlames && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed right-40 top-32 z-40 pointer-events-none"
          >
            <div className="bg-gradient-to-br from-[#ef4444] to-[#f97316] rounded-2xl px-4 py-2 text-[#f5f3f0] font-semibold shadow-xl border border-[#ef4444]/50 max-w-xs text-sm text-center">
              <p>Thanks for exploring! 🔥</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
