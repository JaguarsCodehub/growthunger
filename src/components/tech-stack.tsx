import Image from 'next/image';

const technologies = [
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
  },
  {
    name: 'React Native',
    icon: '/icons/react.svg',
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
  },
  {
    name: 'Redis',
    icon: '/icons/redis.svg',
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
  },
];

export default function TechStack() {
  return (
    <div className='relative flex overflow-hidden bg-black rounded-full py-4 px-2'>
      <div className='animate-marquee whitespace-nowrap flex items-center gap-12'>
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className='flex items-center gap-2'>
            <div className='w-6 h-6 relative'>
              <Image
                src={tech.icon}
                alt=''
                fill
                className='object-contain invert'
              />
            </div>
            <span className='text-white text-sm'>{tech.name}</span>
            <span className='text-blue-400 ml-4'>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}