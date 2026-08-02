import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const galleryImages = [
  // Spans tile into a clean 4x3 grid on desktop, plain 2-up on mobile
  { src: "/IMG_5274.jpg", alt: "img1", className: "sm:col-span-2 sm:row-span-2" },
  { src: "/IMG_5779.JPEG", alt: "img2", className: "sm:col-span-2" },
  { src: "/girlfriend.JPEG", alt: "img3", className: "" },
  { src: "/IMG_7446.jpg", alt: "img4", className: "" },
  { src: "/IMG_5572.jpg", alt: "img5", className: "sm:col-span-2" },
  { src: "/IMG_5687.JPEG", alt: "img6", className: "sm:col-span-2" },
]

export function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="04 / GALLERY"
          title="Random Pictures"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border border-border/60 bg-secondary group ${image.className}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
