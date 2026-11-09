import type { Project } from "@/types";
// Publicar apenas projetos comprovados e com autorização de divulgação.
export const PROJECTS: Project[] = [];
export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
