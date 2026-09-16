'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Lock, User, Sparkles, LogIn, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/siteData';

export default function LoginPage() {
  const [role, setRole] = useState('student');
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [logged, setLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLogged(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl relative">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-600 p-1 flex items-center justify-center text-blue-900 mx-auto mb-3 shadow-md">
              <img src="/PHIS/logo.png" alt="PHIS Crest" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">PHIS Portal Login</h1>
            <p className="text-xs text-slate-500 mt-1">
              Access student reports, attendance, fees & academic records
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
            <button
              onClick={() => setRole('student')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                role === 'student' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Student / Parent
            </button>
            <button
              onClick={() => setRole('staff')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                role === 'staff' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Faculty / Admin
            </button>
          </div>

          {logged ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-700 text-xs font-bold mb-4 border border-emerald-200">
                ✓ Authentication Demo Successful for role: {role.toUpperCase()}
              </div>
              <p className="text-xs text-slate-500 mb-4">Redirecting to PHIS student dashboard...</p>
              <button
                onClick={() => setLogged(false)}
                className="btn-phis-primary text-xs py-2 px-4"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {role === 'student' ? 'Admission / Roll No.' : 'Employee ID'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={role === 'student' ? 'e.g. PHIS-2026-1042' : 'e.g. PHIS-FAC-014'}
                    value={credentials.id}
                    onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full btn-phis-primary py-3 text-xs font-bold shadow-lg shadow-blue-500/20 mt-2"
              >
                <LogIn className="w-4 h-4 mr-2" />
                <span>Log In to PHIS Portal</span>
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-100 pt-4">
            Need ERP tech assistance? Call Support: <span className="font-semibold text-slate-700">{siteConfig.contact.phone}</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
