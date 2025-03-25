import React from 'react';
import { Star } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h3 className="text-lg text-muted-foreground">To ask your own questions,</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1 Credit */}
          <div className="bg-card rounded-lg p-6 gradient-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">1</span>
            </div>
            <div className="text-sm mb-4">Question Credit</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-lg">Rs. 49</div>
                <div className="text-xs text-muted-foreground">(Inside India)</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg">$ 1</div>
                <div className="text-xs text-muted-foreground">(Outside India)</div>
              </div>
            </div>
          </div>

          {/* 7 Credits */}
          <div className="bg-card rounded-lg p-6 gradient-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">7</span>
            </div>
            <div className="text-sm mb-4">Question Credit</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-lg">Rs. 200</div>
                <div className="text-xs text-muted-foreground">(Inside India)</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg">$ 5</div>
                <div className="text-xs text-muted-foreground">(Outside India)</div>
              </div>
            </div>
          </div>

          {/* 15 Credits */}
          <div className="bg-card rounded-lg p-6 gradient-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">15</span>
            </div>
            <div className="text-sm mb-4">Question Credit</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-lg">Rs. 399</div>
                <div className="text-xs text-muted-foreground">(Inside India)</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg">$ 10</div>
                <div className="text-xs text-muted-foreground">(Outside India)</div>
              </div>
            </div>
          </div>

          {/* 40 Credits */}
          <div className="bg-card rounded-lg p-6 gradient-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">40</span>
            </div>
            <div className="text-sm mb-4">Question Credit</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-lg">Rs. 999</div>
                <div className="text-xs text-muted-foreground">(Inside India)</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg">$ 20</div>
                <div className="text-xs text-muted-foreground">(Outside India)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground flex items-center justify-center">
          <Star className="w-4 h-4 mr-2 text-primary" />
          As our system is in BETA, pricing scheme are subject to change.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;