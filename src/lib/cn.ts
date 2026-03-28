/**
 * Utilitários de classe CSS
 * Funções auxiliares para gerenciar classNames
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Combina múltiplos valores de classe de forma segura
 * @param inputs - Valores de classe para combinar
 * @returns String de classes combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
