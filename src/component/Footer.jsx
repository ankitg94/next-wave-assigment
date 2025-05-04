import React from 'react';
import {
  Instagram,
  Facebook,
  Globe,
  Linkedin,
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm px-8">
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 py-10 border-b border-gray-700">
        
        <div>
          <h3 className="font-semibold mb-2">BE THE FIRST TO KNOW</h3>
          <p className="mb-4 text-gray-400">Sign up for updates from mettà muse.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="px-4 py-2 text-black w-32 md:w-64"
            />
            <button className="bg-black text-gray-300 border-2 border-gray-700 rounded-md px-4 py-2 ml-2 font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">CONTACT US</h3>
          <p className="mb-1 text-gray-400">+44 221 123 5360</p>
          <p className="mb-4 text-gray-400">customercare@mettamuse.com</p>

          <h3 className="font-semibold mb-1">CURRENCY</h3>
          <div className="flex items-center gap-2">
            <span>🇺🇸 USD</span>
            <Globe className="w-4 h-4" />
          </div>
          <p className="text-gray-500 text-xs mt-1">
            Transactions will be completed in USD. Currency selections are for display only.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 py-10">
    
        <div>
          <h3 className="font-semibold mb-2">mëttä muse</h3>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold mb-2">QUICK LINKS</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">FOLLOW US</h3>
          <div className="flex space-x-4 mb-4 ">
            <div className='rounded rounded-s-full rounded-e-full border-white p-2 border-2'>

            <Instagram className="w-5 h-5 " />
            </div>
            <div className='rounded rounded-s-full rounded-e-full border-white p-2 border-2'>

            <FaLinkedinIn className="w-5 h-5" />
            </div>
          </div>
          <h3 className="font-semibold mb-2">mëttä muse ACCEPTS</h3>
          <div className="flex space-x-2">
            <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="GPay" className="h-6 rounded rounded-sm bg-white px-2" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="MasterCard" className="h-6 rounded rounded-sm bg-white px-2" />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6 rounded rounded-sm bg-white px-2" />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="h-6 rounded rounded-sm bg-white px-2" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="h-6 rounded rounded-sm bg-white px-2" />
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-600 text-xs py-4 border-t border-gray-700">
        © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
