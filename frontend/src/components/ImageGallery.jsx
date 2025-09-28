import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { galleryImages } from '../mock';
import { Button } from './ui/button';

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
            <Camera className="h-4 w-4 mr-2" />
            Photo Gallery
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-black">
            Explore Our Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our premium accommodations and modern amenities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'border-2 border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback for broken images */}
              <div className="hidden w-full h-full bg-black text-white items-center justify-center">
                <Camera className="h-12 w-12" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-4 w-4 text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-black mb-2">500+</div>
            <div className="text-gray-600 font-medium">Photos</div>
          </div>
          <div>
            <div className="text-3xl font-black text-black mb-2">50+</div>
            <div className="text-gray-600 font-medium">Virtual Tours</div>
          </div>
          <div>
            <div className="text-3xl font-black text-black mb-2">20+</div>
            <div className="text-gray-600 font-medium">Properties</div>
          </div>
          <div>
            <div className="text-3xl font-black text-black mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Happy Residents</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-black text-black mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a virtual tour or visit our properties in person
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-2xl font-semibold">
                Book Virtual Tour
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-2xl font-semibold"
              >
                Visit Property
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full z-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <img 
              src={lightboxImage.url} 
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">{lightboxImage.title}</h3>
              <p className="text-gray-300">{lightboxImage.category}</p>
              <p className="text-gray-400 text-sm mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;