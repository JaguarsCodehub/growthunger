/* eslint-disable react/no-unescaped-entities */
'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/grid-background";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import { FormInput, VideoIcon } from 'lucide-react';
import PdfRequestForm from '@/components/pdf-form';

const offers = [
  {
    title: 'Launch in 30 Days Package (For Startups)',
    description: [
      'Fully functional MVP ready for launch.',
      'A free roadmap to scale the MVP to a full product.',
      '1 week of post-launch bug fixing.',
      'Free pitch deck template for raising funds.',
    ],
    guarantee: 'If we don’t deliver in 30 days, you get 50% off.',
  },
  {
    title: '"Zero to App Store" Mobile App Package',
    description: [
      'Cross-platform app (iOS and Android) from idea to deployment.',
      'A marketing plan for your first 1,000 downloads.',
      '1-month free maintenance.',
    ],
    guarantee: 'No Questions Asked Refund.',
  },
  {
    title: '"The 1-Week Business Booster" Package',
    description: [
      'A complete, one-page, high-converting website for your business.',
      '$200 branding kit for completely free (logos, colors, fonts).',
      '$150 marketing plan for your initial leads for completely free.',
    ],
    guarantee:
      'If the site doesn’t generate at least 5 new leads in the first 30 days, we’ll redesign it for free.',
  },
  {
    title: '"AI-in-a-Day" Sprint',
    description: [
      'AI-powered feature added to your existing app or website (e.g., chatbots, predictive analytics, or recommendation engine).',
      'Free brainstorming session on how AI can boost your business.',
      'A roadmap for scaling AI features in the next 6 months.',
    ],
    guarantee:
      'If you don’t see immediate results (e.g., faster support response, higher engagement), we’ll optimize it for free.',
  },
  {
    title: '"LaunchPad Lite" for Non-Tech Founders',
    description: [
      'Build your idea into a clickable prototype, perfect for pitching.',
      '2 weeks or less.',
      'Free investor pitch deck.',
      'A detailed roadmap for turning the prototype into a full product.',
    ],
    guarantee: 'We build your Prototype in 2 weeks or less',
  },
  {
    title: 'Start Today, Launch Tomorrow',
    description: [
      'Your business idea transformed into a functional prototype in 48 hours.',
      'Includes core user flows, responsive design, and real-time features.',
      'A detailed $500 tech roadmap for scaling included at no extra cost.',
    ],
    guarantee:
      'Risk-On-Me: If you’re not satisfied with the prototype, we refund you 100%.',
  },
  {
    title: '“AI in a Week”',
    description: [
      'End-to-end integration of a custom AI feature in your app or site (e.g., chatbots, AI search).',
      'Fully trained models or fine-tuned prebuilt models included.',
      '$300 worth of leveraging AI in everyday life - Zoom Call for absolutely free.',
    ],
    guarantee: 'If we dont integrate AI in your current software in one week we do it for free the next week',
  },
  {
    title: '“The Million-Dollar Pitch Deck”',
    description: [
      'A pitch deck designed to raise funds or close deals—crafted by experts.',
      'Includes visuals, storytelling, and dynamic animations.',
      'Includes case studies of famous pitch decks of successful startups.',
    ],
    guarantee: 'We deliver in 48 hours or less',
  },
];



export default function Offers() {
    return (
      <div className='container mx-auto px-4 py-10'>
        {/* Hero Section */}
        <GridBackground />
        {/* <GridBackground /> */}
        <div className='relative flex flex-col items-center justify-center h-screen px-4'>
          <div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
            {/* <h2 className='text-lg font-semibold text-black'>Growthunger™</h2> */}
            <img src='/images/logo.png' alt='logo' className='w-48 h-24' />
          </div>

          <div className='z-40 max-w-4xl mx-auto text-center space-y-6'>
            <h1 className=' text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-black'>
              Are you ready <br />
              <span className='text-emerald-600'>to launch your</span> next big
              idea?
            </h1>

            <p className='text-xl  md:text-2xl text-black/90 space-y-6'>
              with{' '}
              <span className='bg-yellow-400 text-orange-700 px-2 font-bold'>
                $1,000 worth
              </span>{' '}
              of bonuses included absolutely free
            </p>

            <div className='flex flex-col items-center space-y-4'>
              {/* <Button
                            className='z-50 cursor-pointer px-12 py-2 text-base font-normal text-white bg-black rounded-full hover:bg-black/90'

                        >
                            Bet your luck on us{' '}
                            <span>
                                <ArrowLeft className='text-emerald-400' />
                            </span>{' '}
                            Click Here
                        </Button> */}

              <div className='flex items-center space-x-2'>
                <IconArrowNarrowDown color='black ' size={72} className='' />
              </div>
            </div>

            <h1 className='text-xl md:text-3xl font-bold text-center bg-yellow-400 text-orange-700 md:px-2'>
              Here's What You'll Experience at Growthunger
            </h1>
          </div>
        </div>

        <MaxWidthWrapper className=''>
          <h1 className='text-3xl md:text-3xl font-bold mt-28'>
            Things you would get for free worth more than $1000 (Any 1)
          </h1>
          <div className='text-xl md:text-2xl font-medium mt-12'>
            <h1>
              Launch in 30 Days Startup Toolkit + MVP roadmap -{' '}
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $200
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              Master Daily Productivity with AI: Tips & Prompts –{' '}
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $100
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              Idea to Execution Workbook -{' '}
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $200
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              Ultimate Pitch Deck to Launch your product -{' '}
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $300
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              Trending Tech stack or robust learning methods ? A Doc -{' '}
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $200
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              People look at design first and price later: A Design Guide -
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $150
              </span>
            </h1>
          </div>
          <div className='text-xl md:text-2xl font-medium mt-4'>
            <h1>
              How to tell stories that people buy what you say -
              <span className='bg-yellow-400 text-orange-700 font-bold'>
                $180
              </span>
            </h1>
          </div>

          <div className='mt-8 flex flex-col sm:flex-row items-center gap-4'>
            <PdfRequestForm />
          </div>
          <div>
            <h1 className='font-medium text-lg mt-4 underline'>
              Enter your email here so that we can send you atleast one for
              absolutely free !
            </h1>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='mt-12 px-6'>
          <div className='mt-16'>
            <div className='text-green-600 inline-block'>
              <h2 className='font-semibold text-2xl sm:text-3xl md:text-2xl'>
                Now here's what we Offer to our paying customers
              </h2>
              <h2 className='font-medium text-xl sm:text-2xl md:text-2xl mt-2 text-black'>
                We Build. We Create. We Deliver.
              </h2>
            </div>
            <p className='mt-8 font-semibold text-lg sm:text-xl md:text-3xl'>
              You’re here because you want more than just “code.”
            </p>
            <p className='mt-4 font-medium text-base sm:text-lg md:text-xl'>
              You want a vision brought to life — a product that{' '}
              <span className=' font-semibold px-1 rounded'>
                speaks volumes, builds trust, and grows like wildfire.
              </span>
            </p>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='mt-12 px-2'>
          <section className='max-w-4xl mx-auto py-8'>
            <h2 className='text-3xl font-bold text-center mb-6'>
              Why Work With Us?
            </h2>
            <ul className='list-disc space-y-4 pl-6 text-lg'>
              <li>
                <strong>We think big:</strong> One product? Sure. But why stop
                there? We’ll map out how to turn it into a family of products—{' '}
                <span className='bg-yellow-400 text-orange-700 font-semibold'>
                  think expansion, think revenue, think global my friend.
                </span>
              </li>
              <li>
                <strong>Our pitch deck, your voice:</strong> We’ll create a
                pitch deck that tells your story like a pro and gives you a{' '}
                <span className='bg-yellow-400 text-orange-700 font-semibold'>
                  edge over your competition
                </span>
              </li>
              <li>
                <strong>Scalability baked in:</strong> From mood boards to
                fully-tested tech, we use the latest tools and methods to ensure
                your product isn’t just a one-hit wonder,{' '}
                <span className='bg-yellow-400 text-orange-700 font-semibold'>
                  inshort we make it future proof !
                </span>
              </li>
              <li>
                <strong>More than just design:</strong> We’ll show you how your
                product will look, feel, and shine in the real world.
                <span className='bg-yellow-400 text-orange-700 font-semibold'>
                  Through detailed mockups, immersive visualizations, and
                  real-world scenarios,{' '}
                </span>
                we craft an identity that’s not just memorable but iconic.
              </li>
            </ul>
          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='mt-12'>
          <section className=' px-2 py-10'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>
              Here’s What Makes Us Different
            </h2>
            <p className='text-xl md:text-2xl mb-6'>
              We put the risk on us. Every package comes with a guarantee:{' '}
              <br />
              <strong className='bg-yellow-400 text-orange-700 font-bold'>
                If you don’t love what we deliver, you don’t pay !!!
              </strong>
            </p>
            <p className='text-xl md:text-2xl mb-6'>
              That’s right.{' '}
              <strong>
                It’s your win-win. You take all our effort, our expertise, and
                our late nights.
              </strong>{' '}
              <span className='text-green-800 font-bold bg-lime-400'>
                We take… just a sack of cash 💵. Fair trade, right?
              </span>
            </p>
            <p className='text-xl md:text-2xl '>
              If you’ve got a vision, <strong>we’ve got the blueprint</strong>{' '}
              —and the guts—to make it happen. So let’s build something amazing
              together.
            </p>
          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='mt-12'>
          <section className='px-6 py-10'>
            <h2 className='text-2xl md:text-2xl mb-8 font-bold'>
              Ready to bring your vision to life?
            </h2>
            <h2 className='text-xl md:text-2xl mb-8'>
              Let’s make it happen. <br />
              Book your{' '}
              <strong className='bg-yellow-400 text-orange-700'>
                free 15-minute discovery call
              </strong>{' '}
              now and see how we can turn your ideas into reality!{' '}
            </h2>
            <div className='flex flex-col md:flex-row gap-4'>
              <Button
                onClick={() =>
                  window.open(
                    'https://skjbngdn94o.typeform.com/to/FGGpQ5eC',
                    '_blank'
                  )
                }
                className='border border-gray-400'
                variant='outline'
              >
                Fill this 2 minute form <FormInput />
              </Button>
              OR
              <Button
                onClick={() =>
                  window.open(
                    'https://calendly.com/thegrowthhunger/30min',
                    '_blank'
                  )
                }
                className=' font-semibold bg-black border hover:bg-blue-600 transition duration-500 animate-pulse hover:rotate-1 -rotate-6 hover:text-white '
              >
                Schedule a Discovery call <VideoIcon />
              </Button>
            </div>
          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='mt-6'>
          <section className='px-6'>
            <h1 className='text-xl md:text-2xl font-base underline'>
              Need more? You get more...
            </h1>
            <h2 className='text-xl md:text-3xl font-bold'>
              Here's an overview of the services to expect
            </h2>
          </section>
        </MaxWidthWrapper>

        <div className='py-10 flex justify-center items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
            {offers.map((offer, index) => (
              <Card
                key={index}
                className='w-full sm:w-[280px] md:w-[450px] shadow-lg hover:shadow-xl transition duration-200 border border-gray-600'
              >
                <CardHeader>
                  <CardTitle className='text-2xl text-gray-800'>
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='mb-4 space-y-2 text-gray-700'>
                    {offer.description.map((point, i) => (
                      <li key={i} className='flex items-center'>
                        - {point}
                      </li>
                    ))}
                  </ul>
                  <div className='p-4 bg-yellow-200 border-l-4 border-yellow-500 text-yellow-900 rounded font-medium'>
                    <strong>Guarantee:</strong> {offer.guarantee}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://calendly.com/thegrowthhunger/30min',
                        '_blank'
                      )
                    }
                    className='w-full bg-black text-white hover:bg-blue-700'
                  >
                    Book a Call
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <MaxWidthWrapper className='mt-12'>
          <section className='px-6 py-10'>
            <h2 className='text-2xl md:text-2xl mb-8 font-bold'>
              Ready to bring your vision to life?
            </h2>
            <h2 className='text-xl md:text-2xl mb-8'>
              Let’s make it happen. <br />
              Book your{' '}
              <strong className='bg-yellow-400 text-orange-700'>
                free 15-minute discovery call
              </strong>{' '}
              now and see how we can turn your ideas into reality!{' '}
            </h2>
            <div className='flex flex-col md:flex-row gap-4'>
              <Button
                onClick={() =>
                  window.open(
                    'https://skjbngdn94o.typeform.com/to/FGGpQ5eC',
                    '_blank'
                  )
                }
                className='border border-gray-400'
                variant='outline'
              >
                Fill this 2 minute form <FormInput />
              </Button>
              OR
              <Button
                onClick={() =>
                  window.open(
                    'https://calendly.com/thegrowthhunger/30min',
                    '_blank'
                  )
                }
                className=' font-semibold bg-black border hover:bg-blue-600 transition duration-500 animate-pulse hover:rotate-1 -rotate-6 hover:text-white '
              >
                Schedule a Discovery call <VideoIcon />
              </Button>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    );
}
