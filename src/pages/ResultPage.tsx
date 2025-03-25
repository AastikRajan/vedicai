import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import {
  Star, Calendar, Clock, RefreshCw, ChevronRight,
  ChevronLeft, Info, TrendingUp, Heart, Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AstrologicalInfo from '@/components/AstrologicalInfo';

interface HoroscopeData {
  name: string;
  generalTraits: {
    sunSign: string;
    moonSign: string;
    ascendant: string;
    traits: string[];
  };
  career: string;
  love: string;
  health: string;
  challenges: string;
  predictions: string;
  luckyElements: {
    numbers: string[];
    colors: string[];
    gemstones: string[];
    days: string[];
  };
}

const ResultPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [rawHoroscope, setRawHoroscope] = useState<string | null>(null);

  useEffect(() => {
    const parseHoroscopeText = () => {
      try {
        const horoscopeText = localStorage.getItem('horoscopeResult');
        const userDataString = localStorage.getItem('userData');
        
        if (!horoscopeText || !userDataString) {
          throw new Error('No horoscope data found. Please generate a new reading.');
        }

        setRawHoroscope(horoscopeText);
        const userData = JSON.parse(userDataString);
        
        // Initialize default data structure
        const parsedData: HoroscopeData = {
          name: userData.name || 'Guest',
          generalTraits: {
            sunSign: '',
            moonSign: '',
            ascendant: '',
            traits: []
          },
          career: '',
          love: '',
          health: '',
          challenges: '',
          predictions: '',
          luckyElements: {
            numbers: [],
            colors: [],
            gemstones: [],
            days: []
          }
        };

        // Split text into sections
        const sections = horoscopeText.split('\n\n').filter(Boolean);

        sections.forEach(section => {
          const sectionText = section.trim();
          
          if (sectionText.includes('General Personality Traits')) {
            const lines = sectionText.split('\n').filter(Boolean);
            const traits = lines.slice(1);
            
            // Extract sun sign, moon sign, and ascendant if available
            const signLine = traits[0] || '';
            const signInfo = signLine.split('-').map(s => s.trim());
            
            if (signInfo.length >= 2) parsedData.generalTraits.sunSign = signInfo[1];
            if (signInfo.length >= 3) parsedData.generalTraits.moonSign = signInfo[2];
            if (signInfo.length >= 4) parsedData.generalTraits.ascendant = signInfo[3];
            
            parsedData.generalTraits.traits = traits.slice(1).map(t => t.trim());
          } 
          else if (sectionText.includes('Career & Financial')) {
            parsedData.career = sectionText.split(':').slice(1).join(':').trim();
          }
          else if (sectionText.includes('Love & Relationships')) {
            parsedData.love = sectionText.split(':').slice(1).join(':').trim();
          }
          else if (sectionText.includes('Health & Well-being')) {
            parsedData.health = sectionText.split(':').slice(1).join(':').trim();
          }
          else if (sectionText.includes('Life Challenges')) {
            parsedData.challenges = sectionText.split(':').slice(1).join(':').trim();
          }
          else if (sectionText.includes('Future Predictions')) {
            parsedData.predictions = sectionText.split(':').slice(1).join(':').trim();
          }
          else if (sectionText.includes('Lucky Elements')) {
            const elements = sectionText.split('\n').slice(1);
            elements.forEach(element => {
              const [type, values] = element.split(':').map(s => s.trim());
              if (!type || !values) return;
              
              if (type.includes('Numbers')) {
                parsedData.luckyElements.numbers = values.split(',').map(n => n.trim());
              }
              else if (type.includes('Colors')) {
                parsedData.luckyElements.colors = values.split(',').map(c => c.trim());
              }
              else if (type.includes('Gemstones')) {
                parsedData.luckyElements.gemstones = values.split(',').map(g => g.trim());
              }
              else if (type.includes('Days')) {
                parsedData.luckyElements.days = values.split(',').map(d => d.trim());
              }
            });
          }
        });

        setHoroscopeData(parsedData);
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error('Error parsing horoscope:', error);
        setParseError(error instanceof Error ? error.message : 'Failed to parse horoscope data');
        setLoading(false);
      }
    };

    parseHoroscopeText();
  }, []);

  // Simulated data for charts
  const moodData = [
    { name: 'Jan', happiness: 65, sadness: 35 },
    { name: 'Feb', happiness: 75, sadness: 25 },
    { name: 'Mar', happiness: 85, sadness: 15 },
    { name: 'Apr', happiness: 70, sadness: 30 },
    { name: 'May', happiness: 90, sadness: 10 },
    { name: 'Jun', happiness: 80, sadness: 20 },
  ];

  const energyData = [
    { name: 'Mon', value: 80 },
    { name: 'Tue', value: 85 },
    { name: 'Wed', value: 75 },
    { name: 'Thu', value: 90 },
    { name: 'Fri', value: 85 },
    { name: 'Sat', value: 95 },
    { name: 'Sun', value: 88 },
  ];

  const pieData = [
    { name: 'Career', value: 35, color: '#F0B862' },
    { name: 'Love', value: 25, color: '#E57373' },
    { name: 'Health', value: 20, color: '#81C784' },
    { name: 'Wealth', value: 20, color: '#64B5F6' },
  ];

  const filters = ['all', 'career', 'love', 'health', 'wealth'];

  if (parseError) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <Star className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p className="text-muted-foreground mb-6">{parseError}</p>
          <Button 
            onClick={() => window.location.href = '/vedic-astrology-birth-chart'}
            className="cta-button"
          >
            Generate New Reading
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      {/* Raw Horoscope Section */}
      {rawHoroscope && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-card p-8 rounded-lg gradient-border">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Detailed Horoscope Reading</h2>
            <div className="space-y-6 whitespace-pre-wrap">
              {rawHoroscope.split('\n\n').map((section, index) => (
                <div key={index} className="space-y-2">
                  {section.split('\n').map((line, lineIndex) => {
                    if (lineIndex === 0 && line.includes('–')) {
                      return <h3 key={lineIndex} className="text-xl font-semibold text-primary mb-2">{line}</h3>;
                    }
                    return <p key={lineIndex} className="text-muted-foreground">{line}</p>;
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Animated Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden mb-16"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full h-full bg-gradient-to-r from-primary/20 to-transparent"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome, <span className="text-primary">{horoscopeData?.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your Cosmic Journey for 2024
            </p>

            {horoscopeData?.generalTraits.sunSign && (
              <AstrologicalInfo
                sunSign={horoscopeData.generalTraits.sunSign}
                moonSign={horoscopeData.generalTraits.moonSign}
                ascendant={horoscopeData.generalTraits.ascendant}
              />
            )}

            {/* Personality Traits Card */}
            <div className="bg-card p-8 rounded-lg gradient-border max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Star className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Your Cosmic Identity</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Sun Sign</h3>
                  <p className="text-primary">{horoscopeData?.generalTraits.sunSign}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Moon Sign</h3>
                  <p className="text-primary">{horoscopeData?.generalTraits.moonSign}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Ascendant</h3>
                  <p className="text-primary">{horoscopeData?.generalTraits.ascendant}</p>
                </div>
              </div>

              {/* Mood Chart */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moodData}>
                    <defs>
                      <linearGradient id="happiness" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F0B862" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F0B862" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="sadness" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#64B5F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#64B5F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="happiness"
                      stroke="#F0B862"
                      fillOpacity={1}
                      fill="url(#happiness)"
                    />
                    <Area
                      type="monotone"
                      dataKey="sadness"
                      stroke="#64B5F6"
                      fillOpacity={1}
                      fill="url(#sadness)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Lucky Elements Card */}
            <div className="bg-card p-8 rounded-lg gradient-border max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Your Lucky Elements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Numbers</h3>
                  <p className="text-primary">{horoscopeData?.luckyElements.numbers.join(', ')}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Colors</h3>
                  <p className="text-primary">{horoscopeData?.luckyElements.colors.join(', ')}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Gemstones</h3>
                  <p className="text-primary">{horoscopeData?.luckyElements.gemstones.join(', ')}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Lucky Days</h3>
                  <p className="text-primary">{horoscopeData?.luckyElements.days.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Analysis Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Detailed Analysis</h2>
            <div className="flex gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Career Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-6 rounded-lg gradient-border"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">Career & Finance</h3>
              </div>

              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger>View Details</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      {horoscopeData?.career}
                    </p>
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={energyData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#F0B862"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Love Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-card p-6 rounded-lg gradient-border"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">Love & Relationships</h3>
              </div>

              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moodData}>
                    <defs>
                      <linearGradient id="love" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E57373" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#E57373" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="happiness"
                      stroke="#E57373"
                      fillOpacity={1}
                      fill="url(#love)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger>View Details</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      {horoscopeData?.love}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Health Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-card p-6 rounded-lg gradient-border"
            >
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">Health & Well-being</h3>
              </div>

              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={energyData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#81C784"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger>View Details</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      {horoscopeData?.health}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              className="text-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="relative">
                <Star className="w-16 h-16 text-primary" />
                <div className="absolute inset-0 animate-ping">
                  <Star className="w-16 h-16 text-primary opacity-75" />
                </div>
              </div>
              <p className="text-lg mt-4">Consulting the stars...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Onboarding Overlay */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card p-8 rounded-lg gradient-border max-w-md"
            >
              <h3 className="text-2xl font-bold mb-4">Welcome to Your Reading</h3>
              <p className="text-muted-foreground mb-6">
                Let's explore your personalized astrological insights together.
                Discover how the celestial bodies influence your journey through
                interactive charts and detailed analysis.
              </p>
              <Button
                onClick={() => setShowOnboarding(false)}
                className="w-full cta-button"
              >
                Begin Your Cosmic Journey
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResultPage;