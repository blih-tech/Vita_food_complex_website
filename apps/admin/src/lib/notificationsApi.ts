import api from '@/lib/api';

export type NotificationType =
  | 'contact_message'
  | 'customer_care'
  | 'distributor_application'
  | 'donation';

export interface Notification {
  _id: string;
  type: NotificationType;
  title: string;
  body: string;
  isRead: boolean;
  link: string;
  resourceId?: string;
  createdAt: string;
  updatedAt: string;
}

export const notificationsApi = {
  list: async (): Promise<Notification[]> =>
    (await api.get<Notification[]>('/notifications')).data,

  getUnreadCount: async (): Promise<number> =>
    (await api.get<{ count: number }>('/notifications/unread-count')).data.count,

  markAsRead: async (id: string): Promise<Notification> =>
    (await api.patch<Notification>(`/notifications/${id}/read`)).data,

  markAllAsRead: async (): Promise<void> => {
    await api.patch('/notifications/read-all');
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/notifications/${id}`);
  },
};
