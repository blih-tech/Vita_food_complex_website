// Shared TypeScript interfaces — used by frontend, admin, and backend

export interface User {
  _id: string
  name: string
  email: string
  role: 'admin' | 'staff' | 'customer'
  createdAt: string
  updatedAt: string
}

export interface Order {
  _id: string
  userId: string
  items: OrderItem[]
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  total: number
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  productId: string
  name: string
  quantity: number
  price: number
}

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  imageUrl?: string
  available: boolean
  createdAt: string
  updatedAt: string
}

export interface ContentPage {
  _id: string
  slug: string
  title: string
  body: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface SiteSettings {
  siteName: string
  logoUrl?: string
  contactEmail: string
  phone?: string
  address?: string
  socialLinks?: Record<string, string>
}
