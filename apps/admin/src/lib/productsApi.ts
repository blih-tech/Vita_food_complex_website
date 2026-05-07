import api from '@/lib/api';

export interface LocalizedText {
  en: string;
  am: string;
}

export interface ProductPayload {
  id: string;
  name: LocalizedText;
  category: 'Biscuit' | 'Flour';
  media: { image: string; gallery?: string[] };
  ui: { bgColor: string; textColor: string; nameColor: string };
  content: { description: LocalizedText };
  available?: boolean;
}

export interface ProductItem extends ProductPayload {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export const productsApi = {
  list: async () => (await api.get<ProductItem[]>('/products')).data,
  create: async (payload: ProductPayload) => (await api.post<ProductItem>('/products', payload)).data,
  update: async (id: string, payload: Partial<ProductPayload>) =>
    (await api.put<ProductItem>(`/products/${id}`, payload)).data,
  remove: async (id: string) => (await api.delete(`/products/${id}`)).data,
};
