import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AcademicPrograms } from '@/components/homepage/AcademicPrograms';
import { BookOpen, Award, CheckCircle2, FileText } from 'lucide-react';

export const metadata = {
  title: "Academics & CBSE Curriculum | Pragya Heritage International School",
  description: "Explore the CBSE curriculum, pedagogical methodology, and academic wings at Pragya Heritage International School, Purnia.",
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>CBSE AFFILIATION: 330963</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Academic Excellence & Curriculum
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Comprehensive English-medium education from Nursery to Class X fostering inquiry, critical thinking, and character.
          </p>
        </div>
      </section>

      {/* Academic Wings */}
      <AcademicPrograms />

      {/* CBSE Curriculum Highlights */}
      <section id="curriculum" className="section-padding bg-white border-t border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">PEDAGOGICAL FRAMEWORK</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1 mb-3">CBSE Aligned Holistic Learning</h2>
            <p className="text-sm text-slate-600">
              Our educational model incorporates continuous assessment, experiential learning, and active learner participation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50/60 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Language Mastery & Communication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emphasis on English fluency, vocabulary building, Hindi literature, and Sanskrit basics through regular debates, recitations, and reading clubs.
              </p>
            </div>

            <div className="bg-blue-50/60 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Experiential Science & Mathematics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on science experiments, mathematics laboratories, mental arithmetic drills, and model making to build solid conceptual clarity.
              </p>
            </div>

            <div className="bg-blue-50/60 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Digital Literacy & Information Tech
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From early elementary computer awareness to middle and secondary school coding, algorithms, and cyber safety fundamentals.
              </p>
            </div>

            <div className="bg-blue-50/60 p-6 rounded-3xl border border-blue-100">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Moral Values & Cultural Pride
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Value-based moral education, yoga, physical fitness, environmental awareness, and celebrating India's rich cultural traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
