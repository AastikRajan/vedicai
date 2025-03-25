import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Home, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-800 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <img
                  src="/assets/logo.webp"
                  alt="Vedic AstroGPT Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="font-orbitron font-medium">
                <div className="text-primary text-xs md:text-sm">Vedic</div>
                <div className="text-foreground text-lg md:text-xl">AstroGPT</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for vedic astrology and cosmic guidance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/astrologers-nearby" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Find Astrologers Near You
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Use
              </Link>
              <Link to="/return-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Return Policy
              </Link>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-primary w-4 h-4 mr-2" />
                <span className="text-muted-foreground text-sm">Ahmedabad</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary w-4 h-4 mr-2" />
                <span className="text-muted-foreground text-sm">+91 9265265176</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary w-4 h-4 mr-2" />
                <span className="text-muted-foreground text-sm">support@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-800">
          <p className="text-center text-muted-foreground text-xs">
            © 2023. Vedic AstroGPT | Astrology AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;