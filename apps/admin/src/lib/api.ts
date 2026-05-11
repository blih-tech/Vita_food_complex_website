import axios from 'axios';
import Cookies from 'js-cookie';

/** Nest global prefix is `api/v1`; accept env that only sets host:port. */
function withApiV1Base(url: string): string {
  const trimmed = url.replace(/\/+$/, '');
  if (trimmed.endsWith('/api/v1')) return trimmed;
  return `${trimmed}/api/v1`;
}

const raw = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4002/api/v1';
const urls = raw.split(',').map((u) => withApiV1Base(u.trim()));
const API_URL =
  urls.length > 1
    ? process.env.NODE_ENV === 'production'
      ? (urls.find((u) => !u.includes('localhost')) ?? urls[0])
      : urls[0]
    : urls[0];

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
