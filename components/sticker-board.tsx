import Image from "next/image"

interface Sticker {
  company: string
  /** Path to a transparent PNG in /public, e.g. "/boeing.png".
   *  Leave empty and the sticker shows the company name instead. */
  src?: string
  /** Position within the board, as percentages */
  left: string
  top: string
  /** Base width in px */
  width: number
  /** Size multiplier on top of `width` — 1 is as-is, 1.3 is 30% bigger, 0.8 is 20% smaller.
   *  Applied to the layout size rather than a CSS transform, so it doesn't fight the hover lift. */
  scale?: number
  /** Tilt in degrees — keep it small, ±8 reads as "slapped on" without looking broken */
  rotate: number
  /** Company website. Omit and the sticker is decorative rather than clickable. */
  link?: string
}

// Cascading arrangement — each one clips the corner of the last, like magnets crowded on a fridge.
const stickers: Sticker[] = [
  {
    company: "Boeing",
    src: "/boeing.png",
    left: "-25%",
    top: "-10%",
    width: 168,
    scale: 1,
    rotate: 0,
    link: "https://www.boeing.com",
  },
  {
    company: "Alethian",
    src: "/alethian-Photoroom.png",
    left: "-55%",
    top: "22%",
    width: 150,
    scale: 1,
    rotate: 0,
    link: "https://www.alethian.com/",
  },
  {
    company: "Scale AI",
    src: "/scale.png",
    left: "-50%",
    top: "46%",
    width: 158,
    scale: 1,
    rotate: 0,
    link: "https://scale.com",
  },
  {
    company: "STEP IT Academy",
    src: "/stepit-Photoroom.png",
    left: "-50%",
    top: "69%",
    width: 146,
    scale: 1.4,
    rotate: 0,
    link: "https://itstep.us/",
  },
]

const sizeOf = (sticker: Sticker) => Math.round(sticker.width * (sticker.scale ?? 1))

/**
 * No plate, no border, no padding: only the PNG's opaque pixels are visible.
 * The shadow is a `drop-shadow` filter rather than `shadow-*` (box-shadow) so it
 * traces the logo's alpha channel instead of the element's rectangle.
 */
function StickerPlate({ sticker }: { sticker: Sticker }) {
  return (
    <div
      className="sticker flex aspect-[4/3] items-center justify-center drop-shadow-[0_4px_8px_rgb(0_0_0/0.45)] hover:drop-shadow-[0_10px_18px_rgb(0_0_0/0.55)]"
      style={{ "--sticker-rotate": `${sticker.rotate}deg` } as React.CSSProperties}
    >
      {sticker.src ? (
        <Image
          src={sticker.src}
          alt={`${sticker.company} logo`}
          width={280}
          height={210}
          className="h-full w-full object-contain"
          unoptimized
        />
      ) : (
        <span className="text-center font-mono text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          {sticker.company}
        </span>
      )}
    </div>
  )
}

/** Wraps the sticker in a link when one is set, otherwise leaves it inert. */
function StickerItem({ sticker }: { sticker: Sticker }) {
  if (!sticker.link) {
    return <StickerPlate sticker={sticker} />
  }

  return (
    <a
      href={sticker.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sticker.company} website`}
      className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <StickerPlate sticker={sticker} />
    </a>
  )
}

export function StickerBoard() {
  return (
    <>
      {/* Desktop: scattered, overlapping cluster */}
      <div className="relative hidden h-[460px] lg:block">
        {stickers.map((sticker) => (
          <div
            key={sticker.company}
            className="absolute z-0 hover:z-20"
            style={{ left: sticker.left, top: sticker.top, width: sizeOf(sticker) }}
          >
            <StickerItem sticker={sticker} />
          </div>
        ))}
      </div>

      {/* Narrow screens: same stickers, but wrapped instead of absolutely placed */}
      <div className="flex flex-wrap justify-center gap-5 lg:hidden">
        {stickers.map((sticker) => (
          <div key={sticker.company} style={{ width: sizeOf(sticker) }}>
            <StickerItem sticker={sticker} />
          </div>
        ))}
      </div>
    </>
  )
}
