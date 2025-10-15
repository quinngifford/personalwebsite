"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
            Your Name
          </Link>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm transition-colors ${
                activeSection === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm transition-colors ${
                activeSection === "projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
