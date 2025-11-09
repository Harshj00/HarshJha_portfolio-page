"use client"

import { useState } from "react"
import { Linkedin, Twitter, Github, Instagram } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/harshgod/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/harsh_j0",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Harshj00",
      color: "hover:text-gray-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/byte_biceps/",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-background border-t border-border">
      {/* Reverted gradient background from orange to cyan */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together. Feel free to reach out!
          </p>
        </div>

        {/* Contact content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* Contact info */}
          <div className="flex-1 text-center md:text-left glide-in-left">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            {/* Reverted button from orange back to cyan */}
            <a
              href="mailto:sendthose10bucks@gmail.com"
              className="inline-block border-cyan-500/30 hover:bg-cyan-500/10 px-8 py-6 bg-transparent text-cyan-100 text-sm border rounded-full font-semibold transition-all duration-300 button-glide"
            >
              Email : sendthose10bucks@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex-1 glide-in-right">
            <p className="text-sm text-muted-foreground mb-6 text-center">Follow me on social media</p>
            <div className="flex gap-6 justify-center text-center items-center md:justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-foreground transition-all duration-300 ${social.color} hover:bg-cyan-500/10 hover:border-cyan-500/60`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsh Kumar Jha. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
