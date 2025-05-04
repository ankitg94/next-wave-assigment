import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full font-sans">

      <header className="flex justify-between items-center px-6 py-4 border-b md:px-8 lg:px-16">
        
        <div className="text-xl font-bold">🌀</div>

        
        <div className="text-2xl pl-16 font-bold"><span>Next Wave</span></div>


        <div className="flex items-center gap-4 text-gray-600 text-lg hidden md:flex">
          <Search className="w-5 h-5" />
          <Heart className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
          <User className="w-5 h-5 cursor-pointer hover:text-gray-400" onClick={() => navigate("/login")} />
          <span className="ml-2">ENG ⌄</span>
        </div>

        
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </header>

      
      <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 text-sm font-semibold text-gray-600">Shop</a>
        <a href="#" className="block py-2 text-sm font-semibold text-gray-600">Skills</a>
        <a href="#" className="block py-2 text-sm font-semibold text-gray-600">Stories</a>
        <a href="#" className="block py-2 text-sm font-semibold text-gray-600">About</a>
        <a href="#" className="block py-2 text-sm font-semibold text-gray-600">Contact Us</a>
      </nav>


      <nav className="hidden md:flex justify-center gap-10 text-sm font-semibold py-3 border-b uppercase tracking-wider">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>

      
      <section className="text-center py-16 px-4">
        <h1 className="text-3xl font-semibold mb-4 tracking-wide">DISCOVER OUR PRODUCTS</h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
    </div>
  );
};

export default HeaderSection;
