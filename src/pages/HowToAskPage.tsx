import React from 'react';
import { Star } from 'lucide-react';

export default function HowToAskPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How to Ask Questions Effectively
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how to get the most accurate and insightful answers from our AI Astrologers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 gradient-border">
            <Star className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Be Specific</h3>
            <p className="text-muted-foreground">
              Include relevant details about your situation to get more accurate insights.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 gradient-border">
            <Star className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">One Topic at a Time</h3>
            <p className="text-muted-foreground">
              Focus on one area of concern per question for clearer guidance.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 gradient-border">
            <Star className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Provide Context</h3>
            <p className="text-muted-foreground">
              Share relevant background information to help the AI understand your situation better.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 gradient-border">
          <h2 className="text-2xl font-bold mb-6">Example Questions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold mb-2">"What career path would be most suitable for me based on my birth chart?"</p>
                <p className="text-muted-foreground text-sm">This question is specific and focused on career guidance.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold mb-2">"How will Jupiter's transit affect my relationship sector in the coming months?"</p>
                <p className="text-muted-foreground text-sm">This question combines timing with a specific life area.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-semibold mb-2">"What are the auspicious dates for starting a new business in the next three months?"</p>
                <p className="text-muted-foreground text-sm">This question provides a clear timeframe and purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}