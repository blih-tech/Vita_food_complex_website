"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';
import NotificationModal from '@/components/notifications/NotificationModal';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50 font-['Outfit']">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Notification modal — rendered once at layout root, always accessible */}
      <NotificationModal />

      <main className="flex-1 lg:ml-64 min-w-0">
        {/* Mobile-only top bar */}
        <header className="lg:hidden h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-5 font-['Outfit']">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-9 h-9 rounded-[10px] bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <Menu size={18} className="text-gray-500" />
            </button>
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 8px 18px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
                }}
              >
                <div className="relative w-4 h-4">
                  <Image src="/assets/brand/vita-logo.svg" alt="Vita" fill className="object-contain" />
                </div>
              </div>
              <span className="font-['Funnel_Display'] font-bold text-[#333733] text-sm">Vita Admin</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/settings?tab=profile"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm hover:opacity-80 transition-opacity"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
                boxShadow: '0 2px 8px rgba(35,179,73,0.35)',
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </Link>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
