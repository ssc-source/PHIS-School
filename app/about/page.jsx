import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/homepage/AboutSection';
import { WhyChoosePHIS } from '@/components/homepage/WhyChoosePHIS';
import { ShieldCheck, Target, Award } from 'lucide-react';

export const metadata = {
  title: "About Us | Pragya Heritage International School, Purnia",
  description: "Learn about Pragya Heritage International School (PHIS), established in 2017 in Purnia, Bihar, affiliated with CBSE (Affiliation No: 330963).",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Logo Showcase */}
          <div className="w-24 h-24 bg-white rounded-3xl p-2 mx-auto mb-6 shadow-xl border-2 border-amber-400">
            <img
              src="/PHIS/logo.png"
              alt="PHIS Official Crest"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>ESTABLISHED 2017</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            About Pragya Heritage
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Nurturing academic excellence, moral values, and global outlook in Purnia, Bihar.
          </p>
        </div>
      </section>

      {/* About Main Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <section id="vision-mission" className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be a premier institution in Eastern India that empowers every child with knowledge, ethical leadership, critical thinking, and digital competence while staying deeply anchored in Indian cultural heritage.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To deliver comprehensive CBSE education from Nursery to Secondary levels through student-centered pedagogical practices, robust sports & arts programs, modern laboratories, and an inspiring learning ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="section-padding bg-white border-t border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-blue-50/70 rounded-3xl p-8 sm:p-12 border border-blue-100">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">LEADERSHIP MESSAGE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">From the Principal's Desk</h2>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                "At Pragya Heritage International School, education extends far beyond textbooks. We believe that true schooling inspires young minds to question, explore, innovate, and care for society."
              </p>
              <p>
                "Since our inception in 2017, our dedicated faculty and staff have worked tirelessly to create a joyful, safe, and academically rigorous environment in Purnia. With CBSE affiliation (No: 330963), we ensure that every student receives modern conceptual instruction alongside cultural grounding."
              </p>
              <p className="font-bold text-slate-900 pt-2">
                — Principal, Pragya Heritage International School, Purnia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PHIS */}
      <WhyChoosePHIS />

      <Footer />
    </main>
  );
}
