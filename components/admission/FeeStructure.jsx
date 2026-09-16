import { CheckCircle2, FileText, HelpCircle, ShieldCheck, Bus, Award } from 'lucide-react';
import { feeData } from '@/config/siteData';

export function FeeStructure() {
  return (
    <div className="space-y-10">
      {/* PHIS Fee Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 bg-blue-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Academic Session 2026-27
            </span>
            <h3 className="text-xl font-bold">Standard Fee Structure</h3>
          </div>
          <span className="text-xs bg-blue-800 text-blue-200 border border-blue-700 px-3 py-1 rounded-full font-medium">
            CBSE Affiliation: 330963
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                <th className="p-4 sm:p-5">Class Wing</th>
                <th className="p-4 sm:p-5">Admission Fee</th>
                <th className="p-4 sm:p-5">Registration Fee</th>
                <th className="p-4 sm:p-5">Tuition Fee (Monthly)</th>
                <th className="p-4 sm:p-5">Annual Charges</th>
                <th className="p-4 sm:p-5">Total (Annual)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
              {feeData.classes.map((row, idx) => (
                <tr key={row.class} className={idx % 2 === 0 ? 'bg-blue-50/40' : 'bg-white'}>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">{row.class}</td>
                  <td className="p-4 sm:p-5 font-medium">{row.admission}</td>
                  <td className="p-4 sm:p-5 font-medium">{row.registration}</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-600">{row.tuitionMonthly}</td>
                  <td className="p-4 sm:p-5 font-medium">{row.annual}</td>
                  <td className="p-4 sm:p-5 font-black text-slate-900">{row.totalAnnual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Transport & Extras */}
        <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
            <Bus className="w-5 h-5 text-amber-600" />
            <span>Transport & Optional Services</span>
          </div>
          <h4 className="text-xl font-black text-slate-900 mb-4">
            Safe Transportation & Uniforms
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex justify-between py-2 border-b border-amber-200/60">
              <span className="font-semibold">Bus Transport (Across Purnia):</span>
              <span className="font-bold text-slate-900">₹800 - ₹1,500 / month</span>
            </div>
            <div className="flex justify-between py-2 border-b border-amber-200/60">
              <span className="font-semibold">Books & Uniform Set (Approx):</span>
              <span className="font-bold text-slate-900">₹5,000 (one-time)</span>
            </div>
            <p className="text-xs text-slate-600 pt-2">
              * Dedicated bus fleet equipped with CCTV and trained conductors covering Gulabbagh, Belouri, Line Bazar, and greater Purnia.
            </p>
          </div>
        </div>

        {/* Fee Payment Guidelines */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Important Terms & Policies</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Payment Policies
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600">
            {feeData.policies.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
