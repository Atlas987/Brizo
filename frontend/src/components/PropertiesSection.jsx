import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Wifi, Shield, Car, Dumbbell, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { properties, brandData, cities } from '../mock';

const PropertiesSection = () => {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const amenityIcons = {
    'High-speed wifi': Wifi,
    '24/7 Security': Shield,
    'Parking': Car,
    'Gym': Dumbbell
  };

  const nextProperty = () => {
    const nextIndex = (currentPropertyIndex + 1) % properties.length;
    setCurrentPropertyIndex(nextIndex);
    setSelectedProperty(properties[nextIndex]);
    setCurrentImageIndex(0);
  };

  const prevProperty = () => {
    const prevIndex = currentPropertyIndex === 0 ? properties.length - 1 : currentPropertyIndex - 1;
    setCurrentPropertyIndex(prevIndex);
    setSelectedProperty(properties[prevIndex]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % selectedProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? selectedProperty.images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-black">
            Discover Our Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our premium PG accommodations across Mumbai's prime locations
          </p>
        </div>

        {/* Property Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Property Images Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 border-2 border-gray-300">
                <img 
                  src={selectedProperty.images[currentImageIndex]} 
                  alt={selectedProperty.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Image Navigation */}
              {selectedProperty.images.length > 1 && (
                <>
                  <Button
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 shadow-xl rounded-full w-12 h-12 p-0"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 shadow-xl rounded-full w-12 h-12 p-0"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {selectedProperty.images.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {selectedProperty.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-2xl border-3 transition-all duration-200 ${
                    currentImageIndex === index 
                      ? 'border-black shadow-lg' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${selectedProperty.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black text-black">
                  {selectedProperty.name}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={prevProperty}
                    className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={nextProperty}
                    className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-600 mb-6">
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{selectedProperty.location}</span>
              </div>

              <div className="text-4xl font-black mb-8 text-black">
                From ₹{selectedProperty.rentFrom.toLocaleString()}/month
              </div>
            </div>

            {/* Sharing Types */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-black">
                Available Options
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProperty.sharingTypes.map((type, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm font-bold bg-black text-white hover:bg-gray-800 rounded-full"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-black">
                Key Amenities
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {selectedProperty.amenities.slice(0, 4).map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Wifi;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-200">
                      <div className="p-3 bg-black text-white rounded-xl">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-black">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-black text-white font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl py-4 text-lg rounded-2xl"
              >
                Book Virtual Tour
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-bold rounded-2xl"
                >
                  View Details
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-bold rounded-2xl"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Navigation Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-black mb-12 text-center text-black">
            All Properties ({properties.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <Card 
                key={property.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-3 rounded-3xl overflow-hidden ${
                  currentPropertyIndex === index 
                    ? 'border-black shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
                onClick={() => {
                  setCurrentPropertyIndex(index);
                  setSelectedProperty(property);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={property.images[0]} 
                      alt={property.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-2 line-clamp-2 text-black">
                      {property.name}
                    </h4>
                    <div className="flex items-center text-xs text-gray-600 mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      {property.location}
                    </div>
                    <div className="text-lg font-black text-black">
                      ₹{property.rentFrom.toLocaleString()}/mo
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;