
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Food & Beverage'];

  const products = [
    // Electronics
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
      id: '11',
      title: 'Gaming Mechanical Keyboard',
      price: 129,
      originalPrice: 159,
      image: 'https://readdy.ai/api/search-image?query=Gaming%20mechanical%20keyboard%20with%20RGB%20lighting%2C%20premium%20key%20switches%2C%20ergonomic%20design%2C%20professional%20gaming%20equipment%2C%20clean%20white%20background%2C%20high-quality%20build%2C%20modern%20technology&width=400&height=400&seq=16&orientation=squarish',
      category: 'Electronics',
      rating: 4.7,
      reviews: 634
    },
    {
      id: '12',
      title: 'Wireless Gaming Mouse',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Wireless%20gaming%20mouse%20with%20ergonomic%20design%2C%20high%20precision%20sensor%2C%20RGB%20lighting%2C%20professional%20gaming%20peripheral%2C%20clean%20white%20background%2C%20modern%20technology%2C%20premium%20quality&width=400&height=400&seq=17&orientation=squarish',
      category: 'Electronics',
      rating: 4.5,
      reviews: 423
    },
    {
      id: '13',
      title: '4K Webcam',
      price: 199,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=4K%20webcam%20with%20high%20definition%20video%20quality%2C%20professional%20streaming%20equipment%2C%20modern%20design%2C%20clean%20white%20background%2C%20video%20conferencing%20technology%2C%20premium%20build%20quality&width=400&height=400&seq=18&orientation=squarish',
      category: 'Electronics',
      rating: 4.4,
      reviews: 312
    },
    {
      id: '14',
      title: 'USB-C Hub',
      price: 49,
      originalPrice: 69,
      image: 'https://readdy.ai/api/search-image?query=USB-C%20hub%20with%20multiple%20ports%2C%20modern%20connectivity%20solution%2C%20sleek%20aluminum%20design%2C%20professional%20tech%20accessory%2C%20clean%20white%20background%2C%20premium%20build%20quality&width=400&height=400&seq=19&orientation=squarish',
      category: 'Electronics',
      rating: 4.3,
      reviews: 567
    },
    {
      id: '15',
      title: 'Noise Cancelling Earbuds',
      price: 189,
      originalPrice: 229,
      image: 'https://readdy.ai/api/search-image?query=Noise%20cancelling%20earbuds%20with%20premium%20sound%20quality%2C%20wireless%20design%2C%20charging%20case%2C%20modern%20audio%20technology%2C%20clean%20white%20background%2C%20high-end%20audio%20equipment&width=400&height=400&seq=20&orientation=squarish',
      category: 'Electronics',
      rating: 4.6,
      reviews: 789
    },
    
    // Fashion
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
      id: '7',
      title: 'Vintage Sunglasses',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Vintage%20sunglasses%20with%20classic%20design%2C%20premium%20UV%20protection%2C%20stylish%20frames%2C%20retro%20fashion%20accessory%2C%20sophisticated%20eyewear%2C%20clean%20white%20background%2C%20timeless%20style%2C%20quality%20craftsmanship&width=400&height=400&seq=12&orientation=squarish',
      category: 'Fashion',
      rating: 4.3,
      reviews: 567
    },
    {
      id: '9',
      title: 'Cotton T-Shirt',
      price: 29,
      originalPrice: 39,
      image: 'https://readdy.ai/api/search-image?query=Premium%20cotton%20t-shirt%20with%20comfortable%20fit%2C%20soft%20fabric%2C%20classic%20design%2C%20casual%20wear%2C%20modern%20fashion%2C%20clean%20white%20background%2C%20high-quality%20apparel%2C%20everyday%20clothing&width=400&height=400&seq=14&orientation=squarish',
      category: 'Fashion',
      rating: 4.5,
      reviews: 234
    },
    {
      id: '10',
      title: 'Graphic T-Shirt',
      price: 35,
      originalPrice: 45,
      image: 'https://readdy.ai/api/search-image?query=Trendy%20graphic%20t-shirt%20with%20artistic%20design%2C%20comfortable%20cotton%20fabric%2C%20stylish%20print%2C%20modern%20streetwear%2C%20clean%20white%20background%2C%20youth%20fashion%2C%20creative%20apparel&width=400&height=400&seq=15&orientation=squarish',
      category: 'Fashion',
      rating: 4.4,
      reviews: 189
    },
    {
      id: '16',
      title: 'Denim Jacket',
      price: 89,
      originalPrice: 119,
      image: 'https://readdy.ai/api/search-image?query=Classic%20denim%20jacket%20with%20vintage%20style%2C%20premium%20quality%20fabric%2C%20comfortable%20fit%2C%20timeless%20fashion%20piece%2C%20clean%20white%20background%2C%20casual%20wear%2C%20modern%20streetwear&width=400&height=400&seq=21&orientation=squarish',
      category: 'Fashion',
      rating: 4.6,
      reviews: 445
    },
    {
      id: '17',
      title: 'Leather Wallet',
      price: 59,
      originalPrice: 79,
      image: 'https://readdy.ai/api/search-image?query=Premium%20leather%20wallet%20with%20elegant%20design%2C%20quality%20craftsmanship%2C%20multiple%20card%20slots%2C%20sophisticated%20accessory%2C%20clean%20white%20background%2C%20luxury%20men%20accessories%2C%20timeless%20style&width=400&height=400&seq=22&orientation=squarish',
      category: 'Fashion',
      rating: 4.5,
      reviews: 678
    },
    {
      id: '18',
      title: 'Casual Sneakers',
      price: 129,
      originalPrice: 159,
      image: 'https://readdy.ai/api/search-image?query=Casual%20sneakers%20with%20modern%20design%2C%20comfortable%20sole%2C%20premium%20materials%2C%20stylish%20footwear%2C%20clean%20white%20background%2C%20contemporary%20fashion%2C%20athletic%20style&width=400&height=400&seq=23&orientation=squarish',
      category: 'Fashion',
      rating: 4.7,
      reviews: 892
    },
    {
      id: '19',
      title: 'Designer Hoodie',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Designer%20hoodie%20with%20premium%20fabric%2C%20comfortable%20fit%2C%20modern%20style%2C%20quality%20construction%2C%20clean%20white%20background%2C%20casual%20wear%2C%20contemporary%20fashion&width=400&height=400&seq=24&orientation=squarish',
      category: 'Fashion',
      rating: 4.4,
      reviews: 356
    },
    {
      id: '20',
      title: 'Silk Scarf',
      price: 45,
      originalPrice: 65,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20silk%20scarf%20with%20beautiful%20patterns%2C%20premium%20quality%20fabric%2C%20luxury%20accessory%2C%20sophisticated%20design%2C%20clean%20white%20background%2C%20timeless%20fashion%20piece%2C%20refined%20style&width=400&height=400&seq=25&orientation=squarish',
      category: 'Fashion',
      rating: 4.3,
      reviews: 234
    },
    
    // Home & Garden
    {
      id: '6',
      title: 'Minimalist Table Lamp',
      price: 89,
      originalPrice: 119,
      image: 'https://readdy.ai/api/search-image?query=Minimalist%20table%20lamp%20with%20modern%20design%2C%20warm%20LED%20lighting%2C%20sleek%20metal%20base%2C%20contemporary%20home%20decor%2C%20elegant%20lighting%20fixture%2C%20clean%20white%20background%2C%20sophisticated%20interior%20design%20accessory&width=400&height=400&seq=11&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.4,
      reviews: 345
    },
    {
      id: '21',
      title: 'Indoor Plant Pot',
      price: 35,
      originalPrice: 49,
      image: 'https://readdy.ai/api/search-image?query=Modern%20ceramic%20plant%20pot%20with%20elegant%20design%2C%20premium%20quality%20material%2C%20perfect%20for%20indoor%20plants%2C%20home%20decor%20accessory%2C%20clean%20white%20background%2C%20contemporary%20style&width=400&height=400&seq=26&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.5,
      reviews: 567
    },
    {
      id: '22',
      title: 'Decorative Wall Mirror',
      price: 149,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Decorative%20wall%20mirror%20with%20ornate%20frame%2C%20premium%20quality%20glass%2C%20elegant%20home%20decor%20piece%2C%20sophisticated%20design%2C%20clean%20white%20background%2C%20luxury%20interior%20accessory&width=400&height=400&seq=27&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.6,
      reviews: 423
    },
    {
      id: '23',
      title: 'Cozy Throw Blanket',
      price: 59,
      originalPrice: 79,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20throw%20blanket%20with%20soft%20texture%2C%20warm%20comfortable%20fabric%2C%20home%20comfort%20accessory%2C%20neutral%20colors%2C%20clean%20white%20background%2C%20premium%20quality%20material&width=400&height=400&seq=28&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.7,
      reviews: 678
    },
    {
      id: '24',
      title: 'Wooden Coffee Table',
      price: 299,
      originalPrice: 399,
      image: 'https://readdy.ai/api/search-image?query=Wooden%20coffee%20table%20with%20modern%20design%2C%20natural%20wood%20finish%2C%20contemporary%20furniture%20piece%2C%20home%20decor%2C%20clean%20white%20background%2C%20quality%20craftsmanship&width=400&height=400&seq=29&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.8,
      reviews: 234
    },
    {
      id: '25',
      title: 'Aromatherapy Diffuser',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Aromatherapy%20diffuser%20with%20modern%20design%2C%20essential%20oil%20wellness%20product%2C%20home%20relaxation%20accessory%2C%20clean%20white%20background%2C%20premium%20quality%2C%20peaceful%20ambiance&width=400&height=400&seq=30&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.5,
      reviews: 445
    },
    {
      id: '26',
      title: 'Kitchen Knife Set',
      price: 189,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Professional%20kitchen%20knife%20set%20with%20premium%20steel%20blades%2C%20wooden%20block%20holder%2C%20culinary%20tools%2C%20clean%20white%20background%2C%20high-quality%20kitchenware&width=400&height=400&seq=31&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.6,
      reviews: 567
    },
    {
      id: '27',
      title: 'Decorative Cushions',
      price: 39,
      originalPrice: 59,
      image: 'https://readdy.ai/api/search-image?query=Decorative%20cushions%20with%20elegant%20patterns%2C%20premium%20fabric%2C%20home%20comfort%20accessories%2C%20sophisticated%20design%2C%20clean%20white%20background%2C%20interior%20decor%20elements&width=400&height=400&seq=32&orientation=squarish',
      category: 'Home & Garden',
      rating: 4.4,
      reviews: 356
    },
    
    // Sports
    {
      id: '5',
      title: 'Fitness Tracker',
      price: 199,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Modern%20fitness%20tracker%20with%20sleek%20design%2C%20health%20monitoring%20features%2C%20comfortable%20silicone%20band%2C%20digital%20display%2C%20sports%20technology%2C%20clean%20white%20background%2C%20wearable%20fitness%20device%2C%20active%20lifestyle&width=400&height=400&seq=10&orientation=squarish',
      category: 'Sports',
      rating: 4.5,
      reviews: 789
    },
    {
      id: '28',
      title: 'Yoga Mat',
      price: 49,
      originalPrice: 69,
      image: 'https://readdy.ai/api/search-image?query=Premium%20yoga%20mat%20with%20non-slip%20surface%2C%20comfortable%20thickness%2C%20exercise%20equipment%2C%20fitness%20accessory%2C%20clean%20white%20background%2C%20high-quality%20material&width=400&height=400&seq=33&orientation=squarish',
      category: 'Sports',
      rating: 4.6,
      reviews: 678
    },
    {
      id: '29',
      title: 'Dumbbell Set',
      price: 159,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Adjustable%20dumbbell%20set%20with%20premium%20weights%2C%20home%20gym%20equipment%2C%20strength%20training%20tools%2C%20fitness%20accessories%2C%20clean%20white%20background%2C%20quality%20construction&width=400&height=400&seq=34&orientation=squarish',
      category: 'Sports',
      rating: 4.7,
      reviews: 445
    },
    {
      id: '30',
      title: 'Running Shoes',
      price: 139,
      originalPrice: 179,
      image: 'https://readdy.ai/api/search-image?query=Professional%20running%20shoes%20with%20comfortable%20sole%2C%20athletic%20footwear%2C%20sports%20equipment%2C%20premium%20materials%2C%20clean%20white%20background%2C%20modern%20design&width=400&height=400&seq=35&orientation=squarish',
      category: 'Sports',
      rating: 4.8,
      reviews: 892
    },
    {
      id: '31',
      title: 'Water Bottle',
      price: 29,
      originalPrice: 39,
      image: 'https://readdy.ai/api/search-image?query=Stainless%20steel%20water%20bottle%20with%20modern%20design%2C%20sports%20hydration%20accessory%2C%20premium%20quality%2C%20clean%20white%20background%2C%20fitness%20equipment&width=400&height=400&seq=36&orientation=squarish',
      category: 'Sports',
      rating: 4.4,
      reviews: 567
    },
    {
      id: '32',
      title: 'Resistance Bands',
      price: 25,
      originalPrice: 35,
      image: 'https://readdy.ai/api/search-image?query=Resistance%20bands%20set%20with%20different%20strengths%2C%20home%20workout%20equipment%2C%20fitness%20accessories%2C%20portable%20exercise%20tools%2C%20clean%20white%20background%2C%20quality%20material&width=400&height=400&seq=37&orientation=squarish',
      category: 'Sports',
      rating: 4.5,
      reviews: 423
    },
    {
      id: '33',
      title: 'Sports Backpack',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Sports%20backpack%20with%20multiple%20compartments%2C%20athletic%20gear%20storage%2C%20durable%20material%2C%20modern%20design%2C%20clean%20white%20background%2C%20fitness%20accessory&width=400&height=400&seq=38&orientation=squarish',
      category: 'Sports',
      rating: 4.3,
      reviews: 356
    },
    {
      id: '34',
      title: 'Exercise Ball',
      price: 35,
      originalPrice: 49,
      image: 'https://readdy.ai/api/search-image?query=Exercise%20ball%20for%20fitness%20training%2C%20home%20gym%20equipment%2C%20stability%20ball%2C%20workout%20accessory%2C%20clean%20white%20background%2C%20premium%20quality%20material&width=400&height=400&seq=39&orientation=squarish',
      category: 'Sports',
      rating: 4.4,
      reviews: 234
    },
    
    // Food & Beverage
    {
      id: '4',
      title: 'Organic Coffee Beans',
      price: 24,
      originalPrice: 32,
      image: 'https://readdy.ai/api/search-image?query=Premium%20organic%20coffee%20beans%20in%20elegant%20packaging%2C%20rich%20brown%20coffee%20beans%2C%20sustainable%20farming%2C%20artisanal%20quality%2C%20clean%20white%20background%2C%20gourmet%20coffee%20product%2C%20natural%20organic%20ingredients%2C%20premium%20food%20packaging&width=400&height=400&seq=4&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.6,
      reviews: 432
    },
    {
      id: '35',
      title: 'Green Tea Set',
      price: 45,
      originalPrice: 65,
      image: 'https://readdy.ai/api/search-image?query=Premium%20green%20tea%20set%20with%20elegant%20packaging%2C%20organic%20tea%20leaves%2C%20health%20beverage%2C%20traditional%20quality%2C%20clean%20white%20background%2C%20wellness%20product&width=400&height=400&seq=40&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.5,
      reviews: 567
    },
    {
      id: '36',
      title: 'Artisan Honey',
      price: 29,
      originalPrice: 39,
      image: 'https://readdy.ai/api/search-image?query=Artisan%20honey%20in%20glass%20jar%2C%20natural%20golden%20honey%2C%20premium%20quality%2C%20organic%20product%2C%20clean%20white%20background%2C%20gourmet%20food%20item&width=400&height=400&seq=41&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.7,
      reviews: 423
    },
    {
      id: '37',
      title: 'Protein Powder',
      price: 59,
      originalPrice: 79,
      image: 'https://readdy.ai/api/search-image?query=Premium%20protein%20powder%20for%20fitness%20nutrition%2C%20health%20supplement%2C%20modern%20packaging%2C%20clean%20white%20background%2C%20workout%20nutrition%20product&width=400&height=400&seq=42&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.4,
      reviews: 678
    },
    {
      id: '38',
      title: 'Gourmet Chocolate',
      price: 35,
      originalPrice: 49,
      image: 'https://readdy.ai/api/search-image?query=Gourmet%20chocolate%20with%20premium%20packaging%2C%20luxury%20confection%2C%20artisan%20quality%2C%20elegant%20design%2C%20clean%20white%20background%2C%20high-end%20food%20product&width=400&height=400&seq=43&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.6,
      reviews: 445
    },
    {
      id: '39',
      title: 'Herbal Tea Collection',
      price: 39,
      originalPrice: 55,
      image: 'https://readdy.ai/api/search-image?query=Herbal%20tea%20collection%20with%20various%20flavors%2C%20wellness%20beverages%2C%20natural%20ingredients%2C%20premium%20packaging%2C%20clean%20white%20background%2C%20health%20products&width=400&height=400&seq=44&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.5,
      reviews: 356
    },
    {
      id: '40',
      title: 'Olive Oil Set',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20olive%20oil%20set%20with%20different%20varieties%2C%20gourmet%20cooking%20ingredients%2C%20elegant%20bottles%2C%20culinary%20products%2C%20clean%20white%20background%2C%20high-quality%20food&width=400&height=400&seq=45&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.7,
      reviews: 234
    },
    {
      id: '41',
      title: 'Spice Collection',
      price: 49,
      originalPrice: 69,
      image: 'https://readdy.ai/api/search-image?query=Gourmet%20spice%20collection%20with%20various%20seasonings%2C%20culinary%20ingredients%2C%20premium%20packaging%2C%20cooking%20essentials%2C%20clean%20white%20background%2C%20quality%20food%20products&width=400&height=400&seq=46&orientation=squarish',
      category: 'Food & Beverage',
      rating: 4.4,
      reviews: 567
    }
  ];

  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const titleMatch = product.title.toLowerCase().includes(searchLower);
      const categoryMatch = product.category.toLowerCase().includes(searchLower);
      if (!titleMatch && !categoryMatch) return false;
    }
    
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }
    
    rangeWithDots.push(...range);
    
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }
    
    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop All Products'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {searchQuery ? `Found ${filteredProducts.length} products` : 'Discover our complete collection of premium products'}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">$0</span>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], parseInt(e.target.value)]);
                        setCurrentPage(1);
                      }}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">$1000+</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Up to ${priceRange[1]}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 pr-8 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                </p>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-purple-100 dark:bg-purple-900 rounded-md hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-grid-line text-purple-600 dark:text-purple-400"></i>
                    </div>
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-list-check text-gray-600 dark:text-gray-400"></i>
                    </div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <i className="ri-shopping-bag-line text-4xl text-gray-400"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                        currentPage === 1
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-left-line"></i>
                      </div>
                    </button>

                    {getVisiblePages().map((page, index) => (
                      page === '...' ? (
                        <span key={index} className="px-2 py-2 text-gray-400">...</span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                            page === currentPage
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                        currentPage === totalPages
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
