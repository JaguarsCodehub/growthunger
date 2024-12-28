/* eslint-disable react/no-unescaped-entities */
import { Twitter, Instagram } from 'lucide-react'
import GridBackground from './ui/grid-background'

export default function RetroCTA() {
    return (
        <section className=" relative min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6">
            <GridBackground />

            {/* Main CTA Container with wavy borders */}
            <div className="relative w-full max-w-4xl">
                {/* Wavy top border */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gray-300">
                    <svg
                        className="absolute bottom-0 w-full h-4"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 C20,10 35,0 50,5 C65,10 80,0 100,5 L100,10 L0,10 Z"
                            fill="#e7e5e4 "
                        />
                    </svg>
                </div>

                {/* Main content area */}
                <div className="relative bg-stone-200 grid grid-cols-1 gap-8 px-8 py-16 mt-6">
                    <GridBackground />
                    <div className="relative z-10 flex justify-center items-center gap-12">
                        {/* Reserve badge with new style */}
                        <div className="transform -rotate-6">
                            <img src='/images/vector.png' alt='logo' className='w-48 h-48' />
                        </div>

                        {/* Main CTA Button */}
                        <button className="bg-black hover:bg-gradient-to-l transform hover:scale-105 transition-transform duration-200 px-16 py-6 rounded-full shadow-lg">
                            <span className="font-semibold text-3xl text-white">Book a Call</span>
                        </button>


                    </div>
                </div>

                {/* Wavy bottom border */}
                <div className="relative h-8 bg-gray-300">
                    <svg
                        className="absolute top-0 w-full h-4"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,10 C20,0 35,10 50,5 C65,0 80,10 100,5 L100,0 L0,0 Z"
                            fill="#e7e5e4"
                        />
                    </svg>
                </div>
            </div>

            {/* Content below CTA */}
            <div className="max-w-2xl text-center mt-12">
                <p className="text-2xl font-normal mb-8">
                    From Smashed Patties At Shake Shack To Glamburgers At Honky Tonk, There's A Little Something For Everyone.
                </p>

                {/* Logo and social links */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4">
                        <img src='/images/logo.png' alt='logo' className='w-72 h-40' />
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-black hover:text-[#FF4A31] transition-colors">
                            <Twitter className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-black hover:text-[#FF4A31] transition-colors">
                            <Instagram className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

