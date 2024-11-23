'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Loop Digital Agency',
    image: '/projects/loop.webp',
    description: 'Digital agency website with multi-channel marketing focus',
  },
  {
    title: 'Design System',
    image: '/projects/design.webp',
    description: 'Level up your designs with amazing realtime collaboration',
  },
  {
    title: 'Beside Platform',
    image: '/projects/beside.webp',
    description: 'A safe space always beside you',
  },
  // Add more projects as needed
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className='relative py-20 overflow-hidden'>
      <div className='absolute top-20 left-1/2 -translate-x-1/2'>
        <div className='relative'>
          <div className='absolute -top-14 -left-14 w-28 h-28 bg-pink-400 rounded-full opacity-20 blur-xl' />
          <h2 className='text-4xl font-bold text-center relative z-10'>
            Latest projects
          </h2>
        </div>
      </div>

      <div className='mt-20 flex gap-6 px-4'>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [i % 2 === 0 ? 200 : -200, i % 2 === 0 ? -200 : 200]
              ),
            }}
            className='relative flex-shrink-0 w-[600px] h-[400px] rounded-2xl overflow-hidden group'
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-sm opacity-80'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
