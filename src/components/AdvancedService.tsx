import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedService = () => {
  return (
    <section className="relative w-full bg-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase tracking-wider text-foreground">
          AI <span className="text-primary">Astrologers</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Meet our AI Astrologers
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pawan Paudel Card */}
          <div className="bg-card rounded-lg p-8 relative overflow-hidden gradient-border">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <img
                  src="/assets/astrologer1.webp"
                  alt="Pawan Paudel"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Pawan Paudel</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary">AI Astrologer</span>
                  <span className="bg-secondary/50 text-xs px-2 py-1 rounded">Generic</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Insightful Astrological Guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Answers with astrological interpretations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Current Time, Love, Education Careers and all your general astrological queries</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Birth Chart Analysis (AI)</span>
                  <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">FREE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Kundli/Chart Generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Kundli/Chart Interpretation</span>
                </div>
              </div>
              <div>
                <Link to="/vedic-astrology-birth-chart" className="cta-button py-2 px-6 rounded-md inline-flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Get Started for Free
                </Link>
              </div>
            </div>
          </div>

          {/* Krishna Upadhyay Card */}
          <div className="bg-card rounded-lg p-8 relative overflow-hidden gradient-border">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <img
                  src="/assets/astrologer2.webp"
                  alt="Krishna Upadhyay"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Krishna Upadhyay</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary">AI Astrologer</span>
                  <span className="bg-secondary/50 text-xs px-2 py-1 rounded">Veteran</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Advanced Vedic Astrology Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Specialized in Relationship & Career Guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Deep Dasha Analysis & Predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Remedial Measures & Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 text-primary" />
                    <span>Muhurta (Timing) Consultation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="bg-secondary/50 py-2 px-4 rounded-md inline-block">
                Coming Soon
              </div>
              <div className="text-sm text-muted-foreground flex items-center">
                <Star className="w-4 h-4 mr-2 text-primary" />
                Available after beta release
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedService;