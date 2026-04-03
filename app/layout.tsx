import type { Metadata, Viewport } from "next";
import { SITE_METADATA, ROBOTS_CONFIG } from "@/constants/seo";
import "./globals.css";

/**
 * Metadados da aplicação
 * Configuração global de SEO
 */
export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: SITE_METADATA.authors,
  creator: SITE_METADATA.creator,
  robots: ROBOTS_CONFIG,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_METADATA.openGraph.url,
    siteName: SITE_METADATA.openGraph.siteName,
    title: SITE_METADATA.openGraph.title,
    description: SITE_METADATA.openGraph.description,
  },
  alternates: {
    canonical: "https://ngatopografia.com.br",
  },
};

/**
 * Configuração de viewport
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicons e ícones de aplicação */}
        <meta name="theme-color" content="#026389" />
        <meta name="msapplication-TileColor" content="#026389" />

        {/* DNS Prefetch para otimização de conexão */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preconnect para recursos de terceiros */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}