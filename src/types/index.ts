/**
 * Tipos base da aplicação
 * Defini tipos reutilizáveis para toda a aplicação
 */

/** Serviço oferecido pela NGA Topografia */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Nome do ícone lucide-react
  category?: "levantamentos" | "projetos" | "georreferenciamento" | "locacao" | "monitoramento" | "urbanismo";
}

/** Projeto realizado pela empresa */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: "topografia" | "georreferenciamento" | "regularizacao" | "projetos";
  date: string;
  featured?: boolean;
}

/** Metadados de página para SEO */
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
