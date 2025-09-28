import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { brandData } from '../mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyInterest: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Brizo Stay! I'm interested in learning more about your PG accommodations.");
    window.open(`https://wa.me/91${brandData.supportWhatsapp}?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: brandData.supportNumber,
      action: () => window.open(`tel:+91${brandData.supportNumber}`)
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      details: brandData.supportWhatsapp,
      action: handleWhatsAppClick
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: brandData.supportEmail,
      action: () => window.open(`mailto:${brandData.supportEmail}`)
    }
  ];

  const offices = [
    {
      city: 'Mumbai Head Office',
      address: '123 Business Complex, BKC, Mumbai - 400051',
      timings: 'Mon - Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Kurla Office',
      address: '456 Commercial Hub, Kurla East, Mumbai - 400024',
      timings: 'Mon - Sat: 10:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: brandData.textColor }}>
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your perfect stay? Our team is here to help you every step of the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6" style={{ color: brandData.textColor }}>
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-green-500 rounded-xl"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-green-500 rounded-xl"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-green-500 rounded-xl"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Location
                    </label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 focus:border-green-500 rounded-xl px-3 py-2"
                    >
                      <option value="">Select Location</option>
                      <option value="kurla">Kurla</option>
                      <option value="ghatkopar">Ghatkopar</option>
                      <option value="vikhroli">Vikhroli</option>
                      <option value="chembur">Chembur</option>
                      <option value="powai">Powai</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-gray-200 focus:border-green-500 rounded-xl resize-none"
                    placeholder="Tell us about your requirements, preferred location, budget, etc."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-white font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl"
                  style={{ backgroundColor: brandData.brandColor }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: brandData.textColor }}>
                Quick Contact
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                    onClick={method.action}
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ 
                          backgroundColor: `${brandData.brandColor}15`,
                          color: brandData.brandColor 
                        }}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{ color: brandData.textColor }}>
                          {method.title}
                        </h4>
                        <p className="text-gray-600">{method.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: brandData.textColor }}>
                Our Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6 border border-gray-100">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg" style={{ color: brandData.textColor }}>
                        {office.city}
                      </h4>
                      <div className="flex items-start space-x-2 text-gray-600">
                        <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{office.timings}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 bg-red-50 border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Support</h4>
              <p className="text-red-700 text-sm mb-3">
                For urgent issues or emergencies, contact our 24/7 helpline
              </p>
              <Button 
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => window.open(`tel:+91${brandData.supportNumber}`)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Emergency Line
              </Button>
            </Card>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;