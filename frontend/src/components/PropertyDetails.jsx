import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Wifi, Shield, Car, Dumbbell, Phone, MessageCircle, Calendar, Share2, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { properties, brandData, commonAmenities } from '../mock';
import Header from './Header';
import Footer from './Footer';
import WhatsAppChatbot from './WhatsAppChatbot';

const PropertyDetails = () => {
  const { propId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const foundProperty = properties.find(p => p.prop_id === propId);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      // Redirect to home if property not found
      navigate('/');
    }
  }, [propId, navigate]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
      </div>
    );
  }

  const amenityIcons = {
    'High-speed wifi': Wifi,
    '24/7 Security': Shield,
    'Parking': Car,
    'Gym': Dumbbell,
    'Common TV': Star,
    'Common Kitchen': Star,
    'CCTV': Shield,
    'Power Backup': Star
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const handleBookTour = () => {
    const message = encodeURIComponent(
      `Hi Brizo Stay! I'm interested in booking a virtual tour for ${property.name}. Property ID: ${property.prop_id}`
    );
    window.open(`https://wa.me/91${brandData.supportWhatsapp}?text=${message}`, '_blank');
  };

  const handleCallNow = () => {
    window.open(`tel:+91${brandData.supportNumber}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/#properties" className="text-gray-600 hover:text-black transition-colors">
                Properties
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-black font-medium">{property.name}</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Button>
        </div>

        {/* Property Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 border-3 border-black">
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 shadow-xl rounded-full w-12 h-12 p-0"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 shadow-xl rounded-full w-12 h-12 p-0"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Button size="sm" className="bg-white/90 text-black hover:bg-white rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-white/90 text-black hover:bg-white rounded-full p-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-2xl border-3 transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'border-black shadow-lg scale-105' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${property.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Information */}
            <div className="space-y-8">
              {/* Property Header */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-black mb-4">
                  {property.name}
                </h1>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{property.address}</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-black text-black">
                    From ₹{property.rentFrom.toLocaleString()}/month
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2">(4.8)</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-2 border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Available For</div>
                  <div className="font-bold text-black">{property.availableFor}</div>
                </Card>
                <Card className="p-4 border-2 border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Preferred Tenants</div>
                  <div className="font-bold text-black">{property.tenantsPreferred}</div>
                </Card>
              </div>

              {/* Sharing Options */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">Sharing Options</h3>
                <div className="flex flex-wrap gap-3">
                  {property.sharingTypes.map((type, index) => (
                    <Badge 
                      key={index}
                      className="px-4 py-2 text-sm font-bold bg-black text-white hover:bg-gray-800 rounded-full cursor-pointer"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">About This Property</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-black">Amenities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity] || Wifi;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
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
              <div className="space-y-4 sticky bottom-6 bg-white p-6 rounded-3xl shadow-xl border-2 border-gray-200">
                <Button 
                  onClick={handleBookTour}
                  size="lg"
                  className="w-full bg-black text-white font-bold hover:bg-gray-800 transition-all duration-200 py-4 text-lg rounded-2xl"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Virtual Tour
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={handleCallNow}
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 font-bold rounded-2xl"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    onClick={handleBookTour}
                    variant="outline"
                    className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200 font-bold rounded-2xl"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-black mb-8">Why Choose Brizo Stay?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-2 border-gray-200 hover:border-black transition-all duration-200">
                <Shield className="h-8 w-8 mb-4 text-black" />
                <h4 className="text-lg font-bold text-black mb-2">30-Second Smart KYC</h4>
                <p className="text-gray-600 text-sm">Quick and hassle-free verification process</p>
              </Card>
              <Card className="p-6 border-2 border-gray-200 hover:border-black transition-all duration-200">
                <Star className="h-8 w-8 mb-4 text-black" />
                <h4 className="text-lg font-bold text-black mb-2">Premium Amenities</h4>
                <p className="text-gray-600 text-sm">Modern facilities for comfortable living</p>
              </Card>
              <Card className="p-6 border-2 border-gray-200 hover:border-black transition-all duration-200">
                <MessageCircle className="h-8 w-8 mb-4 text-black" />
                <h4 className="text-lg font-bold text-black mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Round-the-clock assistance via smart app</p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default PropertyDetails;