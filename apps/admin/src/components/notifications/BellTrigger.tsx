"use client";

import { Bell } from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';

export default function BellTrigger() {
  const { unreadCount, isOpen, openPanel, closePanel } = useNotifications();
  const displayCount = unreadCount > 99 ? '99+' : unreadCount;

  return (
    <button
      onClick={isOpen ? closePanel : openPanel}
      onPointerDown={(e) => e.stopPropagation()}
      className="relative w-9 h-9 rounded-[10px] bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
      aria-label="Notifications"
    >
      <Bell size={16} className="text-gray-500" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 bg-[#23B349] rounded-full flex items-center justify-center text-white text-[9px] font-bold leading-none">
          {displayCount}
        </span>
      )}
    </button>
  );
}
