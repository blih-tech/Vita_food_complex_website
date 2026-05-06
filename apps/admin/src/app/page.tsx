"use client";

import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <>
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-[#404040]">Dashboard Overview</h1>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-[#404040]">{user.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user.role}</p>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-[#404040] font-bold">
            {user.name.charAt(0)}
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: '11+', color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Job Openings', value: '5', color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'New Messages', value: '12', color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Site Visits', value: '1.2k', color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-[#404040] mb-4">Welcome back, {user.name}!</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Use the sidebar to manage different sections of the Vita Food Complex website. 
            You can update products, manage career listings, respond to contact messages, 
            and edit page content directly from this dashboard.
          </p>
        </div>
      </div>
    </>
  );
}
