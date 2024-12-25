/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from 'react';
import HowItWorks from '@/components/how-it-works';
import Projects from '@/components/Projects';
import TechStack from '@/components/tech-stack';
import GridBackground from '@/components/ui/grid-background';

import {
  Video,
  CreditCard,
  Globe,
  Link2,
  ShieldCheck,
  Plug2,
  LayoutGrid,
  Settings2,
  Plus,
  CheckCircle,
  XCircle,
  Info,
  Minus,
} from 'lucide-react';
import FeatureCard from '@/components/contribution-graph';
import AnimatedCards from '@/components/animated-cards';
import RetroCTA from '@/components/retro-cta';
import CTASection from '@/components/cta-section';
import { NavigationMenuDemo } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { DrawerDemo } from '@/components/drawer-demo';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import StartupGame from '@/components/StartupGame';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import Feedback from '@/components/Feedback';

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

const features = [
  {
    icon: CreditCard,
    title: 'MVP Development',
    description: 'Rapidly prototyping minimum viable products to test ideas.'
  },
  {
    icon: Video,
    title: 'Cloud Based Solutions',
    description: 'Scalable cloud infrastructure and SaaS products.'
  },
  {
    icon: Link2,
    title: 'Product Modernization',
    description: 'Upgrading legacy systems to modern architectures.'
  },
  {
    icon: ShieldCheck,
    title: 'API Development',
    description: 'Building robust APIs for seamless system communication.'
  },
  {
    icon: Globe,
    title: 'Everything Contract Based',
    description: 'Everything goes professionally by the contract.'
  },
  {
    icon: Plug2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android.'
  },
  {
    icon: LayoutGrid,
    title: 'Scalable Designs',
    description: 'Preparing systems to handle future growth.'
  },
  {
    icon: Settings2,
    title: 'Wireframing and Prototyping',
    description: 'Visualizing ideas before development.'
  },
];


export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const words = ["build", "scale", "deploy", "design"];


  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Drawer */}
      {/* <Button
        className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'
        onClick={() => setDrawerOpen(true)}
      >
        Click here
      </Button> */}

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <div className='mx-auto w-full max-w-sm'>
            <DrawerHeader>
              <DrawerTitle>Rate Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <div className='flex items-center justify-center space-x-2'>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full'
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <Minus />
                  <span className='sr-only'>Decrease</span>
                </Button>
                <div className='flex-1 text-center'>
                  <div className='text-7xl font-bold tracking-tighter'>
                    {goal}
                  </div>
                  <div className='text-[0.70rem] uppercase text-muted-foreground'>
                    Calories/day
                  </div>
                </div>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full'
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <Plus />
                  <span className='sr-only'>Increase</span>
                </Button>
              </div>
              <div className='mt-3 h-[120px]'>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={data}>
                    <Bar
                      dataKey='goal'
                      style={
                        {
                          fill: 'hsl(var(--foreground))',
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      {/* Sticky Navigation Bar */}
      <nav className='m-4 mt-10 sticky top-0 bg-white shadow-2xl z-50 rounded-2xl border border-gray-400 backdrop-blur-2xl'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
          <img src='/images/logo.png' alt='logo' className='w-24 h-12 z-50' />
          <div className='hidden md:flex space-x-6'>
            <a href='#' className='hover:text-gray-600'>
              Typeform
            </a>
            <a href='#contact' className='hover:text-gray-600'>
              Contact us
            </a>
          </div>
          <div className='flex space-x-4'>
            <Button
              className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'
              onClick={() => setDrawerOpen(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <GridBackground />

      <div className='relative flex flex-col items-center justify-center min-h-screen px-4 py-20'>
        <div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
          {/* <h2 className='text-lg font-semibold text-black'>Growthunger™</h2> */}
          <img src='/images/logo.png' alt='logo' className='w-48 h-24' />
        </div>

        <div className='z-40 max-w-4xl mx-auto text-center space-y-6'>
          <h1 className=' text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-black'>
            We{' '}
            <span className='text-emerald-600'>
              <FlipWords words={words} />
            </span>
            the tech;
            <br />
            you drive the growth
          </h1>

          <p className='text-xl md:text-2xl text-black/90'>
            Let's turn your vision into a world-class product
          </p>

          <div className='flex flex-col items-center space-y-4'>
            <Button
              className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'
              onClick={() => setDrawerOpen(true)}
            >
              Click here
            </Button>

            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
              <span className='text-sm text-black/90'>Available now</span>
            </div>
          </div>
        </div>

        <div className='absolute bottom-12 w-full max-w-5xl px-4'>
          <TechStack />
        </div>
      </div>

      <Projects />
      <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-16'>
            ...and so much more!
          </h1>

          <div className='relative m-12 md:m-44'>
            {/* Grid container */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className=' z-10'
                />
              ))}
            </div>

            {/* Decorative grid lines and plus icons */}
            <div className='absolute inset-0 -m-6'>
              {/* Corner plus icons with responsive adjustments */}
              <Plus className='absolute -top-3 -left-3 hidden text-gray-600 md:w-8 md:h-8' />
              <Plus className='absolute -top-3 -right-3 hidden text-gray-600 md:w-8 md:h-8' />
              <Plus className='absolute -bottom-3 -left-3 hidden text-gray-600 md:w-8 md:h-8' />
              <Plus className='absolute -bottom-3 -right-3 hidden text-gray-600 md:w-8 md:h-8' />
            </div>
          </div>
        </div>
      </div>

      <AnimatedCards />

      <HowItWorks />

      <div id='contact' className='md:m-16 m-4'>
        <CTASection />
      </div>

      <footer className='bg-gray-300 text-white py-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='mb-2 text-black'>
            © 2024 Growthunger. All rights reserved.
          </p>
          <div className='space-x-4'>
            <a href='/about' className='hover:underline text-black'>
              Instagram
            </a>
            <a href='/services' className='hover:underline text-black'>
              LinkedIn
            </a>
            <a href='/contact' className='hover:underline text-black'>
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
