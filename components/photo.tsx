import Image from "next/image"
import { ImageIcon } from "lucide-react"

interface PhotoProps {
  /** Drop a file in /public and set this (e.g. "/me-at-launch.jpg"). Leave empty to show the placeholder. */
  src?: string
  alt: string
  /** Shown on hover once an image exists, and under the icon while it's still a placeholder. */
  caption?: string
  /** Sizing / aspect classes for the frame, e.g. "aspect-[4/5]". */
  className?: string
}

export function Photo({ src, alt, caption, className = "" }: PhotoProps) {
  return (
    <figure className={`group relative overflow-hidden rounded-xl border border-border bg-secondary/30 ${className}`}>
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          {caption && (
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-background/85 backdrop-blur-sm px-4 py-2 font-mono text-[11px] text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-dot-grid opacity-70">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
              {caption ?? "add photo"}
            </span>
          </div>
        </div>
      )}
    </figure>
  )
}
