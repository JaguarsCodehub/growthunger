import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What kind of design services do you offer?',
      answer:
        'We offer a wide range of design services including branding, UI/UX design, web design, print design, and more. Our team is versatile and can handle various design needs for your business.',
    },
    {
      question: 'How long does it take to complete a design request?',
      answer:
        'Our turnaround time depends on the complexity of the project and your chosen plan. Typically, we aim to deliver initial designs within 1-2 business days, with revisions being completed even faster.',
    },
    {
      question: 'Can I request unlimited revisions?',
      answer:
        "Yes, all our plans come with unlimited revisions. We want to ensure you're 100% satisfied with the final design.",
    },
    {
      question: "What if I'm not satisfied with the designs?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with the designs, we'll work with you to revise them until you're satisfied. If we still can't meet your expectations, we offer a money-back guarantee.",
    },
  ];

  return (
    <section id='faq' className='py-20 px-4'>
      <h2 className='text-4xl font-bold text-center mb-12'>
        Frequently Asked Questions
      </h2>
      <Accordion type='single' collapsible className='max-w-3xl mx-auto'>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
