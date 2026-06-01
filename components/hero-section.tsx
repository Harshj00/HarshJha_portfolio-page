"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = ["Story", "Expertise", "Studios", "Feedback"]

  const stats = [
    { number: "5+", label: "Real World\nProjects" },
    { number: "4", label: "Professional\nCertifications" },
    { number: "2", label: "Internships" },
  ]

  const fadeDownVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const fadeUpVariants = {
    initial: { opacity: 0, y: 32 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const headingVariants = {
    initial: { y: "110%" },
    animate: (custom: number) => ({
      y: 0,
      transition: {
        delay: 0.4 + custom * 0.14,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section className="relative w-full min-h-screen font-sans overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="/video-placeholder.jpg"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            custom={0}
            variants={fadeDownVariants}
            initial="initial"
            animate="animate"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
            </div>
          </motion.div>

          {/* Nav Links - Hidden on Mobile */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link}
                href="#"
                className="text-sm font-semibold tracking-widest uppercase text-black hover:text-[#5E0ED7] transition-colors"
                custom={idx + 1}
                variants={fadeDownVariants}
                initial="initial"
                animate="animate"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Hamburger Menu - Visible on Mobile */}
          <motion.button
            onClick={() => setMobileMenuOpen(true)}
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 md:hidden"
            custom={5}
            variants={fadeDownVariants}
            initial="initial"
            animate="animate"
          >
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
          </motion.button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white p-5 sm:p-8 flex flex-col md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-3xl font-semibold tracking-widest uppercase text-black hover:text-[#5E0ED7] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto flex items-center gap-2 text-[#5E0ED7] text-xl font-semibold tracking-widest uppercase">
              <a href="#">Work With Us</a>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        )}

        {/* Stats Row - Middle Section */}
        <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex gap-5 sm:gap-8 md:gap-10 flex-wrap justify-end">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-right"
                custom={idx + 2}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-[#5E0ED7] font-semibold" style={{ fontSize: "clamp(0.75rem, 2.5vw, 1.75rem)" }}>
                    +
                  </span>
                  <div style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }} className="font-semibold text-black font-sans">
                    {stat.number}
                  </div>
                </div>
                <p
                  className="text-black font-semibold tracking-widest uppercase whitespace-pre-line leading-tight"
                  style={{ fontSize: "clamp(10px, 2vw, 14px)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 space-y-6 md:space-y-12">
          {/* Row A: Tagline + CTA */}
          <motion.div
            className="flex items-center justify-between gap-4"
            custom={5}
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
          >
            <p
              className="font-semibold tracking-widest uppercase text-black leading-tight"
              style={{
                fontSize: "clamp(10px, 1.5vw, 14px)",
                maxWidth: "clamp(130px, 20vw, 400px)",
              }}
            >
              Shaping Bold <br /> Visions Into Power <br /> For Your Tribe
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-[#5E0ED7] font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ fontSize: "clamp(16px, 3vw, 24px)" }}
            >
              Work With Us
              <ArrowUpRight className="w-5 sm:w-6 md:w-[22px]" />
            </a>
          </motion.div>

          {/* Row B: Description + Heading */}
          <motion.div
            className="flex items-end justify-between gap-3 sm:gap-4"
            custom={7}
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
          >
            {/* Description */}
            <div
              className="shrink-0 font-semibold tracking-widest uppercase text-black leading-tight"
              style={{
                width: "clamp(120px, 25vw, 280px)",
                fontSize: "clamp(9px, 1.2vw, 14px)",
              }}
            >
              Creative Studios Built Around Elevating Your Vision Into Striking Reality
            </div>

            {/* Main Heading */}
            <div className="flex-1 text-right">
              <div style={{ lineHeight: 0.88 }}>
                {["FEARLESS", "VISION", "DELIVERED"].map((word, idx) => (
                  <div key={word} className="overflow-hidden">
                    <motion.h1
                      className="font-semibold tracking-widest uppercase text-black font-sans"
                      style={{
                        fontSize: "clamp(2rem, 9vw, 9rem)",
                      }}
                      custom={idx}
                      variants={headingVariants}
                      initial="initial"
                      animate="animate"
                    >
                      {word}
                    </motion.h1>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
