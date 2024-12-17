import Image from 'next/image';

const technologies = [
  {
    name: 'Next.js',
    icon: require('@/assets/icons/nextjs.svg'),
  },
  {
    name: 'React Native',
    icon: require('@/assets/icons/react.svg'),
  },
  {
    name: 'AWS',
    icon: require('@/assets/icons/aws.svg'),
  },
  {
    name: 'TypeScript',
    icon: require('@/assets/icons/typescript.png'),
  },
  {
    name: 'Node.js',
    icon: require('@/assets/icons/nodejs.svg'),
  },
  {
    name: 'Redis',
    icon: require('@/assets/icons/redis.svg'),
  },
  {
    name: 'Docker',
    icon: require('@/assets/icons/docker.svg'),
  },
  {
    name: 'SQL',
    icon: require('@/assets/icons/sql.svg'),
  },
  {
    name: 'Python',
    icon: require('@/assets/icons/python.svg'),
  },
  {
    name: 'Django',
    icon: require('@/assets/icons/django.svg'),
  },
  {
    name: 'Kubernetes',
    icon: require('@/assets/icons/kubernetes.svg'),
  },
];

export default function TechStack() {
  return (
    <div className='relative flex overflow-hidden bg-white rounded-full py-4 px-2'>
      <div className='animate-marquee whitespace-nowrap flex items-center gap-12'>
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className='flex items-center gap-2'>
            <div className='w-6 h-6 relative'>
              <Image
                src={tech.icon}
                alt=''
                fill
                className='object-contain'
              />
            </div>
            <span className='text-black text-sm'>{tech.name}</span>
            {/* <span className='text-green-400 ml-4'>◆</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
