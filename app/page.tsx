import { HeroSection } from "@/components/hero-section"
import { AboutMe } from "@/components/about-me"
import { FeaturedProjects } from "@/components/featured-projects"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <CTASection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
