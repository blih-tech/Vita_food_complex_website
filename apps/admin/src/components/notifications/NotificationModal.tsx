"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bell,
  CheckCheck,
  MessageSquare,
  HeartHandshake,
  Truck,
  Gift,
  X,
  Trash2,
  Circle,
} from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';
import { Notification, NotificationType } from '@/lib/notificationsApi';

const TYPE_META: Record<
  NotificationType,
  { icon: React.ElementType; color: string; bg: string; label: string }
> = {
  contact_message: {
    icon: MessageSquare,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    label: 'Message',
  },
  customer_care: {
    icon: HeartHandshake,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    label: 'Customer Care',
  },
  distributor_application: {
    icon: Truck,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    label: 'Distributor',
  },
  donation: {
    icon: Gift,
    color: 'text-[#23B349]',
    bg: 'bg-green-50',
    label: 'Donation',
  },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

function NotificationItem({
  notification,
  onRead,
  onRemove,
  onNavigate,
}: {
  notification: Notification;
  onRead: (id: string) => void;
  onRemove: (id: string) => void;
  onNavigate: (n: Notification) => void;
}) {
  const meta = TYPE_META[notification.type];
  const Icon = meta.icon;

  return (
    <div
      className={`group relative flex gap-3 px-4 py-3.5 transition-colors cursor-pointer hover:bg-gray-50 ${
        !notification.isRead ? 'bg-green-50/40' : ''
      }`}
      onClick={() => onNavigate(notification)}
    >
      {/* Type icon */}
      <div
        className={`shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center ${meta.bg}`}
      >
        <Icon size={16} className={meta.color} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm font-medium text-gray-800 leading-tight truncate ${!notification.isRead ? 'font-semibold' : ''}`}>
            {notification.title}
          </p>
          <span className="shrink-0 text-xs text-gray-400 mt-0.5">
            {timeAgo(notification.createdAt)}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
          {notification.body}
        </p>
        <span
          className={`inline-flex items-center mt-1.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${meta.bg} ${meta.color}`}
        >
          {meta.label}
        </span>
      </div>

      {/* Unread dot */}
      {!notification.isRead && (
        <div className="absolute right-10 top-4 w-2 h-2 rounded-full bg-[#23B349]" />
      )}

      {/* Delete button — shows on hover */}
      <button
        className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 rounded-lg flex items-center justify-center hover:bg-red-50 text-gray-400 hover:text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(notification._id);
        }}
        aria-label="Delete notification"
      >
        <Trash2 size={12} />
      </button>
    </div>
  );
}

type Tab = 'all' | 'unread';

export default function NotificationModal() {
  const router = useRouter();
  const {
    notifications,
    unreadCount,
    isOpen,
    loading,
    closePanel,
    markAsRead,
    markAllAsRead,
    removeNotification,
  } = useNotifications();

  const [tab, setTab] = useState<Tab>('all');
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside pointer-down (works for both mouse and touch)
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        closePanel();
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [isOpen, closePanel]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePanel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, closePanel]);

  const handleNavigate = async (n: Notification) => {
    if (!n.isRead) await markAsRead(n._id);
    closePanel();
    router.push(n.link);
  };

  const displayed = tab === 'unread'
    ? notifications.filter((n) => !n.isRead)
    : notifications;

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={closePanel} />

      {/* Panel */}
      <div
        ref={panelRef}
        onPointerDown={(e) => e.stopPropagation()}
        className={`
          fixed z-50 bg-white shadow-2xl flex flex-col font-['Outfit']
          bottom-0 left-0 right-0 rounded-t-2xl max-h-[85dvh]
          lg:bottom-[88px] lg:left-4 lg:right-auto
          lg:w-[400px] lg:max-h-[560px] lg:rounded-2xl
          border border-gray-100
        `}
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-[10px] flex items-center justify-center"
              style={{
                background:
                  'radial-gradient(ellipse at 4px 16px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)',
              }}
            >
              <Bell size={14} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 text-sm leading-tight">Notifications</h2>
              {unreadCount > 0 && (
                <p className="text-[11px] text-gray-400 leading-tight">{unreadCount} unread</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-1.5 text-xs text-[#23B349] font-medium hover:bg-green-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <CheckCheck size={13} />
                Mark all read
              </button>
            )}
            <button
              onClick={closePanel}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-400 transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-5 pb-3 shrink-0">
          {(['all', 'unread'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                tab === t
                  ? 'bg-[#23B349] text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {t}
              {t === 'unread' && unreadCount > 0 && (
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                  tab === t ? 'bg-white/25 text-white' : 'bg-[#23B349]/10 text-[#23B349]'
                }`}>
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 shrink-0" />

        {/* List */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {loading && notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <div className="w-8 h-8 border-2 border-[#23B349] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm">Loading...</p>
            </div>
          ) : displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400 px-6 text-center">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-3"
                style={{
                  background:
                    'radial-gradient(ellipse at 4px 24px, rgba(31,214,80,0.15) 0%, rgba(35,179,73,0.1) 60%)',
                }}
              >
                <Bell size={20} className="text-[#23B349]/60" />
              </div>
              <p className="text-sm font-medium text-gray-500">
                {tab === 'unread' ? 'No unread notifications' : 'No notifications yet'}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {tab === 'unread'
                  ? "You're all caught up!"
                  : 'New messages and submissions will appear here'}
              </p>
            </div>
          ) : (
            displayed.map((n) => (
              <NotificationItem
                key={n._id}
                notification={n}
                onRead={markAsRead}
                onRemove={removeNotification}
                onNavigate={handleNavigate}
              />
            ))
          )}
        </div>

        {/* Footer — mobile drag handle hint */}
        <div className="lg:hidden flex justify-center pt-2 pb-3 shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>
      </div>
    </>
  );
}
