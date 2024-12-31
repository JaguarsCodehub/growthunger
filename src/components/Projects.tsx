/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [

    { id: 'chat', name: 'Scalable Chat App', preview: '/images/1.png' },
    {
      id: 'chess',
      name: 'Chess (scratch)',
      preview: '/images/chess.png',
    },
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
    {
      id: 'profane',
      name: 'Cuss Words Detection API',
      preview: '/images/profane-detection.png',
    },
    {
      id: 'backend-food',
      name: 'MVC Backend Food API',
      preview: '/images/backend-food-api.png',
    },
    {
      id: 'book',
      name: 'Mobile App for Readers',
      preview: '/images/book.png',
    },
  ];

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-24'>
      <div className='text-center mb-16 space-y-8'>
        <h2 className='text-4xl md:text-6xl font-bold tracking-tight text-black'>
          Explore  <span className='inline-block'>our portfolio of</span>
          <br />
          <span className='text-green-600 px-2 font-bold'>
            groundbreaking projects
          </span>{' '}
          now
        </h2>
        <Button variant='outline' className='bg-emerald-600 border border-emerald-700 rounded-full text-white mt-8 hover:scale-125 transition duration-150 fade-in-20 fade-out-20'>
          Let’s hop on a discovery call. <PhoneCallIcon className='ml-2' />
        </Button>
      </div>

      <Tabs defaultValue='chat' className='w-full mt-20'>
        <TabsList className='w-full flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-8'>
          {projects.map((project) => (
            <TabsTrigger
              key={project.id}
              value={project.id}
              className={`rounded-full px-6 py-2 text-sm data-[state=active]:bg-black data-[state=inactive]:bg-gray-300 data-[state=active]:text-white text-black`}
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
