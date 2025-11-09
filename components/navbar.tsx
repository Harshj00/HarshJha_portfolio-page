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
      url: "https://drive.google.com/file/d/1t8Dh0Fu0_PBZWoy775acHM0AP7rOkmHZ/view?usp=sharing",
      icon: FileText,
    },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  return <NavBar items={navItems} />
}
