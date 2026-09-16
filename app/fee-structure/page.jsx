import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeeStructure } from '@/components/admission/FeeStructure';
import { CreditCard, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Fee Structure 2026-27 | Pragya Heritage International School, Purnia",
  description: "Official Fee Structure for session 2026-27 at Pragya Heritage International School, Purnia, Bihar (CBSE Affiliation: 330963).",
};

export default function FeeStructurePage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-blue-900 text-white py-16 relative">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Fee Structure 2026-27
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Affordable, transparent education from Nursery to Class X with modern facilities in Purnia, Bihar.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl mx-auto">
          <FeeStructure />
        </div>
      </section>

      <Footer />
    </main>
  );
}
