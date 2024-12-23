'use client'
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
} from 'lucide-react';
import FeatureCard from '@/components/contribution-graph';
import AnimatedCards from '@/components/animated-cards';
import RetroCTA from '@/components/retro-cta';
import CTASection from '@/components/cta-section';
import { NavigationMenuDemo } from '@/components/navigation';
import { Button } from '@/components/ui/button';

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
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Sticky Navigation Bar */}
      <nav className='m-4 mt-10 sticky top-0 bg-white shadow-2xl z-50 rounded-2xl border border-gray-400'>
        <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
          <img src='/images/logo.png' alt='logo' className='w-24 h-12' />
          <div className='hidden md:flex space-x-6'>
            <a href='#' className='hover:text-gray-600'>Solutions</a>
            <a href='#' className='hover:text-gray-600'>Typeform</a>
            <a href='#contact' className='hover:text-gray-600'>Contact us</a>
          </div>
          <div className='flex space-x-4'>
            <button className='bg-black text-white px-4 py-2 rounded'>Get started</button>
          </div>
          {/* <div className='md:hidden'>
            <button className='text-gray-600 focus:outline-none'>
              <span className='material-icons'>menu</span>
            </button>
          </div> */}
        </div>
      </nav>

      <GridBackground />

      <div className='relative flex flex-col items-center justify-center min-h-screen px-4 py-20'>
        <div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
          {/* <h2 className='text-lg font-semibold text-black'>Growthunger™</h2> */}
          <img src='/images/logo.png' alt='logo' className='w-48 h-24' />
        </div>

        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-black'>
            We <span className='text-emerald-600'>build</span> the tech;
            <br />

            you drive the growth
          </h1>

          <p className='text-xl md:text-2xl text-black/90'>
            Let's turn your vision into a world-class product
          </p>

          <div className='flex flex-col items-center space-y-4'>
            <Button className='px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90 transition-colors animate-bounce'>
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
          <p className='mb-2 text-black'>© 2024 Growthunger. All rights reserved.</p>
          <div className='space-x-4'>
            <a href='/about' className='hover:underline text-black'>Instagram</a>
            <a href='/services' className='hover:underline text-black'>LinkedIn</a>
            <a href='/contact' className='hover:underline text-black'>Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
