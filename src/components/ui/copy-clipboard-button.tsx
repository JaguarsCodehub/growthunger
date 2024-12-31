import { useState } from 'react';
import { Button } from './button';
import { Copy } from 'lucide-react';

const CopyToClipboardButton: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'https://growthunger.vercel.app/'; // Text to be copied to clipboard

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy); // Copy the text to clipboard
      setCopied(true); // Set state to indicate success
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className='font-semibold mt-4 hover:bg-gray-300 bg-gray-200 border border-gray-700 border-dashed text-gray-900'
    >
      <Copy />
      {copied ? 'Copied!' : 'Copy and share with your friends'}
    </Button>
  );
};

export default CopyToClipboardButton;
