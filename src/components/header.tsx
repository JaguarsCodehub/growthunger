import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold'>
          growthunger
        </Link>
        <nav className='hidden md:flex space-x-8'>
          <Link href='#services' className='hover:text-gray-300'>
            Services
          </Link>
          <Link href='#how-it-works' className='hover:text-gray-300'>
            How it works
          </Link>
          <Link href='#pricing' className='hover:text-gray-300'>
            Pricing
          </Link>
          <Link href='#faq' className='hover:text-gray-300'>
            FAQ
          </Link>
        </nav>
        <Button variant='outline' className='hidden md:inline-flex'>
          Get started
        </Button>
        <Button variant='outline' size='icon' className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
