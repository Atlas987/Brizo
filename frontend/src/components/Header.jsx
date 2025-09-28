import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { brandData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={brandData.logo} 
              alt={brandData.name}
              className="h-10 w-auto rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold" style={{ color: brandData.textColor }}>
                {brandData.name}
              </h1>
              <p className="text-sm text-gray-500">{brandData.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{brandData.supportNumber}</span>
            </div>
            <Button 
              className="text-white hover:bg-green-700 transition-all duration-200"
              style={{ backgroundColor: brandData.brandColor }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Find Properties
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-gray-100 mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>{brandData.supportNumber}</span>
                </div>
                <Button 
                  className="w-full text-white hover:bg-green-700"
                  style={{ backgroundColor: brandData.brandColor }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Properties
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;