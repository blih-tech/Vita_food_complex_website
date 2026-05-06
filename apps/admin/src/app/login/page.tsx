"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen flex font-['Outfit']">

      {/* ── Left panel: Brand ── */}
      <div
        className="hidden lg:flex lg:w-5/12 xl:w-[45%] flex-col relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 25px 143px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute top-1/2 -right-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-white/15 pointer-events-none" />

        {/* Inner content */}
        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">

          {/* Logo */}
          <div className="relative w-[130px] h-[60px]">
            <Image
              src="/assets/brand/vita-logo.svg"
              alt="Vita Food Complex"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Main copy */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit mb-6">
              <ShieldCheck size={14} className="text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Admin Portal</span>
            </div>

            <h1 className="font-['Funnel_Display'] text-white font-bold text-5xl xl:text-[52px] leading-[1.15] mb-6">
              Manage Your<br />Brand With<br />Confidence
            </h1>

            <p className="text-white/80 text-base leading-relaxed max-w-xs">
              Your all-in-one dashboard for managing content, products, careers, and insights.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-10 border-t border-white/20">
              {[
                { value: '11+', label: 'Products' },
                { value: '2', label: 'Languages' },
                { value: '100%', label: 'CMS Driven' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-['Funnel_Display'] text-white text-3xl font-bold leading-none">{s.value}</p>
                  <p className="text-white/65 text-xs mt-1.5 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/50 text-xs">© {new Date().getFullYear()} Vita Food Complex. All rights reserved.</p>
        </div>
      </div>

      {/* ── Right panel: Form ── */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f8faf8] px-6 py-12">

        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <div
            className="mx-auto w-14 h-14 rounded-[18px] flex items-center justify-center mb-4"
            style={{
              background:
                'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
            }}
          >
            <div className="relative w-8 h-8">
              <Image src="/assets/brand/vita-logo.svg" alt="Vita" fill className="object-contain" />
            </div>
          </div>
          <p className="text-center font-['Funnel_Display'] text-xl font-bold text-[#333733]">Vita Admin</p>
        </div>

        <div className="w-full max-w-[420px]">

          {/* Heading */}
          <div className="mb-9">
            <p className="text-[#23B349] text-sm font-semibold mb-1">{greeting}</p>
            <h2 className="font-['Funnel_Display'] text-[#333733] font-bold text-4xl leading-tight mb-2">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm">Sign in to your admin dashboard to continue.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-[14px] text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#333733] mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vitafoodcomplex.com"
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-[14px] text-[#333733] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/40 focus:border-[#23B349] transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#333733] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 pr-12 bg-white border border-gray-200 rounded-[14px] text-[#333733] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/40 focus:border-[#23B349] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-[14px] font-['Funnel_Display'] font-bold text-lg text-white flex items-center justify-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              style={{
                background: loading
                  ? '#23B349'
                  : 'radial-gradient(ellipse at 25px 40px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
                boxShadow: '0 8px 24px rgba(35,179,73,0.35)',
              }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-8">
            Protected area — authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}
