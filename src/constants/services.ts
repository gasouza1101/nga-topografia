/**
 * Dados dos serviços
 * Lista completa de serviços oferecidos pela NGA Topografia
 */

import { Service } from "@/types";

export const SERVICES: Service[] = [
  // Levantamentos e Medições
  {
    id: "levantamentos-planialtimétricos",
    title: "Levantamentos Planialtimétricos Cadastrais",
    description: "Medições precisas de planimetria e altimetria para cadastro técnico de imóveis",
    icon: "Ruler",
    category: "levantamentos",
  },
  {
    id: "nivelamento-geometrico",
    title: "Nivelamento Geométrico",
    description: "Determinação precisa de diferenças de altura entre pontos",
    icon: "Ruler",
    category: "levantamentos",
  },
  {
    id: "batimetria",
    title: "Batimetria de Rios e Lagos",
    description: "Medição de profundidade de corpos d'água e mapeamento de fundos",
    icon: "Waves",
    category: "levantamentos",
  },
  
  // Projetos
  {
    id: "projetos-arquitetura",
    title: "Elaboração de Projetos de Arquitetura, Estrutura e Terraplenagem",
    description: "Projetos técnicos completos para edificações e obras de terra",
    icon: "FileText",
    category: "projetos",
  },
  {
    id: "calculo-volume",
    title: "Cálculo de Volume para Terraplanagem",
    description: "Cálculo de volumes de corte e aterro para projetos de movimentação de terra",
    icon: "Box",
    category: "projetos",
  },
  
  // Georreferenciamento
  {
    id: "georreferenciamento-imoveis",
    title: "Georreferenciamento de Imóveis Rurais e Urbanos",
    description: "Localização exata conforme normas técnicas do INCRA e legislação vigente",
    icon: "Map",
    category: "georreferenciamento",
  },
  {
    id: "marcos-georreferenciados",
    title: "Implantação de Marcos Georreferenciados",
    description: "Materialização de pontos geodésicos com marcos permanentes",
    icon: "MapPin",
    category: "georreferenciamento",
  },
  
  // Locação e Demarcação
  {
    id: "locacao-demarcacao",
    title: "Locação e Demarcação de Obras",
    description: "Transferência de projetos para terreno com precisão e demarcação de limites",
    icon: "Zap",
    category: "locacao",
  },
  {
    id: "locacao-areas",
    title: "Locação de Áreas",
    description: "Demarcação precisa de áreas específicas em terrenos",
    icon: "Square",
    category: "locacao",
  },
  {
    id: "alinhamentos-verticalizacoes",
    title: "Alinhamentos e Verticalizações",
    description: "Verificação de prumo, alinhamento e verticalidade em estruturas",
    icon: "Maximize2",
    category: "locacao",
  },
  
  // Monitoramento e Controle
  {
    id: "controle-recalque",
    title: "Controle de Recalque",
    description: "Monitoramento de deformações e recalques em fundações e estruturas",
    icon: "TrendingDown",
    category: "monitoramento",
  },
  {
    id: "fiscalizacao-obras",
    title: "Fiscalização de Obras",
    description: "Acompanhamento técnico e fiscalização de qualidade em execução de projetos",
    icon: "CheckCircle",
    category: "monitoramento",
  },
  
  // Urbanismo
  {
    id: "urbanismo-acompanhamento",
    title: "Urbanismo e Acompanhamento de Obras",
    description: "Planejamento urbanístico e supervisão de execução de obras urbanas",
    icon: "Building2",
    category: "urbanismo",
  },
];
