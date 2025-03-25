import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-transparent border-b border-gray-800 relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <img
                  src="/assets/logo.webp"
                  alt="Vedic AstroGPT Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="font-orbitron font-medium">
                <div className="text-primary text-xs md:text-sm">Vedic</div>
                <div className="text-foreground text-sm md:text-base">AstroGPT</div>
                <div className="bg-primary text-primary-foreground text-[10px] px-1 rounded-sm inline-block">BETA</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:gap-x-6">
            <Link to="/vedic-astrology-birth-chart" className="text-foreground hover:text-primary transition-colors py-2 text-sm">
              Free Vedic Birth Chart
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors py-2 text-sm">
              Pricing
            </Link>
            <Link to="/result" className="text-primary font-semibold hover:text-accent transition-colors py-2 text-sm">
              Result
            </Link>
            <Link to="/learn/how-vedic-astrogpt-works" className="text-foreground hover:text-primary transition-colors py-2 text-sm">
              How does it work?
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground hover:text-primary transition-colors py-2 text-sm flex items-center gap-1">
                  Learn Vedic Astrology
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card">
                <DropdownMenuItem>
                  <Link to="/learn-vedic-astrology/mars-in-scorpio" className="w-full">
                    Mars in Scorpio
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn-vedic-astrology/rahu-in-scorpio" className="w-full">
                    Rahu in Scorpio
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn-vedic-astrology/ketu-in-capricorn" className="w-full">
                    Ketu in Capricorn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn-vedic-astrology/rahu-in-virgo" className="w-full">
                    Rahu in Virgo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn-vedic-astrology/1" className="w-full">
                    Explore All
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground hover:text-primary transition-colors py-2 text-sm flex items-center gap-1">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card">
                <DropdownMenuItem>
                  <Link to="/faq" className="w-full">
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn/kundli-gpt-vs-vedic-astrogpt" className="w-full">
                    Kundli GPT vs Vedic AstroGPT
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn/best-ai-astrology-websites" className="w-full">
                    5 Best AI Astrology Websites
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/learn/how-to-ask-questions" className="w-full">
                    How to Ask Questions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/request-account-deletion" className="w-full">
                    Request Account Deletion
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center space-x-1 mr-2">
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary opacity-50" />
              <span className="text-xs text-muted-foreground ml-1">4.3 star rating</span>
            </div>
            <Button className="cta-button">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;