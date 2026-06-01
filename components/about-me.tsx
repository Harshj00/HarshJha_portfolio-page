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
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200"
      id="about-me"
      ref={containerRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-float absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-[#5E0ED7]/5 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About content */}
          <div className="space-y-6" data-animate>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                About <span className="text-[#5E0ED7]">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#5E0ED7] to-[#a855f7] rounded-full" />
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Computer Science & Engineering student with hands-on experience in machine learning, cloud infrastructure, and web development. Proficient in Java, Python, and Spring Boot, skilled in ML frameworks including PyTorch and scikit-learn. Oracle Certified in Cloud Infrastructure — Generative AI, Developer, and Multi-Cloud Architect tracks. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and System Design, with a focus on building scalable, production-quality software.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-black">Specializations</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#5E0ED7] mt-1 font-bold">►</span>
                  <span>AI/ML and Generative AI with focus on LLMs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5E0ED7] mt-1 font-bold">►</span>
                  <span>Full-stack Software Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5E0ED7] mt-1 font-bold">►</span>
                  <span>Data analysis and visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6" data-animate>
            <Card className="p-8 bg-gray-50 border border-gray-200 backdrop-blur-sm hover:border-[#5E0ED7] hover:shadow-lg hover:shadow-[#5E0ED7]/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-black">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    className="scroll-reveal bg-[#5E0ED7]/10 text-[#5E0ED7] border border-[#5E0ED7]/30 hover:bg-[#5E0ED7]/20 hover:border-[#5E0ED7]/60 px-4 py-2 text-sm cursor-default transition-colors duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card
              className="p-8 bg-gray-50 border border-gray-200 backdrop-blur-sm hover:border-[#5E0ED7] hover:shadow-lg hover:shadow-[#5E0ED7]/10 transition-all duration-300"
              data-animate
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Quick Facts</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold text-black">Location:</span> West Delhi, Delhi - 110059
                </p>
                <p>
                  <span className="font-semibold text-black">Education:</span> B.Tech Computer Science & Engineering
                  ²⁰²³⁻²⁰²⁷
                </p>
                <p>
                  <span className="font-semibold text-black">Certifications:</span>
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
