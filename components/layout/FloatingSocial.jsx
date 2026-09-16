'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingSocial() {
  const whatsappNumber = '917070595453'; // Format: country code + number (+91 7070595453)
  const whatsappMessage = 'Hello, I would like to know more about Pragya Heritage International School (PHIS), Purnia.';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramLink = 'https://www.instagram.com/_pragya_heritage_/';

  return (
    <aside aria-label="Social quick contact" className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pr-0 select-none">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-l-2xl shadow-2xl transition-all duration-300 hover:w-16 sm:hover:w-18 focus:outline-none"
        aria-label="Chat on WhatsApp (+91 7070595453)"
      >
        <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-950/95 backdrop-blur-md text-white text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:block border border-slate-800">
          Chat on WhatsApp
        </span>
        
        {/* Pulse effect on ring */}
        <span className="absolute inset-0 rounded-l-2xl bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
      </a>
      
      {/* Instagram Floating Button */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-pink-700 text-white rounded-l-2xl shadow-2xl transition-all duration-300 hover:w-16 sm:hover:w-18 focus:outline-none"
        aria-label="Follow on Instagram"
      >
        <svg className="w-6 sm:w-7 h-6 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-950/95 backdrop-blur-md text-white text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:block border border-slate-800">
          Follow on Instagram
        </span>
      </a>
    </aside>
  );
}
