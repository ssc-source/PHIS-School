import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100 pt-16 pb-8 border-t border-blue-900">
      <div className="container-custom">
        {/* Accreditation & CBSE Logo Banner */}
        <div className="bg-blue-900/60 border border-blue-800 rounded-3xl p-6 mb-14 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Official CBSE Logo */}
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-lg border border-blue-200">
                <img
                  src="/PHIS/images/cbse-logo.png"
                  alt="CBSE - Central Board of Secondary Education Affiliated School Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  Central Board of Secondary Education (CBSE) Affiliated
                </h3>
                <p className="text-xs text-blue-300 mt-0.5">
                  Affiliation No: <strong>{siteConfig.affiliationNo}</strong> | School Code / UDISE: <strong>{siteConfig.udiseCode}</strong>
                </p>
                <p className="text-[11px] text-amber-300 font-medium">
                  Co-educational English Medium Institution • Nursery to Class X
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="btn-phis-gold text-xs py-2 px-4 shadow-sm"
              >
                <span>Find on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: School Info & Socials */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 border-2 border-amber-400 shadow-md flex-shrink-0">
                <img
                  src="/PHIS/logo-white.png"
                  alt="PHIS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-black text-white leading-tight">
                  Pragya Heritage
                </h3>
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  International School
                </p>
              </div>
            </div>

            <p className="text-xs text-blue-200 leading-relaxed mb-6">
              Pragya Heritage International School (PHIS) is a premier CBSE-affiliated institution in Purnia, Bihar, established in 2017. Committed to nurturing academic excellence, critical thinking, and Indian cultural values.
            </p>

            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900 hover:bg-blue-600 text-blue-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900 hover:bg-blue-600 text-blue-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              {/* Google Maps Location */}
              <a
                href={siteConfig.social.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900 hover:bg-blue-600 text-blue-200 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              {/* Justdial */}
              <a
                href={siteConfig.social.justdial}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900 hover:bg-amber-500 hover:text-blue-950 text-blue-200 flex items-center justify-center transition-colors text-xs font-black"
                aria-label="Justdial"
              >
                JD
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-blue-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-blue-200">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">› About PHIS</Link></li>
              <li><Link href="/admission" className="hover:text-amber-400 transition-colors">› Admission Procedure 2026-27</Link></li>
              <li><Link href="/fee-structure" className="hover:text-amber-400 transition-colors">› Fee Structure & Policy</Link></li>
              <li><Link href="/facilities" className="hover:text-amber-400 transition-colors">› Campus Facilities</Link></li>
              <li><Link href="/academics" className="hover:text-amber-400 transition-colors">› Academic Curriculum (Nursery - X)</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">› Photo Gallery & Events</Link></li>
              <li><Link href="/careers" className="hover:text-amber-400 transition-colors">› Careers & Faculty Openings</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">› Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Wings */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-blue-900">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-blue-200">
              <li>
                <span className="text-amber-400 font-bold block">Pre-Primary (Nur, KG-I, KG-II)</span>
                <span className="text-blue-300 text-[11px]">Foundational play-based discovery</span>
              </li>
              <li>
                <span className="text-amber-400 font-bold block">Primary (Class I to V)</span>
                <span className="text-blue-300 text-[11px]">Core conceptual understanding</span>
              </li>
              <li>
                <span className="text-amber-400 font-bold block">Middle School (Class VI to VIII)</span>
                <span className="text-blue-300 text-[11px]">Analytical & STEM inquiry</span>
              </li>
              <li>
                <span className="text-amber-400 font-bold block">Secondary (Class IX & X)</span>
                <span className="text-blue-300 text-[11px]">CBSE Board Exam Preparation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-blue-900">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs text-blue-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}<br/><span className="text-blue-300 text-[11px]">({siteConfig.contact.landmark})</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors font-semibold">
                  {siteConfig.contact.phone} / {siteConfig.contact.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:pragyaschool2017@gmail.com" className="hover:text-amber-300 font-semibold transition-colors">
                  pragyaschool2017@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Seemanchal Smartvyapaar Consultancy Credit */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>
            © {currentYear} Pragya Heritage International School. All rights reserved.
          </p>

          {/* FOOTER CREDIT */}
          <div className="flex items-center space-x-2">
            <span className="text-blue-200 text-xs">Powered by</span>
            <a
              href="https://seemanchalsmartvyapaar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold text-xs transition-colors underline decoration-amber-400/50 hover:decoration-amber-300"
            >
              Seemanchal Smartvyapaar Consultancy
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Reach Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
