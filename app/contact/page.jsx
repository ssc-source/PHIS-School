'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="badge-phis bg-blue-800 text-amber-300 border border-blue-700 mb-4 mx-auto">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-blue-200">
            Have questions regarding admissions, academics, or school transport? Reach out to our team at Purnia, Bihar.
          </p>
        </div>
      </section>

      {/* 3 Main Contact Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-blue-50/80 p-8 rounded-3xl border border-blue-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">📍 Campus Address</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-2">
                <strong>Pragya Heritage International School</strong><br />
                Bypass Road, Basgama, Gulabbagh,<br />
                Purnia, Bihar - 854326
              </p>
              <p className="text-xs text-slate-500 mt-auto pt-2 border-t border-blue-100">
                Landmark: Near Ridhi Sidhi Petrol Pump, Purnia Dharamkata, NH 80, Belouri
              </p>
            </div>

            {/* Phone */}
            <div className="bg-blue-50/80 p-8 rounded-3xl border border-blue-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">📞 Phone Lines</h3>
              <div className="text-slate-700 text-sm space-y-1 mb-3">
                <p className="font-bold text-blue-800 text-base">{siteConfig.contact.phone}</p>
                <p className="font-semibold text-slate-700">{siteConfig.contact.altPhone}</p>
              </div>
              <p className="text-xs text-slate-500 mt-auto pt-2 border-t border-blue-100 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Mon - Sat: 6:00 AM - 6:00 PM</span>
              </p>
            </div>

            {/* Email */}
            <div className="bg-blue-50/80 p-8 rounded-3xl border border-blue-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center mb-4 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">📧 Email Communications</h3>
              <div className="text-slate-700 text-sm space-y-1 mb-3">
                <a href="mailto:pragyaschool2017@gmail.com" className="font-semibold text-blue-700 hover:underline block">
                  pragyaschool2017@gmail.com
                </a>
                <span className="text-xs text-slate-500">(Admissions & General Enquiries)</span>
              </div>
              <p className="text-xs text-slate-500 mt-auto pt-2 border-t border-blue-100">
                Official Website: www.phispurnea.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed & Contact Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          {/* Location Map */}
          <div className="mb-16">
            <div className="max-w-xl mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">VISIT OUR CAMPUS</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Find Us on Google Maps</h2>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.123456789!2d87.5312807!3d25.7705299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff89b428e0241%3A0xda10ff902054e0d0!2sPragya%20Heritage%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-500 text-center mb-8">
              We respond to all parent queries and general admission enquiries promptly.
            </p>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-xs text-slate-500 mt-2">Thank you for reaching out. Our administration will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Admission Assistance">Admission Assistance</option>
                      <option value="School Transport">School Transport</option>
                      <option value="Careers / Faculty Recruitment">Careers / Faculty Recruitment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your query here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-phis-primary py-3.5 text-xs font-bold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message to PHIS</span>
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
