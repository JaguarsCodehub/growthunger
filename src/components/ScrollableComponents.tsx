'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Project {
    title: string
    description: string
    imageUrl: string
    link: string
}

const projects: Project[] = [
    {
        title: "Mobile App Interface",
        description: "Interactive mobile application design with modern UI elements",
        imageUrl: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "Digital Marketing Platform",
        description: "Multi-channel digital marketing solution",
        imageUrl: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "Design Portfolio",
        description: "Showcase of creative works and designs",
        imageUrl: "/placeholder.svg?height=600&width=800",
        link: "#"
    },
    {
        title: "Mental Health Platform",
        description: "Safe space for mental wellness",
        imageUrl: "/placeholder.svg?height=600&width=800",
        link: "#"
    }
]

export function ScrollableProjects() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollXProgress } = useScroll({ container: containerRef })

    const opacity = useTransform(scrollXProgress, [0, 0.9], [1, 0])

    return (
        <section className="relative w-full bg-transparent py-20">
            <div className="container mx-auto px-4 mb-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-white mb-2"
                >
                    Latest Projects
                </motion.h2>
                <p className="text-gray-400">Scroll to explore our recent work</p>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollSnapType: 'x mandatory'
                }}
            >
                <div className="flex space-x-6 px-8 pb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative flex-none w-[80vw] md:w-[40vw] h-[70vh] rounded-xl overflow-hidden scroll-snap-align-start"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 0.98 }}
                        >
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-200 mb-4">{project.description}</p>
                                    <Button variant="secondary" asChild>
                                        <a href={project.link} className="inline-flex items-center">
                                            View Project
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className="absolute right-4 bottom-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                style={{ opacity }}
            >
                Scroll for more →
            </motion.div>

            <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    )
}

