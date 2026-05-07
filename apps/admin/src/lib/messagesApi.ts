import api from '@/lib/api';

export type MessageStatus = 'new' | 'read' | 'archived';

export interface ContactMessageItem {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
  status: MessageStatus;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const messagesApi = {
  list: async () => (await api.get<ContactMessageItem[]>('/contact-messages')).data,
  get: async (id: string) => (await api.get<ContactMessageItem>(`/contact-messages/${id}`)).data,
  update: async (id: string, status: MessageStatus) =>
    (await api.put<ContactMessageItem>(`/contact-messages/${id}`, { status })).data,
  remove: async (id: string) => (await api.delete(`/contact-messages/${id}`)).data,
};
