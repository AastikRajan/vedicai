import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Calendar, Clock, MapPin, Key, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OpenAI from 'openai';

const HeroSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    apiKey: '',
    name: '',
    date: '',
    time: '',
    place: ''
  });

  const generateHoroscope = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const openai = new OpenAI({
        apiKey: formData.apiKey.trim(),
        dangerouslyAllowBrowser: true
      });

      const prompt = `You are a highly advanced AI astrologer with deep knowledge of Vedic and Western astrology. Given the following user details:

Full Name: ${formData.name}
Date of Birth: ${formData.date}
Time of Birth: ${formData.time}
Place of Birth: ${formData.place}

Generate a detailed and structured personalized horoscope reading for the user. The output should be divided into the following sections:

General Personality Traits – Analyze the user's Sun sign, Moon sign, and Ascendant. Explain their key personality traits based on planetary influences.

Career & Financial Outlook – Provide insights into their professional life, best-suited career paths, financial stability, and potential wealth opportunities.

Love & Relationships – Describe their love life, compatibility with partners, ideal soulmate qualities, and potential relationship challenges.

Health & Well-being – Offer insights into their physical and mental health, common health issues, and self-care recommendations.

Life Challenges & Growth Areas – Highlight any struggles they may face and how they can overcome them for personal growth.

Future Predictions (Next 12 Months) – Provide a forecast on major life events, career growth, relationship changes, and financial prospects for the upcoming year.

Lucky Elements – Mention their lucky numbers, colors, gemstones, and days of the week.

Ensure the response is well-structured, insightful, and highly accurate based on astrological principles. The tone should be professional yet engaging, making the user feel deeply connected to their horoscope.`;

      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      const result = completion.choices[0].message.content;
      if (!result) {
        throw new Error('No response received from OpenAI');
      }

      // Store the result in localStorage for the results page
      localStorage.setItem('horoscopeResult', result);
      localStorage.setItem('userData', JSON.stringify(formData));
      
      // Navigate to results page
      navigate('/result');
      
    } catch (error: any) {
      console.error('Error generating horoscope:', error);
      
      if (error.status === 401) {
        setError('Invalid API key. Please check your OpenAI API key and try again.');
      } else if (error.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else {
        setError(error.message || 'An error occurred while generating your horoscope. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.apiKey.trim()) {
      setError('Please enter your OpenAI API key');
      return;
    }

    if (!formData.name || !formData.date || !formData.time || !formData.place) {
      setError('Please fill in all fields');
      return;
    }

    await generateHoroscope();
  };

  return (
    <section className="hero-section py-8 md:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left side (Image) */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/assets/astrologer2.webp"
                alt="AI Astrologer"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right side (Text + Form) */}
          <div className="text-center lg:text-left flex flex-col justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get your own<br />
              <span className="text-primary">AI Astrologer</span>
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Get clarity on Love, Education, Career, Health, and more with our Vedic AstroGPT.
              Discover the factors influencing your life through personalized AI Astrology and Kundli AI insights.
            </p>
            <p className="mb-6 text-foreground">
              Start your journey with <span className="text-primary font-bold">FREE</span> Birth Chart Analysis (Kundli Generation)
            </p>

            {/* Info Box (Form) */}
            <div className="bg-card rounded-lg p-8 gradient-border max-w-xl mx-auto lg:mx-0 mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* OpenAI API Key Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">OpenAI API Key</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Enter your OpenAI API key"
                      className="pl-10"
                      value={formData.apiKey}
                      onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your API key is required to use our AI services. It will be securely stored.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <div className="relative">
                      <Star className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Birth Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Birth Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="time"
                        className="pl-10"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Birth Place</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="City, Country"
                        className="pl-10"
                        value={formData.place}
                        onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="cta-button w-full md:w-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Birth Chart...
                      </>
                    ) : (
                      'Generate Free Birth Chart'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;