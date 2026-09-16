'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, X, Newspaper, Sparkles } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'ADMISSION',
    badgeColor: 'bg-blue-600 text-white',
    title: 'Admissions Open for Session 2026-27 (Nursery to Class X)',
    date: 'September 2026',
    image: '/PHIS/images/Gate-main.png',
    excerpt: 'Pragya Heritage International School invites applications for Nursery to Class X with holistic CBSE curriculum and modern facilities.',
    content: 'We are pleased to announce that admissions are formally open for the academic session 2026-27. PHIS provides student-centered education, digital smart classrooms, modern science & computer laboratories, and sports grounds in Gulabbagh, Purnia. Limited seats are available across all wings.',
    link: '/admission'
  },
  {
    id: 2,
    category: 'RESULT',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Class X Board Results 2026 — 100% Pass Percentage with Top Distinctions',
    date: 'May 2026',
    image: '/PHIS/images/result-cbse-10.png',
    excerpt: 'PHIS students achieve 100% pass rate with outstanding top percentiles in CBSE Class X board examinations.',
    content: 'Our students have brought tremendous pride to the school by securing stellar results in the CBSE Class 10 examinations. The management, principal, and faculty congratulate our hardworking students and their supportive families.',
    link: '/gallery'
  },
  {
    id: 3,
    category: 'ACHIEVEMENT',
    badgeColor: 'bg-amber-600 text-white',
    title: 'PHIS Students Excel in District Science & Robotics Exhibition',
    date: 'August 2026',
    image: '/PHIS/images/cocuriculer-activity.png',
    excerpt: 'Student innovators win top accolades in the Purnia District Science & Innovation Expo.',
    content: 'Students from middle and secondary wings presented working models on renewable clean energy, smart automation, and environmental conservation, earning widespread praise from visiting jury members and academicians.',
    link: '/gallery'
  },
  {
    id: 4,
    category: 'EVENT',
    badgeColor: 'bg-indigo-600 text-white',
    title: 'International Yoga Day & Annual Fitness Showcase Celebrated',
    date: 'June 2026',
    image: '/PHIS/images/yoga-day.png',
    excerpt: 'Mass yoga demonstrations, fitness drills, and mindfulness sessions held across campus playfields.',
    content: 'Students, faculty, and staff gathered on the central campus grounds to practice asanas and pranayama. The session reinforced our commitment to physical health, mental focus, and holistic student well-being.',
    link: '/facilities'
  },
  {
    id: 5,
    category: 'CULTURAL',
    badgeColor: 'bg-pink-600 text-white',
    title: 'Grand Independence Day Celebrations & Patriotic Pageant',
    date: 'August 2026',
    image: '/PHIS/images/indipendence-day.png',
    excerpt: 'Flag hoisting, ceremonial march-past, patriotic anthems, and cultural recitals marked the day.',
    content: 'PHIS commemorated Independence Day with high patriotic fervor. The event commenced with the ceremonial flag hoisting followed by inspiring speeches, a synchronized NCC/scout parade, and vibrant dance dramas honoring India’s freedom heroes.',
    link: '/gallery'
  },
  {
    id: 6,
    category: 'ACTIVITY',
    badgeColor: 'bg-teal-600 text-white',
    title: 'Eco-Club Green Purnia Tree Plantation Drive',
    date: 'July 2026',
    image: '/PHIS/images/plantation.png',
    excerpt: 'Students plant over 500 indigenous saplings across the Bypass Road campus and surrounding neighborhood.',
    content: 'As part of our community social responsibility and environmental science curriculum, student volunteers actively participated in planting medicinal and shade trees, learning first-hand about ecosystem stewardship.',
    link: '/gallery'
  },
  {
    id: 7,
    category: 'ACTIVITY',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Student Council Investiture & Leadership Badge Ceremony',
    date: 'July 2026',
    image: '/PHIS/images/captains.png',
    excerpt: 'Newly elected Head Boy, Head Girl, and House Captains sworn in during the solemn investiture ceremony.',
    content: 'Leadership is a core pillar at PHIS. The newly appointed student council took the solemn oath to lead with integrity, discipline, and empathy, upholding the proud heritage of the institution.',
    link: '/about'
  },
  {
    id: 8,
    category: 'CULTURAL',
    badgeColor: 'bg-orange-600 text-white',
    title: 'Spring Cultural Festival & Traditional Celebrations',
    date: 'March 2026',
    image: '/PHIS/images/holi-celebration.png',
    excerpt: 'Colorful folk dances, music recitals, and festive celebrations organized on the school grounds.',
    content: 'Students displayed extraordinary talents in traditional folk arts, instrumental orchestra, and theatrical skits, celebrating Indian culture, unity, and seasonal harmony with great joy.',
    link: '/gallery'
  },
  {
    id: 9,
    category: 'ACTIVITY',
    badgeColor: 'bg-cyan-600 text-white',
    title: 'Junior Art & Creative Expression Exhibition',
    date: 'February 2026',
    image: '/PHIS/images/kids-art-gallary.png',
    excerpt: 'Pre-primary and primary learners showcase vibrant paintings, craft work, and clay models.',
    content: 'Our youngest artists transformed the school atrium into a colorful gallery of imagination, exhibiting paintings, collages, and craft projects designed during their weekly creative arts workshops.',
    link: '/gallery'
  }
];

const categories = ['ALL', 'ADMISSION', 'RESULT', 'ACHIEVEMENT', 'EVENT', 'CULTURAL', 'ACTIVITY'];

export function NewsInsights() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredNews = selectedCategory === 'ALL'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <section id="news" className="section-padding bg-slate-50 relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="badge-phis bg-blue-100 text-blue-800 mb-3 mx-auto">
            <Newspaper className="w-3.5 h-3.5 text-blue-600" />
            <span>CAMPUS HIGHLIGHTS & ANNOUNCEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            News & Happenings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Stay updated with academic milestones, sports achievements, campus events, and celebrations at Pragya Heritage International School.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-500/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              onClick={() => setSelectedNews(item)}
            >
              <div>
                {/* News Image Preview */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* News Card Body */}
                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-xs font-semibold mb-3">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 border-t border-slate-100 mt-auto">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* View All on Gallery CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="btn-phis-primary inline-flex items-center text-xs sm:text-sm py-3.5 px-8 font-bold shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform"
          >
            <span>Explore Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Full Photo */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <button
                className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => setSelectedNews(null)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className={`inline-block text-[10px] font-bold px-3 py-0.5 rounded-full uppercase mb-2 ${selectedNews.badgeColor}`}>
                  {selectedNews.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                  {selectedNews.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center text-slate-400 text-xs font-semibold mb-4">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                <span>{selectedNews.date}</span>
                <span className="mx-2">•</span>
                <span>Pragya Heritage International School, Purnia</span>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {selectedNews.content}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <Link
                  href={selectedNews.link}
                  onClick={() => setSelectedNews(null)}
                  className="btn-phis-primary py-2.5 px-5 text-xs font-bold w-full sm:w-auto text-center"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
                </Link>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-full transition-colors w-full sm:w-auto"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
