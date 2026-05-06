"use client";

import { LayoutDashboard, FileText, ShoppingBag, Users, Settings, LogOut, Briefcase, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/' },
    { icon: FileText, label: 'Pages', href: '/pages' },
    { icon: ShoppingBag, label: 'Products', href: '/products' },
    { icon: Briefcase, label: 'Careers', href: '/careers' },
    { icon: MessageSquare, label: 'Contact Messages', href: '/messages' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-20">
      <div className="p-6 border-b border-gray-100 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#23B349] rounded-lg flex items-center justify-center text-white font-bold">V</div>
        <span className="font-bold text-xl text-[#404040]">Vita Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-[#23B349] text-white shadow-lg shadow-[#23B349]/20' 
                  : 'text-gray-600 hover:bg-[#23B349]/5 hover:text-[#23B349]'
              }`}
            >
              <item.icon size={20} className={`${isActive ? '' : 'group-hover:scale-110'} transition-transform`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all group"
        >
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
