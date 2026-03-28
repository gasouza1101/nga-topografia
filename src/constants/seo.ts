/**
 * Configurações de metadados para SEO
 */

export const SITE_METADATA = {
  title: "NGA Topografia - Soluções em Levantamento Topográfico",
  description:
    "Serviços profissionais de topografia, georreferenciamento e regularização de terrenos. Precisão e confiança em seus projetos.",
  keywords: [
    "topografia",
    "georreferenciamento",
    "levantamento topográfico",
    "regularização de terrenos",
    "INCRA",
    "projetos técnicos",
  ],
  authors: [{ name: "NGA Topografia" }],
  creator: "NGA Topografia",
  keywords_str:
    "topografia, georreferenciamento, levantamento topográfico, regularização de terrenos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ngatopografia.com.br",
    siteName: "NGA Topografia",
    title: "NGA Topografia - Soluções em Levantamento Topográfico",
    description:
      "Serviços profissionais de topografia, georreferenciamento e regularização de terrenos.",
  },
};

export const ROBOTS_CONFIG = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
};
