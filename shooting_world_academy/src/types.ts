export interface Product {
  id: string;
  name: string;
  color: string;
  priceGBP: number;
  image: string;
  fallbackImage: string;
  category: string;
  url: string;
  description: string;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  url: string;
  image: string;
  fallbackImage: string;
  excerpt: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  priceGBP: number;
  url: string;
  image: string;
  fallbackImage: string;
  spotsLeft: number;
}

export interface GunroomLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  url: string;
  image: string;
  fallbackImage: string;
  description: string;
  features: string[];
}

export type Currency = 'GBP' | 'USD' | 'EUR';
