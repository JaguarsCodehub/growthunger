import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Paintbrush, Code, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className='w-12 h-12 mb-4' />,
      title: 'Design',
      description:
        "From branding to UI/UX, we've got all your design needs covered.",
    },
    {
      icon: <Code className='w-12 h-12 mb-4' />,
      title: 'Development',
      description: 'We bring your designs to life with clean, efficient code.',
    },
    {
      icon: <Megaphone className='w-12 h-12 mb-4' />,
      title: 'Marketing',
      description: 'Boost your brand with our expert marketing strategies.',
    },
  ];

  return (
    <section id='services' className='py-20 px-4'>
      <h2 className='text-4xl font-bold text-center mb-12'>Our Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {services.map((service, index) => (
          <Card key={index} className='bg-gray-900 border-gray-800'>
            <CardHeader>
              <CardTitle className='flex flex-col items-center'>
                {service.icon}
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-center'>
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
