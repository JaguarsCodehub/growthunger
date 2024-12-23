'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CTASection() {
    return (
        <div className="relative w-full overflow-hidden bg-white px-4 py-16 border border-gray-400 rounded">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid grid-cols-8 gap-4 p-4">
                {Array.from({ length: 64 }).map((_, i) => (
                    <div
                        key={i}
                        className="hidden md:block md:h-[100px] h-[30px] w-full rounded-lg bg-gray-100 border border-gray-300"
                        aria-hidden="true"
                    />
                ))}
            </div>

            {/* Content */}
            <Card className="relative z-10 mx-auto shadow-2xl max-w-sm md:max-w-3xl border border-green-600 bg-white backdrop-blur-xl">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <img src='/images/logo.png' alt='logo' className='md:w-72 md:h-44 w-48 h-24' />
                    <Button
                        size="lg"
                        className="mt-6 bg-gray-100 border border-gray-300 text-black hover:bg-green-400 hover:border-emerald-600 hover:text-black"
                    >
                        Start building with us
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

