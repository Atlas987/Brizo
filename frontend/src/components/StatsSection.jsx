import React from 'react';
import { stats } from '../mock';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands Across Mumbai
          </h2>
          <p className="text-xl text-gray-600">
            Join our growing community of satisfied residents
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <img 
                    src={stat.imgUrl} 
                    alt={stat.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-green-600">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-900 mb-2">99.2%</div>
            <div className="text-gray-600">Occupancy Rate</div>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;