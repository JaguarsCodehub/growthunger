/* eslint-disable react/no-unescaped-entities */
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
  Mail,
  ArrowBigDown,
  ArrowLeftFromLine,
  ArrowLeft,
  PhoneCallIcon,
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
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import Feedback from '@/components/Feedback';
import MinesGame from '@/components/MinesGame';
import { FloatingDock } from '@/components/ui/floating-dock';
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from '@tabler/icons-react';
import { Solutions } from '@/components/Solutions';
import Image from 'next/image';

const links = [
  {
    title: 'Home',
    icon: (
      <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },

  {
    title: 'Products',
    icon: (
      <IconTerminal2 className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <IconNewSection className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Changelog',
    icon: (
      <IconExchange className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },

  {
    title: 'Twitter',
    icon: (
      <IconBrandX className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'GitHub',
    icon: (
      <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },
];
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
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className='bg-gray-900'>
          <div className='mx-auto w-full max-w-sm'>
            <DrawerHeader>
              <DrawerTitle className='text-white text-2xl'>
                Play Mines
              </DrawerTitle>
              {/* <DrawerDescription className='text-white'>
                Just a fun element for all the users.
              </DrawerDescription> */}
            </DrawerHeader>

            {/* Mines Game Component */}
            <MinesGame />
            <DrawerFooter>
              <Button variant='outline'>
                Share Growthunger to your friends
              </Button>
              <DrawerClose asChild>
                <Button variant='destructive'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      {/* Sticky Navigation Bar */}
      {/* <div className='z-50 flex items-center w-full'>
        <FloatingDock
          mobileClassName='translate-y-20' // only for demo, remove for production
          items={links}
        />
      </div> */}
      <nav className='md:mx-32 mx-4 mt-8 sticky top-0 bg-white shadow-2xl z-40 rounded-2xl border border-gray-400 backdrop-blur-2xl'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
          <img src='/images/logo.png' alt='logo' className='w-24 h-12 z-50' />
          <div className='hidden md:flex space-x-6'>
            <a href='#' className='hover:text-gray-600'>
              Typeform
            </a>
            <a href='#contact' className='hover:text-gray-600'>
              Contact us
            </a>
            <a
              href='https://calendly.com/thegrowthhunger/30min'
              className='hover:text-gray-600'
            >
              Book a Call
            </a>
          </div>
          <div className='flex space-x-4'>
            <Button
              className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'
              onClick={() =>
                window.open(
                  'https://calendly.com/thegrowthhunger/30min',
                  '_blank'
                )
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
      <GridBackground />
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
              Bet your luck on us{' '}
              <span>
                <ArrowLeft className='text-emerald-400' />
              </span>{' '}
              Click Here
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
      <div className='flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 items-center justify-center'>
        <Image src='/images/meme1.jpeg' alt='Meme1' width={1000} height={400} />
        <Image
          src='/images/meme2.jpeg'
          alt='Meme1'
          width={1000}
          height={400}
          className='mt-4'
        />
      </div>
      <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16 space-y-4'>
            <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-black'>
              Even our
              <span className='text-red-600 px-2 font-bold'>spidey knows</span>
              <br />
              when to call for help
            </h2>
            <h4 className='text-xl md:text-3xl font-medium tracking-tight text-black'>
              What's stopping you ?
            </h4>
            <Button
              variant='outline'
              className='bg-red-600 border border-red-700 rounded-full text-white mt-8'
            >
              See what we expertise into below <ArrowBigDown className='ml-2' />
            </Button>
          </div>

          <div className='relative'>
            {/* Grid Container */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 group'>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Decorative Grid Lines */}
            <div className='absolute inset-0 pointer-events-none'>
              {/* Horizontal Lines */}
              <div className='absolute inset-x-0 top-1/4 h-[1px] bg-gray-300'></div>
              <div className='absolute inset-x-0 top-1/2 h-[1px] bg-gray-300'></div>
              <div className='absolute inset-x-0 top-3/4 h-[1px] bg-gray-300'></div>

              {/* Vertical Lines */}
              <div className='absolute inset-y-0 left-1/4 w-[1px] bg-gray-300'></div>
              <div className='absolute inset-y-0 left-1/2 w-[1px] bg-gray-300'></div>
              <div className='absolute inset-y-0 left-3/4 w-[1px] bg-gray-300'></div>

              {/* Plus Icons */}
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/4 left-3/4 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              <Plus className='absolute w-6 h-6 text-gray-400 top-3/4 left-3/4 -translate-x-1/2 -translate-y-1/2' />
            </div>
          </div>
        </div>
      </div>
      {/* <Solutions /> */}
      <AnimatedCards />
      <HowItWorks />
      <div id='contact' className='md:m-16 m-4'>
        <CTASection />
      </div>

      <div className='flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 items-center md:justify-evenly'>
        <Image src='/images/meme3.jpeg' alt='Meme1' width={600} height={200} />
        <Image
          src='/images/meme4.jpeg'
          alt='Meme1'
          width={500}
          height={120}
          // className='mt-4'
        />
      </div>

      <div className='text-center mb-16 mt-16 space-y-8'>
        <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-black'>
          Book a <span className='inline-block'>15 min</span>
          <br />
          <span className='text-green-600 px-2 font-bold'>
            discovery call
          </span>{' '}
          with us
        </h2>
        <Button
          onClick={() =>
            window.open('https://calendly.com/thegrowthhunger/30min', '_blank')
          }
          variant='outline'
          className='bg-emerald-600 border border-emerald-700 rounded-full text-white mt-8 hover:scale-125 transition duration-150 fade-in-20 fade-out-20'
        >
          Let's build together <PhoneCallIcon className='ml-2' />
        </Button>
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
