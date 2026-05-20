import api from '@/lib/api';

export type CareSubmissionStatus = 'new' | 'read' | 'archived';

export interface CustomerCareSubmissionItem {
  _id: string;
  kind: 'feedback' | 'complaint' | 'compliment';
  locale: string;
  summary: string;
  payload: Record<string, unknown>;
  status: CareSubmissionStatus;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const customerCareSubmissionsApi = {
  list: async () => (await api.get<CustomerCareSubmissionItem[]>('/customer-care-submissions')).data,
  get: async (id: string) =>
    (await api.get<CustomerCareSubmissionItem>(`/customer-care-submissions/${id}`)).data,
  update: async (id: string, status: CareSubmissionStatus) =>
    (await api.put<CustomerCareSubmissionItem>(`/customer-care-submissions/${id}`, { status })).data,
  remove: async (id: string) => (await api.delete(`/customer-care-submissions/${id}`)).data,
};
