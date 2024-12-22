import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

export default function HowItWorks() {
  return (
    <div className='py-8'>
      {/* Section Title */}
      <div className='text-center mb-16 space-y-4'>
        <h2 className='text-5xl md:text-7xl font-bold tracking-tight text-black'>
          We are engineers
          <br />
          <span className='text-slate-500 py-0 font-bold'>
            of the modern
          </span>{' '}
          era 🍂
        </h2>
        <h2 className='text-xl md:text-2xl font-bold tracking-tight text-black'>
          We sketch. We build. We deploy.
        </h2>

        
        <Button variant='default' className='rounded-full border-black/20 mt-8'>
          Everything from A to Z <ArrowUpRight className='ml-2' />
        </Button>
      </div>

      <div className='flex justify-center -mt-36'>
        <img
          src='/images/developer.png'
          width={500}
          height={200}
          alt=''
          className=''
        />
      </div>

      {/* Cards Container */}
      {/* <div className='flex flex-col md:flex-row justify-center items-center gap-20 px-6'>
        <div className='relative group'>
          <div className='absolute -top-2 -left-2 w-72 h-96 bg-slate-500 rounded-2xl shadow-md transform rotate-3 group-hover:rotate-6 transition duration-300'></div>
          <div className='relative w-72 h-96 bg-white rounded-2xl shadow-lg p-6 transform -rotate-2 group-hover:rotate-0 transition duration-300'>
            <div className='flex justify-center mb-6'>
              <img
                src='/icons/docker.svg'
                alt='Clock Illustration'
                className='w-24 h-24'
              />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>1500+</h3>
            <p className='text-gray-600 text-lg font-medium mb-2'>
              Institutional clients served
            </p>
            <p className='text-gray-500 text-sm'>
              Register, make payment in seconds - and get your crypto just
              minutes later.
            </p>
          </div>
        </div>

        <div className='relative group'>
          <div className='absolute -top-2 -left-2 w-72 h-96 bg-slate-300 rounded-2xl shadow-md transform rotate-3 group-hover:rotate-6 transition duration-300'></div>
          <div className='relative w-72 h-96 bg-white rounded-2xl shadow-lg p-6 transform -rotate-2 group-hover:rotate-0 transition duration-300'>
            <div className='flex justify-center mb-6'>
              <img
                src='/icons/aws.svg'
                alt='Card Illustration'
                className='w-24 h-24'
              />
            </div>
            <h3 className='text-3xl font-bold text-gray-900 mb-2'>300+</h3>
            <p className='text-gray-600 text-lg font-medium mb-2'>
              Digital assets available
            </p>
            <p className='text-gray-500 text-sm'>
              Choose from credit card, payment app, or bank account.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
