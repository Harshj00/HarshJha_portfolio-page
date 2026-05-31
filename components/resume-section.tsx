"use client"

import { motion } from "framer-motion"
import { FileDown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeSection() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]"
      id="resume"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#8FABD4]/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#4A70A9]/8 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#4A70A9]/15 border border-[#4A70A9]/40 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#8FABD4] animate-pulse" />
            <span className="text-sm font-medium text-[#EFECE3]">Professional Resume</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EFECE3] via-[#8FABD4] to-[#EFECE3]">
              My Resume
            </span>
          </h2>
          <p className="text-lg text-[#EFECE3]/60 max-w-2xl mx-auto">
            View my complete professional background, certifications, and achievements
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 shadow-2xl shadow-[#4A70A9]/10 hover:shadow-[#4A70A9]/20 transition-all duration-500 hover:border-[#8FABD4]/60"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8FABD4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Resume Preview Container with Better PDF Handling */}
          <div className="relative w-full bg-gradient-to-br from-[#0a0a0a] to-black p-8 py-16">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A70A9] to-[#8FABD4] flex items-center justify-center shadow-lg shadow-[#4A70A9]/40">
                <FileDown className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#EFECE3] mb-2">HarshKumarJha-Resume.pdf</h3>
                <p className="text-[#EFECE3]/60 text-base">Your professional resume is ready to view or download</p>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="/HarshKumarJha-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#4A70A9] to-[#8FABD4] text-white font-semibold hover:from-[#5B82C3] hover:to-[#9DBDE0] transition-all duration-300 shadow-lg shadow-[#4A70A9]/30 hover:shadow-[#4A70A9]/50"
                >
                  <Eye className="w-5 h-5" />
                  View in Browser
                </a>
                <a
                  href="/HarshKumarJha-Resume.pdf"
                  download="HarshKumarJha-Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#4A70A9]/50 text-[#EFECE3] hover:bg-[#4A70A9]/15 hover:border-[#8FABD4]/70 font-semibold transition-all duration-300"
                >
                  <FileDown className="w-5 h-5" />
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#4A70A9]/5 via-transparent to-transparent rounded-xl pointer-events-none" />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mt-12 md:mt-16"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#4A70A9] to-[#8FABD4] text-white hover:from-[#5B82C3] hover:to-[#9DBDE0] px-8 py-6 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg shadow-[#4A70A9]/30 hover:shadow-[#4A70A9]/50"
          >
            <a href="/HarshKumarJha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View Full Resume
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[#4A70A9]/50 text-[#EFECE3] hover:bg-[#4A70A9]/15 hover:border-[#8FABD4]/70 px-8 py-6 rounded-lg text-base bg-transparent transition-all duration-300"
          >
            <a href="/HarshKumarJha-Resume.pdf" download className="inline-flex items-center gap-2">
              <FileDown className="w-5 h-5" />
              Download PDF
            </a>
          </Button>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 hover:border-[#8FABD4]/60 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#8FABD4] mb-3">Professional Experience</h3>
            <p className="text-[#EFECE3]/70 text-sm leading-relaxed">
              2 internships in ML and Web Development, with hands-on experience building production-grade software
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 hover:border-[#8FABD4]/60 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#8FABD4] mb-3">Certifications</h3>
            <p className="text-[#EFECE3]/70 text-sm leading-relaxed">
              4 Oracle Cloud certifications across Generative AI, Developer, Multi-Cloud Architect, and Foundations
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 hover:border-[#8FABD4]/60 transition-all duration-300">
            <h3 className="text-lg font-bold text-[#8FABD4] mb-3">Skills & Tools</h3>
            <p className="text-[#EFECE3]/70 text-sm leading-relaxed">
              Java, Python, Spring Boot, PyTorch, scikit-learn, OCI, Docker, and full-stack development expertise
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
