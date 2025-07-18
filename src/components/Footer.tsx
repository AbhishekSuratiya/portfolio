import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Abhishek Suratiya
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Lead Software Developer specializing in React Native & Next.js. Let's create something amazing together!
          </p>
          
          <div className="flex justify-center items-center gap-2 text-gray-400 mb-8">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and passion</span>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Abhishek Suratiya. Crafted with passion.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;