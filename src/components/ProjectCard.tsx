'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    technologies: string[]
    index: number
}

export function ProjectCard({ title, description, imageUrl, technologies, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-16 relative"
        >
            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <motion.div
                    className="w-full md:w-1/2 mb-4 md:mb-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="overflow-hidden">
                        <div className="relative h-64 md:h-80">
                            <Image
                                src={imageUrl}
                                alt={title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out"
                                style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                            />
                        </div>
                    </Card>
                </motion.div>
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                </div>
            </div>
            {index !== 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 -z-10" />
            )}
        </motion.div>
    )
}

