
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import ImageSlider from '@/components/ui/ImageSlider';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      title: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20sleek%20modern%20design%2C%20matte%20black%20finish%2C%20soft%20padding%2C%20studio%20quality%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimal%20aesthetic%2C%20high-end%20audio%20equipment&width=400&height=400&seq=1&orientation=squarish',
      category: 'Electronics',
      rating: 4.8,
      reviews: 1247
    },
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
      id: '3',
      title: 'Designer Backpack',
      price: 149,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Designer%20leather%20backpack%20with%20modern%20style%2C%20premium%20quality%20materials%2C%20elegant%20brown%20color%2C%20professional%20craftsmanship%2C%20clean%20white%20background%2C%20luxury%20accessories%2C%20sophisticated%20design%2C%20high-end%20fashion&width=400&height=400&seq=3&orientation=squarish',
      category: 'Fashion',
      rating: 4.7,
      reviews: 623
    },
    {
      id: '4',
      title: 'Organic Coffee Beans',
      price: 24,
      originalPrice: 32,
      image: 'https://readdy.ai/api/search-image?query=Premium%20organic%20coffee%20beans%20in%20elegant%20packaging%2C%20rich%20brown%20coffee%20beans%2C%20sustainable%20farming%2C%20artisanal%20quality%2C%20clean%20white%20background%2C%20gourmet%20coffee%20product%2C%20natural%20organic%20ingredients%2C%20premium%20food%20packaging&width=400&height=400&seq=4&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.6,
      reviews: 432
    }
  ];

  const categories = [
    {
      name: 'Electronics',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20category%20with%20smartphones%2C%20laptops%2C%20headphones%2C%20clean%20tech%20setup%2C%20minimalist%20design%2C%20bright%20lighting%2C%20professional%20product%20display%2C%20contemporary%20technology%2C%20sleek%20devices%20arrangement&width=300&height=200&seq=5&orientation=landscape'
    },
    {
      name: 'Fashion',
      icon: 'ri-shirt-line',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20category%20with%20stylish%20clothing%2C%20elegant%20wardrobe%2C%20modern%20fashion%20items%2C%20trendy%20apparel%2C%20sophisticated%20style%2C%20clean%20fashion%20display%2C%20contemporary%20clothing%2C%20premium%20fashion%20products&width=300&height=200&seq=6&orientation=landscape'
    },
    {
      name: 'Home & Garden',
      icon: 'ri-home-line',
      image: 'https://readdy.ai/api/search-image?query=Home%20and%20garden%20category%20with%20beautiful%20home%20decor%2C%20plants%2C%20furniture%2C%20cozy%20interior%20design%2C%20modern%20home%20accessories%2C%20elegant%20living%20space%2C%20contemporary%20home%20styling%2C%20comfortable%20lifestyle&width=300&height=200&seq=7&orientation=landscape'
    },
    {
      name: 'Sports',
      icon: 'ri-basketball-line',
      image: 'https://readdy.ai/api/search-image?query=Sports%20category%20with%20athletic%20equipment%2C%20fitness%20gear%2C%20sports%20accessories%2C%20active%20lifestyle%2C%20modern%20sports%20equipment%2C%20dynamic%20sports%20setup%2C%20professional%20athletic%20gear%2C%20contemporary%20fitness%20products&width=300&height=200&seq=8&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main>
        {/* Hero Section with Image Slider */}
        <ImageSlider />

        {/* Categories Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Shop by Category
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Find exactly what you're looking for
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category) => (
                <Link key={category.name} href="/shop">
                  <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                      <div className="flex items-center text-white">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-2 sm:mr-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                          <i className={`${category.icon} text-sm sm:text-base md:text-lg`}></i>
                        </div>
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">{category.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Featured Products
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Handpicked items just for you
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/shop">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg px-6 sm:px-8">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Join Our Newsletter
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
                Get exclusive offers, new arrivals, and special discounts delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                />
                <Button variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-mail-line"></i>
                  </div>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
