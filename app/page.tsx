import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
