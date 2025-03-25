import React from 'react';
import { useParams } from 'react-router-dom';

export default function LearnPage() {
  const { page } = useParams();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Learn Vedic Astrology
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the depths of Vedic astrology with our comprehensive guides
          </p>
        </div>
        {/* Content will be added based on the page parameter */}
      </div>
    </div>
  );
}