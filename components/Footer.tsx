
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              Trendaro
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your premium destination for quality products and exceptional shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200">
                <i className="ri-facebook-line text-purple-600 dark:text-purple-400"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200">
                <i className="ri-twitter-line text-purple-600 dark:text-purple-400"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200">
                <i className="ri-instagram-line text-purple-600 dark:text-purple-400"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Home & Garden
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                  Sports
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="text-gray-600 dark:text-gray-400 flex items-center">
                <span className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </span>
                info@trendaro.com
              </div>
              <div className="text-gray-600 dark:text-gray-400 flex items-center">
                <span className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </span>
                +1 (555) 123-4567
              </div>
              <div className="text-gray-600 dark:text-gray-400 flex items-center">
                <span className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </span>
                123 Commerce St, City, State 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Trendaro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
