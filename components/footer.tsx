import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react"

const socials = [
  { href: "https://github.com/quinngifford", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/quinn-gifford-7b9902281/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://instagram.com/quinn.giff", label: "Instagram", Icon: Instagram },
  { href: "mailto:quinngiffordwork@gmail.com", label: "Email", Icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border mt-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 glow-accent opacity-50" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Want to reach out to me?
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-6">My inbox is always open!</p>

          <a
            href="mailto:quinngiffordwork@gmail.com"
            className="group inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-foreground hover:text-accent transition-colors"
          >
            quinngiffordwork@gmail.com
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-8">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Quinn Gifford.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
