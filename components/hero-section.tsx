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
        }, 80) // typing speed
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
      <RevolvingElement
        className="-bottom-40 -left-40 md:-bottom-60 md:-left-60"
        size={600}
        duration={30}
        color="#8FABD4"
        opacity={0.08}
      />
      <RevolvingElement
        className="top-1/4 -left-20 hidden md:block"
        size={200}
        duration={15}
        color="#EFECE3"
        opacity={0.06}
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
          <div className="relative h-[500px] md:h-[600px]">
            <div className="parallax-float absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#4A70A9]/20 via-[#8FABD4]/10 to-[#EFECE3]/5 blur-2xl" />
            <div className="absolute -inset-4 border border-[#4A70A9]/25 bg-gradient-to-br from-[#4A70A9]/8 to-[#8FABD4]/5 backdrop-blur-md mx-0 rounded-xl my-1" />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-black/60 via-[#0a0a0a]/40 to-black/50 backdrop-blur-lg" />

            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#4A70A9]/40 bg-gradient-to-br from-[#4A70A9]/10 via-black/60 to-[#8FABD4]/5 backdrop-blur-xl shadow-2xl shadow-[#4A70A9]/15">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A70A9]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#8FABD4]/5 to-transparent pointer-events-none" />

              <Image
                src="/profile.png"
                alt="Harsh Kumar Jha - Software Developer"
                fill
                className="object-cover opacity-100 px-0 py-0 my-0 border-0 rounded-2xl mx-0"
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
