import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Formatea una fecha en formato completo en español
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha formateada como "15 enero 2024"
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'dd MMMM yyyy', { locale: es });
}

/**
 * Formatea una fecha en formato corto en español
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha formateada como "15 ene 2024"
 */
export function formatDateShort(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'dd MMM yyyy', { locale: es });
}

/**
 * Formatea una fecha en formato muy corto
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha formateada como "15/01/2024"
 */
export function formatDateNumeric(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'dd/MM/yyyy');
}

/**
 * Formatea una fecha mostrando solo el mes y año
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha formateada como "enero 2024"
 */
export function formatMonthYear(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM yyyy', { locale: es });
}

/**
 * Formatea una fecha de manera relativa en español
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Texto relativo como "hace 2 días", "hace 1 mes", etc.
 */
export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(dateObj)) {
    return 'Hoy';
  }
  
  if (isYesterday(dateObj)) {
    return 'Ayer';
  }
  
  return `hace ${formatDistanceToNow(dateObj, { locale: es })}`;
}

/**
 * Formatea una fecha para mostrar en cards de posts
 * Usa formato relativo para fechas recientes, formato corto para fechas más antiguas
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha formateada apropiada para cards
 */
export function formatPostDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24));
  
  // Si es menos de 7 días, usar formato relativo
  if (diffInDays < 7) {
    return formatRelativeDate(dateObj);
  }
  
  // Si es del mismo año, no mostrar el año
  if (dateObj.getFullYear() === now.getFullYear()) {
    return format(dateObj, 'dd MMM', { locale: es });
  }
  
  // Para fechas más antiguas, usar formato corto completo
  return formatDateShort(dateObj);
}

/**
 * Formatea una fecha para metadatos y SEO
 * @param date - Fecha a formatear (Date object o string ISO)
 * @returns Fecha en formato ISO string
 */
export function formatDateISO(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return dateObj.toISOString();
}

/**
 * Obtiene el nombre del día de la semana en español
 * @param date - Fecha (Date object o string ISO)
 * @returns Nombre del día como "lunes", "martes", etc.
 */
export function getDayName(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'EEEE', { locale: es });
}

/**
 * Obtiene el nombre del mes en español
 * @param date - Fecha (Date object o string ISO)
 * @returns Nombre del mes como "enero", "febrero", etc.
 */
export function getMonthName(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM', { locale: es });
}

/**
 * Verifica si una fecha es del año actual
 * @param date - Fecha a verificar (Date object o string ISO)
 * @returns true si la fecha es del año actual
 */
export function isCurrentYear(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return dateObj.getFullYear() === new Date().getFullYear();
}

/**
 * Verifica si una fecha es de la semana actual
 * @param date - Fecha a verificar (Date object o string ISO)
 * @returns true si la fecha es de la semana actual
 */
export function isCurrentWeek(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24));
  return diffInDays >= 0 && diffInDays < 7;
}