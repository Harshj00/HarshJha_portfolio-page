"use client"

import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00d9ff" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">Hello👋 I am Harsh Kumar Jha </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                  Software Developer 🍁
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed text-left">
                Crafting immersive digital experiences with cutting-edge technology | Java • Spring Boot • Generative AI
                Professional & Oracle Multicloud Certified | Data Structures & Algorithms.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/118XLpIOg3IYmhU9QlsHGhp_wSJU5UBm5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group"
                >
                  Resume
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
              >
                <a href="#about-me" className="inline-flex items-center gap-2 group">
                  Let's Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400">15+</div>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">2+</div>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">99%</div>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Outer glow layer */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent blur-2xl" />

            {/* Outer frost layer */}
            <div className="absolute -inset-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-md" />

            {/* Middle sandwich layer */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-slate-800/50 via-cyan-900/30 to-blue-900/40 backdrop-blur-lg" />

            {/* Main image container with enhanced glass effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-500/25 via-slate-800/50 to-blue-600/25 backdrop-blur-xl shadow-2xl shadow-cyan-500/30">
              {/* Multi-layer shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent pointer-events-none" />

              <Image
                src="/profile.png"
                alt="Harsh Kumar Jha - Software Developer"
                fill
                className="object-cover"
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
