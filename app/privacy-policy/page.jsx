import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export const metadata = {
  title: "Privacy Policy | Pragya Heritage International School",
  description: "Privacy policy and student data security guidelines at Pragya Heritage International School, Purnia, Bihar.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>DATA PROTECTION & PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            How Pragya Heritage International School collects, protects, and manages student and parent information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto prose prose-slate text-sm sm:text-base leading-relaxed text-slate-700">
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information Collection</h2>
          <p className="mb-6">
            Pragya Heritage International School (PHIS) collects information provided during admissions, registration forms, student records, and general enquiries. This includes student names, dates of birth, parent contact numbers, residential addresses, academic histories, and emergency contacts.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Use of Information</h2>
          <p className="mb-6">
            The data gathered is solely utilized for academic administration, CBSE compliance, emergency notifications, parent-teacher communications, fee receipts, and student welfare services. We do not sell or lease personal data to third parties.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Security & Storage</h2>
          <p className="mb-6">
            All electronic student records and ERP databases are stored on secured servers with strict role-based access protocols. Physical documents submitted during admission are securely archived within the administrative records office.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Media & Photographs</h2>
          <p className="mb-6">
            Photographs and videos captured during school fests, sports events, science exhibitions, and classroom activities may be shared on the official school website, social media handles, and newsletters to celebrate student achievements.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Contact Administration</h2>
          <p className="mb-6">
            If you have questions regarding our privacy practices or wish to update your child's contact particulars, please contact our administrative desk at <strong>{siteConfig.contact.email}</strong> or call <strong>{siteConfig.contact.phone}</strong>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
