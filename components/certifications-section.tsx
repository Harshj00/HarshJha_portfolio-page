"use client"

import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Certified expertise in OCI Generative AI services and implementations",
    image: "/certifications/oracle-genai.png",
  },
  {
    id: 2,
    title: "MultiCloud Architect Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Advanced knowledge in multi-cloud architecture design and deployment",
    image: "/certifications/oracle-architect.png",
  },
  {
    id: 3,
    title: "Oracle Developer Professional",
    issuer: "Oracle",
    date: "2025",
    description: "Proficiency in developing applications on Oracle Cloud Infrastructure",
    image: "/certifications/oracle-developer.png",
  },
  {
    id: 4,
    title: "Infosys Springboard Database & SQL Certified",
    issuer: "Infosys",
    date: "2025",
    description: "Proficiency in database design and SQL query optimization",
    image: "/certifications/infosys-sql.png",
  },
]

export function CertificationsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                Certifications
              </span>
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional certifications validating my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group relative overflow-hidden bg-slate-800/40 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col h-full"
            >
              {/* Image container */}
              <div className="relative w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden border-b border-cyan-500/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-cyan-400/50 mx-auto mb-2" />
                    <p className="text-xs text-slate-500">Add certification image</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content container */}
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-sm text-cyan-300 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-400 mb-4">{cert.date}</p>

                <p className="text-sm text-slate-300 leading-relaxed flex-grow">{cert.description}</p>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-500 transition-all duration-300" />
              </div>
            </Card>
          ))}
        </div>
