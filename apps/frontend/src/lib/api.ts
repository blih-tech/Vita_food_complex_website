import axios from 'axios';

const raw = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4002/api/v1';
const urls = raw.split(',').map((u) => u.trim());
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

export default api;
