
'use client';

import { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Premium Electronics',
      subtitle: 'Latest Tech at Amazing Prices',
      description: 'Discover cutting-edge electronics with unbeatable deals',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20showcase%20with%20smartphones%2C%20laptops%2C%20headphones%20arranged%20elegantly%2C%20purple%20and%20blue%20gradient%20background%2C%20futuristic%20lighting%2C%20sleek%20product%20display%2C%20contemporary%20electronics%2C%20high-end%20technology%2C%20premium%20quality%20devices&width=1920&height=1080&seq=hero1&orientation=landscape',
      cta: 'Shop Electronics',
      link: '/shop'
    },
    {
      id: 2,
      title: 'Fashion Forward',
      subtitle: 'Style That Defines You',
      description: 'Trendy fashion pieces for every occasion',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20lifestyle%20with%20stylish%20clothing%2C%20modern%20wardrobe%2C%20elegant%20accessories%2C%20purple%20and%20pink%20gradient%20background%2C%20sophisticated%20style%2C%20contemporary%20fashion%2C%20trendy%20apparel%2C%20luxury%20fashion%20photography%2C%20premium%20lifestyle&width=1920&height=1080&seq=hero2&orientation=landscape',
      cta: 'Explore Fashion',
      link: '/shop'
    },
    {
      id: 3,
      title: 'Home & Living',
      subtitle: 'Transform Your Space',
      description: 'Beautiful home decor and furniture collections',
      image: 'https://readdy.ai/api/search-image?query=Modern%20home%20interior%20with%20elegant%20furniture%2C%20beautiful%20decor%20items%2C%20plants%2C%20cozy%20living%20space%2C%20purple%20and%20blue%20gradient%20background%2C%20contemporary%20home%20design%2C%20stylish%20furniture%2C%20comfortable%20lifestyle%2C%20premium%20home%20accessories&width=1920&height=1080&seq=hero3&orientation=landscape',
      cta: 'Shop Home',
      link: '/shop'
    },
    {
      id: 4,
      title: 'Sports & Fitness',
      subtitle: 'Achieve Your Goals',
      description: 'Professional sports equipment and fitness gear',
      image: 'https://readdy.ai/api/search-image?query=Sports%20and%20fitness%20equipment%20with%20modern%20gym%20gear%2C%20athletic%20accessories%2C%20workout%20equipment%2C%20purple%20and%20blue%20gradient%20background%2C%20active%20lifestyle%2C%20professional%20sports%20gear%2C%20fitness%20motivation%2C%20healthy%20living%2C%20dynamic%20energy&width=1920&height=1080&seq=hero4&orientation=landscape',
      cta: 'Shop Sports',
      link: '/shop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-105'
          }`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white w-full">
              <h2 className="text-sm sm:text-base md:text-lg font-medium text-rose-300 mb-2 animate-fadeInUp">
                {slide.subtitle}
              </h2>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 animate-fadeInUp animation-delay-200 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-200 animate-fadeInUp animation-delay-400">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-fadeInUp animation-delay-600">
                <Link href={slide.link}>
                  <Button variant="primary" size="sm" className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-lg text-sm px-4 py-2 w-full sm:w-auto">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-shopping-bag-line"></i>
                    </div>
                    {slide.cta}
                  </Button>
                </Link>
                
                <Button variant="outline" size="sm" className="border-white/60 text-white hover:bg-white/10 hover:border-white text-sm px-4 py-2 w-full sm:w-auto">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-heart-line"></i>
                  </div>
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <i className="ri-arrow-left-line text-white text-sm sm:text-base"></i>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <i className="ri-arrow-right-line text-white text-sm sm:text-base"></i>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-rose-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-xs font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
