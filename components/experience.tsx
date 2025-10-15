import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Alethian",
      period: "June 2025 - Sep 2025",
      description: "",
    },
    {
      title: "Software Engineer Intern",
      company: "Scale AI",
      period: "June 2024 - Sep 2024",
      description: "",
    },
    {
      title: "STEM Instructor",
      company: "STEP IT Academy",
      period: "June 2023 - Sep 2023",
      description: "",
    },
  ]

  return (
    <section id="experience" className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <Button size="lg" asChild>
            <a href="/quinnresume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-8 hover:border-accent transition-colors">
              <div className="space-y-2 mb-4">
                <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <span className="text-base text-muted-foreground">{exp.period}</span>
                </div>
              </div>
              {exp.description && <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
