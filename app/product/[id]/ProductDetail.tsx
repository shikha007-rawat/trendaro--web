'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const product = {
    id: productId,
    title: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 1247,
    category: 'Electronics',
    description: 'Experience premium sound quality with these wireless headphones featuring advanced noise cancellation, 30-hour battery life, and premium comfort design. Perfect for music lovers and professionals.',
    features: [
      'Advanced Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort design',
      'Quick charge: 15 minutes = 3 hours playback',
      'Wireless and wired connectivity',
      'Touch controls and voice assistant'
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz'
    },
    images: [
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20sleek%20modern%20design%2C%20matte%20black%20finish%2C%20soft%20padding%2C%20studio%20quality%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimal%20aesthetic%2C%20high-end%20audio%20equipment&width=600&height=600&seq=1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20side%20view%20showing%20padding%20and%20design%20details%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20detailed%20view%20of%20comfort%20features%2C%20high-end%20audio%20equipment&width=600&height=600&seq=14&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20in%20packaging%20box%2C%20unboxing%20experience%2C%20luxury%20packaging%20design%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20premium%20accessories%20included&width=600&height=600&seq=15&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20being%20worn%20by%20person%2C%20comfortable%20fit%20demonstration%2C%20lifestyle%20photography%2C%20professional%20usage%2C%20clean%20background%2C%20real-world%20application&width=600&height=600&seq=16&orientation=squarish'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Silver', 'Blue']
  };

  const relatedProducts = [
    {
      id: '2',
      title: 'Luxury Smart Watch',
      price: 599,
      originalPrice: 799,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20smart%20watch%20with%20premium%20metal%20band%2C%20elegant%20design%2C%20digital%20display%2C%20sophisticated%20technology%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20modern%20wearable%20tech%2C%20high-end%20finish&width=400&height=400&seq=2&orientation=squarish',
      category: 'Electronics',
      rating: 4.9,
      reviews: 856
    },
    {
      id: '8',
      title: 'Wireless Bluetooth Speaker',
      price: 159,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Wireless%20bluetooth%20speaker%20with%20premium%20sound%20quality%2C%20compact%20design%2C%20modern%20technology%2C%20portable%20audio%20device%2C%20sleek%20finish%2C%20clean%20white%20background%2C%20contemporary%20electronics%2C%20high-quality%20audio%20equipment&width=400&height=400&seq=13&orientation=squarish',
      category: 'Electronics',
      rating: 4.6,
      reviews: 891
    },
    {
      id: '5',
      title: 'Fitness Tracker',
      price: 199,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Modern%20fitness%20tracker%20with%20sleek%20design%2C%20health%20monitoring%20features%2C%20comfortable%20silicone%20band%2C%20digital%20display%2C%20sports%20technology%2C%20clean%20white%20background%2C%20wearable%20fitness%20device%2C%20active%20lifestyle&width=400&height=400&seq=10&orientation=squarish',
      category: 'Sports',
      rating: 4.5,
      reviews: 789
    }
  ];

  const handleAddToCart = () => {
    console.log('Added to cart:', { productId, quantity, selectedSize, selectedColor });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400">Home</a>
            <span>/</span>
            <a href="/shop" className="hover:text-purple-600 dark:hover:text-purple-400">Shop</a>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-purple-600'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {product.category}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 flex items-center justify-center">
                        <i className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400`}></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded-full text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-subtract-line"></i>
                      </div>
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 dark:border-gray-600">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-add-line"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shopping-cart-line"></i>
                  </div>
                  Add to Cart
                </Button>
                
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-400 transition-colors duration-200">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-heart-line text-gray-600 dark:text-gray-400"></i>
                  </div>
                </button>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 mr-3">
                      <i className="ri-check-line text-green-500"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">{key}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}