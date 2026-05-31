"use client"

import { Home, User, Briefcase, FileText, Mail, Award } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about-me", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Certifications", url: "#certifications", icon: Award },
    {
      name: "Resume",
      url: "/HarshKumarJha-Resume.pdf",
      icon: FileText,
    },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  return <NavBar items={navItems} />
}
