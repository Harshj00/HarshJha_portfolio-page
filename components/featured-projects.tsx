"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "GreenHouse Gas Emission Prediction Model",
    description:
      "Predict Future GHG Emission Based on Historical Data. Used Machine Learning Models: Linear Regression, Random Forest to Identify Trends And Patterns in GHG.",
    tags: ["Python 3.10+", "Pandas", "Numpy", "Scikit-Learn", "Jupyter", "Matplotlib", "Git/Github"],
    color: "from-[#4A70A9]/20 to-[#3A5A8A]/15",
    borderColor: "border-[#4A70A9]/40",
    textColor: "text-[#8FABD4]",
    badgeBg: "bg-[#4A70A9]/15",
    badgeBorder: "border-[#4A70A9]/30",
  },
  {
    id: 2,
    title: "House Price Prediction Model",
    description:
      "A Machine Learning Model For Predicting House Prices Accurately Based On Various Features Like Location, Size, And Amenities Using Python.",
    tags: ["Python 3.X", "Numpy", "Matplotlib", "Seaborn", "Scikit Learn", "XG Boost"],
    color: "from-[#8FABD4]/20 to-[#6B8FC4]/15",
    borderColor: "border-[#8FABD4]/40",
    textColor: "text-[#EFECE3]",
    badgeBg: "bg-[#8FABD4]/15",
    badgeBorder: "border-[#8FABD4]/30",
  },
  {
    id: 3,
    title: "Online Real-Time Auction System",
    description:
      "Built a full-stack, real-time auction system where users can list items for bidding and place bids on active auctions. This project is a step up from a basic e-commerce application because it introduces the complexities of real-time updates and managing high-frequency transactions.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Maven or Gradle", "Docker"],
    color: "from-[#EFECE3]/10 to-[#d0d0c8]/8",
    borderColor: "border-[#EFECE3]/30",
    textColor: "text-[#EFECE3]",
    badgeBg: "bg-[#EFECE3]/10",
    badgeBorder: "border-[#EFECE3]/25",
  },
  {
    id: 4,
    title: "Daily Planner with Reminders",
    description:
      "A single-page web application where a user can create, edit, and delete tasks. The application persists this data in a database, ensuring tasks are not lost when the browser is closed.",
    tags: ["React", "JavaScript", "Java", "SpringBoot", "Git/Github"],
    color: "from-[#6B8FC4]/20 to-[#4A70A9]/15",
    borderColor: "border-[#6B8FC4]/40",
    textColor: "text-[#8FABD4]",
    badgeBg: "bg-[#6B8FC4]/15",
    badgeBorder: "border-[#6B8FC4]/30",
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black"
      id="projects"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#4A70A9]/8 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EFECE3] via-[#8FABD4] to-[#EFECE3]">
              Projects
            </span>
          </h2>
          <p className="text-lg text-[#EFECE3]/60 max-w-2xl mx-auto">
            Showcasing my Work in Full Stack, Machine Learning, Generative AI, Multicloud etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} bg-[#0a0a0a]/60 backdrop-blur-sm hover:border-opacity-80 transition-all duration-300 cursor-pointer p-8 hover:shadow-xl hover:shadow-[#4A70A9]/10 hover:-translate-y-1`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-all duration-300`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <h3
                    className={`text-2xl font-bold text-[#EFECE3] group-hover:${project.textColor} transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 ${project.textColor} group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0`}
                  />
                </div>

                <p className="text-[#EFECE3]/60 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={`${project.badgeBg} ${project.textColor} border ${project.badgeBorder} hover:opacity-80 transition-colors duration-300`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
