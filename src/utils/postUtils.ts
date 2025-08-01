import type { BlogPost, Category, CategoryConfig } from '../types';

/**
 * Configuración de categorías con colores distintivos
 * Mapea cada categoría a su color correspondiente según las variables CSS
 */
export const categoryConfigs: CategoryConfig[] = [
  { name: 'reseñas', color: 'red', displayName: 'Review' },      // --accent-1: #ff003c
  { name: 'opiniones', color: 'yellow', displayName: 'Opinión' }, // --accent-3: #ffd500
  { name: 'noticias', color: 'blue', displayName: 'Noticias' }    // --accent-2: #00c3ff
];

/**
 * Obtiene la configuración de una categoría específica
 * @param category - La categoría a buscar
 * @returns La configuración de la categoría o undefined si no se encuentra
 */
export function getCategoryConfig(category: Category): CategoryConfig | undefined {
  return categoryConfigs.find(config => config.name === category);
}

/**
 * Obtiene el color CSS correspondiente a una categoría
 * @param category - La categoría
 * @returns El color CSS (red, blue, yellow)
 */
export function getCategoryColor(category: Category): string {
  const config = getCategoryConfig(category);
  return config?.color || 'blue';
}

/**
 * Obtiene el nombre de display de una categoría
 * @param category - La categoría
 * @returns El nombre para mostrar en la UI
 */
export function getCategoryDisplayName(category: Category): string {
  const config = getCategoryConfig(category);
  return config?.displayName || category;
}

/**
 * Ordena posts por fecha de publicación (más reciente primero)
 * @param posts - Array de posts a ordenar
 * @returns Array de posts ordenados por fecha descendente
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.data.publishDate);
    const dateB = new Date(b.data.publishDate);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Filtra posts por categoría
 * @param posts - Array de posts a filtrar
 * @param category - Categoría por la cual filtrar
 * @returns Array de posts filtrados por categoría
 */
export function filterPostsByCategory(posts: BlogPost[], category: Category): BlogPost[] {
  return posts.filter(post => post.data.category === category);
}

/**
 * Obtiene posts destacados (featured)
 * @param posts - Array de posts
 * @returns Array de posts marcados como destacados
 */
export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter(post => post.data.featured);
}

/**
 * Obtiene el post más reciente
 * @param posts - Array de posts
 * @returns El post más reciente o undefined si no hay posts
 */
export function getLatestPost(posts: BlogPost[]): BlogPost | undefined {
  const sortedPosts = sortPostsByDate(posts);
  return sortedPosts[0];
}

/**
 * Obtiene los posts más recientes excluyendo uno específico
 * @param posts - Array de posts
 * @param excludeSlug - Slug del post a excluir
 * @param limit - Número máximo de posts a retornar (default: 3)
 * @returns Array de posts recientes excluyendo el especificado
 */
export function getRecentPosts(posts: BlogPost[], excludeSlug?: string, limit: number = 3): BlogPost[] {
  let filteredPosts = posts;
  
  if (excludeSlug) {
    filteredPosts = posts.filter(post => post.slug !== excludeSlug);
  }
  
  const sortedPosts = sortPostsByDate(filteredPosts);
  return sortedPosts.slice(0, limit);
}

/**
 * Busca posts por texto en título o descripción
 * @param posts - Array de posts
 * @param searchTerm - Término de búsqueda
 * @returns Array de posts que coinciden con la búsqueda
 */
export function searchPosts(posts: BlogPost[], searchTerm: string): BlogPost[] {
  const term = searchTerm.toLowerCase();
  return posts.filter(post => 
    post.data.title.toLowerCase().includes(term) ||
    post.data.description.toLowerCase().includes(term)
  );
}

/**
 * Agrupa posts por categoría
 * @param posts - Array de posts
 * @returns Objeto con posts agrupados por categoría
 */
export function groupPostsByCategory(posts: BlogPost[]): Record<Category, BlogPost[]> {
  const grouped: Record<Category, BlogPost[]> = {
    'reseñas': [],
    'opiniones': [],
    'noticias': []
  };

  posts.forEach(post => {
    grouped[post.data.category].push(post);
  });

  // Ordenar cada grupo por fecha
  Object.keys(grouped).forEach(category => {
    grouped[category as Category] = sortPostsByDate(grouped[category as Category]);
  });

  return grouped;
}