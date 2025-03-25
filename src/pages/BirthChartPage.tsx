import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Calendar, Clock, MapPin, Key, Loader2 } from 'lucide-react';
import OpenAI from 'openai';

export default function BirthChartPage() {
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
    <div className="bg-transparent py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Free Vedic Birth Chart Analysis
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get your personalized Vedic birth chart analysis powered by AI. Understand your planetary positions,
            houses, and their influences on various aspects of your life.
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-md rounded-lg p-8 gradient-border">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card/30 backdrop-blur-md rounded-lg gradient-border">
            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Accurate Calculations</h3>
            <p className="text-sm text-muted-foreground">
              Based on precise astronomical data and traditional Vedic principles
            </p>
          </div>

          <div className="text-center p-6 bg-card/30 backdrop-blur-md rounded-lg gradient-border">
            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get detailed interpretations enhanced by advanced AI technology
            </p>
          </div>

          <div className="text-center p-6 bg-card/30 backdrop-blur-md rounded-lg gradient-border">
            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Receive your birth chart and analysis immediately
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}