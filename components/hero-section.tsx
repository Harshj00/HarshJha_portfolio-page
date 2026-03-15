"use client"

import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRightCircleIcon, ArrowDownFromLineIcon } from "lucide-react"
import { RevolvingElement } from "@/components/ui/revolving-element"
import { useState, useEffect } from "react"

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
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4A70A9" />

      <RevolvingElement
        className="-top-32 -right-32 md:-top-48 md:-right-48"
        size={500}
        duration={25}
        color="#4A70A9"
        opacity={0.12}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#4A70A9]/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div
          className="parallax-float absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#8FABD4]/8 via-transparent to-transparent rounded-full blur-3xl"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="scroll-reveal inline-flex items-center gap-2 py-1 rounded-full bg-[#4A70A9]/15 border border-[#4A70A9]/40 w-fit px-3">
                <div className="w-2 h-2 rounded-full bg-[#8FABD4] animate-pulse" />
                <span className="text-sm font-medium text-[#EFECE3]">
                  {displayText}
                  {isTyping && <span className="inline-block w-[2px] h-4 bg-[#8FABD4] ml-1 animate-pulse" />}
                </span>
              </div>
              <h1
                className="scroll-reveal text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EFECE3] via-[#8FABD4] to-[#EFECE3] font-extrabold">
                  Software Developer
                </span>
              </h1>
              <p
                className="scroll-reveal text-lg md:text-xl text-[#EFECE3]/70 max-w-lg leading-relaxed text-left"
                style={{ animationDelay: "0.2s" }}
              >
                Crafting immersive digital experiences with cutting-edge technology | Java • Spring Boot • Generative AI
                Professional & Oracle Multicloud Certified | Data Structures & Algorithms.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[#4A70A9]/50 text-[#EFECE3] hover:bg-[#4A70A9]/15 hover:border-[#8FABD4]/70 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1t8Dh0Fu0_PBZWoy775acHM0AP7rOkmHZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group"
                >
                  Resume
                  <ArrowRightCircleIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#4A70A9]/50 text-[#EFECE3] hover:bg-[#4A70A9]/15 hover:border-[#8FABD4]/70 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
              >
                <a href="#about-me" className="inline-flex items-center gap-2 group">
                  Let's Explore
                  <ArrowDownFromLineIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="scroll-reveal" style={{ animationDelay: "0.3s" }}>
                <div className="text-2xl font-bold text-[#8FABD4]">15+</div>
                <p className="text-sm text-[#EFECE3]/50">Projects Completed</p>
              </div>
              <div className="scroll-reveal" style={{ animationDelay: "0.4s" }}>
                <div className="text-2xl font-bold text-[#8FABD4]">2+</div>
                <p className="text-sm text-[#EFECE3]/50">Years Experience</p>
              </div>
              <div className="scroll-reveal" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold text-[#8FABD4]">99%</div>
                <p className="text-sm text-[#EFECE3]/50">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center items-center">
            {/* Mobile: 280px, Tablet: 380px, Desktop: 450px */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Outer glow effect */}
              <div className="parallax-float absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-br from-[#4A70A9]/25 via-[#8FABD4]/15 to-[#EFECE3]/8 blur-3xl opacity-60" />
              
              {/* Multiple animated border layers for modern look */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#4A70A9]/20 via-transparent to-[#8FABD4]/10 border border-[#4A70A9]/30 shadow-2xl shadow-[#4A70A9]/20" />
              
              {/* Inner accent border */}
              <div className="absolute inset-1 sm:inset-2 rounded-2xl sm:rounded-3xl border border-[#8FABD4]/20 pointer-events-none" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t border-l border-[#4A70A9]/50 rounded-tl-2xl sm:rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b border-r border-[#4A70A9]/50 rounded-br-2xl sm:rounded-br-3xl" />

              {/* Main image container */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#4A70A9]/5 via-black/40 to-[#8FABD4]/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A70A9]/8 via-transparent to-transparent pointer-events-none" />
                
                <Image
                  src="/profile.png"
                  alt="Harsh Kumar Jha - Software Developer"
                  fill
                  className="object-cover object-center rounded-2xl sm:rounded-3xl"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 450px"
                />
              </div>

              {/* Subtle shine effect on top */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating accent element - visible on larger screens */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 border border-[#4A70A9]/20 rounded-full bg-gradient-to-br from-[#4A70A9]/10 to-transparent blur-sm" />
            <div className="hidden lg:block absolute -top-8 -left-8 w-20 h-20 border border-[#8FABD4]/15 rounded-full bg-gradient-to-br from-[#8FABD4]/5 to-transparent blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
