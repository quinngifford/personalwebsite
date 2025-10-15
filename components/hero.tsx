import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="container mx-auto px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">Quinn Gifford</h1>
          <p className="text-2xl md:text-3xl text-accent font-light">Hardware & Software Engineer</p>
        </div>

        <div className="max-w-2xl space-y-4 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a student at Oregon State University majoring in Electrical and Computer Engineering and minoring in
            Computer Science. I've worked two software internships so far and I'm looking to continue expanding my
            horizons.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/quinngifford"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/quinn-gifford-7b9902281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/quinn.giff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:quinngiffordwork@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
