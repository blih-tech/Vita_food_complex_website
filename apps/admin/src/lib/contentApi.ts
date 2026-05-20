import api from './api';

export const contentApi = {
  getPage: async (slug: string) => (await api.get<{ sections: any[] }>(`/content/pages/${slug}`)).data,
};
