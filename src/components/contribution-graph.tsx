import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { TablerIcon } from '@tabler/icons-react';

interface FeatureCardProps {
  icon: LucideIcon | TablerIcon;
  title: string;
  description?: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'bg-slate-200 p-6 rounded-2xl flex flex-col items-center text-center relative border border-gray-400',
        'hover:shadow-lg transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div className='bg-slate-300 p-4 rounded-md border border-gray-500'>
          <Icon className='w-6 h-6 text-gray-800' />
        </div>
      )}

      {isHovered ? (
        <div className='animate-in fade-in-30'>
          <h3 className='font-bold text-lg mt-6'>{title}</h3>
          <p className='text-gray-600 text-sm'>{description}</p>
        </div>
      ) : (
        <h3 className='font-semibold text-sm mt-6'>{title}</h3>
      )}
    </div>
  );
};

export default FeatureCard;
