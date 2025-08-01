// ===== RUTAS DE NAVEGACIÓN =====
export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/acerca-de-mi',
} as const;

// ===== CONFIGURACIÓN DE UI =====
export const UI_CONFIG = {
  BRAND_NAME: 'Glitch',
  NAV_LABELS: {
    HOME: 'Inicio',
    BLOG: 'Blog',
    ABOUT: 'Acerca de mí',
  },
  THEME_TOGGLE: {
    TITLE: 'Cambiar tema',
    BUTTON_ID: 'theme-toggle',
  },
  PAGE_TITLES: {
    HOME: 'Glitch | Blog Gamer',
    BLOG: 'Blog | Glitch',
    ABOUT: 'Acerca de mí | Glitch',
  },
} as const;

// ===== CONFIGURACIÓN DE TEMA =====
export const THEME = {
  KEYS: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  STORAGE_KEY: 'theme',
  CSS_CLASS: 'light',
} as const;

// ===== META TAGS Y SEO =====
export const SEO = {
  DEFAULT_DESCRIPTION: 'Blog gaming con reseñas, noticias y opiniones sobre videojuegos',
  DEFAULT_IMAGE: '/favicon.svg',
  LOCALE: 'es_ES',
  LANGUAGE: 'es',
  GENERATOR: 'Astro',
} as const;

// ===== FUENTES GOOGLE =====
export const FONTS = {
  GOOGLE_FONTS_URL: 'https://fonts.googleapis.com',
  GOOGLE_FONTS_STATIC_URL: 'https://fonts.gstatic.com',
  IMPORT_URL: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Inter:wght@400;600&family=Bungee&display=swap',
  FAMILIES: {
    ORBITRON: 'Orbitron',
    INTER: 'Inter',
    BUNGEE: 'Bungee',
  },
  STACKS: {
    ORBITRON_STACK: "'Orbitron', sans-serif",
    INTER_STACK: "'Inter', sans-serif",
    BUNGEE_STACK: "'Bungee', cursive",
  },
} as const;

// ===== CONFIGURACIÓN DE CATEGORÍAS =====
export const CATEGORIES = {
  REVIEWS: {
    key: 'reseñas',
    color: 'red',
    displayName: 'Reseñas',
  },
  OPINIONS: {
    key: 'opiniones',
    color: 'yellow',
    displayName: 'Opiniones',
  },
  NEWS: {
    key: 'noticias',
    color: 'blue',
    displayName: 'Noticias',
  },
} as const;

// ===== CONFIGURACIÓN DE ICONOS =====
export const ICONS = {
  SIZE: 18,
} as const;

// ===== CONFIGURACIÓN DE CONTENIDO =====
export const CONTENT = {
  COLLECTION_NAME: 'blog',
  FEATURED_TAG: 'ÚLTIMO ARTÍCULO',
  READ_MORE_TEXT: 'Leer más',
} as const;

// ===== CONFIGURACIÓN DE LAYOUT =====
export const LAYOUT = {
  MAX_WIDTH: '1200px',
  CARD_MIN_WIDTH: '260px',
  CARD_IMAGE_HEIGHT: '180px',
  SPOTLIGHT_MAX_HEIGHT: '400px',
  MOBILE_BREAKPOINT: '768px',
} as const;

export const COLLECTION = {
  BLOG: 'blog',
  CATEGORIES: 'categoria',
} as const;

// ===== UTILIDADES DE TIPO =====
export type RouteKey = keyof typeof ROUTES;
export type CategoryKey = keyof typeof CATEGORIES;
export type ThemeKey = keyof typeof THEME.KEYS;