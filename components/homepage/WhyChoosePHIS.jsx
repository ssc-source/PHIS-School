import { BookOpen, GraduationCap, Building2, Trophy, HeartHandshake, Globe, CheckCircle2 } from 'lucide-react';
import { whyChooseFeatures } from '@/config/siteData';

export function WhyChoosePHIS() {
  const getIcon = (name) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-amber-500" />;
      case 'Building': return <Building2 className="w-6 h-6 text-indigo-600" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-600" />;
      default: return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="section-padding bg-slate-50 relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-phis bg-blue-100 text-blue-800 mb-3 mx-auto">
            <span>INSTITUTIONAL PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Why Choose Pragya Heritage?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our comprehensive curriculum, individual attention, and vibrant co-curricular framework cultivate responsible, confident, and high-achieving leaders.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseFeatures.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>PHIS Academic Benchmark</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
