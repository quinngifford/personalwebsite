"use client"

import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

interface Project {
  title: string
  narrative: string
  tags: string[]
  link: string
  image: string
}

// One combined list — hardware and software interleaved so the range shows at a glance.
const projects: Project[] = [
  {
    title: "Lego Building Simulator",
    narrative:
      "Build legos in a 3D space using purely C++ and OpenGL.",
    tags: ["C++", "OpenGL", "3D Graphics"],
    link: "https://github.com/quinngifford/Lego-Building-Simulation",
    image: "/LEGOs.gif",
  },
  {
    title: "Model Rocket Flight Computer",
    narrative:
      "I built a real-time model rocket avionics system using a bare metal STM32 setup. The system handles sensor processing, flight data computation, flight event detection, and data logging. I designed a compact PCB and soldered it with the help of the rocket propulsion team I was working with. I wrote the embedded firmware in C++ and organized the system around real-time tasks with RTOS for sensor polling, calculations, and flight logic. After flights, I used Python and Matplotlib to display and analyze the flight data over time.",
    tags: ["RP2040", "RTOS", "C", "C++", "Python", "Soldering", "KiCad"],
    link: "#",
    image: "/rocketpcb.png",
  },
  {
    title: "Munkey AI",
    narrative:
      "My college roommate and I are building a full stack AI learning platform where teachers create courses, upload assignments and learning materials, manage grades, and teach students with the help of AI. Uses AI to automatically parse assignments, creating a designated AI chat for every student for each problem, using RAG or manual teacher input to create mappings to specific pages within related learning materials. Provides teachers the ability to customize the AI for every problem, defining the system prompt, resources, and instructional behavior/guidelines. There are more features such as allowing teachers to see student chat history for each problem.",
    tags: ["Full Stack Development", "TypeScript", "Next.js", "Supabase", "Pinecone", "OpenAI"],
    link: "https://munkeyai.com/",
    image: "/monkey.png",
  },
  {
    title: "Guitar Hero on FPGA and ESP32",
    narrative:
      "Recreated Guitar Hero using a CMOD F7 FPGA. The FPGA is hooked up to a 4 LED strip display. Using SystemVerilog I programmed the outputs of the FGPA to control the notes going down the LED strips. At first I just used the buttons on the FPGA to play but I eventually upgraded to a wireless controller! I designed and soldered a custom PCB to hold my ESP32. I wrote firmware to utilize it's wireless communication power, then hooked the FPGA up to another ESP32 (to receieve the bluetooth signals and transfer them to the FPGA). This sort of nullified the point of the FPGA performance benefits, but it was still fun to do.",
    tags: ["KiCad", "Soldering", "FPGA", "C++", "SystemVerilog"],
    link: "#",
    image: "/guitarhero.gif",
  },
  {
    title: "Beatmap Generator",
    narrative:
      "Automatic beatmap generator that analyzes audio and produces playable rhythm-game charts across multiple difficulty levels. The system uses digital signal processing techniques to detect musical onsets, estimate tempo, track beats, classify percussion, and assign notes to playable lanes with precise timing. It generates JSON, CSV, and osu!mania-compatible charts. The pipeline achieves sub-millisecond timing accuracy on percussive test tracks and processes audio at roughly 200× real time.",
    tags: ["Python", "Digital Signal Processing", "Audio Analysis"],
    link: "https://github.com/quinngifford/Beatmap-Generator",
    image: "/beatmap.gif",
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
  {
    title: "Three Axis Robot Arm with Parkinsons",
    narrative:
      "My Junior Design Group and I buit a 3 axis robot arm using cheap servos to write and draw on paper based on GCODE commands. I built a graphical user interface to allow the user to input GCODE commands, which would automatically do inverse kinematics to create arm movements. We had some mechnaical issues so we called it Parkinsons Arm",
    tags: ["ESP32", "CAD", "C++", "Python", "Soldering"],
    link: "#",
    image: "/parkinson.gif",
  },
]

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  const hasLink = project.link !== "#"

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group block w-full cursor-pointer text-left focus:outline-none"
        >
          {/* Image + hover reveal */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-secondary transition-colors group-hover:border-accent/50 group-focus-visible:border-accent">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
              priority={priority}
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="p-4">
                <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{project.narrative}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Title + tags underneath */}
          <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-card shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, 768px"
              unoptimized
            />
          </div>

          <Dialog.Close className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="space-y-6 p-6 md:p-8">
            <Dialog.Title className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</Dialog.Title>

            <Dialog.Description className="text-base leading-relaxed text-muted-foreground text-pretty">
              {project.narrative}
            </Dialog.Description>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Visit project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03 / PROJECTS"
          title="Project Examples"
          subtitle="Hover for a preview, click any project for the full story."
        />

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
