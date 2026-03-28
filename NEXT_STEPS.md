# 🚀 Próximos Passos - NGA Topografia

## Status Atual ✅

- ✅ Design System completamente implementado (cores, tipografia, spacing, shadows, animações)
- ✅ UI Components base (Button, Badge, Input, Textarea) com todas as variações
- ✅ Custom hooks (useAsync, usePagination, useWindowSize, useScrollPosition)
- ✅ Estrutura de pastas profissional e escalável
- ✅ TypeScript strict mode
- ✅ Build passando sem erros
- ✅ Documentação (ARCHITECTURE.md, CONTRIBUTING.md, CHANGELOG.md)

## 🎯 Fase Imediata (Next 2-3 horas)

### 1. ServiceCard Component ⭐ PRIORIDADE ALTA

Criar componente que usa o design system e dados de serviços:

```
src/features/services/ui/
├── ServiceCard.tsx        ← CRIAR ISSO
├── ServiceGrid.tsx
└── hooks/
    └── useServices.ts    ← CRIAR ISSO

Uso: <ServiceCard service={service} />
```

**Checklist:**
- [ ] Criar arquivo `src/features/services/ui/components/ServiceCard.tsx`
- [ ] Props: service (Service interface), onLearnMore callback
- [ ] Usar Button, Badge do UI
- [ ] Usar colors, spacing, typography do design system
- [ ] Adicionar animação hover com transitions
- [ ] Integrar com `/src/constants/services.ts`
- [ ] Criar page `/app/(pages)/services/page.tsx` que renderiza ServiceCard list

**Exemplo esperado:**

```tsx
<ServiceCard 
  service={{
    id: "1",
    name: "Topografia",
    description: "Levantamento topográfico...",
    icon: MapPin
  }}
  onLearnMore={() => navigate('/services/topografia')}
/>
```

### 2. TestimonialCard Component

Componente para setor de depoimentos:

```
src/features/testimonials/ui/
├── TestimonialCard.tsx   ← CRIAR ISSO
└── TestimonialCarousel.tsx

Interface:
- avatar (image URL)
- author (nome)
- text (citação)
- rating (1-5 stars)
```

### 3. Zod Validation Setup

Instalar e configurar schema validation:

```bash
npm install zod
```

Criar `src/lib/validation.ts`:

```typescript
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "Mensagem muito curta")
});

export const BudgetRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string(),
  area: z.number().positive("Área deve ser positiva"),
  description: z.string().optional(),
});
```

## 📅 Próximos 1-2 Dias

### Phase 2: Componentes de Formulário

**ContactForm.tsx**
- Input para nome, email, phone
- Textarea para mensagem
- Validação com Zod
- Submit com API call (criar endpoint)
- Toast de sucesso/erro

**BudgetRequestForm.tsx**
- Form mais complexo
- Select para tipo de serviço
- Number input para área
- Checkbox para termos
- Integração com email service

### Phase 2b: Componentes Avançados

**Modal.tsx** - Dialog component

```typescript
<Modal isOpen={open} onClose={closeModal} title="Título">
  <ModalContent>Content</ModalContent>
  <ModalFooter>
    <Button onClick={closeModal}>Cancelar</Button>
    <Button variant="primary">Confirmar</Button>
  </ModalFooter>
</Modal>
```

**Toast.tsx** - Notificações

```typescript
toast.success("Orçamento enviado com sucesso!");
toast.error("Erro ao enviar. Tente novamente.");
toast.loading("Processando...");
```

**Pagination.tsx** - Navegação de páginas

### Phase 3: Layout Components

**Header.tsx** - Navigation profissional
- Logo
- Menu com links
- Mobile hamburger menu
- CTA button
- Sticky ao scroll

**Footer.tsx** - Rodapé completo
- Links rápidos
- Social media
- Newsletter signup
- Copyright

## 📄 Trabalhos de Conteúdo

### 1. Blog Infrastructure
```
src/features/blog/
├── domain/
│   └── Article.ts
├── data/
│   └── articles.ts       (mock ou MDX)
└── ui/
    ├── ArticleCard.tsx
    └── ArticlePage.tsx

Rotas:
- /blog (listagem com paginação)
- /blog/[slug] (artigo individual)
```

### 2. Gallery com Lightbox
```
src/features/gallery/
├── domain/
│   └── GalleryImage.ts
├── data/
│   └── images.ts
└── ui/
    ├── GalleryGrid.tsx
    ├── Lightbox.tsx
    └── GalleryPage.tsx

Rota: /gallery
```

### 3. Região/Serviços por Área
```
/app/(pages)/regions/[region]/page.tsx
- Mapa interativo
- Serviços disponíveis
- Contato regional
```

## 🔗 Rotas a Implementar

```
App Router Structure:

app/
├── page.tsx                      (Homepage - ✅ Pronta)
├── layout.tsx                    (Layout raiz)
├── error.tsx                     (Error boundary)
├── not-found.tsx                 (404 page)
└── (pages)/
    ├── about/
    │   └── page.tsx              (Expandir de Hero)
    ├── services/
    │   ├── page.tsx              (Lista com filtros)
    │   └── [service]/
    │       └── page.tsx          (Detalhe de serviço)
    ├── gallery/
    │   └── page.tsx              (Grid com lightbox)
    ├── blog/
    │   ├── page.tsx              (Listagem com paginação)
    │   └── [slug]/
    │       └── page.tsx          (Artigo individual)
    ├── projects/
    │   ├── page.tsx              (Portfolio)
    │   └── [id]/
    │       └── page.tsx          (Detalhe do projeto)
    ├── contact/
    │   └── page.tsx              (Formulário de contato)
    ├── request-quote/
    │   └── page.tsx              (Formulário de orçamento)
    └── regions/
        ├── page.tsx              (Regiões atendidas)
        └── [region]/
            └── page.tsx          (Detalhes da região)
```

## 📊 Benchmark vs Competidor (agritopconsultoria.com.br)

| Funcionalidade | NGA (Atual) | Competidor | Priority |
|---|---|---|---|
| Homepage | ✅ | ✅ | - |
| Serviços detalhados | ⚠️ Básico | ✅ Expandido | 🔴 ALTA |
| Portfolio/Gallery | ⚠️ Básico | ✅ Lightbox | 🔴 ALTA |
| Blog/Artigos | ❌ | ✅ | 🟡 MÉDIA |
| Testemunhas | ❌ | ✅ | 🟡 MÉDIA |
| SEO/Structured Data | ✅ Base | ✅ Completo | 🟠 BAIXA |
| Newsletter | ❌ | ✅ | 🟡 MÉDIA |
| Formulários | ✅ Básico | ✅ Validado | 🔴 ALTA |
| Mobile UX | ✅ | ✅ | - |
| Vídeos/Media | ❌ | ✅ | 🟡 MÉDIA |
| Regiões atendidas | ❌ | ✅ | 🟠 BAIXA |

## 📝 Padrão de Implementação

Quando criar novo componente/feature, sempre seguir:

```typescript
// 1. Domain (types)
export interface MyEntity {
  id: string;
  name: string;
}

// 2. Data (mock ou API)
export const MY_DATA: MyEntity[] = [...]

// 3. Component
interface MyComponentProps {
  item: MyEntity;
  onAction?: () => void;
}

export function MyComponent({ item, onAction }: MyComponentProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <Button variant="primary" onClick={onAction}>
        Ação
      </Button>
    </Card>
  );
}

// 4. Hook (se necessário)
export function useMyFeature() {
  const [data, setData] = useState<MyEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // ...
  return { data, isLoading };
}

// 5. Page (se aplicável)
export function MyPage() {
  const { data } = useMyFeature();
  return (
    <Container>
      <div className="grid grid-cols-3 gap-6">
        {data.map(item => (
          <MyComponent key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}

// 6. Export (barrel)
// index.ts
export type { MyEntity }
export { MY_DATA }
export { MyComponent }
export { useMyFeature }
```

## ✅ Checklist de Qualidade

Antes de considerar cada feature completa:

- [ ] TypeScript strict mode passa
- [ ] ESLint sem warnings
- [ ] Prettier formatado
- [ ] Acessibilidade testada (Tab, Enter, Escape)
- [ ] Mobile responsivo (testar em 320px, 768px, 1024px+)
- [ ] Performance testad (Lighthouse score > 90)
- [ ] Documentação atualizada
- [ ] Commit com mensagem clara

## 🎓 Referências Rápidas

```bash
# Estrutura de tipos
src/types/index.ts          # Global types

# Constants
src/constants/              # navigation, services, projects, seo

# Design tokens
src/design-system/          # colors, typography, spacing, shadows

# UI reusável
src/components/ui/          # Button, Badge, Input, Card, etc

# Custom hooks
src/hooks/                  # useAsync, usePagination, etc

# Features modulares
src/features/*/             # services, projects, blog, et
```

## 🚨 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Styles não aparecem | Verificar `tailwind.config.js` content paths |
| Import errors | Verificar `tsconfig.json` path aliases |
| TypeScript errors | Rodar `npm run type-check` e refatorar |
| Build fails | Rodar `npm run build` localmente, check CHANGELOG |
| Mobile styles wrong | Usar `mobile-first` (sm: md: lg: lg:) |

---

**Status**: Pronto para próxima implementação 🎉
**Tempo estimado próxima fase**: 4-6 horas
**Dependências bloqueantes**: Nenhuma
