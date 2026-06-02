"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const handleStartProject = () => {
    const linkedinProfileUrl = "https://www.linkedin.com/in/harshgod"
    window.open(linkedinProfileUrl, "_blank")
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] to-[#151a28]" />

      <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-[#9d7f6f]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f5f3f0] via-[#3b82f6] to-[#f5f3f0]">
            Ready to collaborate?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-[#f5f3f0]/60 mb-8 max-w-2xl mx-auto fade-in-up">
          Let's create something extraordinary together. Get in touch and let's discuss your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center glide-in-left">
          <Button
            onClick={handleStartProject}
            className="border-[#3b82f6]/50 hover:bg-[#3b82f6]/15 hover:border-[#3b82f6]/70 px-8 py-6 bg-transparent text-[#f5f3f0] text-base font-semibold group transition-all duration-300 border rounded-lg button-glide"
          >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
