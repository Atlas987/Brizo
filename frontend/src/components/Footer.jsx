import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { brandData, properties, cities } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    'Terms & Conditions',
    'Privacy Policy', 
    'Refund Policy',
    'FAQs',
    'Partner With Us',
    'Careers'
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={brandData.logo} 
                alt={brandData.name}
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">{brandData.name}</h3>
                <p className="text-gray-400 text-sm">{brandData.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Mumbai's most trusted PG and co-living brand, providing safe, smart, 
              and comfortable accommodations for students and professionals.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Properties</h4>
            <div className="space-y-3">
              {properties.slice(0, 6).map((property) => (
                <a
                  key={property.id}
                  href="#properties"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  {property.name}
                </a>
              ))}
              {properties.length > 6 && (
                <a
                  href="#properties"
                  className="block text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                >
                  View all {properties.length} properties →
                </a>
              )}
            </div>
          </div>

          {/* Locations Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Locations</h4>
            <div className="space-y-3">
              {cities.map((city, index) => (
                <a
                  key={index}
                  href="#properties"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  PG in {city}
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Quick Links</h5>
              <div className="space-y-2">
                {quickLinks.slice(0, 3).map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-green-400" />
                <div>
                  <p className="text-gray-300">{brandData.supportNumber}</p>
                  <p className="text-gray-400 text-xs">24/7 Support Available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-green-400" />
                <div>
                  <p className="text-gray-300">{brandData.supportEmail}</p>
                  <p className="text-gray-400 text-xs">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-green-400" />
                <div>
                  <p className="text-gray-300">Mumbai, Maharashtra</p>
                  <p className="text-gray-400 text-xs">20+ Locations Across City</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:+91${brandData.supportNumber}`}
                className="block w-full text-center py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/91${brandData.supportWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {brandData.name}. All rights reserved.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              {quickLinks.slice(0, 4).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Made with ❤️ for modern living in Mumbai | 
              <span className="ml-1">Licensed & Regulated PG Accommodations</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;