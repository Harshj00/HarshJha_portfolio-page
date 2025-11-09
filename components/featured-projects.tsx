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
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    id: 2,
    title: "House Price Prediction Model",
    description:
      "A Machine Learning Model For Predicting House Prices Accurately Based On Various Features Like Location, Size, And Amenities Using Python.",
    tags: [
      "Python 3.X",
      "Numpy (For Data Manipulation)",
      "Matplotlib",
      "Seaborn (For Data Visualization)",
      "Scikit Learn",
      "XG Boost",
    ],
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 3,
    title: "Online Real-Time Auction System",
    description:
      "Built a full-stack, real-time auction system where users can list items for bidding and place bids on active auctions. This project is a step up from a basic e-commerce application because it introduces the complexities of real-time updates and managing high-frequency transactions.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Maven or Gradle", "Docker"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: 4,
    title: "Daily Planner with Reminders",
    description:
      "A single-page web application where a user can create, edit, and delete tasks. The application persists this data in a database, ensuring tasks are not lost when the browser is closed.",
    tags: ["React", "JavaScript", "Java", "SpringBoot", "Git/Github"],
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
]

export function FeaturedProjects() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Showcasing my Work in Full Stack, Machine Learning, Generative AI, Multicloud etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 cursor-pointer p-8`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300 will-change-transform" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </div>

                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300"
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
