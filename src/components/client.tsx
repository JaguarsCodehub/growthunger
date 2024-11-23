export default function Clients() {
  const clients = [
    'https://logo.clearbit.com/airbnb.com',
    'https://logo.clearbit.com/uber.com',
    'https://logo.clearbit.com/spotify.com',
    'https://logo.clearbit.com/slack.com',
    'https://logo.clearbit.com/dropbox.com',
    'https://logo.clearbit.com/amazon.com',
  ];

  return (
    <section className='py-20 px-4'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        Trusted by innovative companies
      </h2>
      <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
        {clients.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt='Client logo'
            className='h-8 md:h-12 opacity-50 hover:opacity-100 transition-opacity'
          />
        ))}
      </div>
    </section>
  );
}
