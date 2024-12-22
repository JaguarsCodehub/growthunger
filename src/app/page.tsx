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

const features = [
  {
    icon: CreditCard,
    title: 'Accept payments',
  },
  {
    icon: Video,
    title: 'Built-in video conferencing',
    description: 'Cal Video is our in-house video conferencing platform.',
  },
  {
    icon: Link2,
    title: 'Short booking links',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy first',
  },
  {
    icon: Globe,
    title: '65+ languages',
  },
  {
    icon: Plug2,
    title: 'Easy embeds',
  },
  {
    icon: LayoutGrid,
    title: 'All your favorite apps',
  },
  {
    icon: Settings2,
    title: 'Simple customization',
  },
];

export default function Home() {

  return (
    <div className='min-h-screen bg-slate-200'>
      <GridBackground />

      <div className='relative flex flex-col items-center justify-center min-h-screen px-4 py-20'>
        <div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
          {/* <h2 className='text-lg font-semibold text-black'>Growthunger™</h2> */}
          <img src='/images/logo.png' alt='logo' className='w-48 h-24' />
        </div>

        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-black'>
            A design agency
            <br />
            with a twist
          </h1>

          <p className='text-xl md:text-2xl text-black/90'>
            Design subscriptions for everyone. Pause or cancel anytime.
          </p>

          <div className='flex flex-col items-center space-y-4'>
            <button className='px-8 py-3 text-lg font-semibold text-white bg-black rounded-full hover:bg-black/90 transition-colors'>
              See plans
            </button>

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

          <div className='relative'>
            {/* Grid container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
              {/* Corner plus icons */}
              <Plus className='absolute -top-3 -left-3 w-6 h-6 text-gray-600' />
              <Plus className='absolute -top-3 -right-3 w-6 h-6 text-gray-600' />
              <Plus className='absolute -bottom-3 -left-3 w-6 h-6 text-gray-600' />
              <Plus className='absolute -bottom-3 -right-3 w-6 h-6 text-gray-600' />
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      
    </div>
  );
}
