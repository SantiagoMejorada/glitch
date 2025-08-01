// Layout Props
export interface LayoutProps {
  title: string;
  description?: string;
  image?: string;
}

// Header Props
export interface HeaderProps {
  currentPath: string;
}

// Category Types
export type Category = 'reseñas' | 'opiniones' | 'noticias';

export interface CategoryConfig {
  name: Category;
  color: 'red' | 'blue' | 'yellow'; // Corresponde a --accent-1, --accent-2, --accent-3
  displayName: string;
}

// Post Types
export interface PostFrontmatter {
  title: string;
  description: string;
  publishDate: Date;
  category: Category;
  image: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: 'blog';
  data: PostFrontmatter;
}

// Card Props
export interface GameCardProps {
  title: string;
  description: string;
  category: Category;
  image: string;
  slug: string;
  publishDate: Date;
}

export interface SpotlightCardProps {
  title: string;
  description: string;
  category: Category;
  image: string;
  slug: string;
  publishDate: Date;
}