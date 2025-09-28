import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { brandData, properties } from '../mock';

const HeroSection = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchLocation(value);
    
    if (value.trim()) {
      const filtered = cities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (city) => {
    setSearchLocation(city);
    setShowSuggestions(false);
  };

  const propertyTypes = [
    {
      title: "PG for Students",
      description: "Affordable and comfortable stays for students",
      icon: <Users className="h-6 w-6" />,
      price: "Starting ₹8,000/month"
    },
    {
      title: "Co-living for Professionals", 
      description: "Premium shared accommodations with modern amenities",
      icon: <Home className="h-6 w-6" />,
      price: "Starting ₹12,000/month"
    },
    {
      title: "Studio Apartments",
      description: "Fully furnished independent living spaces",
      icon: <Star className="h-6 w-6" />,
      price: "Starting ₹18,000/month"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Mumbai's #1 Co-living Brand
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-black">Come, live the</span>
                <br />
                <span className="text-black italic">Brizo</span> way
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience premium co-living with smart technology, modern amenities, and a vibrant community in Mumbai's prime locations.
              </p>
            </div>

            {/* Search Section */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 relative">
              <h3 className="text-lg font-bold mb-6 text-black flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Find your perfect stay
              </h3>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search locality (Kurla, Ghatkopar, BKC...)"
                      value={searchLocation}
                      onChange={handleSearchChange}
                      className="py-4 text-lg border-2 border-gray-300 focus:border-black rounded-2xl bg-white"
                    />
                  </div>
                  
                  {/* City Suggestions */}
                  {showSuggestions && filteredCities.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-200 rounded-2xl mt-2 shadow-xl z-20 max-h-48 overflow-y-auto">
                      {filteredCities.map((city, index) => (
                        <button
                          key={index}
                          onClick={() => handleCitySelect(city)}
                          className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center"
                        >
                          <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                          <span className="font-medium">{city}, Mumbai</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button 
                  size="lg"
                  className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-200 rounded-2xl font-semibold"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-black">100+</div>
                <div className="text-sm text-gray-600 font-medium">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">6500+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Tenants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Beds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">20+</div>
                <div className="text-sm text-gray-600 font-medium">Locations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Property Types */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Choose Your Stay
            </h2>
            {propertyTypes.map((type, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 cursor-pointer hover:-translate-y-1 hover:border-black"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-black text-white rounded-2xl flex-shrink-0">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-black">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{type.description}</p>
                      <p className="text-sm font-bold text-black">
                        {type.price}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
            
            {/* CTA */}
            <div className="mt-8 p-6 bg-black text-white rounded-3xl text-center">
              <h3 className="font-bold text-lg mb-2">Ready to move in?</h3>
              <p className="text-gray-300 text-sm mb-4">Book a virtual tour today</p>
              <Button 
                variant="secondary" 
                className="bg-white text-black hover:bg-gray-100 font-semibold"
              >
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;