'use client'
import Hero from '@/components/hero';
import GridBackground from '@/components/ui/grid-background';
import Trademark from '@/components/ui/trademark';
import TechStack from '@/components/tech-stack';
import Footer from '@/components/footer';
import { ProjectsShowcase } from '@/components/ProjectShowcase';
import { ScrollableProjects } from '@/components/ScrollableComponents';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { TabsDemo } from '@/components/AnimatedTabs';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()
  return (
    <main className='relative min-h-screen p-8'>
      <Trademark />
      <div className='relative mt-6 bg-[#3fa0fa] rounded-3xl overflow-hidden'>
        <GridBackground />
        <div className='relative z-10 px-4 mx-auto max-w-7xl'>
          <Hero />
          <div className='max-w-6xl mx-auto -mb-6'>
            <TechStack />
          </div>
          {/* <div className="min-h-screen bg-transparent">
            <ScrollableProjects />
          </div> */}
          <MaxWidthWrapper className='py-12'>
            <div className='mb-12 px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className='text-3xl order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold md:text-5xl lg:text-6xl text-gray-900'>
                  Checkout ʻfew of my{' '}
                  <span className='relative px-2 bg-blue-600 text-white'>
                    many projects
                  </span>{' '}
                  now.
                </h2>
                <div className='mt-12'>
                  <Button
                    className='rounded-full'
                    onClick={() => router.push('/showcase')}
                  >
                    <ArrowUpRight className='mr-2 h-4 w-4 text-white' />
                    All my projects
                  </Button>
                </div>
              </div>
            </div>
            <TabsDemo />
          </MaxWidthWrapper>

          <Footer />
        </div>
      </div>
    </main>
  );
}
