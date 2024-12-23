import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
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
        'bg-white p-6 rounded-2xl flex flex-col items-center text-center relative border border-gray-300',
        'hover:shadow-lg transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div className='bg-gray-100 p-4 rounded-md border border-gray-300'>
          <Icon className='w-6 h-6 text-gray-800' />
        </div>
      )}

      {isHovered ? (
        <div className='animate-in fade-in-30'>
          <h3 className='font-bold text-sm mt-6'>{title}</h3>
          <p className='text-gray-600 text-sm'>{description}</p>
        </div>
      ) : (
        <h3 className='font-semibold text-sm mt-6'>{title}</h3>
      )}
    </div>
  );
};

export default FeatureCard;
