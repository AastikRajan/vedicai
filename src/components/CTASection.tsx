import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg gradient-border overflow-hidden">
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[250px] w-[250px]">
                <img
                  src="/assets/hero-astrologers.webp"
                  alt="AI Astrologers"
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why wait?</h2>
              <p className="text-muted-foreground mb-8">
                Get your free AI Astrology reading with Vedic AstroGPT in just 30 seconds.
                Unlock your Vedic Birth Chart and start your journey with AI astrologer free.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-6">Try AI Astrologer now</h3>

              <Link to="/vedic-astrology-birth-chart">
                <Button className="cta-button flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection