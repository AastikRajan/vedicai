import React from 'react';
import { Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
  link: string;
}

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: 'What is Vedic Astrology ?',
      answer: 'Vedic astrology, a tradition over 7,000 years old, originates from Nepal and India. It is among the most detailed astrological systems still in use, grounded in precise sidereal astronomy. Recognized for its secular and mathematical approach, Vedic astrology steers clear of superstitions and relies on a profound understanding of astronomical principles.',
      link: '/faq'
    },
    {
      question: 'What is AI Astrology ?',
      answer: 'AI Astrology combines artificial intelligence with traditional Vedic astrology in Vedic AstroGPT. It employs AI to understand user inquiries, using pattern recognition and analysis based on Vedic astrological texts. The interpretations offered are grounded in the principles of Vedic astrology. Large Language Models (LLMs) are utilized to provide answers and guidance, ensuring a blend of ancient astrological wisdom and modern AI technology.',
      link: '/faq'
    },
    {
      question: 'How can you contact us?',
      answer: 'For any inquiries, feedback, or support, feel free to email us at support@vedicastrogpt.com.',
      link: '/faq'
    },
    {
      question: 'How safe is Vedic AstroGPT? Is my question and answers secure?',
      answer: 'We prioritize user privacy and data security, ensuring that all interactions and information are kept confidential',
      link: '/faq'
    },
    {
      question: 'What are the limitations of Vedic AstroGPT?',
      answer: 'Limitations include generalization, lack of individual circumstance information, AI understanding limitation, no transit support, and data quality dependency.',
      link: '/faq'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">FAQs</h2>
        <p className="text-muted-foreground text-center mb-10">
          Get answers to most asked questions about Vedic Astrology, AI Astrology and AI Astrologers
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card gradient-border rounded-lg overflow-hidden border-none"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                <p>{faq.answer}</p>
                <div className="mt-3">
                  <a href={faq.link} className="text-primary flex items-center group">
                    Read more about this topic
                    <Star className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;