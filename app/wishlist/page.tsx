
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      title: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20sleek%20modern%20design%2C%20matte%20black%20finish%2C%20soft%20padding%2C%20studio%20quality%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimal%20aesthetic%2C%20high-end%20audio%20equipment&width=400&height=400&seq=1&orientation=squarish',
      category: 'Electronics',
      inStock: true
    },
    {
      id: '3',
      title: 'Designer Backpack',
      price: 149,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Designer%20leather%20backpack%20with%20modern%20style%2C%20premium%20quality%20materials%2C%20elegant%20brown%20color%2C%20professional%20craftsmanship%2C%20clean%20white%20background%2C%20luxury%20accessories%2C%20sophisticated%20design%2C%20high-end%20fashion&width=400&height=400&seq=3&orientation=squarish',
      category: 'Fashion',
      inStock: true
    },
    {
      id: '5',
      title: 'Fitness Tracker',
      price: 199,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Modern%20fitness%20tracker%20with%20sleek%20design%2C%20health%20monitoring%20features%2C%20comfortable%20silicone%20band%2C%20digital%20display%2C%20sports%20technology%2C%20clean%20white%20background%2C%20wearable%20fitness%20device%2C%20active%20lifestyle&width=400&height=400&seq=10&orientation=squarish',
      category: 'Sports',
      inStock: false
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (id: string) => {
    console.log('Adding to cart:', id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              My Wishlist
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {wishlistItems.length} items saved for later
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                <i className="ri-heart-line text-4xl text-gray-400"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Start adding items you love to your wishlist
              </p>
              <Link href="/shop">
                <Button variant="primary" size="lg">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shopping-bag-line"></i>
                  </div>
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    {item.originalPrice && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                      </div>
                    )}

                    {!item.inStock && (
                      <div className="absolute top-3 right-3 bg-gray-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                        Out of Stock
                      </div>
                    )}

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                    >
                      <i className="ri-heart-fill"></i>
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                      {item.category}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/product/${item.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          <div className="w-4 h-4 flex items-center justify-center mr-2">
                            <i className="ri-eye-line"></i>
                          </div>
                          View Details
                        </Button>
                      </Link>
                      
                      <Button
                        variant="primary"
                        onClick={() => addToCart(item.id)}
                        disabled={!item.inStock}
                        className="flex-1"
                      >
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-shopping-cart-line"></i>
                        </div>
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {wishlistItems.length > 0 && (
            <div className="mt-12 text-center">
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-add-line"></i>
                  </div>
                  Add More Items
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
