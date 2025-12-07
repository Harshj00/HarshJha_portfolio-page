"use client"

import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRightCircleIcon, ArrowDownFromLineIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#14b8a6" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-teal-500/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div
          className="parallax-float absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="scroll-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 w-fit">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-sm font-medium text-slate-200">Hello I am Harsh Kumar Jha </span>
              </div>
              <h1
                className="scroll-reveal text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-teal-200 to-slate-100">
                  Software Developer
                </span>
              </h1>
              <p
                className="scroll-reveal text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed text-left"
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
                className="border-teal-500/40 text-slate-200 hover:bg-teal-500/10 hover:border-teal-400/60 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
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
                className="border-teal-500/40 text-slate-200 hover:bg-teal-500/10 hover:border-teal-400/60 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
              >
                <a href="#about-me" className="inline-flex items-center gap-2 group">
                  Let's Explore
                  <ArrowDownFromLineIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="scroll-reveal" style={{ animationDelay: "0.3s" }}>
                <div className="text-2xl font-bold text-teal-300">15+</div>
                <p className="text-sm text-slate-500">Projects Completed</p>
              </div>
              <div className="scroll-reveal" style={{ animationDelay: "0.4s" }}>
                <div className="text-2xl font-bold text-teal-300">2+</div>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div className="scroll-reveal" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold text-teal-300">99%</div>
                <p className="text-sm text-slate-500">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="parallax-float absolute -inset-6 rounded-3xl bg-gradient-to-br from-teal-500/20 via-slate-500/10 to-amber-500/10 blur-2xl" />
            <div className="absolute -inset-4 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-500/5 backdrop-blur-md mx-0 rounded-xl my-1" />
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/40 backdrop-blur-lg" />

            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-slate-800/50 to-amber-500/5 backdrop-blur-xl shadow-2xl shadow-teal-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-amber-500/5 to-transparent pointer-events-none" />

              <Image
                src="/images/design-mode/1000041629.png.jpeg"
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
