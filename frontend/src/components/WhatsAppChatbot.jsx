import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { brandData } from '../mock';

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('greeting'); // greeting, name, phone, redirect
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step === 'greeting') {
      setStep('name');
    } else if (step === 'name' && formData.name.trim()) {
      setStep('phone');
    } else if (step === 'phone' && formData.phone.trim()) {
      setStep('redirect');
      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        redirectToWhatsApp();
      }, 1500);
    }
  };

  const redirectToWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Brizo Stay! I'm ${formData.name}. I'm interested in learning more about your PG accommodations. My phone number is ${formData.phone}.`
    );
    window.open(`https://wa.me/91${brandData.supportWhatsapp}?text=${message}`, '_blank');
    setIsOpen(false);
    // Reset form
    setFormData({ name: '', phone: '' });
    setStep('greeting');
  };

  const resetChat = () => {
    setFormData({ name: '', phone: '' });
    setStep('greeting');
  };

  const renderChatContent = () => {
    switch (step) {
      case 'greeting':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="text-gray-800 text-sm">
                👋 Hello! I'm here to help you find your perfect stay with Brizo Stay. 
                Let's get started!
              </p>
            </div>
            <Button 
              onClick={handleNext}
              className="w-full bg-black text-white hover:bg-gray-800 rounded-xl"
            >
              Let's Chat
            </Button>
          </div>
        );

      case 'name':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="text-gray-800 text-sm">
                Great! What's your name?
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10 rounded-xl border-2 border-gray-200 focus:border-black"
                  onKeyPress={(e) => e.key === 'Enter' && formData.name.trim() && handleNext()}
                />
              </div>
              <Button 
                onClick={handleNext}
                disabled={!formData.name.trim()}
                className="bg-black text-white hover:bg-gray-800 rounded-xl px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 'phone':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-2xl p-4">
              <p className="text-gray-800 text-sm">
                Nice to meet you, {formData.name}! 📱 What's your phone number?
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="pl-10 rounded-xl border-2 border-gray-200 focus:border-black"
                  onKeyPress={(e) => e.key === 'Enter' && formData.phone.trim() && handleNext()}
                />
              </div>
              <Button 
                onClick={handleNext}
                disabled={!formData.phone.trim()}
                className="bg-black text-white hover:bg-gray-800 rounded-xl px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 'redirect':
        return (
          <div className="space-y-4">
            <div className="bg-green-100 rounded-2xl p-4">
              <p className="text-green-800 text-sm">
                Perfect! Redirecting you to WhatsApp now... 🚀
              </p>
            </div>
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Brizo Stay Support</h4>
                <p className="text-xs text-gray-300">Typically replies instantly</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-gray-800 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            {renderChatContent()}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Powered by WhatsApp
              </p>
              <Button
                onClick={resetChat}
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500 hover:text-black"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-green-500 hover:bg-green-600 animate-pulse'
        } text-white`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;