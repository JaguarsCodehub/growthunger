"use client"

import { Card } from "@/components/ui/card"

export default function AnimatedCards() {
    const cards = [
        {
            id: 1,
            bg: "bg-[#fff]",
            image: "/icons/aws.svg",
            rotate: "-rotate-6"
        },
        {
            id: 2,
            bg: "bg-[#fff]",
            image: "/icons/docker.svg",
            rotate: "rotate-2"
        },
        {
            id: 3,
            bg: "bg-[#fff]",
            image: "/icons/react.svg",
            rotate: "-rotate-3"
        },
        {
            id: 4,
            bg: "bg-[#fff]",
            image: "/icons/typescript.svg",
            rotate: "rotate-6"
        },
        {
            id: 5,
            bg: "bg-[#fff]",
            image: "/icons/kubernetes.svg",
            rotate: "-rotate-6"
        },
        {
            id: 6,
            bg: "bg-[#fff]",
            image: "/icons/django.svg",
            rotate: "rotate-6"
        },
    ]

    return (
        <div className="hidden md:block w-full max-w-3xl md:max-w-2xl mx-auto px-4 py-8 relative">
            <h1 className="text-4xl font-bold text-center">Future-ready tech built with</h1>
            <h2 className="text-5xl font-bold text-center mb-16 text-blue-500">modern stack designed to scale your vision.</h2>
            <div className="relative h-[300px] flex items-center justify-center">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        className={`absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] ${card.bg} ${card.rotate
                            } shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer`}
                        style={{
                            left: `${50 + (index - 1.5) * 150}px`,
                            zIndex: index
                        }}
                    >
                        <div className="w-full h-full rounded-lg overflow-hidden">
                            <img
                                src={card.image}
                                alt={`Card ${card.id}`}
                                className="w-full h-full object-fill"
                            />
                        </div>
                    </Card>
                ))}
            </div>
            {/* <h2 className="text-4xl font-light text-gray-300 text-center mt-16">
                ILLUSTRATOR, DESIGNER & MURALIST
            </h2> */}
        </div>
    )
}

