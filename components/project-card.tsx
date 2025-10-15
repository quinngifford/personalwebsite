import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
}

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-accent/50 transition-all duration-300">
      <a href={link} className="block">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Card>
  )
}
