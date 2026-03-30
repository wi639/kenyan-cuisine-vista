export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  dietary: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy')[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
}