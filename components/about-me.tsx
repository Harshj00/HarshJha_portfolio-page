"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"

export function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skills = [
    "Java SE",
    "Python",
    "C++",
    "SQL",
    "Spring Boot",
    "PyTorch",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Data Structures",
    "Machine Learning",
    "SQL",
    "MultiCloud",
  ]

  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1419] to-[#151a28] border-b border-[#2a3142]"
      id="about-me"
      ref={containerRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About content */}
          <div className="space-y-6" data-animate>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f5f3f0]">
                About <span className="text-[#3b82f6]">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#3b82f6] to-[#9d7f6f] rounded-full" />
            </div>

            <p className="text-[#f5f3f0]/70 leading-relaxed text-lg">
              Computer Science & Engineering student with hands-on experience in machine learning, cloud infrastructure, and web development. Proficient in Java, Python, and Spring Boot, skilled in ML frameworks including PyTorch and scikit-learn. Oracle Certified in Cloud Infrastructure — Generative AI, Developer, and Multi-Cloud Architect tracks. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and System Design, with a focus on building scalable, production-quality software.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-[#f5f3f0]">Specializations</h3>
              <ul className="space-y-2 text-[#f5f3f0]/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-1">►</span>
                  <span>AI/ML and Generative AI with focus on LLMs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-1">►</span>
                  <span>Full-stack Software Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3b82f6] mt-1">►</span>
                  <span>Data analysis and visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills section - Updated cards to use consistent modern palette hover effects */}
          <div className="space-y-6" data-animate>
            <Card className="p-8 bg-[#1a1f2e]/80 border-[#3b82f6]/30 backdrop-blur-sm hover:border-[#3b82f6]/60 hover:shadow-xl hover:shadow-[#3b82f6]/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#f5f3f0]">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    className="scroll-reveal bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30 hover:bg-[#3b82f6]/25 hover:border-[#3b82f6]/50 px-4 py-2 text-sm cursor-default transition-colors duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card
              className="p-8 bg-[#1a1f2e]/80 border-[#3b82f6]/30 backdrop-blur-sm hover:border-[#3b82f6]/60 hover:shadow-xl hover:shadow-[#3b82f6]/15 transition-all duration-300"
              data-animate
            >
              <h3 className="text-2xl font-bold mb-4 text-[#f5f3f0]">Quick Facts</h3>
              <div className="space-y-3 text-[#f5f3f0]/70">
                <p>
                  <span className="font-semibold text-[#f5f3f0]">Location:</span> West Delhi, Delhi - 110059
                </p>
                <p>
                  <span className="font-semibold text-[#f5f3f0]">Education:</span> B.Tech Computer Science & Engineering
                  ²⁰²³⁻²⁰²⁷
                </p>
                <p>
                  <span className="font-semibold text-[#f5f3f0]">Certifications:</span>
                  <br />• Oracle Cloud Infrastructure Generative AI Professional <br /> • Oracle Cloud Infrastructure
                  Developer Professional
                  <br />• OCI Multi Cloud Architect Professional
                  <br />• OCI Certified Foundation Associate
                  <br />• Infosys Springboard Database & SQL Certified.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
