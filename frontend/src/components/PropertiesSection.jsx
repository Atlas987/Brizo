import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Users, Wifi, Shield, Car, Dumbbell } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { properties, brandData } from '../mock';

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
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: brandData.textColor }}>
            Discover Our Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our premium PG accommodations across Mumbai's prime locations
          </p>
        </div>

        {/* Property Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Property Images Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
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
                    variant="secondary"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProperty.images.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {selectedProperty.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    currentImageIndex === index 
                      ? `border-green-500` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ borderColor: currentImageIndex === index ? brandData.brandColor : undefined }}
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold" style={{ color: brandData.textColor }}>
                  {selectedProperty.name}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={prevProperty}
                    className="border-2"
                    style={{ borderColor: brandData.brandColor }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={nextProperty}
                    className="border-2"
                    style={{ borderColor: brandData.brandColor }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{selectedProperty.location}</span>
              </div>

              <div className="text-3xl font-bold mb-6" style={{ color: brandData.brandColor }}>
                From ₹{selectedProperty.rentFrom.toLocaleString()}/month
              </div>
            </div>

            {/* Sharing Types */}
            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: brandData.textColor }}>
                Available Options
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProperty.sharingTypes.map((type, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                    style={{ 
                      backgroundColor: `${brandData.brandColor}15`,
                      color: brandData.brandColor 
                    }}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: brandData.textColor }}>
                Key Amenities
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedProperty.amenities.slice(0, 4).map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Wifi;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ 
                          backgroundColor: `${brandData.brandColor}15`,
                          color: brandData.brandColor 
                        }}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full text-white font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: brandData.brandColor }}
              >
                Book Virtual Tour
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-2 hover:bg-green-50 transition-all duration-200"
                  style={{ borderColor: brandData.brandColor, color: brandData.brandColor }}
                >
                  View Details
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 hover:bg-green-50 transition-all duration-200"
                  style={{ borderColor: brandData.brandColor, color: brandData.brandColor }}
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Navigation Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: brandData.textColor }}>
            All Properties ({properties.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <Card 
                key={property.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${
                  currentPropertyIndex === index 
                    ? `border-green-500 shadow-lg` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ 
                  borderColor: currentPropertyIndex === index ? brandData.brandColor : undefined 
                }}
                onClick={() => {
                  setCurrentPropertyIndex(index);
                  setSelectedProperty(property);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="p-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3">
                    <img 
                      src={property.images[0]} 
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2" style={{ color: brandData.textColor }}>
                    {property.name}
                  </h4>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {property.location}
                  </div>
                  <div className="text-sm font-bold" style={{ color: brandData.brandColor }}>
                    ₹{property.rentFrom.toLocaleString()}/mo
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