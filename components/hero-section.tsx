"use client"

import { SplineScene } from "@/components/ui/spline-scene"
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

          {/* Right Content - 3D Scene */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
