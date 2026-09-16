import Link from 'next/link';
import { GraduationCap, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { academicPrograms } from '@/config/siteData';

export function AcademicPrograms() {
  return (
    <section id="academics" className="section-padding bg-slate-50 relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-phis bg-blue-100 text-blue-800 mb-3 mx-auto">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>PROGRESSIVE LEARNING PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Academic Programs (Nursery - Class X)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tailored pedagogical frameworks designed to stimulate curiosity at early ages and develop disciplined analytical mastery in secondary classes.
          </p>
        </div>

        {/* 4 Academic Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicPrograms.map((prog) => (
            <div
              key={prog.level}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-500/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={prog.image}
                  alt={prog.level}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-blue-900 text-xs font-black px-2.5 py-1 rounded-md shadow">
                  {prog.classes}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1">
                    {prog.age}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {prog.level}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {prog.focus}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {prog.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <Link
                    href="/admission"
                    className="w-full py-2 px-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for {prog.level.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
