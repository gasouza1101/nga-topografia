/**
 * Dados dos serviços
 * Lista completa de serviços oferecidos pela NGA Topografia
 */

import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "levantamento-topografico",
    title: "Levantamento Topográfico",
    description: "Medições precisas e detalhadas do terreno para projetos estruturais",
    icon: "Ruler",
  },
  {
    id: "georreferenciamento",
    title: "Georreferenciamento",
    description: "Localização exata de imóveis conforme normas técnicas do INCRA",
    icon: "Map",
  },
  {
    id: "regularizacao-terrenos",
    title: "Regularização de Terrenos",
    description: "Documentação completa e legalização de imóveis rurais e urbanos",
    icon: "LandPlot",
  },
  {
    id: "projetos-tecnicos",
    title: "Projetos Técnicos",
    description: "Soluções técnicas personalizadas para suas necessidades específicas",
    icon: "FileText",
  },
];
