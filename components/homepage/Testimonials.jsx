import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { testimonialsList } from '@/config/siteData';

export function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="badge-phis bg-amber-100 text-amber-800 mb-3 mx-auto">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span>PARENT TESTIMONIALS & REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Trusted by Parents Across Purnia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Read verified experiences from our community of parents whose children are flourishing academically and socially at PHIS.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-amber-200/80 absolute top-6 right-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">
                    {item.verified}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
