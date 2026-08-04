"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Cpu, Code2, ChevronRight, MousePointerClick } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

interface Project {
  title: string
  narrative: string
  tags: string[]
  link: string
  image: string
}

const hardwareProjects: Project[] = [
  {
    title: "Guitar Hero on FPGA and ESP32",
    narrative:
      "I recreated Guitar Hero using an FPGA and an ESP32! My CMOD F7 FPGA is hooked up to a 4 LED strip display. Using SystemVerilog I programmed the outputs of the FGPA to control the notes going down the LED strips. At first I just used the buttons on the FPGA to play but I eventually upgraded to a wireless controller! I designed and soldered a custom PCB to hold my ESP32. I wrote firmware to utilize it's wireless communication power, then hooked the FPGA up to another ESP32 (to receieve the bluetooth signals and transfer them to the FPGA). This sort of nullified the point of the FPGA performance benefits, but it was still fun to do.",
    tags: ["KiCad", "Soldering", "FPGA", "C++", "SystemVerilog"],
    link: "#",
    image: "/guitarhero.gif",
  },
  {
    title: "Model Rocket Flight Computer",
    narrative:
      "I built a real-time model rocket avionics system in two different varitions, one using a bare metal STM32 chip setup, and the other around the STARLIGHT flight computer, using its RP2040-based platform. The system handles sensor processing, flight data computation, flight event detection, and data logging. I wrote the embedded firmware in C++ and organized the system around real-time tasks with RTOS for sensor polling, calculations, and flight logic. After flights, I used Python and Matplotlib to display and analyze the flight data over time.",
    tags: ["RP2040", "RTOS", "C", "C++", "Python", "Soldering", "KiCad"],
    link: "#",
    image: "/flight.png",
  },
  {
    title: "Three Axis Robot Arm with Parkinsons",
    narrative:
      "My Junior Design Group and I buit a 3 axis robot arm using cheap servos to write and draw on paper based on GCODE commands. I built a graphical user interface to allow the user to input GCODE commands, which would automatically do inverse kinematics to create arm movements. We had some mechnaical issues so we called it the Parkinsons Arm. We even tried to balance the arm with shot glasses...",
    tags: ["ESP32", "CAD", "C++", "Python", "Soldering"],
    link: "#",
    image: "/parkinson.gif",
  },
]

const softwareProjects: Project[] = [
  {
    title: "Munkey AI",
    narrative:
      "My college roommate and I are building a full stack AI learning platform where teachers create courses, upload assignments and learning materials, manage grades, and teach students with the help of AI. Uses AI to automatically parse assignments, creating a designated AI chat for every student for each problem, using RAG or manual teacher input to create mappings to specific pages within related learning materials. Provides teachers the ability to customize the AI for every problem, defining the system prompt, resources, and instructional behavior/guidelines. There are more features such as allowing teachers to see student chat history for each problem.",
    tags: ["Full Stack Development", "TypeScript", "Next.js", "Supabase", "Pinecone", "OpenAI"],
    link: "https://munkeyai.com/",
    image: "/munkey2.png",
  },
  {
    title: "Application God",
    narrative:
      "I built a scaleable full stack app that allows anyone to mass apply to jobs. The app saves the users answers to every potential application question, and with the click of a button, searches for jobs all over the internet and applies to them automatically. The app uses a headless browser to parse, comprehend, and fill out the application forms, and can even handle CAPTCHAs. The app also has a dashboard where users can see the status of their applications, allowing for manual intervention if every fallback method fails. Fallback methods include semantic similarity and AI processing with Claude if an application question can't be mapped to an answer.",
    tags: ["Full Stack Development", "TypeScript", "Next.js", "Render", "Resend", "Claude"],
    link: "https://autoapply-demo.onrender.com/",
    image: "/appgod2.png",
  },
  {
    title: "OpenGL Traffic Simulation",
    narrative:
      "I built a full traffic intersection simulator in C++ and OpenGL. I drew an intersection with shaders in OpenGL and programmed cars to drive through it with realistic physics in C++. I programmed multiple traffic light control algorithms in order to find the the most efficient one. The system tracks every car's wait time, and the total intersection throughput, and some of the smarter control modes cut total delay by nearly 45% compared to the basic fixed timer. I did this project because I think that a lot of intersections in the US suck and need to be upgraded with smarter software to reduce traffic.",
    tags: ["C", "C++", "OpenGL"],
    link: "https://github.com/quinngifford/OpenGL-traffic-simulator",
    image: "/traffic.gif",
  },
  
]

const categories = [
  {
    id: "hardware",
    label: "Hardware",
    blurb: "PCBs, microcontrollers, and firmware",
    icon: Cpu,
    projects: hardwareProjects,
  },
  {
    id: "software",
    label: "Software",
    blurb: "Full stack builds, simulations, game development",
    icon: Code2,
    projects: softwareProjects,
  },
]

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-28">
      {projects.map((project, index) => (
        <article key={project.title} className="group">
          <a href={project.link} className="block space-y-8">
            {/* Large immersive image */}
            <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-secondary">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                unoptimized
                priority={index === 0}
              />
            </div>

            {/* Project title below image */}
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <ArrowUpRight className="w-6 h-6 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            {/* Narrative text - essay style */}
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{project.narrative}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 rounded-full border border-border/60 bg-secondary/50 text-muted-foreground font-mono transition-colors group-hover:border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </article>
      ))}
    </div>
  )
}

/**
 * Which category is open when the page loads.
 *   null        → nothing shows until a card is clicked (current behavior)
 *   "software"  → Software is open from the start
 *   "hardware"  → Hardware is open from the start
 */
const DEFAULT_CATEGORY: string | null = null

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(DEFAULT_CATEGORY)
  const active = categories.find((category) => category.id === activeId) ?? null

  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="03 / PROJECTS" title="Project Examples" />

        {/* Category chooser */}
        <div className="mb-12">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
            {active ? "now showing" : "pick a category to start"}
          </p>

          <div role="tablist" aria-label="Project categories" className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = category.id === activeId

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={isActive ? `panel-${category.id}` : undefined}
                  onClick={() => setActiveId(category.id)}
                  className={`group relative flex items-center gap-5 rounded-xl border p-6 text-left transition-all hover:-translate-y-0.5 ${
                    isActive
                      ? "border-accent bg-secondary/40"
                      : "border-border bg-card/30 hover:border-accent/50 hover:bg-secondary/20"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isActive
                        ? "border-accent/40 bg-accent/10 text-accent"
                        : "border-border bg-secondary/40 text-muted-foreground group-hover:text-accent"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl md:text-2xl font-semibold tracking-tight">{category.label}</span>
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        {String(category.projects.length).padStart(2, "0")} projects
                      </span>
                    </div>
                    {category.blurb && <p className="mt-1 text-sm text-muted-foreground">{category.blurb}</p>}
                  </div>

                  {isActive ? (
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                  ) : (
                    <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-accent" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {active ? (
          /* Panel — keyed so it re-mounts and replays the fade-in on switch */
          <div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="animate-rise"
          >
            <ProjectList projects={active.projects} />
          </div>
        ) : (
          /* Nothing chosen yet — make the empty state read as intentional */
          <div className="relative overflow-hidden rounded-xl border border-dashed border-border py-24 text-center">
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
            <div className="relative">
              <MousePointerClick className="mx-auto mb-4 h-7 w-7 text-muted-foreground/50" />
              <p className="text-base text-muted-foreground">
                Choose <span className="text-accent">Hardware</span> or{" "}
                <span className="text-accent">Software</span> above to see those projects.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
