"use client";

import { useAuth } from '@/context/AuthContext';
import {
  ShoppingBag, Briefcase, MessageSquare, TrendingUp,
  ArrowUpRight, FileText, Settings, Bell,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    label: 'Total Products',
    value: '11+',
    change: '+2 this month',
    icon: ShoppingBag,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    label: 'Job Openings',
    value: '5',
    change: '3 new applicants',
    icon: Briefcase,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    label: 'New Messages',
    value: '12',
    change: '4 unread today',
    icon: MessageSquare,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    label: 'Site Visits',
    value: '1.2k',
    change: '+18% this week',
    icon: TrendingUp,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const quickActions = [
  {
    label: 'Edit Pages',
    desc: 'Update website content',
    icon: FileText,
    href: '/pages',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    label: 'Products',
    desc: 'Manage your catalogue',
    icon: ShoppingBag,
    href: '/products',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    label: 'Messages',
    desc: 'View contact submissions',
    icon: MessageSquare,
    href: '/messages',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    label: 'Settings',
    desc: 'Site configuration',
    icon: Settings,
    href: '/settings',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

export default function DashboardPage() {
  const { user } = useAuth();

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* ── Desktop header (hidden on mobile — DashboardLayout renders mobile bar) ── */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10 font-['Outfit']">
        <div>
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733] leading-none">
            Overview
          </h1>
          <p className="text-[11px] text-gray-400 mt-0.5">{today}</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-[10px] bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Bell size={16} className="text-gray-500" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#23B349] rounded-full" />
          </button>

          <div className="flex items-center gap-2.5 pl-3 border-l border-gray-100">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#333733] leading-none">{user?.name}</p>
              <p className="text-[11px] text-gray-400 capitalize mt-0.5">{user?.role}</p>
            </div>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
                boxShadow: '0 2px 8px rgba(35,179,73,0.35)',
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* ── Page body ── */}
      <div className="p-4 sm:p-6 lg:p-8 font-['Outfit']">

        {/* Welcome banner */}
        <div
          className="rounded-[20px] lg:rounded-[24px] p-5 sm:p-6 lg:p-8 mb-6 lg:mb-8 relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 25px 143px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)',
          }}
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute bottom-0 right-24 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute top-4 right-48 w-14 h-14 rounded-full bg-white/10 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white/75 text-sm font-medium mb-1">{greeting},</p>
              <h2 className="font-['Funnel_Display'] text-white font-bold text-2xl sm:text-3xl xl:text-4xl mb-2">
                {user?.name} 👋
              </h2>
              <p className="text-white/75 text-sm leading-relaxed max-w-sm">
                Everything is running smoothly. Use the sidebar to manage content, products, and more.
              </p>
            </div>

            <Link
              href="/pages"
              className="inline-flex items-center gap-2 bg-white text-[#23B349] font-['Funnel_Display'] font-bold text-sm px-4 py-2.5 lg:px-5 lg:py-3 rounded-[999px] hover:shadow-md transition-all group shrink-0"
            >
              Manage Content
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[16px] lg:rounded-[18px] p-4 lg:p-5 border border-gray-100 hover:border-[#23B349]/25 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-3 lg:mb-5">
                <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-[10px] lg:rounded-[12px] flex items-center justify-center ${stat.iconBg}`}>
                  <stat.icon size={16} className={stat.iconColor} />
                </div>
                <ArrowUpRight size={14} className="text-[#23B349] mt-0.5" />
              </div>
              <p className="font-['Funnel_Display'] text-[#333733] font-bold text-2xl lg:text-3xl leading-none">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              <p className="text-xs text-[#23B349] font-semibold mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* ── Quick actions ── */}
        <div>
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <h3 className="font-['Funnel_Display'] text-[#333733] font-bold text-base lg:text-lg">
              Quick Actions
            </h3>
            <span className="text-xs text-gray-400 font-medium">All modules</span>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="bg-white rounded-[16px] lg:rounded-[18px] p-4 lg:p-5 border border-gray-100 hover:border-[#23B349]/30 hover:shadow-md transition-all group"
              >
                <div
                  className={`w-10 h-10 lg:w-11 lg:h-11 rounded-[11px] lg:rounded-[13px] flex items-center justify-center mb-3 lg:mb-4 ${action.iconBg} group-hover:scale-105 transition-transform`}
                >
                  <action.icon size={18} className={action.iconColor} />
                </div>
                <p className="font-['Funnel_Display'] font-bold text-[#333733] text-sm lg:text-base group-hover:text-[#23B349] transition-colors leading-tight">
                  {action.label}
                </p>
                <p className="text-xs text-gray-400 mt-1">{action.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CMS notice ── */}
        <div className="mt-6 lg:mt-8 rounded-[16px] lg:rounded-[18px] border border-[#23B349]/20 bg-[#23B349]/5 px-4 lg:px-6 py-4 lg:py-5 flex items-center gap-3 lg:gap-4">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-[10px] lg:rounded-[12px] bg-[#23B349]/15 flex items-center justify-center shrink-0">
            <FileText size={17} className="text-[#23B349]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[#333733]">100% CMS Managed</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Every page and all content on the public website is controlled from this dashboard.
            </p>
          </div>
          <Link
            href="/pages"
            className="shrink-0 text-xs font-bold text-[#23B349] hover:underline whitespace-nowrap"
          >
            Go to Pages →
          </Link>
        </div>
      </div>
    </>
  );
}
