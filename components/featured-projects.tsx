"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { StaggeredText } from "@/components/ui/staggered-text"

const projects = [
  {
    id: 1,
    title: "ConsultCA",
    description:
      "An AI-powered legal and financial advisory platform that automates complex chartered accountancy workflows, resolves tax queries instantly, and simplifies compliance checks.",
    tags: ["React", "Tailwind CSS", "OpenAI API", "Supabase", "AI Integration"],
    link: "http://consultca.lovable.app/",
  },
  {
    id: 2,
    title: "HarshTrains",
    description:
      "AI-enabled fitness coaching application that runs on a standard browser & Android Phone and uses computer-vision-based pose estimation to track the user's movement during selected exercises.",
    tags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Mobile Optimized", "Deeptech & System Based"],
    link: "https://harshtrains.netlify.app/",
  },
  {
    id: 3,
    title: "GreenHouse Gas Emission Prediction Model",
    description:
      "Predict Future GHG Emission Based on Historical Data. Used Machine Learning Models: Linear Regression, Random Forest to Identify Trends And Patterns in GHG.",
    tags: ["Python 3.10+", "Pandas", "Numpy", "Scikit-Learn", "Jupyter", "Matplotlib", "Git/Github"],
    link: "https://github.com/Harshj00/AICTE.InternshipFinalWeek"
  },
  {
    id: 4,
    title: "House Price Prediction Model",
    description:
      "A Machine Learning Model For Predicting House Prices Accurately Based On Various Features Like Location, Size, And Amenities Using Python.",
    tags: ["Python 3.X", "Numpy", "Matplotlib", "Seaborn", "Scikit Learn", "XG Boost"],
    link: "https://github.com/Harshj00/PROJECTS/tree/main"
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      id="projects"
    >
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#5E0ED7]/5 via-transparent to-transparent rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my Work in Full Stack, Machine Learning, Generative AI, Multicloud etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5E0ED7] to-[#a855f7] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-black group-hover:text-[#5E0ED7] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-[#5E0ED7] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#5E0ED7]/10 text-[#5E0ED7] border border-[#5E0ED7]/30 hover:bg-[#5E0ED7]/20 hover:border-[#5E0ED7]/60 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )

            const cardElement = (
              <Card
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#5E0ED7] transition-all duration-300 cursor-pointer p-8 hover:shadow-lg hover:shadow-[#5E0ED7]/10 hover:-translate-y-1 h-full"
              >
                {CardContent}
              </Card>
            )

            return (
              <InteractiveCard key={project.id} className="h-full">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {cardElement}
                  </a>
                ) : (
                  cardElement
                )}
              </InteractiveCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
