import { HeroSection } from "@/components/hero-section"
import { AboutMe } from "@/components/about-me"
import { FeaturedProjects } from "@/components/featured-projects"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <AboutMe />
      <FeaturedProjects />
      <CTASection />
      <ContactSection />
    </main>
  )
}
