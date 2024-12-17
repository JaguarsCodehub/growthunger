import Hero from '@/components/hero';
import GridBackground from '@/components/ui/grid-background';
import Trademark from '@/components/ui/trademark';
import TechStack from '@/components/tech-stack';
import ProjectShowcase from '@/components/project-showcase';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className='relative min-h-screen p-8'>
      <Trademark />
      <div className='relative mt-6 bg-[#F7F3EE] rounded-3xl overflow-hidden'>
        <GridBackground />
        <div className='relative z-10 px-4 mx-auto max-w-7xl'>
          <Hero />
          <div className='max-w-6xl mx-auto -mb-6'>
            <TechStack />
          </div>
          {/* <ProjectShowcase /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
