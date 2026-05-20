import api from '@/lib/api';

export interface LocalizedText {
  en: string;
  am: string;
}

export type NewsCategory =
  | 'news'
  | 'updates'
  | 'market-insights'
  | 'company-news'
  | 'product-updates';

export interface NewsPayload {
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
  category: NewsCategory;
  coverImage: string;
  readTime: string;
  publishedAt: string;
  isPublished?: boolean;
}

export interface NewsItem extends Omit<NewsPayload, 'publishedAt'> {
  _id: string;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const newsApi = {
  list: async () => (await api.get<NewsItem[]>('/news/admin/all')).data,
  create: async (payload: NewsPayload) => (await api.post<NewsItem>('/news', payload)).data,
  update: async (id: string, payload: Partial<NewsPayload>) =>
    (await api.put<NewsItem>(`/news/${id}`, payload)).data,
  remove: async (id: string) => (await api.delete(`/news/${id}`)).data,
};
