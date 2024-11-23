'use client';

export default function Footer() {
  const mainLinks = [
    { name: 'Latest projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Client login', href: '/login' },
  ];

  const secondaryLinks = [
    { name: 'Get started', href: '#pricing' },
    { name: 'Terms & conditions', href: '/terms' },
    { name: 'Privacy policy', href: '/privacy' },
  ];

  return (
    <footer className="relative z-10">
      <div className="flex flex-col items-center justify-center py-20 gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className='w-8 h-8 bg-black rounded-full' />
          <span className='text-8xl font-bold'>Growthunger™</span>
        </div>

        {/* Main Links */}
        <nav className="flex flex-wrap justify-center gap-8">
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Secondary Links */}
        <nav className="flex flex-wrap justify-center gap-8">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
