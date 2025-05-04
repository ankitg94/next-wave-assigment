import { Heart, Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import HeaderSection from './Header';
import Footer from './Footer';
import axios from 'axios';
import ProductCard from './ProductCard';
import { fetchProducts } from '../Api/AllApi';

const filters = [
  'Ideal For',
  'Occasion',
  'Work',
  'Fabric',
  'Segment',
  'Suitable For',
  'Raw Materials',
  'Pattern',
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openSections, setOpenSections] = useState({});
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState('Recommended');

  useEffect(() => {
    
    fetchProducts(setProducts, setLoading);
  }, []);


  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div> 
        <HeaderSection/>
      <div className="flex items-center justify-between border-b pb-4 mb-6 text-sm text-gray-700 p-10">
          <div className="flex items-center gap-4">
            <span className="font-semibold">{products.length} ITEMS</span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-gray-400 hover:text-black flex items-center gap-1"
            >
              <span>{showFilters ? '← HIDE FILTER' : '→ SHOW FILTER'}</span>
            </button>
          </div>

          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="font-bold text-lg rounded px-2 py-1 bg-white"
            >
              <option value="Recommended">RECOMMENDED</option>
              <option value="PriceLowHigh">PRICE: LOW TO HIGH</option>
              <option value="PriceHighLow">PRICE: HIGH TO LOW</option>
              <option value="Newest">NEWEST</option>
            </select>
          </div>
        </div>

          <div className="flex px-6 py-8 min-h-screen bg-gray-50">
      
      <aside className="w-64 pr-6 hidden lg:block">
        <div className="bg-white p-4 rounded shadow text-sm space-y-4">
          <label className="inline-flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="font-medium">Customizable</span>
          </label>

          {filters.map((filter, i) => (
            <div key={i} className="border-t pt-2">
              <button
                onClick={() => toggleSection(filter)}
                className="flex justify-between w-full text-left font-semibold uppercase text-xs"
              >
                {filter}
                <span>{openSections[filter] ? '▲' : '▼'}</span>
              </button>
              {openSections[filter] && (
                <div className="mt-1 text-gray-600 text-sm">
                  <p className="py-1">All</p>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      
      <main className="flex-1">
        <h1 className="text-xl font-semibold mb-6">New Product</h1>
        {loading ? (
         <Loader/>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              
            ))}
          </div>
        )}
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductPage;
