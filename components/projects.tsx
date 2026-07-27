import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Guitar Hero on FPGA and ESP32",
    narrative:
      "I recreated Guitar Hero using an FPGA and an ESP32! My CMOD F7 FPGA is hooked up to a 4 LED strip display. Using SystemVerilog I programmed the outputs of the FGPA to control the notes going down the LED strips. At first I just used the buttons on the FPGA to play but I eventually upgraded to a wireless controller! I designed and soldered a custom PCB to hold my ESP32. I wrote firmware to utilize it's wireless communication power, then hooked the FPGA up to another ESP32 (to receieve the bluetooth signals and transfer them to the FPGA). This sort of nullified the point of the FPGA performance benefits, but it was still fun to do.",
    tags: ["KiCad", "Soldering", "FPGA", "C++", "SystemVerilog"],
    link: "#",
    image: "/guitarhero.gif",
  },
  {
    title: "Rocket Control Systems",
    narrative:
      "I built a real-time model rocket avionics system around the STARLIGHT flight computer, using its RP2040-based platform to handle sensor processing, flight event detection, and data logging. I set up a wireless telemetry link with an antenna module and ground receiver to send flight data to a ground station during flight. I wrote the embedded firmware in C++ and organized the system around real-time tasks for sensor polling, telemetry transmission, and flight logic. On the ground side, I used Python and Matplotlib to display and analyze the incoming flight data.",
    tags: ["RP2040", "RTOS", "C", "C++", "Python", "Soldering", "KiCad"],
    link: "#",
    image: "/Screenshot 2026-07-27 140244.png",
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
    title: "Munkey AI",
    narrative:
      "My college roommate and I are building a full stack AI learning platform where teachers create courses, upload assignments and learning materials, manage grades, and teach students with the help of AI. Uses AI to automatically parse assignments, creating a designated AI chat for every student for each problem, using RAG or manual teacher input to create mappings to specific pages within related learning materials. Provides teachers the ability to customize the AI for every problem, defining the system prompt, resources, and instructional behavior/guidelines. There are more features such as allowing teachers to see student chat history for each problem.",
    tags: ["Full Stack Development", "TypeScript", "Next.js", "Supabase", "Pinecone"],
    link: "https://munkeyai.com/",
    image: "/monkey.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-4xl font-bold mb-4">Project Examples</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <article key={index} className="group">
            <a href={project.link} className="block space-y-8">
              {/* Large immersive image */}
              <div className="relative w-full overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Project title below image */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Narrative text - essay style */}
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{project.narrative}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* Subtle divider between projects */}
            {index < projects.length - 1 && <div className="mt-32 border-t border-border/30" />}
          </article>
        ))}
      </div>
    </section>
  )
}
