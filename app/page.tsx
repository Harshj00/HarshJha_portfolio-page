import { HeroSection } from "@/components/hero-section"
import { AboutMe } from "@/components/about-me"
import { SkillsVennDiagram } from "@/components/skills-venn-diagram"
import { FeaturedProjects } from "@/components/featured-projects"
import { CertificationsSection } from "@/components/certifications-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { DragonMascot } from "@/components/dragon-mascot"
import { RevolvingElement } from "@/components/ui/revolving-element"

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <DragonMascot />
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <RevolvingElement className="top-[60%] -right-40" size={350} duration={35} color="#3b82f6" opacity={0.05} />
        <RevolvingElement className="top-[40%] -left-32" size={280} duration={40} color="#9d7f6f" opacity={0.04} />
      </div>

      <section id="home">
        <HeroSection />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills-venn">
        <SkillsVennDiagram />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <section id="certifications">
        <CertificationsSection />
      </section>
      <CTASection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
