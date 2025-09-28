import React from 'react';
import { stats } from '../mock';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Trusted by Thousands Across Mumbai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing community of satisfied residents
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-black rounded-3xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:-rotate-3">
                  <img 
                    src={stat.imgUrl} 
                    alt={stat.title}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden w-12 h-12 bg-white rounded-xl"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl md:text-5xl font-black text-black">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-3xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-black text-black mb-3">4.8/5</div>
            <div className="text-gray-600 mb-3 font-medium">Average Rating</div>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-3xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-black text-black mb-3">99.2%</div>
            <div className="text-gray-600 font-medium">Occupancy Rate</div>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-3xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
            <div className="text-3xl font-black text-black mb-3">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;