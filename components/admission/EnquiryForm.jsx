'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    childFirstName: '',
    childMiddleName: '',
    childLastName: '',
    dateOfBirth: '',
    applyingClass: 'Nursery',
    fatherName: '',
    motherName: '',
    whatsappNo: '',
    email: '',
    previousSchool: '',
    transportRequired: false,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classes = [
    'Nursery', 'KG I', 'KG II',
    'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
    'Class VI', 'Class VII', 'Class VIII',
    'Class IX', 'Class X'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.childFirstName.trim()) errs.childFirstName = "First name is required";
    if (!formData.childLastName.trim()) errs.childLastName = "Last name is required";
    if (!formData.dateOfBirth) errs.dateOfBirth = "Date of birth is required";
    if (!formData.fatherName.trim()) errs.fatherName = "Father's name is required";
    if (!formData.motherName.trim()) errs.motherName = "Mother's name is required";
    
    if (!formData.whatsappNo.trim()) {
      errs.whatsappNo = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsappNo.replace(/\D/g, ''))) {
      errs.whatsappNo = "Please enter a valid 10-digit number";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div id="enquiry" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl relative overflow-hidden">
      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500" />

      <div className="mb-8 text-center max-w-xl mx-auto">
        <div className="badge-phis bg-blue-100 text-blue-800 mb-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>SESSION 2026-27 ADMISSIONS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Admission Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Fill in the details below. Our Admissions Office at PHIS Purnia will contact you promptly.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12 px-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-2">
            Enquiry Received Successfully!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Thank you for reaching out to Pragya Heritage International School. We have registered your enquiry for <strong>{formData.childFirstName} {formData.childLastName}</strong> for <strong>{formData.applyingClass}</strong>.
          </p>
          <div className="p-4 bg-blue-50 rounded-2xl max-w-sm mx-auto text-xs text-slate-600 mb-6 border border-blue-100">
            <p>Our counseling desk will reach out at <strong>{formData.whatsappNo}</strong> or <strong>{formData.email}</strong>.</p>
            <p className="mt-2 text-slate-500">
              Or email us directly at:{' '}
              <a href="mailto:pragyaschool2017@gmail.com" className="text-blue-700 font-bold hover:underline">
                pragyaschool2017@gmail.com
              </a>
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                childFirstName: '',
                childMiddleName: '',
                childLastName: '',
                dateOfBirth: '',
                applyingClass: 'Nursery',
                fatherName: '',
                motherName: '',
                whatsappNo: '',
                email: '',
                previousSchool: '',
                transportRequired: false,
                message: ''
              });
            }}
            className="btn-phis-primary text-xs py-2.5 px-6"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Child Information Section */}
          <div>
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
              1. Child's Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Child's First Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="childFirstName"
                  value={formData.childFirstName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.childFirstName ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.childFirstName && <p className="text-[11px] text-red-500 mt-1">{errors.childFirstName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="childMiddleName"
                  value={formData.childMiddleName}
                  onChange={handleChange}
                  placeholder="e.g. Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Last Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="childLastName"
                  value={formData.childLastName}
                  onChange={handleChange}
                  placeholder="e.g. Singh"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.childLastName ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.childLastName && <p className="text-[11px] text-red-500 mt-1">{errors.childLastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Date of Birth <span className="text-blue-600">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.dateOfBirth ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.dateOfBirth && <p className="text-[11px] text-red-500 mt-1">{errors.dateOfBirth}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Class Applying For <span className="text-blue-600">*</span>
                </label>
                <select
                  name="applyingClass"
                  value={formData.applyingClass}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white"
                >
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Parents Information Section */}
          <div>
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
              2. Parent / Guardian Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Father's Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father's full name"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.fatherName ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.fatherName && <p className="text-[11px] text-red-500 mt-1">{errors.fatherName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mother's Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Mother's full name"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.motherName ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.motherName && <p className="text-[11px] text-red-500 mt-1">{errors.motherName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp Contact Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.whatsappNo ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.whatsappNo && <p className="text-[11px] text-red-500 mt-1">{errors.whatsappNo}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="parent.email@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-200 bg-red-50/20' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Academic Background & Transport */}
          <div>
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
              3. Previous Schooling & Facilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Previous School Attended (If Any)
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  placeholder="School name and location"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="flex items-center gap-3 cursor-pointer bg-blue-50/60 p-3 rounded-xl border border-blue-200/60 w-full">
                  <input
                    type="checkbox"
                    name="transportRequired"
                    checked={formData.transportRequired}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-xs font-bold text-slate-800">
                    School Bus Transport Required (Purnia & Nearby)
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Any Queries or Comments
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any special learning requirements or queries..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-phis-primary py-4 text-sm font-bold shadow-xl shadow-blue-500/20 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting Enquiry...</span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
