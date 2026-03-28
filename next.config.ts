import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== Otimizações de Performance =====
  
  // Compressão de assets
  compress: true,

  // Geração estática otimizada
  staticPageGenerationTimeout: 60,

  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ano
  },

  // ===== Configurações de Build =====
  
  // Relatório de análise de bundle
  productionBrowserSourceMaps: false,

  // ===== Configurações de Desenvolvimento =====
  
  reactStrictMode: true,

  // ===== Headers de Segurança =====
  
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Cache headers para assets estáticos
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ===== Redirects =====
  
  async redirects() {
    return [
      // Redireciona URLs antigas se necessário
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },

  // ===== Rewrites =====
  
  async rewrites() {
    return {
      beforeFiles: [
        // Rewrites antes dos arquivos
      ],
      afterFiles: [
        // Rewrites após tentar servir arquivos
      ],
      fallback: [
        // Fallback rewrite
      ],
    };
  },
};

export default nextConfig;

