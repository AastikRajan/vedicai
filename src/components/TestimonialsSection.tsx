import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import StarBackground from './StarBackground';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc?: string;
}

const defaultAvatarSrc = 'https://ext.same-assets.com/588562877/3891489559.webp';

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating, imageSrc = defaultAvatarSrc }) => {
  return (
    <Card className="bg-transparent border-none gradient-border h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={imageSrc}
              alt={`Happy user ${name}`}
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 text-primary ${i >= rating ? 'opacity-50' : ''}`}
            />
          ))}
          <span className="text-xs ml-1">{rating}</span>
        </div>
        <p className="text-sm flex-grow">{content}</p>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: 'Aayush Raghuvanshi',
      role: 'Student',
      content: 'Accurate analysis about my love life, need for financial stability, my emotional sensitivity, sense of independence and intellectual taste. Answers also gave me my future dasha periods which will be positive for me with detailed analysis of what will be the circumstances in those periods in the near future.',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/3891489559.webp'
    },
    {
      name: 'Rae Cooper',
      role: 'Consultant',
      content: 'This service was excellent! I would 1000% recommend for people to understand their vedic-astrology-birth-chart and the information is extemely accurate.',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/4251593128.webp'
    },
    {
      name: 'Rohit Solanki',
      role: 'Astrologer',
      content: 'Wow! I am mesmerized by the accuracy of dasha analysis.',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/2327364074.webp'
    },
    {
      name: 'Rishabh Sethi',
      role: 'Writer',
      content: 'so accurate!',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/2248349512.webp'
    },
    {
      name: 'Anurag Bhelsewale',
      role: 'Software Engineer',
      content: 'Fantastic!',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/341254031.webp'
    },
    {
      name: 'Rohit Nagarkoti',
      role: 'IT, Data Analyst',
      content: 'it is good',
      rating: 5,
      imageSrc: 'https://ext.same-assets.com/588562877/808517874.webp'
    }
  ];

  return (
    <section className="py-16 relative">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl font-bold mb-2 text-center">User Words</h2>
        <p className="text-muted-foreground text-center mb-12">
          Here are some delightful words from our satisfied users. The very essence that fuels our passion!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;