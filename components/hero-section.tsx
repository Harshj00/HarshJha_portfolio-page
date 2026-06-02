"use client"

import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRightCircleIcon, ArrowDownFromLineIcon } from "lucide-react"
import { RevolvingElement } from "@/components/ui/revolving-element"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "Hello I am Harsh Kumar Jha"

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        }, 100) // typing speed
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    }
  }, [displayText, isTyping])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0f1419] via-[#151a28] to-[#0f1419] overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3b82f6" />

      <RevolvingElement
        className="-top-32 -right-32 md:-top-48 md:-right-48"
        size={500}
        duration={25}
        color="#3b82f6"
        opacity={0.08}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div
          className="parallax-float absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#9d7f6f]/5 via-transparent to-transparent rounded-full blur-3xl"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 w-fit px-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                <span className="text-sm font-medium text-[#f5f3f0]">
                  {displayText}
                  {isTyping && <span className="inline-block w-[2px] h-4 bg-[#3b82f6] ml-1 animate-pulse" />}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f5f3f0] via-[#3b82f6] to-[#f5f3f0] font-extrabold">
                  Software Developer
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-[#f5f3f0]/70 max-w-lg leading-relaxed text-left"
              >
                Crafting immersive digital experiences with cutting-edge technology | Java • Spring Boot • Generative AI
                Professional & Oracle Multicloud Certified | Data Structures & Algorithms.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3b82f6]/50 text-[#f5f3f0] hover:bg-[#3b82f6]/15 hover:border-[#3b82f6]/70 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
                >
                  <a
                    href="/HarshKumarJha-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group"
                  >
                    Resume
                    <ArrowRightCircleIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3b82f6]/50 text-[#f5f3f0] hover:bg-[#3b82f6]/15 hover:border-[#3b82f6]/70 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
                >
                  <a href="#about-me" className="inline-flex items-center gap-2 group">
                    Let's Explore
                    <ArrowDownFromLineIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { number: "5+", label: "Real World Projects" },
                { number: "4", label: "Professional Oracle Certifications" },
                { number: "2", label: "Internships" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-[#3b82f6] number-counter">{stat.number}</div>
                  <p className="text-sm text-[#f5f3f0]/50">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="parallax-float absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#3b82f6]/15 via-[#9d7f6f]/8 to-[#f5f3f0]/3 blur-2xl opacity-40" />
            <div className="absolute -inset-4 border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/5 to-[#9d7f6f]/3 backdrop-blur-md mx-0 rounded-xl my-1 opacity-0" />
            <div className="absolute -inset-2 bg-gradient-to-br from-[#0f1419]/60 via-[#1a1f2e]/40 to-[#0f1419]/50 backdrop-blur-lg opacity-75 rounded-full" />

            <div className="absolute inset-0 overflow-hidden border-2 border-[#3b82f6]/30 bg-gradient-to-br from-[#3b82f6]/8 via-[#0f1419]/60 to-[#9d7f6f]/5 backdrop-blur-xl shadow-2xl shadow-[#3b82f6]/10 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/8 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#9d7f6f]/3 to-transparent pointer-events-none" />

              <Image
                src="/profile.png"
                alt="Harsh Kumar Jha - Software Developer"
                fill
                className="object-cover px-0 py-0 my-0 border-0 mx-0 opacity-100 rounded-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
