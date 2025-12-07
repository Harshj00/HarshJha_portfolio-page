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
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800"
      id="about-me"
      ref={containerRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About content */}
          <div className="space-y-6" data-animate>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-teal-400">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full" />
            </div>

            <p className="text-slate-400 leading-relaxed text-lg">
              I am an Aspiring Software Developer pursuing B.Tech in Computer Science and Engineering at K.R. Mangalam
              University. Experienced in software development with hands-on skills in Java, Python, data structures, and
              software testing. Specialized in AI/ML and Generative AI with focus on Large Language Models
              (LLMs).Passionate about coding, problem-solving, and delivering high-quality, well-tested software
              solutions.Committed to continuous learning and collaboration in fast-paced environments.
            </p>

            <p className="text-slate-400 leading-relaxed text-lg">
              I bring hands-on experience in software development, Multi-Cloud, Generative-Ai & data structures.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-slate-100">Specializations</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">►</span>
                  <span>AI/ML and Generative AI with focus on LLMs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">►</span>
                  <span>Full-stack Software Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">►</span>
                  <span>Data analysis and visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6" data-animate>
            <Card className="p-8 bg-slate-900/50 border-teal-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-100">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    className="scroll-reveal bg-teal-500/10 text-teal-200 border border-teal-500/30 hover:bg-teal-500/20 px-4 py-2 text-sm cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-slate-900/50 border-amber-500/20 backdrop-blur-sm" data-animate>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Quick Facts</h3>
              <div className="space-y-3 text-slate-400">
                <p>
                  <span className="font-semibold text-slate-200">Location:</span> West Delhi, Delhi - 110059
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Education:</span> B.Tech Computer Science & Engineering
                  ²⁰²³⁻²⁰²⁷
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Certifications:</span>
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
