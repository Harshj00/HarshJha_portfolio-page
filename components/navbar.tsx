"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about-me" },
    { name: "Projects", url: "#projects" },
    { name: "Certifications", url: "#certifications" },
    { name: "Contact", url: "#contact" },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
            </div>
            <span className="hidden sm:inline text-black">Harsh Jha</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-sm font-semibold text-gray-700 hover:text-[#5E0ED7] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <a
            href="/Harsh_Kumar_Jha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#5E0ED7] text-[#5E0ED7] font-semibold text-sm rounded-lg hover:bg-[#5E0ED7]/10 transition-all duration-300"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-gray-200">
            <a href="#home" className="flex items-center gap-2 font-bold text-xl" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
              </div>
              <span>Harsh Jha</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col gap-6 px-5 sm:px-8 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-lg font-semibold text-gray-900 hover:text-[#5E0ED7] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Harsh_Kumar_Jha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#5E0ED7] text-[#5E0ED7] font-semibold rounded-lg hover:bg-[#5E0ED7]/10 transition-all duration-300 w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
