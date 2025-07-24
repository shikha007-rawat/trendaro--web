'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Premium Wireless Headphones',
      price: 299,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20sleek%20modern%20design%2C%20matte%20black%20finish%2C%20soft%20padding%2C%20studio%20quality%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimal%20aesthetic%2C%20high-end%20audio%20equipment&width=300&height=300&seq=1&orientation=squarish',
      size: 'M',
      color: 'Black'
    },
    {
      id: '2',
      title: 'Luxury Smart Watch',
      price: 599,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20smart%20watch%20with%20premium%20metal%20band%2C%20elegant%20design%2C%20digital%20display%2C%20sophisticated%20technology%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20modern%20wearable%20tech%2C%20high-end%20finish&width=300&height=300&seq=2&orientation=squarish',
      size: 'L',
      color: 'Silver'
    },
    {
      id: '3',
      title: 'Designer Backpack',
      price: 149,
      quantity: 2,
      image: 'https://readdy.ai/api/search-image?query=Designer%20leather%20backpack%20with%20modern%20style%2C%20premium%20quality%20materials%2C%20elegant%20brown%20color%2C%20professional%20craftsmanship%2C%20clean%20white%20background%2C%20luxury%20accessories%2C%20sophisticated%20design%2C%20high-end%20fashion&width=300&height=300&seq=3&orientation=squarish',
      size: 'One Size',
      color: 'Brown'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setAppliedPromo({ code: 'SAVE20', discount: 20 });
    } else if (promoCode.toLowerCase() === 'welcome10') {
      setAppliedPromo({ code: 'WELCOME10', discount: 10 });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const discount = appliedPromo ? subtotal * (appliedPromo.discount / 100) : 0;
  const total = subtotal + shipping + tax - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full">
                <i className="ri-shopping-cart-line text-5xl text-gray-400"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link href="/shop">
                <Button variant="primary" size="lg">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-shopping-bag-line"></i>
                  </div>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {cartItems.length} items in your cart
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        ${item.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-subtract-line"></i>
                          </div>
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300 dark:border-gray-600">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-add-line"></i>
                          </div>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-delete-bin-line"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Button
                      variant="outline"
                      onClick={applyPromoCode}
                      className="whitespace-nowrap"
                    >
                      Apply
                    </Button>
                  </div>
                  {appliedPromo && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Promo code applied successfully!
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button variant="primary" size="lg" className="w-full">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-secure-payment-line"></i>
                      </div>
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <Link href="/shop">
                    <Button variant="outline" size="lg" className="w-full">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-arrow-left-line"></i>
                      </div>
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-truck-line"></i>
                  </div>
                  <span className="font-medium">Free Shipping</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enjoy free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}