import type { Metadata, Viewport } from "next";
import { SITE_METADATA, ROBOTS_CONFIG } from "@/constants/seo";
import "./globals.css";
import Script from "next/script";

/**
 * Metadados da aplicação
 * Configuração global de SEO
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://ngatopografia.com.br"),
  title: {default: SITE_METADATA.title, template:"%s"},
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
    canonical: "https://ngatopografia.com.br/",
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
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService","@id":"https://ngatopografia.com.br/#empresa",name:"NGA Agrimensura e Topografia",url:"https://ngatopografia.com.br",telephone:"+5511947718412",email:"contato@ngatopografia.com.br",areaServed:["São Paulo","Grande São Paulo","Interior paulista","Litoral paulista"],address:{"@type":"PostalAddress",streetAddress:"Av. Senador Teotônio Vilela, 4029",addressLocality:"São Paulo",addressRegion:"SP",postalCode:"04638-000",addressCountry:"BR"}})}} />
        {process.env.NEXT_PUBLIC_GA_ID && <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive"/>
          <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}</Script>
        </>}
        {children}
      </body>
    </html>
  );
}