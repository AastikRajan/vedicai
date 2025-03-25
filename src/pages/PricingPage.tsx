import PricingSection from '@/components/PricingSection';
import StarBackground from '@/components/StarBackground';

export default function PricingPage() {
  return (
    <div className="bg-transparent py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing Plans
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your astrological journey
          </p>
        </div>
        <PricingSection />
      </div>
    </div>
  );
}