"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { FileText, Edit, Plus, Trash2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PagesListPage() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get('/content/pages');
      setPages(response.data);
    } catch (error) {
      console.error('Failed to fetch pages:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23B349]"></div>
      </div>
    );
  }

  return (
    <>
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-[#404040]">Manage Pages</h1>
        <button className="bg-[#23B349] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1fa041] transition-all">
          <Plus size={20} />
          Create New Page
        </button>
      </header>

      <div className="p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-[#404040]">Title</th>
                <th className="px-6 py-4 font-bold text-[#404040]">Slug</th>
                <th className="px-6 py-4 font-bold text-[#404040]">Sections</th>
                <th className="px-6 py-4 font-bold text-[#404040]">Last Updated</th>
                <th className="px-6 py-4 font-bold text-[#404040] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pages.map((page) => (
                <tr key={page.slug} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText size={20} className="text-[#23B349]" />
                      <span className="font-medium text-[#404040]">{page.title.en}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-sm">/{page.slug}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-bold">
                      {page.sections?.length || 0} Sections
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={page.slug === 'home' ? '/home' : `/pages/${page.slug}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit Page"
                      >
                        <Edit size={18} />
                      </Link>
                      <a 
                        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/${page.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-[#23B349] hover:bg-green-50 rounded-lg transition-all"
                        title="View Live"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <button 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Page"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pages.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-gray-500">No pages found. Create your first page to get started!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
