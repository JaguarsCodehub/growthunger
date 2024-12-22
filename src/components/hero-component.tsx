export default function HeroSection() {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Content */}
      <div className='relative z-10 px-6 text-center'>
        {/* Top Quote */}
        <p className='text-sm uppercase tracking-wide text-gray-600 mb-4'>
          They said it best
        </p>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2'>
          “Designjoy shows that they know the art of subtlety.”
        </h1>
        <p className='text-lg text-blue-600 font-medium mb-6'>Webflow</p>

        {/* Divider */}
        <div className='mb-6'>
          <span className='block w-px h-12 bg-gray-400 mx-auto'></span>
        </div>

        {/* Main Text */}
        <h2 className='text-2xl md:text-4xl font-semibold text-gray-800 mb-4'>
          It’s “you’ll never go back” better
        </h2>
        <p className='text-gray-600 mb-8 max-w-xl mx-auto'>
          Designjoy replaces unreliable freelancers and expensive agencies for
          one flat monthly fee, with designs delivered so fast that it will blow
          your mind.
        </p>

        {/* CTA Button */}
        <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition'>
          See plans
        </button>
      </div>

    </div>
  );
}
