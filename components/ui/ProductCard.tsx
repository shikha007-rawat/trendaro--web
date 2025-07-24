
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-48 sm:h-56 md:h-64 object-cover object-top transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {originalPrice && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </div>
          )}

          <div className="absolute top-2 right-2">
            <button className="w-7 h-7 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-md">
              <i className="ri-heart-line text-rose-500 text-sm"></i>
            </button>
          </div>

          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xs px-3 py-1.5 shadow-lg"
            >
              {isAdding ? (
                <>
                  <div className="w-3 h-3 flex items-center justify-center mr-1">
                    <i className="ri-loader-4-line animate-spin"></i>
                  </div>
                  Adding...
                </>
              ) : (
                <>
                  <div className="w-3 h-3 flex items-center justify-center mr-1">
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <div className="text-xs sm:text-sm text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-semibold mb-1">
            {category}
          </div>
          
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
            {title}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 flex items-center justify-center">
                  <i className={`ri-star-${i < Math.floor(rating) ? 'fill' : 'line'} text-amber-400 text-xs`}></i>
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
              ({reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
