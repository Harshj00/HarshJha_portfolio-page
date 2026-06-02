"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface VennCircle {
  id: string
  title: string
  skills: string[]
  color: string
  borderColor: string
  position: { x: number; y: number }
}

export function SkillsVennDiagram() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const circles: VennCircle[] = [
    {
      id: "webdev",
      title: "Web Dev",
      skills: ["React", "Node.js", "Next.js", "NestJS", "MongoDB"],
      color: "from-[#3b82f6]/20 to-[#3b82f6]/5",
      borderColor: "border-[#3b82f6]/40",
      position: { x: -30, y: -20 },
    },
    {
      id: "devops",
      title: "DevOps",
      skills: ["Docker", "AWS", "Jenkins", "CI/CD", "Linux"],
      color: "from-[#9d7f6f]/20 to-[#9d7f6f]/5",
      borderColor: "border-[#9d7f6f]/40",
      position: { x: 30, y: -20 },
    },
    {
      id: "genai",
      title: "Gen AI",
      skills: ["LLMs", "RAG", "Langchain", "OpenCV", "Python"],
      color: "from-[#06b6d4]/20 to-[#06b6d4]/5",
      borderColor: "border-[#06b6d4]/40",
      position: { x: 0, y: 40 },
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setMousePosition({ x: x * 0.1, y: y * 0.1 })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419]/50 via-[#151a28] to-[#0f1419]/50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f5f3f0] via-[#3b82f6] to-[#f5f3f0]">
            My Expertise
          </h2>
          <p className="text-lg text-[#f5f3f0]/60 max-w-2xl mx-auto">
            Intersection of Web Development, DevOps, and Generative AI
          </p>
        </motion.div>

        {/* Venn Diagram Container */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[600px] md:h-[700px] cursor-pointer"
        >
          {/* SVG Background with overlapping circles */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Web Dev Circle */}
            <motion.circle
              cx={300}
              cy={300}
              r={200}
              fill="#3b82f6"
              fillOpacity="0.08"
              stroke="#3b82f6"
              strokeOpacity="0.4"
              strokeWidth="2"
              filter="url(#glow)"
              animate={
                isHovering
                  ? { cx: 300 + mousePosition.x, cy: 300 + mousePosition.y }
                  : { cx: 300, cy: 300 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {/* DevOps Circle */}
            <motion.circle
              cx={700}
              cy={300}
              r={200}
              fill="#9d7f6f"
              fillOpacity="0.08"
              stroke="#9d7f6f"
              strokeOpacity="0.4"
              strokeWidth="2"
              filter="url(#glow)"
              animate={
                isHovering
                  ? { cx: 700 - mousePosition.x, cy: 300 + mousePosition.y }
                  : { cx: 700, cy: 300 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {/* Gen AI Circle */}
            <motion.circle
              cx={500}
              cy={550}
              r={200}
              fill="#06b6d4"
              fillOpacity="0.08"
              stroke="#06b6d4"
              strokeOpacity="0.4"
              strokeWidth="2"
              filter="url(#glow)"
              animate={
                isHovering
                  ? { cx: 500, cy: 550 - mousePosition.y }
                  : { cx: 500, cy: 550 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {/* Center connection dot */}
            <motion.circle
              cx={500}
              cy={400}
              r={6}
              fill="#d4af37"
              opacity="0.6"
              animate={
                isHovering
                  ? { r: 8, opacity: 1 }
                  : { r: 6, opacity: 0.6 }
              }
              transition={{ type: "spring", stiffness: 300 }}
            />
          </svg>

          {/* Text Labels and Skills */}
          <div className="absolute inset-0">
            {/* Web Dev Section */}
            <motion.div
              className="absolute top-20 left-12 text-center"
              animate={
                isHovering
                  ? { x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }
                  : { x: 0, y: 0 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-6">Web Dev</h3>
              <div className="flex flex-col gap-2">
                {circles[0].skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/40 hover:bg-[#3b82f6]/30 transition-colors cursor-default h-7 px-3 py-1 flex items-center justify-center text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* DevOps Section */}
            <motion.div
              className="absolute top-20 right-12 text-center"
              animate={
                isHovering
                  ? { x: -mousePosition.x * 0.5, y: mousePosition.y * 0.5 }
                  : { x: 0, y: 0 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className="text-2xl font-bold text-[#9d7f6f] mb-6">DevOps</h3>
              <div className="flex flex-col gap-2">
                {circles[1].skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#9d7f6f]/20 text-[#9d7f6f] border border-[#9d7f6f]/40 hover:bg-[#9d7f6f]/30 transition-colors cursor-default h-7 px-3 py-1 flex items-center justify-center text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Gen AI Section */}
            <motion.div
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
              animate={
                isHovering
                  ? { y: -mousePosition.y * 0.5 }
                  : { y: 0 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <h3 className="text-2xl font-bold text-[#06b6d4] mb-6">Gen AI</h3>
              <div className="flex flex-col gap-2">
                {circles[2].skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/40 hover:bg-[#06b6d4]/30 transition-colors cursor-default h-7 px-3 py-1 flex items-center justify-center text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Center "You are here" indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
              animate={
                isHovering
                  ? { scale: 1.1, opacity: 1 }
                  : { scale: 0.95, opacity: 0.7 }
              }
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-sm font-semibold text-[#d4af37] whitespace-nowrap">
                I'm here
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-[#f5f3f0]/50 text-sm mt-8"
        >
          Hover to see the magic
        </motion.p>
      </div>
    </motion.section>
  )
}
