'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'

const projects = [
    {
        title: 'E-commerce Revolution',
        description: 'Reimagined online shopping with AI-powered personalization and seamless blockchain payments.',
        imageUrl: '/placeholder.svg?height=400&width=600',
        technologies: ['React', 'Node.js', 'MongoDB', 'AI', 'Blockchain']
    },
    {
        title: 'Social Echo',
        description: 'A next-gen social platform that visualizes content impact and fosters meaningful connections.',
        imageUrl: '/placeholder.svg?height=400&width=600',
        technologies: ['Vue.js', 'GraphQL', 'Neo4j', 'WebGL']
    },
    {
        title: 'FitSync',
        description: 'Revolutionary fitness app using AR for perfect form and IoT integration for real-time health tracking.',
        imageUrl: '/placeholder.svg?height=400&width=600',
        technologies: ['React Native', 'ARKit', 'TensorFlow', 'IoT']
    },
    {
        title: 'EcoSmart City',
        description: 'Smart city management system optimizing energy use, traffic flow, and waste management with ML.',
        imageUrl: '/placeholder.svg?height=400&width=600',
        technologies: ['Python', 'TensorFlow', 'IoT', 'Big Data']
    }
]

export function ProjectsShowcase() {
    return (
        <section className="py-16 bg-transparent">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Our Work
                </motion.h2>
                <div className="relative">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

