/**
 * Dados de projetos realizados
 * Portfólio de trabalhos da NGA Topografia
 */

import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "rodovia-levantamento",
    title: "Levantamento Topográfico - Rodovia BR-116",
    description: "Levantamento planialtimétrico cadastral para projeto de ampliação de rodovia federal. Utilização de equipamentos de última geração para precisão milimétrica.",
    category: "topografia",
    date: "2024",
    featured: true,
  },
  {
    id: "drenagem-urbana",
    title: "Sistema de Drenagem e Canalização",
    description: "Projeto e implantação de sistema de drenagem urbana com canais de concreto pré-moldado. Acompanhamento técnico durante toda execução da obra.",
    category: "projetos",
    date: "2024",
    featured: true,
  },
  {
    id: "terraplanagem-construcao",
    title: "Terraplanagem e Preparação de Terreno",
    description: "Movimento de terra com cálculo de volumes de corte e aterro. Nivelamento e compactação para construção de empreendimento residencial.",
    category: "topografia",
    date: "2024",
    featured: true,
  },
  {
    id: "escavacao-fundacao",
    title: "Escavação e Fundação de Obra",
    description: "Controle de escavação com monitoramento de recalque. Fiscalização de fundações com precisão altimétrica de projeto.",
    category: "projetos",
    date: "2024",
    featured: false,
  },
  {
    id: "contenção-terra",
    title: "Obra de Contenção de Terra",
    description: "Projeto e execução de sistema de contenção com telas metálicas e concreto. Garantia de estabilidade e segurança da obra.",
    category: "topografia",
    date: "2023",
    featured: false,
  },
  {
    id: "dique-proteção",
    title: "Dique de Proteção e Canalização",
    description: "Obra de grande envergadura com cálculo de volumes e topografia de acompanhamento. Sistema de proteção contra inundações.",
    category: "topografia",
    date: "2023",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
