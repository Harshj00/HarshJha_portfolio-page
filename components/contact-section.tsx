"use client"

import { useState } from "react"
import { Linkedin, Github, Instagram } from "lucide-react"

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.306l7.73-8.835L2.577 2.25h6.76l4.67 6.168L17.142 2.25h.102zm-1.554 19.5h1.828L7.97 5.028H6.11l10.58 16.722z" />
  </svg>
)

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/harshgod",
      color: "text-[#0A66C2]",
      borderColor: "border-[#0A66C2]/50",
      hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/80",
    },
    {
      name: "X",
      icon: XIcon,
      url: "https://x.com/harsh_j0",
      color: "text-[#EFECE3]",
      borderColor: "border-[#EFECE3]/40",
      hoverColor: "hover:text-white hover:border-[#EFECE3]/70",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Harshj00",
      color: "text-[#EFECE3]",
      borderColor: "border-[#EFECE3]/40",
      hoverColor: "hover:text-white hover:border-[#EFECE3]/70",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/byte_biceps/",
      color: "text-[#E4405F]",
      borderColor: "border-[#E4405F]/50",
      hoverColor: "hover:text-[#E4405F] hover:border-[#E4405F]/80",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-black border-t border-[#2a2a2a]" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A70A9]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EFECE3] mb-4 text-balance">
            Get in <span className="text-[#8FABD4]">Touch</span>
          </h2>
          <p className="text-[#EFECE3]/60 text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together. Feel free to reach out!
          </p>
        </div>

        {/* Contact content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* Contact info */}
          <div className="flex-1 text-center md:text-left glide-in-left">
            <p className="text-[#EFECE3]/60 mb-6 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="mailto:sendthose10bucks@gmail.com"
              className="inline-block border-[#4A70A9]/50 hover:bg-[#4A70A9]/15 hover:border-[#8FABD4]/70 px-8 bg-transparent text-[#EFECE3] text-sm border rounded-full font-semibold transition-all duration-300 button-glide py-3.5"
            >
              Email : sendthose10bucks@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex-1 glide-in-right py-0 px-0 my-0 mx-0 md:text-right">
            <p className="text-sm text-[#EFECE3]/50 mb-6 text-center md:text-right">Follow me on social media</p>
            <div className="flex gap-6 justify-center text-center items-center md:justify-end mx-0 my-0">
              {socialLinks.map((social) => {
                const Icon = social.name === "X" ? XIcon : social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${social.borderColor} ${social.color} border-2 bg-transparent transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#2a2a2a] pt-8 text-center">
          <p className="text-sm text-[#EFECE3]/50">
            © {new Date().getFullYear()} Harsh Kumar Jha. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
