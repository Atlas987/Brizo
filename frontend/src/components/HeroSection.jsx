import React, { useState } from 'react';
import { Search, MapPin, Home, Users, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { brandData, cities } from '../mock';

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
      icon: <Users className="h-8 w-8" />,
      price: "Starting ₹8,000/month"
    },
    {
      title: "Co-living for Professionals", 
      description: "Premium shared accommodations with modern amenities",
      icon: <Home className="h-8 w-8" />,
      price: "Starting ₹12,000/month"
    },
    {
      title: "Studio Apartments",
      description: "Fully furnished independent living spaces",
      icon: <Star className="h-8 w-8" />,
      price: "Starting ₹18,000/month"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span style={{ color: brandData.textColor }}>Come, live the</span>
                <br />
                <span style={{ color: brandData.brandColor }}>Brizo way</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {brandData.description}
              </p>
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative">
              <h3 className="text-lg font-semibold mb-4" style={{ color: brandData.textColor }}>
                Find your perfect stay
              </h3>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search your locality (e.g., Kurla, Ghatkopar)"
                      value={searchLocation}
                      onChange={handleSearchChange}
                      className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
                    />
                  </div>
                  
                  {/* City Suggestions */}
                  {showSuggestions && filteredCities.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl mt-2 shadow-lg z-20 max-h-48 overflow-y-auto">
                      {filteredCities.map((city, index) => (
                        <button
                          key={index}
                          onClick={() => handleCitySelect(city)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{city}, Mumbai</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Button 
                  size="lg"
                  className="px-8 py-3 text-white hover:bg-green-700 transition-all duration-200 rounded-xl"
                  style={{ backgroundColor: brandData.brandColor }}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: brandData.brandColor }}>100+</div>
                <div className="text-sm text-gray-600">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: brandData.brandColor }}>6500+</div>
                <div className="text-sm text-gray-600">Happy Tenants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: brandData.brandColor }}>1000+</div>
                <div className="text-sm text-gray-600">Beds</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: brandData.brandColor }}>20+</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Property Types */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: brandData.textColor }}>
              Choose Your Stay
            </h2>
            {propertyTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${brandData.brandColor}15`, color: brandData.brandColor }}
                  >
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: brandData.textColor }}>
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{type.description}</p>
                    <p className="text-sm font-semibold" style={{ color: brandData.brandColor }}>
                      {type.price}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-2 hover:text-white hover:bg-green-600 transition-all duration-200"
                    style={{ borderColor: brandData.brandColor, color: brandData.brandColor }}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;