"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const handleStartProject = () => {
    const linkedinProfileUrl = "https://www.linkedin.com/in/harshgod"
    const message = encodeURIComponent("Hey Harsh I want to Collaborate with You")
    const linkedinMessagingUrl = `https://www.linkedin.com/messaging/compose/?message=${message}`

    // Open LinkedIn profile in new tab
    window.open(linkedinProfileUrl, "_blank")
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      {/* Reverted gradient backgrounds from orange/purple to cyan */}
      <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {/* Reverted gradient text from orange back to cyan */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-white">
            Ready to collaborate?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto fade-in-up">
          Let's create something extraordinary together. Get in touch and let's discuss your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center glide-in-left">
          {/* Reverted button from orange back to cyan outline */}
          <Button
            onClick={handleStartProject}
            className="border-cyan-500/30 hover:bg-cyan-500/10 px-8 py-6 bg-transparent text-cyan-50 text-base font-semibold group transition-all duration-300 border rounded-lg button-glide"
          >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
