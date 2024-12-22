import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 'chess',
      name: 'Chess (scratch)',
      preview: '/images/chess.png',
    },
    { id: 'chat', name: 'Scalable Chat App', preview: '/images/1.png' },
    {
      id: 'deploy',
      name: 'Deploy repo to cloud (like Vercel)',
      preview: '/images/vercel-deploy.png',
    },
    { id: 'socket', name: 'Socket 3d Game', preview: '/images/socket-3d-game.png' },
    {
      id: 'community',
      name: 'Community Platform',
      preview: '/images/discord.png',
    },
    {
      id: 'cyberlog',
      name: 'Cyberlog API Project',
      preview: '/images/cyberlog.png',
    },
    {
      id: 'notes',
      name: 'Realtime Notes taking app',
      preview: '/images/notes.png',
    },
  ];

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-24'>
      <div className='text-center mb-16 space-y-8'>
        <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-black'>
          Checkout <span className='inline-block'>few of my</span>
          <br />
          <span className='text-slate-600 px-2 font-bold'>
            many projects
          </span>{' '}
          now 🌚
        </h2>
        <Button variant='outline' className='rounded-full border-black/20 mt-8'>
          All my projects <ArrowUpRight className='ml-2' />
        </Button>
      </div>

      <Tabs defaultValue='chess' className='w-full mt-20'>
        <TabsList className='w-full flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-8'>
          {projects.map((project) => (
            <TabsTrigger
              key={project.id}
              value={project.id}
              className={`rounded-full px-6 py-2 text-sm data-[state=active]:bg-black data-[state=active]:text-white text-black`}
            >
              {project.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {projects.map((project) => (
          <TabsContent key={project.id} value={project.id}>
            <div className='overflow-hidden rounded-2xl border border-black/10 shadow-lg'>
              <Image
                src={project.preview}
                alt={project.name}
                className='w-full h-auto object-cover'
                width={1000}
                height={700}
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Projects;
