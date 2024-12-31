import { useState } from 'react';

export default function PdfRequestForm() {
  const [email, setEmail] = useState<string>('');
  const [selectedPdf, setSelectedPdf] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, selectedPdf }),
      });

      if (response.ok) {
        setStatus('Request sent successfully!');
        setEmail('');
        setSelectedPdf('');
      } else {
        const data = await response.json();
        setStatus(data.error || 'Failed to send request');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-8 flex flex-col sm:flex-row items-center gap-4'
    >
      <input
        type='email'
        placeholder='Your email'
        className='w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        className='w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
        value={selectedPdf}
        onChange={(e) => setSelectedPdf(e.target.value)}
        required
      >
        <option disabled value=''>
          Choose Option
        </option>
        <option>Launch in 30 Days Startup Toolkit + MVP roadmap</option>
        <option>Master Daily Productivity with AI: Tips & Prompts</option>
        <option>Idea to Execution Workbook</option>
        <option>Ultimate Pitch Deck to Launch your product</option>
        <option>Trending Tech stack or robust learning methods? A Doc</option>
        <option>
          People look at design first and price later: A Design Guide
        </option>
        <option>How to tell stories that people buy what you say</option>
      </select>
      <button
        type='submit'
        className='w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
      >
        Submit
      </button>
      <p className='mt-4 text-sm'>{status}</p>
    </form>
  );
}
