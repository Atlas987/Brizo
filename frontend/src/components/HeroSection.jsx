import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { brandData, properties } from '../mock';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-scroll through property images
  useEffect(() => {
    const allImages = properties.flatMap(property => property.images).slice(0, 8);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const allImages = properties.flatMap(property => property.images).slice(0, 8);

  const uniqueFeatures = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "30-Second Smart KYC"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "Zero Paperwork Living"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Complete Tenant Insurance"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "AI-Powered Smart App"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-white">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #000 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Mumbai's #1 Co-living Brand
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-black">Where</span>
                <br />
                <span className="text-black italic">Innovation</span>
                <br />
                <span className="text-black">meets</span> <span className="text-black italic">Living</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience India's first AI-powered co-living ecosystem. From 30-second KYC to smart complaint resolution - everything is designed for the modern professional.
              </p>
            </div>

            {/* Unique Features */}
            <div className="grid grid-cols-1 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="p-2 bg-black text-white rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-black">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* BRIZO Values Teaser */}
            <div className="bg-black text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-3">🌟 BRIZO Philosophy</h3>
              <p className="text-gray-300 mb-4">
                <span className="font-bold text-white">B</span>etter living • <span className="font-bold text-white">R</span>eliability • <span className="font-bold text-white">I</span>nnovation • <span className="font-bold text-white">Z</span>ero hassle • <span className="font-bold text-white">O</span>utstanding service
              </p>
              <div className="flex space-x-4">
                <Button 
                  className="bg-white text-black hover:bg-gray-100 font-semibold rounded-2xl"
                >
                  Explore Properties
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-2xl"
                >
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Auto-Scrolling Images */}
          <div className="space-y-6">
            {/* Main Large Image */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 border-4 border-black shadow-2xl">
                {allImages.length > 0 && (
                  <img 
                    src={allImages[currentImageIndex]} 
                    alt="Brizo Stay Property"
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                )}
              </div>
              
              {/* Image Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-2xl">
                <h4 className="font-bold text-lg">Premium Co-living Spaces</h4>
                <p className="text-gray-300 text-sm">Mumbai's finest PG accommodations</p>
              </div>
              
              {/* Auto-scroll indicator */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {allImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                    currentImageIndex % 4 === index 
                      ? 'border-black scale-105 shadow-lg' 
                      : 'border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white border-2 border-gray-200 rounded-2xl">
                <div className="text-2xl font-black text-black">6500+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Residents</div>
              </div>
              <div className="text-center p-4 bg-white border-2 border-gray-200 rounded-2xl">
                <div className="text-2xl font-black text-black">4.8★</div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;