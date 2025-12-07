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
    color: "from-teal-500/15 to-emerald-500/10",
    borderColor: "border-teal-500/30",
    textColor: "text-teal-300",
    badgeBg: "bg-teal-500/15",
    badgeBorder: "border-teal-500/30",
  },
  {
    id: 2,
    title: "House Price Prediction Model",
    description:
      "A Machine Learning Model For Predicting House Prices Accurately Based On Various Features Like Location, Size, And Amenities Using Python.",
    tags: ["Python 3.X", "Numpy", "Matplotlib", "Seaborn", "Scikit Learn", "XG Boost"],
    color: "from-amber-500/15 to-orange-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-300",
    badgeBg: "bg-amber-500/15",
    badgeBorder: "border-amber-500/30",
  },
  {
    id: 3,
    title: "Online Real-Time Auction System",
    description:
      "Built a full-stack, real-time auction system where users can list items for bidding and place bids on active auctions. This project is a step up from a basic e-commerce application because it introduces the complexities of real-time updates and managing high-frequency transactions.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Maven or Gradle", "Docker"],
    color: "from-rose-500/15 to-pink-500/10",
    borderColor: "border-rose-500/30",
    textColor: "text-rose-300",
    badgeBg: "bg-rose-500/15",
    badgeBorder: "border-rose-500/30",
  },
  {
    id: 4,
    title: "Daily Planner with Reminders",
    description:
      "A single-page web application where a user can create, edit, and delete tasks. The application persists this data in a database, ensuring tasks are not lost when the browser is closed.",
    tags: ["React", "JavaScript", "Java", "SpringBoot", "Git/Github"],
    color: "from-violet-500/15 to-purple-500/10",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-300",
    badgeBg: "bg-violet-500/15",
    badgeBorder: "border-violet-500/30",
  },
]

export function FeaturedProjects() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950"
      id="projects"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-teal-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-teal-200 to-slate-100">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing my Work in Full Stack, Machine Learning, Generative AI, Multicloud etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${project.color} border ${project.borderColor} bg-slate-900/50 backdrop-blur-sm hover:border-opacity-80 transition-all duration-300 cursor-pointer p-8 hover:shadow-xl hover:-translate-y-1`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-all duration-300`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <h3
                    className={`text-2xl font-bold text-slate-100 group-hover:${project.textColor} transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 ${project.textColor} group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0`}
                  />
                </div>

                <p className="text-slate-400 leading-relaxed">{project.description}</p>

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
