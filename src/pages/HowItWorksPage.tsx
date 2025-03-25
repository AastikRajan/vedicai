import { Star, Brain, Sparkles, Clock } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="bg-transparent py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How Vedic AstroGPT Works
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how we combine ancient Vedic astrology with cutting-edge AI technology
            to provide accurate and personalized astrological guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              The Power of AI in Vedic Astrology
            </h2>
            <p className="text-muted-foreground mb-6">
              Our advanced AI system has been trained on thousands of ancient Vedic texts,
              modern astrological interpretations, and real-world case studies. This allows
              us to provide accurate, personalized readings that combine traditional wisdom
              with modern understanding.
            </p>
            <ul className="space-y-4">
              {[
                'Deep learning algorithms for precise predictions',
                'Natural language processing for personalized interactions',
                'Pattern recognition across thousands of birth charts',
                'Continuous learning and improvement'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="/assets/astrologer1.webp"
              alt="AI Astrology Process"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 rounded-lg gradient-border">
            <Brain className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our AI processes your birth details and analyzes planetary positions,
              aspects, and combinations according to Vedic principles.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg gradient-border">
            <Sparkles className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Pattern Recognition</h3>
            <p className="text-muted-foreground">
              Advanced algorithms identify significant patterns and correlations in
              your birth chart that might be missed by traditional methods.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg gradient-border">
            <Clock className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Real-time Updates</h3>
            <p className="text-muted-foreground">
              Get instant insights about current planetary transits and their
              effects on your life circumstances.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Ready to Experience the Future of Astrology?</h2>
          <a href="/vedic-astrology-birth-chart" className="cta-button py-3 px-8 rounded-md inline-flex items-center gap-2">
            <Star className="w-5 h-5" />
            Get Your Free Birth Chart Analysis
          </a>
        </div>
      </div>
    </div>
  );
}