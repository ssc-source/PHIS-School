import Link from 'next/link';
import { ShieldCheck, Award, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="badge-phis bg-blue-100 text-blue-800 mb-4">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>ABOUT OUR INSTITUTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              About Pragya Heritage International School
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Pragya Heritage International School (PHIS)</strong> is a premier CBSE-affiliated co-educational institution located in Purnia, Bihar. Established in <strong>2017</strong> (CBSE Affiliation No: <strong>{siteConfig.affiliationNo}</strong>, UDISE: <strong>{siteConfig.udiseCode}</strong>), we are dedicated to delivering world-class English-medium education while preserving timeless Indian cultural values.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Our spacious campus on Bypass Road, Basgama, Gulabbagh provides an inspiring, safe, and technologically advanced learning environment. With experienced faculty, smart digital classrooms, and a holistic focus on academics, athletics, and personality development, PHIS prepares learners to excel in higher education and life.
            </p>

            {/* 4 Key Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center">
                <h3 className="font-black text-blue-700 text-2xl sm:text-3xl">2017</h3>
                <p className="text-xs text-slate-600 font-bold mt-1">Established</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center">
                <h3 className="font-black text-blue-700 text-2xl sm:text-3xl">330963</h3>
                <p className="text-xs text-slate-600 font-bold mt-1">CBSE Affiliation</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center">
                <h3 className="font-black text-blue-700 text-2xl sm:text-3xl">100%</h3>
                <p className="text-xs text-slate-600 font-bold mt-1">English Medium</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center">
                <h3 className="font-black text-blue-700 text-2xl sm:text-3xl">Nur-X</h3>
                <p className="text-xs text-slate-600 font-bold mt-1">Classes Offered</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/about" className="btn-phis-primary py-3 px-6 text-xs sm:text-sm">
                <span>Read Principal's Message</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/facilities" className="btn-phis-outline py-3 px-6 text-xs sm:text-sm">
                <span>Explore Campus</span>
              </Link>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/about/school-campus.jpg"
                alt="Pragya Heritage International School Campus"
                className="w-full h-full object-cover max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              
              {/* Floating Review Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                  <span className="text-xs font-bold text-slate-800">Verified Parent Feedback</span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "Recommending you the best school in Purnia city with lots of activities and professional teachers."
                </p>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
