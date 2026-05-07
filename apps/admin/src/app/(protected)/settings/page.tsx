"use client";

import { useState, useEffect } from 'react';
import {
  Settings, User, Globe, Link2, BarChart3,
  Save, Loader2, Check, Eye, EyeOff,
  Share2,
  KeyRound, Mail, Bell,
} from 'lucide-react';
import api from '@/lib/api';
import { useAuth } from '@/context/AuthContext';

type Tab = 'site' | 'profile';

interface SiteSettings {
  siteName: { en: string; am: string };
  analytics: { ga4Id: string };
  socialLinks: { facebook?: string; instagram?: string; linkedin?: string; twitter?: string };
}

function SectionCard({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[18px] border border-gray-100 p-5 lg:p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-[9px] bg-[#23B349]/10 flex items-center justify-center">
          <Icon size={15} className="text-[#23B349]" />
        </div>
        <h3 className="font-['Funnel_Display'] font-bold text-[#333733] text-base">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#333733] mb-1.5">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-2">{hint}</p>}
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-3.5 py-2.5 rounded-[10px] border border-gray-200 text-sm text-[#333733] placeholder-gray-400 focus:outline-none focus:border-[#23B349] focus:ring-2 focus:ring-[#23B349]/10 transition-all";

// ── Site Settings Tab ──────────────────────────────────────────────────────────

function SiteSettingsTab() {
  const [form, setForm] = useState<SiteSettings>({
    siteName: { en: '', am: '' },
    analytics: { ga4Id: '' },
    socialLinks: { facebook: '', instagram: '', linkedin: '', twitter: '' },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/settings').then((res) => {
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      if (data) {
        setForm({
          siteName: data.siteName ?? { en: '', am: '' },
          analytics: data.analytics ?? { ga4Id: '' },
          socialLinks: data.socialLinks ?? { facebook: '', instagram: '', linkedin: '', twitter: '' },
        });
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const set = (path: string, value: string) => {
    const keys = path.split('.');
    setForm((prev: SiteSettings) => {
      const next = { ...prev } as any;
      let cur = next;
      for (let i = 0; i < keys.length - 1; i++) {
        cur[keys[i]] = { ...cur[keys[i]] };
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
      return next as SiteSettings;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      await api.put('/settings', form);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setError('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 size={22} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:space-y-5">
      {/* Site Name */}
      <SectionCard title="Site Name" icon={Globe}>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="English" hint="Displayed on English version">
            <input
              className={inputCls}
              value={form.siteName.en}
              onChange={(e) => set('siteName.en', e.target.value)}
              placeholder="Vita Food Complex"
            />
          </Field>
          <Field label="አማርኛ (Amharic)" hint="Displayed on Amharic version">
            <input
              className={inputCls}
              value={form.siteName.am}
              onChange={(e) => set('siteName.am', e.target.value)}
              placeholder="ቪታ ምግብ ኮምፕሌክስ"
            />
          </Field>
        </div>
      </SectionCard>

      {/* Social Links */}
      <SectionCard title="Social Links" icon={Link2}>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { key: 'facebook', label: 'Facebook', placeholder: 'https://facebook.com/…', color: 'text-blue-500' },
            { key: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/…', color: 'text-pink-500' },
            { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/…', color: 'text-blue-600' },
            { key: 'twitter', label: 'Twitter / X', placeholder: 'https://x.com/…', color: 'text-sky-500' },
          ].map(({ key, label, placeholder, color }) => (
            <Field key={key} label={label}>
              <div className="relative">
                <Share2 size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${color}`} />
                <input
                  className={`${inputCls} pl-9`}
                  value={(form.socialLinks as any)[key] ?? ''}
                  onChange={(e) => set(`socialLinks.${key}`, e.target.value)}
                  placeholder={placeholder}
                />
              </div>
            </Field>
          ))}
        </div>
      </SectionCard>

      {/* Analytics */}
      <SectionCard title="Analytics" icon={BarChart3}>
        <Field label="Google Analytics 4 ID" hint="Found in GA4 → Admin → Data Streams">
          <input
            className={inputCls}
            value={form.analytics.ga4Id}
            onChange={(e) => set('analytics.ga4Id', e.target.value)}
            placeholder="G-XXXXXXXXXX"
          />
        </Field>
      </SectionCard>

      {/* Save */}
      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-[10px] px-4 py-2.5">{error}</p>
      )}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 bg-[#23B349] hover:bg-[#1da040] text-white font-['Funnel_Display'] font-bold text-sm px-5 py-2.5 rounded-[999px] transition-all disabled:opacity-60"
        >
          {saving ? (
            <><Loader2 size={14} className="animate-spin" />Saving…</>
          ) : saved ? (
            <><Check size={14} />Saved!</>
          ) : (
            <><Save size={14} />Save Settings</>
          )}
        </button>
      </div>
    </div>
  );
}

// ── Profile Tab ────────────────────────────────────────────────────────────────

function ProfileTab() {
  const { user } = useAuth();

  const [nameForm, setNameForm] = useState({ name: '' });
  const [savingName, setSavingName] = useState(false);
  const [savedName, setSavedName] = useState(false);
  const [nameError, setNameError] = useState('');

  const [pwForm, setPwForm] = useState({ password: '', confirm: '' });
  const [showPw, setShowPw] = useState(false);
  const [savingPw, setSavingPw] = useState(false);
  const [savedPw, setSavedPw] = useState(false);
  const [pwError, setPwError] = useState('');

  useEffect(() => {
    if (user) setNameForm({ name: user.name ?? '' });
  }, [user]);

  const handleSaveName = async () => {
    if (!nameForm.name.trim()) return;
    setSavingName(true);
    setNameError('');
    try {
      await api.put('/users/me', { name: nameForm.name.trim() });
      setSavedName(true);
      setTimeout(() => setSavedName(false), 2500);
    } catch {
      setNameError('Failed to update name. Please try again.');
    } finally {
      setSavingName(false);
    }
  };

  const handleSavePw = async () => {
    if (pwForm.password.length < 6) { setPwError('Password must be at least 6 characters.'); return; }
    if (pwForm.password !== pwForm.confirm) { setPwError('Passwords do not match.'); return; }
    setSavingPw(true);
    setPwError('');
    try {
      await api.put('/users/me/password', { password: pwForm.password });
      setPwForm({ password: '', confirm: '' });
      setSavedPw(true);
      setTimeout(() => setSavedPw(false), 2500);
    } catch {
      setPwError('Failed to update password. Please try again.');
    } finally {
      setSavingPw(false);
    }
  };

  return (
    <div className="space-y-4 lg:space-y-5">
      {/* Avatar + info */}
      <SectionCard title="My Profile" icon={User}>
        <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-100">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0"
            style={{
              background:
                'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
              boxShadow: '0 4px 12px rgba(35,179,73,0.35)',
            }}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-['Funnel_Display'] font-bold text-[#333733] text-lg leading-none">{user?.name}</p>
            <p className="text-sm text-gray-400 mt-1">{user?.email}</p>
            <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-200 capitalize">
              {user?.role}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <Field label="Display Name">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className={`${inputCls} pl-9`}
                  value={nameForm.name}
                  onChange={(e) => setNameForm({ name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <button
                onClick={handleSaveName}
                disabled={savingName || !nameForm.name.trim()}
                className="inline-flex items-center gap-1.5 bg-[#23B349] hover:bg-[#1da040] text-white font-semibold text-sm px-4 py-2.5 rounded-[10px] transition-all disabled:opacity-60 shrink-0"
              >
                {savingName ? <Loader2 size={13} className="animate-spin" /> : savedName ? <Check size={13} /> : <Save size={13} />}
                {savingName ? 'Saving' : savedName ? 'Saved!' : 'Save'}
              </button>
            </div>
            {nameError && <p className="text-xs text-red-500 mt-1.5">{nameError}</p>}
          </Field>

          <Field label="Email Address" hint="Contact support to change your email.">
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className={`${inputCls} pl-9 bg-gray-50 cursor-not-allowed`}
                value={user?.email ?? ''}
                readOnly
              />
            </div>
          </Field>
        </div>
      </SectionCard>

      {/* Change Password */}
      <SectionCard title="Change Password" icon={KeyRound}>
        <div className="space-y-4">
          <Field label="New Password">
            <div className="relative">
              <KeyRound size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPw ? 'text' : 'password'}
                className={`${inputCls} pl-9 pr-10`}
                value={pwForm.password}
                onChange={(e) => setPwForm((p) => ({ ...p, password: e.target.value }))}
                placeholder="At least 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </Field>

          <Field label="Confirm New Password">
            <div className="relative">
              <KeyRound size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPw ? 'text' : 'password'}
                className={`${inputCls} pl-9`}
                value={pwForm.confirm}
                onChange={(e) => setPwForm((p) => ({ ...p, confirm: e.target.value }))}
                placeholder="Repeat new password"
              />
            </div>
          </Field>

          {pwError && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-[10px] px-4 py-2.5">{pwError}</p>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleSavePw}
              disabled={savingPw || !pwForm.password}
              className="inline-flex items-center gap-2 bg-[#333733] hover:bg-black text-white font-['Funnel_Display'] font-bold text-sm px-5 py-2.5 rounded-[999px] transition-all disabled:opacity-60"
            >
              {savingPw ? (
                <><Loader2 size={14} className="animate-spin" />Updating…</>
              ) : savedPw ? (
                <><Check size={14} />Updated!</>
              ) : (
                <><KeyRound size={14} />Update Password</>
              )}
            </button>
          </div>
        </div>
      </SectionCard>

      {/* Notification preferences placeholder */}
      <SectionCard title="Notifications" icon={Bell}>
        <div className="space-y-3">
          {[
            { label: 'New contact form submissions', sub: 'Receive an alert when a visitor sends a message' },
            { label: 'New job applications', sub: 'Get notified when someone applies for a job' },
          ].map((item) => (
            <label key={item.label} className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5">
                <input type="checkbox" defaultChecked className="accent-[#23B349] w-4 h-4 rounded cursor-pointer" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#333733] group-hover:text-[#23B349] transition-colors">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            </label>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>('site');

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: 'site', label: 'Site Settings', icon: Globe },
    { key: 'profile', label: 'My Profile', icon: User },
  ];

  return (
    <>
      {/* Desktop header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10 font-['Outfit']">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[10px] bg-[#23B349]/10 flex items-center justify-center">
            <Settings size={17} className="text-[#23B349]" />
          </div>
          <div>
            <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733] leading-none">Settings</h1>
            <p className="text-[11px] text-gray-400 mt-0.5">Manage your site and account</p>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-8 font-['Outfit']">
        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-gray-100 rounded-[12px] mb-5 lg:mb-6 w-fit">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={[
                'flex items-center gap-2 px-4 py-2 rounded-[9px] text-sm font-semibold transition-all',
                tab === key
                  ? 'bg-white text-[#23B349] shadow-sm'
                  : 'text-gray-500 hover:text-[#333733]',
              ].join(' ')}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {tab === 'site' ? <SiteSettingsTab /> : <ProfileTab />}
      </div>
    </>
  );
}
