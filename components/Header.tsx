
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:transform hover:scale-105 transition-transform duration-200">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-600 transition-all duration-300" style={{ fontFamily: 'Pacifico, serif' }}>
                Trendaro
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Premium Store</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full group">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm font-medium placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:shadow-md focus:shadow-lg"
                />
                <button 
                  type="submit"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-200"
                >
                  <i className="ri-search-line text-purple-500 hover:text-purple-600 transition-colors"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/shop" className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium group">
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/cart" className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium group">
              Cart
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2.5 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-purple-700 dark:text-purple-300"></i>
              </div>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 hover:from-yellow-200 hover:to-orange-200 dark:hover:from-yellow-800 dark:hover:to-orange-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? <i className="ri-sun-line text-yellow-600"></i> : <i className="ri-moon-line text-yellow-700"></i>}
              </div>
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-2.5 rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 hover:from-red-200 hover:to-pink-200 dark:hover:from-red-800 dark:hover:to-pink-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-heart-line text-red-600 dark:text-red-400"></i>
              </div>
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md animate-pulse">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2.5 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800 dark:hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shopping-cart-line text-purple-600 dark:text-purple-400"></i>
              </div>
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md animate-pulse">
                3
              </span>
            </Link>

            {/* Login/Signup */}
            <Link href="/login" className="p-2.5 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 hover:from-green-200 hover:to-emerald-200 dark:hover:from-green-800 dark:hover:to-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-user-line text-green-600 dark:text-green-400"></i>
              </div>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-gray-700 dark:text-gray-300`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 animate-fadeIn">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm font-medium placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
              />
              <button 
                type="submit"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                <i className="ri-search-line text-purple-500 hover:text-purple-600 transition-colors"></i>
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2">
                Shop
              </Link>
              <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2">
                Cart
              </Link>
              <Link href="/wishlist" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2">
                Wishlist
              </Link>
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2">
                Login / Signup
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
