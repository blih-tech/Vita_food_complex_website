"use client";

import {
  LayoutDashboard, FileText, ShoppingBag, Briefcase,
  MessageSquare, Users, Settings, LogOut, ChevronRight, X, Newspaper, Heart, HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const navSections = [
  {
    label: 'Content',
    items: [
      { icon: LayoutDashboard, label: 'Overview', href: '/' },
      { icon: FileText,         label: 'Pages',    href: '/pages' },
    ],
  },
  {
    label: 'Catalogue',
    items: [
      { icon: ShoppingBag, label: 'Products', href: '/products' },
      { icon: Briefcase,   label: 'Careers',  href: '/careers' },
    ],
  },
  {
    label: 'Engagement',
    items: [
      { icon: Newspaper,    label: 'News',      href: '/news' },
      { icon: Heart,        label: 'Donations', href: '/donations' },
      { icon: HelpCircle,   label: 'FAQs',      href: '/faqs' },
      { icon: MessageSquare, label: 'Messages', href: '/messages' },
      { icon: Users,         label: 'Users',    href: '/users' },
    ],
  },
  {
    label: 'System',
    items: [
      { icon: Settings, label: 'Settings', href: '/settings' },
    ],
  },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <aside
      className={[
        'w-64 bg-white border-r border-gray-100 flex flex-col fixed inset-y-0 z-20',
        'font-[\'Outfit\'] transition-transform duration-300 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
      ].join(' ')}
    >
      {/* ── Logo ── */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden ml-auto order-last w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={15} className="text-gray-500" />
          </button>

          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm"
            style={{
              background:
                'radial-gradient(ellipse at 8px 18px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
            }}
          >
            <div className="relative w-5 h-5">
              <Image
                src="/assets/brand/vita-logo.svg"
                alt="Vita"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <p className="font-['Funnel_Display'] font-bold text-[#333733] text-[15px] leading-none">
              Vita Admin
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">Content Dashboard</p>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4 scrollbar-hide">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 mb-1.5">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-[12px] transition-all group ${
                      active
                        ? 'text-white shadow-sm'
                        : 'text-gray-500 hover:text-[#23B349] hover:bg-[#23B349]/10'
                    }`}
                    style={
                      active
                        ? {
                            background:
                              'radial-gradient(ellipse at 10px 20px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
                            boxShadow: '0 2px 10px rgba(35,179,73,0.3)',
                          }
                        : {}
                    }
                  >
                    <item.icon
                      size={16}
                      className={
                        active
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-[#23B349] transition-colors'
                      }
                    />
                    <span className={`text-sm font-medium flex-1 ${active ? 'text-white' : ''}`}>
                      {item.label}
                    </span>
                    {active && <ChevronRight size={13} className="text-white/70" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ── User & Logout ── */}
      <div className="border-t border-gray-100 p-3 space-y-1">
        {user && (
          <Link
            href="/settings?tab=profile"
            className="flex items-center gap-3 px-3 py-2.5 rounded-[12px] bg-gray-50 hover:bg-[#23B349]/10 hover:border-[#23B349]/20 border border-transparent transition-all mb-2 group"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
              }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#333733] group-hover:text-[#23B349] truncate leading-none mb-0.5 transition-colors">
                {user.name}
              </p>
              <p className="text-[11px] text-gray-400 capitalize">{user.role}</p>
            </div>
          </Link>
        )}

        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-[12px] transition-all group text-sm font-medium"
        >
          <LogOut size={15} className="group-hover:translate-x-0.5 transition-transform" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
