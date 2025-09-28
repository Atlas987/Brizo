import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { aboutUsContent, brandData } from '../mock';

const AboutSection = () => {
  const coreValues = [
    {
      letter: 'B',
      title: 'Better Living Experience',
      description: 'We go beyond basic stays — offering a lifestyle that feels safe, stylish, and stress-free.',
      icon: <Award className="h-8 w-8" />
    },
    {
      letter: 'R', 
      title: 'Reliability Always',
      description: 'From timely support to clean rooms, we ensure consistency across every location.',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      letter: 'I',
      title: 'Innovation in Hospitality', 
      description: 'Tech-enabled bookings, seamless check-ins, and smart living — powered by innovation.',
      icon: <Clock className="h-8 w-8" />
    },
    {
      letter: 'Z',
      title: 'Zero Hassle Living',
      description: 'No paperwork, no confusion, no compromise. Just peace of mind.',
      icon: <Users className="h-8 w-8" />
    },
    {
      letter: 'O',
      title: 'Outstanding Service',
      description: 'From our staff to our systems, we strive to deliver excellence every single day.',
      icon: <Award className="h-8 w-8" />
    }
  ];

  const achievements = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '100+', label: 'Properties Managed' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: brandData.textColor }}>
            About Brizo Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us Mumbai's most trusted PG and co-living brand
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: brandData.textColor }}>
              Redefining Modern Living
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {brandData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to transform the way young professionals and students experience accommodation in Mumbai, 
              Brizo Stay combines modern amenities with smart technology to create spaces that truly feel like home.
            </p>
            
            {/* Achievement Numbers */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold mb-1" style={{ color: brandData.brandColor }}>
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={brandData.brandImage}
              alt="Brizo Stay - Modern Living" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-2xl font-bold mb-1" style={{ color: brandData.brandColor }}>
                6500+
              </div>
              <div className="text-sm text-gray-600">Happy Residents</div>
            </div>
          </div>
        </div>

        {/* BRIZO Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ color: brandData.textColor }}>
              🌟 BRIZO – Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              Each letter of BRIZO represents our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-2xl text-white text-2xl font-bold shadow-lg"
                    style={{ backgroundColor: brandData.brandColor }}
                  >
                    {value.letter}
                  </div>
                  <div 
                    className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${brandData.brandColor}15`,
                      color: brandData.brandColor 
                    }}
                  >
                    {value.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3" style={{ color: brandData.textColor }}>
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-gray-100">
            <div 
              className="inline-flex p-3 rounded-xl mb-6"
              style={{ 
                backgroundColor: `${brandData.brandColor}15`,
                color: brandData.brandColor 
              }}
            >
              <Award className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold mb-4" style={{ color: brandData.textColor }}>
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To create exceptional living experiences that empower young professionals and students 
              to thrive in Mumbai by providing safe, smart, and community-driven accommodations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-gray-100">
            <div 
              className="inline-flex p-3 rounded-xl mb-6"
              style={{ 
                backgroundColor: `${brandData.brandColor}15`,
                color: brandData.brandColor 
              }}
            >
              <Users className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold mb-4" style={{ color: brandData.textColor }}>
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To become India's most loved co-living brand, setting new standards in hospitality, 
              technology integration, and community building across major metropolitan cities.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brandData.textColor }}>
              Ready to Be Part of the Brizo Family?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands who've made Brizo Stay their home. Experience the perfect blend of comfort, 
              community, and convenience in Mumbai's prime locations.
            </p>
            <button 
              className="px-8 py-4 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              style={{ backgroundColor: brandData.brandColor }}
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;