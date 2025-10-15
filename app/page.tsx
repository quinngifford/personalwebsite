import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
