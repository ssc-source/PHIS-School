'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Briefcase, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Award, 
  Clock, 
  MapPin, 
  Upload, 
  ArrowRight,
  BookOpen,
  Users
} from 'lucide-react';
import { siteConfig } from '@/config/siteData';

const openings = [
  {
    id: 1,
    title: "PGT / TGT - Mathematics & Physics",
    department: "Secondary School (Classes VI - X)",
    type: "Full Time",
    experience: "2-5 Years",
    qualifications: "M.Sc / B.Ed in Mathematics or Physics with strong CBSE curriculum command and English fluency.",
    badge: "Urgent Requirement"
  },
  {
    id: 2,
    title: "TGT - English & Social Sciences",
    department: "Middle & Secondary Wing",
    type: "Full Time",
    experience: "2+ Years",
    qualifications: "M.A / B.A (English / History / Political Science) with B.Ed. Excellent verbal communication skills.",
    badge: "Open"
  },
  {
    id: 3,
    title: "PRT - Primary All Subjects",
    department: "Primary Wing (Classes I - V)",
    type: "Full Time",
    experience: "1-3 Years",
    qualifications: "Graduate / D.El.Ed / B.Ed with passion for activity-based teaching and student nurturing.",
    badge: "Open"
  },
  {
    id: 4,
    title: "NTT / Mother Teachers",
    department: "Pre-Primary Wing (Nursery - KG II)",
    type: "Full Time",
    experience: "1+ Years",
    qualifications: "NTT certification / Montessori training with caring attitude and innovative storytelling skills.",
    badge: "Open"
  },
  {
    id: 5,
    title: "Physical Education Teacher & Sports Coach",
    department: "Athletics & Physical Training",
    type: "Full Time",
    experience: "2+ Years",
    qualifications: "B.P.Ed / M.P.Ed with expertise in Cricket, Football, Basketball, or Yoga training.",
    badge: "Open"
  },
  {
    id: 6,
    title: "Computer Science & IT Teacher",
    department: "Computer & Coding Lab",
    type: "Full Time",
    experience: "1-3 Years",
    qualifications: "B.Tech (CS/IT) / MCA / BCA with practical knowledge of coding fundamentals and digital literacy.",
    badge: "Open"
  },
  {
    id: 7,
    title: "School Counselor & Wellness Educator",
    department: "Student Welfare & Counseling",
    type: "Full Time",
    experience: "2+ Years",
    qualifications: "Master's in Psychology / Child Development / Counseling with experience in school environments.",
    badge: "Open"
  },
  {
    id: 8,
    title: "Front Desk Executive / Admission Counselor",
    department: "Administration & Public Relations",
    type: "Full Time",
    experience: "1-3 Years",
    qualifications: "Graduate with polished English/Hindi communication, computer proficiency, and parent coordination skills.",
    badge: "Open"
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(openings[0].title);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    postAppliedFor: openings[0].title,
    qualification: '',
    totalExperience: '1-3 Years',
    currentLocation: '',
    coverNote: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-blue-900 text-white py-16 sm:py-20 relative overflow-hidden text-center">
        <div className="container-custom max-w-3xl mx-auto relative z-10">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>JOIN OUR ACADEMIC FAMILY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Careers at Pragya Heritage
          </h1>
          <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
            Shape future generations at Purnia's premier CBSE institution. We offer an empowering workplace, continuous professional development, and competitive compensation.
          </p>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50/70 p-6 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Competitive Salary</h3>
              <p className="text-xs text-slate-600">Attractive pay packages commensurate with experience and CBSE norms.</p>
            </div>

            <div className="bg-blue-50/70 p-6 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-3 shadow">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Continuous Training</h3>
              <p className="text-xs text-slate-600">CBSE workshops, digital pedagogical training, and leadership seminars.</p>
            </div>

            <div className="bg-blue-50/70 p-6 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Supportive Culture</h3>
              <p className="text-xs text-slate-600">Respectful, inclusive environment fostering collaboration and creativity.</p>
            </div>

            <div className="bg-blue-50/70 p-6 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Modern Infrastructure</h3>
              <p className="text-xs text-slate-600">Smart classrooms, digital staff rooms, and modern lab resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">CURRENT OPPORTUNITIES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 mb-3">
              Open Teaching & Administrative Positions
            </h2>
            <p className="text-sm text-slate-600">
              Apply online by selecting a position below or submitting the general faculty application form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                      job.badge === 'Urgent Requirement' 
                        ? 'bg-rose-100 text-rose-700 border border-rose-200' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {job.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-bold mb-3">
                    {job.department}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 mb-4 text-xs text-slate-600 space-y-1.5">
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Eligibility:</strong> {job.qualifications}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Purnia, Bihar
                  </span>
                  <a
                    href="#apply-form"
                    onClick={() => {
                      setSelectedRole(job.title);
                      setFormData((prev) => ({ ...prev, postAppliedFor: job.title }));
                    }}
                    className="btn-phis-primary py-2 px-4 text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-form" className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-400" />

            <div className="text-center mb-8">
              <div className="badge-phis bg-blue-100 text-blue-800 mb-2 mx-auto">
                <Send className="w-3.5 h-3.5 text-blue-600" />
                <span>ONLINE APPLICATION</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Submit Your Job Application
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                You can also email your detailed CV directly to <strong>pragyaschool2017@gmail.com</strong>.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your application for <strong>{formData.postAppliedFor}</strong>. Our HR recruitment committee will review your profile and contact you for an interview.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      postAppliedFor: openings[0].title,
                      qualification: '',
                      totalExperience: '1-3 Years',
                      currentLocation: '',
                      coverNote: ''
                    });
                  }}
                  className="btn-phis-primary text-xs py-2.5 px-6"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Kumari"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anjali@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Post Applying For *
                    </label>
                    <select
                      value={formData.postAppliedFor}
                      onChange={(e) => setFormData({ ...formData, postAppliedFor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                    >
                      {openings.map((op) => (
                        <option key={op.id} value={op.title}>{op.title}</option>
                      ))}
                      <option value="Other Subject / Role">Other Teaching / Administrative Position</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M.Sc, B.Ed"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Total Experience
                    </label>
                    <select
                      value={formData.totalExperience}
                      onChange={(e) => setFormData({ ...formData, totalExperience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                    >
                      <option value="Fresher">Fresher (0 - 1 Year)</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Purnia / Katihar / Patna"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Statement / Cover Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your teaching philosophy, key subject competencies, or notice period..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                  />
                </div>

                <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-blue-600" />
                    <span>Have your CV ready? Bring your hardcopy or email to <strong>pragyaschool2017@gmail.com</strong></span>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-phis-primary py-3.5 text-xs sm:text-sm font-bold shadow-xl shadow-blue-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Submit Career Application</span>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
