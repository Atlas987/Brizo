import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import PropertiesSection from "./components/PropertiesSection";
import ImageGallery from "./components/ImageGallery";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppChatbot from "./components/WhatsAppChatbot";
import PropertyDetails from "./components/PropertyDetails";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <PropertiesSection />
        <ImageGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brizo" element={<PropertyDetails />} />
          <Route path="/sayba74" element={<PropertyDetails />} />
          <Route path="/peak" element={<PropertyDetails />} />
          <Route path="/vinayak58" element={<PropertyDetails />} />
          <Route path="/shivam74" element={<PropertyDetails />} />
          <Route path="/mass99" element={<PropertyDetails />} />
          <Route path="/:propId" element={<PropertyDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;