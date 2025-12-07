"use client"

import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const certifications = [
  {
    id: 1,
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Certified expertise in OCI Generative AI services and implementations",
    image: "images/certifications/oracle-genai.png",
    link: "https://drive.google.com/file/d/10fWS2v9nl5dTNhZ4jn8Z6AYN6emJnx3S/view",
  },
  {
    id: 2,
    title: "MultiCloud Architect Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Advanced knowledge in multi-cloud architecture design and deployment",
    image: "images/certifications/oracle-architect.png",
    link: "https://drive.google.com/file/d/140oqhd7OTYCzYKQk2MU1Orq24QlSrRm6/view",
  },
  {
    id: 3,
    title: "Oracle Developer Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Proficiency in developing applications on Oracle Cloud Infrastructure",
    image: "images/certifications/oracle-developer.png",
    link: "https://drive.google.com/file/d/1_ksrgzGOKjpDabI0XSfaqyBGIdynABAP/view",
  },
  {
    id: 4,
    title: "Infosys Springboard Database & SQL Certified",
    issuer: "Infosys",
    date: "2025",
    description: "Proficiency in database design and SQL query optimization",
    image: "images/certifications/infosys-sql.png",
    link: "https://drive.google.com/file/d/1XcqCmDBMAAJv0T5lNLTT8GLuKyuqkFYa/view",
  },
]

export function CertificationsSection() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]"
      id="certifications"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#8FABD4]/8 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-[#8FABD4] mr-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EFECE3] via-[#8FABD4] to-[#EFECE3]">
                Certifications
              </span>
            </h2>
          </div>
          <p className="text-lg text-[#EFECE3]/60 max-w-2xl mx-auto">
            Professional certifications validating my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-[#8FABD4]/60 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#4A70A9]/20 hover:-translate-y-1 flex flex-col h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A70A9] to-[#8FABD4] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative w-full h-40 overflow-hidden border-b border-[#4A70A9]/30">
                  <Image
                    src={`/${cert.image}`}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#EFECE3] mb-2 line-clamp-2 group-hover:text-[#8FABD4] transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-[#8FABD4] font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-xs text-[#EFECE3]/50 mb-4">{cert.date}</p>

                  <p className="text-sm text-[#EFECE3]/60 leading-relaxed flex-grow">{cert.description}</p>

                  <div className="mt-4 h-1 bg-gradient-to-r from-[#4A70A9] to-[#8FABD4] group-hover:opacity-100 opacity-60 transition-all duration-300" />
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
