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

      <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
            Ready to collaborate?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Let's create something extraordinary together. Get in touch and let's discuss your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleStartProject}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 rounded-lg text-base group"
          >
            Connect With Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
