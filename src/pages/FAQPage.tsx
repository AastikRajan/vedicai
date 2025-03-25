import FAQSection from '@/components/FAQSection';

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Vedic AstroGPT
          </p>
        </div>
        <FAQSection />
      </div>
    </div>
  );
}