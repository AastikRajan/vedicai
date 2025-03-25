import HeroSection from '@/components/HeroSection';
import AdvancedService from '@/components/AdvancedService';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvancedService />
      <PricingSection />
      <TestimonialsSection className="bg-transparent" />
      <CTASection />
      <FAQSection className="bg-transparent" />
    </>
  );
}