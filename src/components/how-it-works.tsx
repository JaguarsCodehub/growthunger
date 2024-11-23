import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Subscribe',
      description:
        'Choose a plan that fits your needs and subscribe to our service.',
    },
    {
      title: 'Request',
      description:
        'Submit your design requests through our easy-to-use platform.',
    },
    {
      title: 'Revise',
      description:
        "We'll work with you to refine the designs until you're 100% satisfied.",
    },
    {
      title: 'Receive',
      description:
        'Get your finalized designs and put them to work for your business.',
    },
  ];

  return (
    <section id='how-it-works' className='py-20 px-4 bg-gray-900'>
      <h2 className='text-4xl font-bold text-center mb-12'>How It Works</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {steps.map((step, index) => (
          <Card key={index} className='bg-black border-gray-800'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <span className='text-4xl font-bold mr-4'>{index + 1}</span>
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
