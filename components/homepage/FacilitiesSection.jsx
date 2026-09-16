import Link from 'next/link';
import { Sparkles, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { facilitiesList } from '@/config/siteData';

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-phis bg-blue-100 text-blue-800 mb-3 mx-auto">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>CAMPUS INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            World-Class Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Designed to foster intellectual curiosity, physical fitness, creative expression, and safety across every stage of a student's schooling.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility) => (
            <div
              key={facility.name}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-500/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview with overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-900 font-bold text-[11px] px-3 py-1 rounded-full shadow-md">
                  {facility.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Available on Campus
                  </span>
                  <Link href="/facilities" className="flex items-center gap-1 hover:underline">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
