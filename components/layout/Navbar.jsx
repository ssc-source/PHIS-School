'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { mainNavigation, siteConfig } from '@/config/siteData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveAccordion, setMobileActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Utility Bar */}
      <div className="bg-blue-950 text-blue-200 text-xs py-2 border-b border-blue-900">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
            <span className="hidden md:inline text-blue-800">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Gulabbagh, Purnia, Bihar</span>
            </span>
            <span className="hidden lg:inline text-blue-800">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CBSE Affiliation No: {siteConfig.affiliationNo}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden xl:inline text-xs text-amber-300 font-medium bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              ⭐ {siteConfig.rating.justdial}
            </span>
            {mainNavigation.utilityNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors text-blue-300 font-medium text-xs"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2.5' : 'py-3 border-b border-slate-100'}`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border-2 border-blue-600 bg-white">
              <img
                src="/PHIS/logo.png"
                alt="Pragya Heritage International School Logo"
                className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                Pragya Heritage
              </span>
              <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">
                International School • Est. 2017
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavigation.primaryNav.map((item) => {
              const hasDropdown = Boolean(item.children);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Menu Box */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-fade-in">
                      <div className="grid gap-1.5">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex flex-col"
                          >
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                              {subItem.label}
                            </span>
                            {subItem.desc && (
                              <span className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                {subItem.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission#enquiry"
              className="btn-phis-primary text-xs sm:text-sm py-2.5 px-5 shadow-lg shadow-blue-600/25"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out / Accordion Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[96px] bg-white border-b border-slate-200 shadow-2xl p-5 max-h-[85vh] overflow-y-auto z-50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {mainNavigation.primaryNav.map((item) => {
                const hasDropdown = Boolean(item.children);

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 font-bold text-slate-800 rounded-xl hover:bg-blue-50 text-sm"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isAccordionOpen = mobileActiveAccordion === item.label;

                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-none pb-1">
                    <button
                      onClick={() => setMobileActiveAccordion(isAccordionOpen ? null : item.label)}
                      className="w-full flex items-center justify-between p-3 font-bold text-slate-800 rounded-xl hover:bg-blue-50 text-sm"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isAccordionOpen ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
                    </button>

                    {isAccordionOpen && (
                      <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-blue-50/50 rounded-xl my-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-slate-700 hover:text-blue-700 font-semibold py-1.5 block"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
                {mainNavigation.utilityNav.map((u) => (
                  <Link
                    key={u.label}
                    href={u.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-700 hover:text-blue-700 font-bold p-2.5 bg-slate-100 rounded-xl text-center"
                  >
                    {u.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
