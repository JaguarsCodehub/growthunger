import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$999',
      description: 'Perfect for small businesses',
      features: [
        '1 design request at a time',
        'Unlimited revisions',
        '2 day turnaround',
        'Dedicated designer',
      ],
    },
    {
      name: 'Pro',
      price: '$1999',
      description: 'Best for growing companies',
      features: [
        '2 design requests at a time',
        'Unlimited revisions',
        '1 day turnaround',
        'Dedicated designer team',
        'Priority support',
      ],
    },
  ];

  return (
    <section id='pricing' className='py-20 px-4'>
      <h2 className='text-4xl font-bold text-center mb-12'>
        Simple, transparent pricing
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
        {plans.map((plan, index) => (
          <Card key={index} className='bg-gray-900 border-gray-800'>
            <CardHeader>
              <CardTitle className='text-2xl'>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-4xl font-bold mb-4'>
                {plan.price}
                <span className='text-xl font-normal'>/month</span>
              </p>
              <ul className='space-y-2'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center'>
                    <svg
                      className='w-4 h-4 mr-2 text-green-500'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M5 13l4 4L19 7'></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className='w-full'>Get started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
