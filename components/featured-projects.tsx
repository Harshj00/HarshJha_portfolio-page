"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { StaggeredText } from "@/components/ui/staggered-text"

const projects = [
  {
    id: 1,
    title: "GreenHouse Gas Emission Prediction Model",
    description:
      "Predict Future GHG Emission Based on Historical Data. Used Machine Learning Models: Linear Regression, Random Forest to Identify Trends And Patterns in GHG.",
    tags: ["Python 3.10+", "Pandas", "Numpy", "Scikit-Learn", "Jupyter", "Matplotlib", "Git/Github"],
  },
  {
    id: 2,
    title: "House Price Prediction Model",
    description:
      "A Machine Learning Model For Predicting House Prices Accurately Based On Various Features Like Location, Size, And Amenities Using Python.",
    tags: ["Python 3.X", "Numpy", "Matplotlib", "Seaborn", "Scikit Learn", "XG Boost"],
  },
  {
    id: 3,
    title: "Online Real-Time Auction System",
    description:
      "Built a full-stack, real-time auction system where users can list items for bidding and place bids on active auctions. This project is a step up from a basic e-commerce application because it introduces the complexities of real-time updates and managing high-frequency transactions.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Maven or Gradle", "Docker"],
  },
  {
    id: 4,
    title: "Daily Planner with Reminders",
    description:
      "A single-page web application where a user can create, edit, and delete tasks. The application persists this data in a database, ensuring tasks are not lost when the browser is closed.",
    tags: ["React", "JavaScript", "Java", "SpringBoot", "Git/Github"],
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black"
      id="projects"
    >
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#4A70A9]/8 via-transparent to-transparent rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#EFECE3] via-[#8FABD4] to-[#EFECE3]">
            Projects
          </h2>
          <p className="text-lg text-[#EFECE3]/60 max-w-2xl mx-auto">
            Showcasing my Work in Full Stack, Machine Learning, Generative AI, Multicloud etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <InteractiveCard key={project.id} className="h-full">
              <Card
                className="group relative overflow-hidden bg-gradient-to-br from-[#4A70A9]/10 to-[#8FABD4]/5 border border-[#4A70A9]/30 bg-[#0a0a0a]/60 backdrop-blur-sm hover:border-[#8FABD4]/60 transition-all duration-300 cursor-pointer p-8 hover:shadow-xl hover:shadow-[#4A70A9]/20 hover:-translate-y-1 h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A70A9] to-[#8FABD4] opacity-60 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-[#EFECE3] group-hover:text-[#8FABD4] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-[#8FABD4] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                  </div>

                  <p className="text-[#EFECE3]/60 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#4A70A9]/15 text-[#8FABD4] border border-[#4A70A9]/30 hover:bg-[#4A70A9]/25 hover:border-[#8FABD4]/50 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  )
}
