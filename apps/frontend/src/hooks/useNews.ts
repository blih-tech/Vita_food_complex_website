"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';

export interface NewsArticle {
  _id: string;
  slug: string;
  title: { en: string; am?: string };
  summary: { en: string; am?: string };
  content: { en: string; am?: string };
  category: string;
  coverImage: string;
  readTime: string;
  publishedAt: string;
  isPublished: boolean;
}

export function useNews(category?: string) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<NewsArticle[]>('/news')
      .then(res => setNews(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = category && category !== 'all-news'
    ? news.filter(n => n.category === category)
    : news;

  return { news: filtered, allNews: news, loading };
}

export function useNewsArticle(slug: string) {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    api.get<NewsArticle>(`/news/${slug}`)
      .then(res => setArticle(res.data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return { article, loading, notFound };
}
