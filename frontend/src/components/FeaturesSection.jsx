import React from 'react';
import { Shield, Smartphone, CreditCard, Clock, Users, Headphones } from 'lucide-react';
import { features, brandData } from '../mock';

const FeaturesSection = () => {
  const iconMap = {
    'Smart KYC': Shield,
    'Exclusive tenant membership': Users,
    'Digital payment': CreditCard,
    'Tenant smart app': Smartphone,
    'Tenant insurance': Shield,
    'Faster complaint resolution': Headphones
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: brandData.textColor }}>
            What Makes Us Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation living with smart technology, premium amenities, and unmatched convenience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.title] || Clock;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                {/* Feature Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={feature.imgUrl} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg"
                    style={{ color: brandData.brandColor }}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold" style={{ color: brandData.textColor }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.body}
                  </p>
                  
                  {/* Learn More Link */}
                  <button 
                    className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: brandData.brandColor }}
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brandData.textColor }}>
              Ready to Experience Smart Living?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied residents who've made Brizo Stay their home. Book a virtual tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: brandData.brandColor }}
              >
                Schedule Virtual Tour
              </button>
              <button 
                className="px-8 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:bg-green-50"
                style={{ 
                  borderColor: brandData.brandColor, 
                  color: brandData.brandColor 
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;