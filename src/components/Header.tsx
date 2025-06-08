import React, { useState } from 'react';
import { Menu, X, LockKeyhole } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LandTrust™</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#audience" className="text-gray-600 hover:text-blue-600 transition-colors">For You</a>
            <a href="#impact" className="text-gray-600 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>How It Works</a>
              <a href="#audience" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>For You</a>
              <a href="#impact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Impact</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center" onClick={toggleMenu}>
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;