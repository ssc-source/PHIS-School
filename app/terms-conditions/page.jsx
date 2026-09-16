import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export const metadata = {
  title: "Terms & Conditions | Pragya Heritage International School",
  description: "Terms and conditions of enrolment, school rules, code of conduct, and policies at PHIS Purnia.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>INSTITUTIONAL POLICIES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Rules, student code of conduct, and administrative guidelines for academic session 2026-27.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto prose prose-slate text-sm sm:text-base leading-relaxed text-slate-700">
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Enrolment & Admission</h2>
          <p className="mb-6">
            Admission to Pragya Heritage International School is subject to merit, document verification, and seat availability under CBSE norms. Submission of false records or concealment of prior disciplinary history may lead to cancellation of enrolment.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">2. School Attendance & Discipline</h2>
          <p className="mb-6">
            A minimum of 75% attendance is mandatory for appearing in annual and CBSE Board examinations. Students are expected to maintain strict punctuality, adhere to prescribed uniform codes, and uphold respectful conduct with peers and faculty.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Fee Payment Terms</h2>
          <p className="mb-6">
            Monthly tuition fees must be remitted by the 10th of every calendar month. Admission and registration charges are non-refundable once the admission offer is confirmed and accepted.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Transport Regulations</h2>
          <p className="mb-6">
            Students availing school bus transport must observe safety rules, queue discipline, and obey instructions given by bus conductors and drivers. Transport facility is optional and subject to route feasibility.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Amendments to Policies</h2>
          <p className="mb-6">
            The school managing committee reserves the right to amend academic calendars, examination schedules, or code of conduct rules in the best interest of students and institutional excellence.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
