import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="hero-container">
      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          A design agency
          <br />
          with a twist
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          Design subscriptions for everyone. Pause or cancel anytime.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-black text-white rounded-full hover:bg-black/90"
        >
          See plans
        </Button>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF4D4D]"></span>
          <span>Available now</span>
        </div>
      </div>
    </section>
  );
}
