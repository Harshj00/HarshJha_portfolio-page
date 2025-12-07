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
    accentColor: "from-[#4A70A9]/25 to-[#3A5A8A]/15",
    borderColor: "border-[#4A70A9]/40",
    textColor: "text-[#8FABD4]",
  },
  {
    id: 2,
    title: "MultiCloud Architect Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Advanced knowledge in multi-cloud architecture design and deployment",
    image: "images/certifications/oracle-architect.png",
    link: "https://drive.google.com/file/d/140oqhd7OTYCzYKQk2MU1Orq24QlSrRm6/view",
    accentColor: "from-[#8FABD4]/25 to-[#6B8FC4]/15",
    borderColor: "border-[#8FABD4]/40",
    textColor: "text-[#EFECE3]",
  },
  {
    id: 3,
    title: "Oracle Developer Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Proficiency in developing applications on Oracle Cloud Infrastructure",
    image: "images/certifications/oracle-developer.png",
    link: "https://drive.google.com/file/d/1_ksrgzGOKjpDabI0XSfaqyBGIdynABAP/view",
    accentColor: "from-[#EFECE3]/15 to-[#d0d0c8]/10",
    borderColor: "border-[#EFECE3]/30",
    textColor: "text-[#EFECE3]",
  },
  {
    id: 4,
    title: "Infosys Springboard Database & SQL Certified",
    issuer: "Infosys",
    date: "2025",
    description: "Proficiency in database design and SQL query optimization",
    image: "images/certifications/infosys-sql.png",
    link: "https://drive.google.com/file/d/1XcqCmDBMAAJv0T5lNLTT8GLuKyuqkFYa/view",
    accentColor: "from-[#6B8FC4]/25 to-[#4A70A9]/15",
    borderColor: "border-[#6B8FC4]/40",
    textColor: "text-[#8FABD4]",
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
              <Card
                className={`group relative overflow-hidden bg-gradient-to-br ${cert.accentColor} border ${cert.borderColor} bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-opacity-80 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#4A70A9]/10 hover:-translate-y-1 flex flex-col h-full`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.accentColor}`} />

                <div className={`relative w-full h-40 overflow-hidden border-b ${cert.borderColor}`}>
                  <Image
                    src={`/${cert.image}`}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <h3
                    className={`text-lg font-bold text-[#EFECE3] mb-2 line-clamp-2 group-hover:${cert.textColor} transition-colors duration-300`}
                  >
                    {cert.title}
                  </h3>

                  <p className={`text-sm ${cert.textColor} font-semibold mb-1`}>{cert.issuer}</p>
                  <p className="text-xs text-[#EFECE3]/50 mb-4">{cert.date}</p>

                  <p className="text-sm text-[#EFECE3]/60 leading-relaxed flex-grow">{cert.description}</p>

                  <div
                    className={`mt-4 h-1 bg-gradient-to-r ${cert.accentColor} group-hover:opacity-100 opacity-60 transition-all duration-300`}
                  />
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
