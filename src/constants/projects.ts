/**
 * Dados de projetos realizados
 * Portfólio de trabalhos da NGA Topografia
 */

import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "projeto-1",
    title: "Regularização de Propriedade Rural",
    description: "Georreferenciamento e regularização completa de propriedade com 50 hectares",
    category: "regularizacao",
    date: "2024",
  },
  {
    id: "projeto-2",
    title: "Levantamento para Projeto Estrutural",
    description: "Levantamento topográfico detalhado para construção de edifício no bairro Vila Mariana",
    category: "topografia",
    date: "2024",
  },
  {
    id: "projeto-3",
    title: "Georreferenciamento de Imóvel Urbano",
    description: "Georref de lote urbano com certificação INCRA",
    category: "georreferenciamento",
    date: "2023",
  },
];
