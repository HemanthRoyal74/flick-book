import React from 'react';
import { assets } from '../assets/assets';
import { Ticket } from 'lucide-react'; // Imports your exact ticket icon

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          {/* Replaced QuickShow logo image with your exact brand header layout */}
          <div className="flex items-center gap-2 mb-6">
            <Ticket className="w-8 h-8 text-red-600 fill-red-600 drop-shadow-[0_2px_8px_rgba(220,38,38,0.5)]" />
            <span className="text-2xl font-bold text-white tracking-wide">FLICKBOOK</span>
          </div>
          
          {/* Corrected movie ticket booking description */}
          <p className="text-sm leading-relaxed text-gray-400">
            FlickBook is a modern movie ticket booking platform designed to help you discover the latest releases, browse theater showtimes, select your favorite seats, and secure your tickets seamlessly.
          </p>
          
          <div className="flex items-center gap-2 mt-6">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>
        
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p className="hover:text-white transition-colors cursor-pointer">support@flickbook.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5 text-gray-400">
        Copyright {new Date().getFullYear()} © FlickBook. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
