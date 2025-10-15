import Image from "next/image"

const galleryImages = [
  {
    src: "/IMG_7022.jpg",
    alt: "img1",
  },
  {
    src: "/IMG_4435.jpg",
    alt: "img2",
  },
  {
    src: "/IMG_4449.jpg",
    alt: "img3",
  },
  {
    src: "/IMG_5488.jpg",
    alt: "img4",
  },
  {
    src: "/IMG_5572.jpg",
    alt: "img5",
  },
  {
    src: "/IMG_4275.jpg",
    alt: "img6"
  }
]

export function Gallery() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Random Pictures</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary group cursor-pointer"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  )
}
