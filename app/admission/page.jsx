import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EnquiryForm } from '@/components/admission/EnquiryForm';
import { FeeStructure } from '@/components/admission/FeeStructure';
import { Sparkles, Calendar, BookOpen, IndianRupee, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Admissions 2026-27 | Pragya Heritage International School, Purnia",
  description: "Admissions open for Nursery to Class X at Pragya Heritage International School, Purnia, Bihar (CBSE Affiliation: 330963).",
};

export default function AdmissionPage() {
  const steps = [
    {
      step: "1",
      title: "Collect Form",
      desc: "Download from website or collect directly from the school office counter on Bypass Road, Basgama."
    },
    {
      step: "2",
      title: "Submit Documents",
      desc: "Submit student birth certificate, previous school marksheets/transfer certificate, and passport photos."
    },
    {
      step: "3",
      title: "Interaction",
      desc: "Friendly student baseline interaction and parent meeting with our academic counselors."
    },
    {
      step: "4",
      title: "Confirmation",
      desc: "Fee payment and formal admission confirmation with issuance of admission number and syllabus book list."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SESSION 2026-2027</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Admissions Open 2026-27
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Join the Pragya Heritage family. Enrolling students from Nursery to Class X with holistic CBSE curriculum and modern facilities.
          </p>
        </div>
      </section>

      {/* Key Info Banner */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="bg-blue-50/80 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-blue-200">
              <div className="p-2">
                <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold text-base">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3>Admission Timeline</h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Forms Available:</strong> October 2026<br />
                  <strong>Last Date:</strong> November 2026<br />
                  <strong>Interaction Sessions:</strong> December 2026
                </p>
              </div>

              <div className="p-2 md:pl-6">
                <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold text-base">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                  <h3>Age Eligibility</h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Nursery:</strong> 3+ Years<br />
                  <strong>Class I:</strong> 6+ Years<br />
                  <strong>Class IX:</strong> 14+ Years
                </p>
              </div>

              <div className="p-2 md:pl-6">
                <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold text-base">
                  <IndianRupee className="w-5 h-5 text-emerald-600" />
                  <h3>Affordable Fee Highlights</h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Admission:</strong> ₹3,000 (one-time)<br />
                  <strong>Registration:</strong> ₹2,000 (one-time)<br />
                  <strong>Tuition:</strong> ₹2,200/month (Nursery-KG)
                </p>
              </div>
            </div>

            {/* Admission Helpline & Email Banner */}
            <div className="mt-6 pt-6 border-t border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
              <div>
                <strong>Admissions Helpline:</strong> +91 7461863132 | 094712 75812
              </div>
              <div>
                <strong>Direct Email:</strong>{' '}
                <a href="mailto:pragyaschool2017@gmail.com" className="text-blue-700 font-bold hover:underline">
                  pragyaschool2017@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Admission Procedure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">
              Simple 4-Step Admission Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our straightforward process ensures a smooth onboarding experience for students and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <EnquiryForm />
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="section-padding bg-white border-t border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">
              Fee Structure (Session 2026-27)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear, transparent schedules with no hidden costs.
            </p>
          </div>
          <FeeStructure />
        </div>
      </section>

      <Footer />
    </main>
  );
}
