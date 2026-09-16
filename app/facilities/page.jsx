import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FacilitiesSection } from '@/components/homepage/FacilitiesSection';
import { Building, ShieldCheck, Bus, Award, Cpu, BookOpen } from 'lucide-react';
import { facilitiesList } from '@/config/siteData';

export const metadata = {
  title: "Campus Facilities & Infrastructure | Pragya Heritage International School",
  description: "Explore smart classrooms, science labs, computer labs, library, and sports complex at Pragya Heritage International School, Purnia.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            <span>MODERN INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Campus Facilities
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            A state-of-the-art campus on Bypass Road, Basgama, Gulabbagh, Purnia designed for student success.
          </p>
        </div>
      </section>

      {/* Facilities Showcase */}
      <FacilitiesSection />

      {/* Campus Safety & Transport Highlights */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 CCTV & Campus Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-perimeter video surveillance, gated security, fire safety systems, and strict visitor verification protocols.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-4">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GPS-Enabled Bus Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safe and punctual school bus transportation with speed governors and trained attendants covering all routes in Purnia.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Digital Audio-Visual Labs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern smart interactive panels, high-speed internet, and computer coding labs for hands-on 21st-century tech skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
