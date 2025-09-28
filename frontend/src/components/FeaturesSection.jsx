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
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-black">
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-black hover:-translate-y-2"
              >
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-black text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {feature.title}
                  </h3>
                </div>

                {/* Feature Image - Fixed sizing */}
                <div className="mb-6 overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={feature.imgUrl} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback for broken images
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden w-full h-48 bg-black text-white items-center justify-center rounded-2xl"
                  >
                    <IconComponent className="h-12 w-12" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.body}
                  </p>
                  
                  {/* Learn More Link */}
                  <button 
                    className="inline-flex items-center text-sm font-bold text-black group-hover:translate-x-1 transition-transform duration-200 hover:underline"
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
        <div className="mt-16">
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Experience Smart Living?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied residents who've made Brizo Stay their home. Book a virtual tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule Virtual Tour
              </button>
              <button className="px-8 py-4 font-bold rounded-2xl border-2 border-white text-white transition-all duration-200 hover:bg-white hover:text-black">
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