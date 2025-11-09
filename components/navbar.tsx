"use client"

import { Home, User, Briefcase, FileText, Mail } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#about-me", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/118XLpIOg3IYmhU9QlsHGhp_wSJU5UBm5/view?usp=sharing",
      icon: FileText,
    },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  return <NavBar items={navItems} />
}
