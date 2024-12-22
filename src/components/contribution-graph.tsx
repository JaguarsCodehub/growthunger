import React from 'react';
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
  return (
    <div
      className={cn(
        'bg-slate-200/30 p-6 rounded-2xl flex flex-col items-center text-center relative border border-gray-300',
        'hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      <div className='bg-slate-300 p-4 rounded-xl mb-4'>
        <Icon className='w-6 h-6 text-gray-800' />
      </div>
      <h3 className='font-semibold text-lg mb-2'>{title}</h3>
      {description && <p className='text-gray-600 text-sm'>{description}</p>}
    </div>
  );
};

export default FeatureCard;
