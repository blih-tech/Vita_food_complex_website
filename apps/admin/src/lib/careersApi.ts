import api from '@/lib/api';

export interface LocalizedText {
  en: string;
  am: string;
}

export interface CareerPayload {
  title: LocalizedText;
  location: LocalizedText;
  type: LocalizedText;
  department: LocalizedText;
  reportsTo?: LocalizedText;
  summary: LocalizedText;
  responsibilities?: LocalizedText[];
  requirements?: LocalizedText[];
  benefits?: LocalizedText[];
  active?: boolean;
}

export interface CareerItem extends CareerPayload {
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const careersApi = {
  list: async () => (await api.get<CareerItem[]>('/jobs')).data,
  create: async (payload: CareerPayload) => (await api.post<CareerItem>('/jobs', payload)).data,
  update: async (id: string, payload: Partial<CareerPayload>) =>
    (await api.put<CareerItem>(`/jobs/${id}`, payload)).data,
  remove: async (id: string) => (await api.delete(`/jobs/${id}`)).data,
};
