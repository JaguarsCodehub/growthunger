'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/grid-background";
import { ArrowBigDown, ArrowDownNarrowWide, ArrowLeft } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { IconArrowNarrowDown } from "@tabler/icons-react";

const offers = [
    {
        title: "Launch in 30 Days Package (For Startups)",
        description: [
            "Fully functional MVP ready for launch.",
            "A free roadmap to scale the MVP to a full product.",
            "1 week of post-launch bug fixing.",
            "Free pitch deck template for raising funds.",
        ],
        guarantee: "If we don’t deliver in 30 days, you get 50% off.",
    },
    {
        title: '"Zero to App Store" Mobile App Package',
        description: [
            "Cross-platform app (iOS and Android) from idea to deployment.",
            "A marketing plan for your first 1,000 downloads.",
            "1-month free maintenance.",
        ],
        guarantee: "No Questions Asked Refund.",
    },
    {
        title: '"The 1-Week Business Booster" Package',
        description: [
            "A complete, one-page, high-converting website for your business.",
            "$200 branding kit (logos, colors, fonts) - FREE.",
            "$150 marketing plan for your initial leads - FREE.",
        ],
        guarantee: "If you don’t see immediate results (e.g., faster support response, higher engagement), we’ll optimize it for free.",
    },
    {
        title: '"AI-in-a-Day" Sprint',
        description: [
            "AI-powered feature added to your existing app or website (e.g., chatbots, predictive analytics, or recommendation engine).",
            "Free brainstorming session on how AI can boost your business.",
            "A roadmap for scaling AI features in the next 6 months.",
        ],
        guarantee: "If the site doesn’t generate at least 5 new leads in 30 days, we’ll redesign it for free.",
    },
];


export default function Offers() {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Hero Section */}
            <GridBackground />
            {/* <GridBackground /> */}
            <div className='relative flex flex-col items-center justify-center h-screen px-4'>
                <div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
                    {/* <h2 className='text-lg font-semibold text-black'>Growthunger™</h2> */}
                    <img src='/images/logo.png' alt='logo' className='w-48 h-24' />
                </div>

                <div className='z-40 max-w-4xl mx-auto text-center space-y-6'>
                    <h1 className=' text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-black'>
                        Are you ready <br />
                        <span className='text-emerald-600'>
                            to launch your
                        </span> next big idea?

                    </h1>

                    <p className='text-xl  md:text-2xl text-black/90 space-y-6'>
                        with <span className="bg-yellow-400 text-orange-700 px-2 font-bold">$1,000 worth</span> of bonuses included absolutely free
                    </p>

                    <div className='flex flex-col items-center space-y-4'>
                        {/* <Button
                            className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'

                        >
                            Bet your luck on us{' '}
                            <span>
                                <ArrowLeft className='text-emerald-400' />
                            </span>{' '}
                            Click Here
                        </Button> */}

                        <div className='flex items-center space-x-2'>
                            <IconArrowNarrowDown color="black " size={72} className="" />
                        </div>
                    </div>

                    <h1 className="text-xl md:text-3xl font-bold text-center bg-yellow-400 text-orange-700 md:px-2">
                        Here's What You'll Experience at the Growthunger
                    </h1>
                </div>


            </div>

            <div>
                <h1 className="text-xl md:text-3xl font-bold text-center bg-yellow-400 text-orange-700 md:px-2">
                    Here's What You'll Experience at the Growthunger
                </h1>
            </div>

            <div className="py-10 justify-center items-center">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 p-2">
                    {offers.map((offer, index) => (
                        <Card key={index} className="w-[400px] shadow-lg hover:shadow-xl transition duration-200">
                            <CardHeader>
                                <CardTitle className="text-2xl text-gray-800">{offer.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="mb-4 space-y-2 text-gray-700">
                                    {offer.description.map((point, i) => (
                                        <li key={i} className="flex items-center">
                                            {/* <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span> */}
                                            - {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-red-200 border-l-4 border-red-500 text-red-700 rounded">
                                    <strong>Guarantee:</strong> {offer.guarantee}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-black text-white hover:bg-blue-700">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>


            </div>
        </div>
    );
}
