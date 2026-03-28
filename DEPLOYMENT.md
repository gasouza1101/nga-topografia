## Guia de Implantação

Este documento descreve como fazer deploy da aplicação NGA Topografia em diferentes ambientes.

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

### Build

```bash
npm run build
```

Isso cria a pasta `.next` com os arquivos otimizados para produção.

### Opções de Deploy

#### 1. Vercel (Recomendado)

Vercel é criador do Next.js e oferece deploy otimizado.

```bash
# Instale Vercel CLI
npm i -g vercel

# Faça deploy
vercel
```

**Vantagens:**
- Deploy automático em commits
- Build otimizado
- CDN global
- Suporte 24/7
- Preview URLs

**Configuração via Web:**
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Importe o repositório GitHub
4. Clique em "Deploy"

#### 2. Netlify

```bash
# Instale Netlify CLI
npm i -g netlify-cli

# Faça deploy
netlify deploy --prod
```

**Configuração:**
```toml
[build]
  command = "npm run build"
  functions = "functions"
  publish = ".next"
```

#### 3. Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t nga-topografia .
docker run -p 3000:3000 nga-topografia
```

#### 4. AWS Amplify

```bash
# Configure AWS CLI
aws configure

# Deploy
amplify init
amplify add hosting
amplify publish
```

#### 5. Servidor Próprio (VPS/Linux)

```bash
# 1. SSH para o servidor
ssh user@your-server.com

# 2. Clone o repositório
git clone https://github.com/seu-repo/nga-topografia.git
cd nga-topografia

# 3. Instale dependências
npm install --production
npm run build

# 4. Use PM2 para gerenciar o processo
npm i -g pm2
pm2 start npm --name "nga-topografia" -- start

# 5. Configure Nginx como reverse proxy
# /etc/nginx/sites-enabled/default
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 6. Reinicie Nginx
sudo systemctl restart nginx

# 7.Configure SSL com Let's Encrypt
sudo certbot --nginx -d seu-dominio.com
```

### Variáveis de Ambiente

Crie `.env.production` com:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
# Adicione outras variáveis conforme necessário
```

### Monitoramento

#### Sentry (Error Tracking)

```bash
npm install @sentry/nextjs
```

Configure em `next.config.ts`:

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

#### Google Analytics

Adicione no `layout.tsx`:

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script strategy="lazyOnload" src="..." />
      </body>
    </html>
  );
}
```

### Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] `.env.production` criado
- [ ] Build testado localmente (`npm run build`)
- [ ] Cache headers configurados
- [ ] SSL/HTTPS ativo
- [ ] Domínio apontando para o servidor
- [ ] Backup database (se aplicável)
- [ ] Monitoring ativo
- [ ] CI/CD pipeline funcionando
- [ ] SMS/Email alerts configurados

### Performance

Após deploy, teste em:
- https://pagespeed.web.dev
- https://www.webpagetest.org
- https://gtmetrix.com

### Rollback

```bash
# Vercel
vercel rollback

# Git
git revert HEAD
git push
```

### Suporte

Para problemas, consulte:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
