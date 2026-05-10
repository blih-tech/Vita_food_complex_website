"use client";

import { useState, useEffect } from 'react';
import {
  Users, Plus, Pencil, Trash2, X, Check, ShieldCheck,
  User, Mail, KeyRound, Search,
} from 'lucide-react';
import api from '@/lib/api';
import { useAuth } from '@/context/AuthContext';

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'admin';
  permissions: string[];
  createdAt: string;
}

const ROLE_STYLES = {
  superadmin: 'bg-purple-50 text-purple-600 border border-purple-200',
  admin: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
};

import { navSections } from '@/components/layout/Sidebar';

const ALL_PERMISSIONS = navSections
  .flatMap((s: any) => s.items.map((i: any) => ({ id: i.id, label: i.label })))
  .filter((p: any) => p.id !== 'users');

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[20px] shadow-2xl w-full max-w-md p-6 z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-['Funnel_Display'] font-bold text-[#333733] text-lg">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X size={15} className="text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: any; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-sm font-semibold text-[#333733] mb-2">
        <Icon size={13} className="text-gray-400" />{label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[12px] text-[#333733] text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/40 focus:border-[#23B349] transition-all";
const selectCls = inputCls + " cursor-pointer";

export default function UsersPage() {
  const { user: me } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Modals
  const [showCreate, setShowCreate] = useState(false);
  const [editUser, setEditUser] = useState<AdminUser | null>(null);
  const [deleteUser, setDeleteUser] = useState<AdminUser | null>(null);

  // Form state
  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
    role: 'superadmin' | 'admin';
    permissions: string[];
  }>({ name: '', email: '', password: '', role: 'admin', permissions: [] });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const { data } = await api.get('/users');
      setUsers(data);
    } catch { /* handled by proxy redirect */ }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const openCreate = () => {
    setForm({ name: '', email: '', password: '', role: 'admin', permissions: [] });
    setError('');
    setShowCreate(true);
  };

  const openEdit = (u: AdminUser) => {
    setForm({ name: u.name, email: u.email, password: '', role: u.role, permissions: u.permissions || [] });
    setError('');
    setEditUser(u);
  };

  const handleCreate = async () => {
    if (!form.name || !form.email || !form.password) { setError('All fields are required.'); return; }
    setSaving(true); setError('');
    try {
      await api.post('/users', form);
      setShowCreate(false);
      load();
    } catch (e: any) {
      setError(e.response?.data?.message || 'Failed to create user.');
    } finally { setSaving(false); }
  };

  const handleEdit = async () => {
    if (!editUser) return;
    setSaving(true); setError('');
    try {
      await api.put(`/users/${editUser._id}`, { 
        name: form.name, 
        email: form.email, 
        role: form.role,
        permissions: form.role === 'superadmin' ? [] : form.permissions 
      });
      if (form.password) await api.put(`/users/${editUser._id}/password`, { password: form.password });
      setEditUser(null);
      load();
    } catch (e: any) {
      setError(e.response?.data?.message || 'Failed to update user.');
    } finally { setSaving(false); }
  };

  const togglePermission = (id: string) => {
    setForm(prev => ({
      ...prev,
      permissions: prev.permissions.includes(id)
        ? prev.permissions.filter(p => p !== id)
        : [...prev.permissions, id]
    }));
  };

  const handleDelete = async () => {
    if (!deleteUser) return;
    setSaving(true);
    try {
      await api.delete(`/users/${deleteUser._id}`);
      setDeleteUser(null);
      load();
    } catch { /* ignore */ }
    finally { setSaving(false); }
  };

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      {/* Desktop header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10 font-['Outfit']">
        <div>
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733] leading-none">User Management</h1>
          <p className="text-[11px] text-gray-400 mt-0.5">{today}</p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-[12px] transition-all hover:shadow-md"
          style={{ background: 'radial-gradient(ellipse at 10px 20px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}
        >
          <Plus size={15} /> Add User
        </button>
      </header>

      <div className="p-4 sm:p-6 lg:p-8 font-['Outfit']">
        {/* Mobile add button */}
        <div className="flex items-center justify-between mb-5 lg:hidden">
          <h2 className="font-['Funnel_Display'] font-bold text-[#333733] text-lg">User Management</h2>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-3 py-2 rounded-[10px]"
            style={{ background: 'radial-gradient(ellipse at 10px 20px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}
          >
            <Plus size={14} /> Add
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Total Users', value: users.length, color: 'text-[#23B349]' },
            { label: 'Superadmins', value: users.filter(u => u.role === 'superadmin').length, color: 'text-purple-600' },
            { label: 'Admins', value: users.filter(u => u.role === 'admin').length, color: 'text-emerald-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-[16px] border border-gray-100 px-5 py-4">
              <p className={`font-['Funnel_Display'] font-bold text-3xl ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-[12px] text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/40 focus:border-[#23B349] transition-all"
          />
        </div>

        {/* Table / Cards */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">No users found.</div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden lg:block bg-white rounded-[18px] border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['User', 'Email', 'Role', 'Joined', 'Actions'].map(h => (
                      <th key={h} className="text-left text-[11px] font-bold uppercase tracking-wider text-gray-400 px-6 py-4 first:pl-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map(u => (
                    <tr key={u._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                            style={{ background: 'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}>
                            {u.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#333733]">{u.name}</p>
                            {u._id === me?.id && <p className="text-[10px] text-[#23B349] font-medium">You</p>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${ROLE_STYLES[u.role]}`}>
                          {(u.role === 'admin' || u.role === 'superadmin') && <ShieldCheck size={11} />}
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => openEdit(u)} className="w-8 h-8 rounded-[8px] bg-gray-50 hover:bg-blue-50 hover:text-blue-500 flex items-center justify-center text-gray-400 transition-colors">
                            <Pencil size={14} />
                          </button>
                          {u._id !== me?.id && (
                            <button onClick={() => setDeleteUser(u)} className="w-8 h-8 rounded-[8px] bg-gray-50 hover:bg-red-50 hover:text-red-500 flex items-center justify-center text-gray-400 transition-colors">
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-3">
              {filtered.map(u => (
                <div key={u._id} className="bg-white rounded-[16px] border border-gray-100 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                    style={{ background: 'radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}>
                    {u.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-[#333733] truncate">{u.name}</p>
                      {u._id === me?.id && <span className="text-[10px] text-[#23B349] font-semibold">You</span>}
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${ROLE_STYLES[u.role]}`}>{u.role}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{u.email}</p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button onClick={() => openEdit(u)} className="w-8 h-8 rounded-[8px] bg-gray-50 hover:bg-blue-50 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
                      <Pencil size={14} />
                    </button>
                    {u._id !== me?.id && (
                      <button onClick={() => setDeleteUser(u)} className="w-8 h-8 rounded-[8px] bg-gray-50 hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Create modal */}
      {showCreate && (
        <Modal title="Add New User" onClose={() => setShowCreate(false)}>
          <div className="space-y-4">
            {error && <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-[10px] px-4 py-2.5">{error}</p>}
            <Field label="Full Name" icon={User}>
              <input className={inputCls} placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </Field>
            <Field label="Email Address" icon={Mail}>
              <input className={inputCls} type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </Field>
            <Field label="Password" icon={KeyRound}>
              <input className={inputCls} type="password" placeholder="Min 6 characters" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            </Field>
            <Field label="Role" icon={ShieldCheck}>
              <select className={selectCls} value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value as any }))}>
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </Field>

            {form.role === 'admin' && (
              <Field label="Sidebar Permissions" icon={Users}>
                <div className="grid grid-cols-2 gap-2 mt-2 max-h-[200px] overflow-y-auto p-2 bg-gray-50 rounded-[12px] border border-gray-100">
                  {ALL_PERMISSIONS.map((p: any) => (
                    <label key={p.id} className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#23B349] focus:ring-[#23B349]"
                        checked={form.permissions.includes(p.id)}
                        onChange={() => togglePermission(p.id)}
                      />
                      <span className="text-xs font-medium text-gray-600">{p.label}</span>
                    </label>
                  ))}
                </div>
              </Field>
            )}
            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowCreate(false)} className="flex-1 py-3 rounded-[12px] border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleCreate} disabled={saving} className="flex-1 py-3 rounded-[12px] text-white text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ background: 'radial-gradient(ellipse at 10px 20px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}>
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Check size={15} /> Create User</>}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Edit modal */}
      {editUser && (
        <Modal title="Edit User" onClose={() => setEditUser(null)}>
          <div className="space-y-4">
            {error && <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-[10px] px-4 py-2.5">{error}</p>}
            <Field label="Full Name" icon={User}>
              <input className={inputCls} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </Field>
            <Field label="Email Address" icon={Mail}>
              <input className={inputCls} type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </Field>
            <Field label="New Password" icon={KeyRound}>
              <input className={inputCls} type="password" placeholder="Leave blank to keep current" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            </Field>
            <Field label="Role" icon={ShieldCheck}>
              <select className={selectCls} value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value as any }))}>
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </Field>

            {form.role === 'admin' && (
              <Field label="Sidebar Permissions" icon={Users}>
                <div className="grid grid-cols-2 gap-2 mt-2 max-h-[200px] overflow-y-auto p-2 bg-gray-50 rounded-[12px] border border-gray-100">
                  {ALL_PERMISSIONS.map((p: any) => (
                    <label key={p.id} className="flex items-center gap-2 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#23B349] focus:ring-[#23B349]"
                        checked={form.permissions.includes(p.id)}
                        onChange={() => togglePermission(p.id)}
                      />
                      <span className="text-xs font-medium text-gray-600">{p.label}</span>
                    </label>
                  ))}
                </div>
              </Field>
            )}
            <div className="flex gap-3 pt-2">
              <button onClick={() => setEditUser(null)} className="flex-1 py-3 rounded-[12px] border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleEdit} disabled={saving} className="flex-1 py-3 rounded-[12px] text-white text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ background: 'radial-gradient(ellipse at 10px 20px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)' }}>
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Check size={15} /> Save Changes</>}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete confirmation */}
      {deleteUser && (
        <Modal title="Delete User" onClose={() => setDeleteUser(null)}>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <Trash2 size={24} className="text-red-500" />
            </div>
            <p className="text-[#333733] font-semibold mb-1">Delete <span className="text-red-500">{deleteUser.name}</span>?</p>
            <p className="text-gray-400 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteUser(null)} className="flex-1 py-3 rounded-[12px] border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={handleDelete} disabled={saving} className="flex-1 py-3 rounded-[12px] bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors disabled:opacity-60">
                {saving ? 'Deleting…' : 'Delete'}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
