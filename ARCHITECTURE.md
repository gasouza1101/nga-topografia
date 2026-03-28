# 🏗️ Arquitetura Profissional - NGA Topografia v2

## Visão Geral

Este documento descreve a arquitetura moderna e profissional implementada no NGA Topografia, seguindo padrões da indústria como Clean Architecture, design patterns e 12-factor app.

## 📁 Estrutura de Pastas

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Página inicial
│   ├── layout.tsx                # Layout raiz
│   ├── error.tsx                 # Error boundary
│   ├── not-found.tsx             # 404 page
│   ├── (pages)/                  # Route groups
│   │   ├── about/
│   │   ├── services/
│   │   ├── gallery/
│   │   ├── blog/
│   │   └── contact/
│   └── api/                      # API routes (futuro)
│
├── components/                   # React Components
│   ├── common/                   # Componentes globais
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Breadcrumb.tsx
│   │
│   ├── sections/                 # Componentes de seção (página)
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   │
│   ├── ui/                       # Componentes UI reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx             # (em progresso)
│   │   ├── Toast.tsx             # (em progresso)
│   │   └── index.ts              # Barrel export
│   │
│   ├── forms/                    # Componentes de formulário
│   │   ├── ContactForm.tsx       # (em progresso)
│   │   ├── BudgetForm.tsx        # (em progresso)
│   │   └── NewsletterForm.tsx    # (em progresso)
│   │
│   └── layouts/                  # Page layouts
│       ├── Container.tsx
│       ├── Grid.tsx
│       └── Flex.tsx
│
├── features/                     # Feature modules (domínio)
│   ├── services/
│   │   ├── domain/
│   │   │   └── Service.ts
│   │   ├── data/
│   │   │   └── services.ts
│   │   └── ui/
│   │       └── ServiceCard.tsx
│   │
│   ├── projects/
│   ├── testimonials/
│   ├── blog/
│   └── locations/
│
├── domain/                       # Lógica de negócio (Clean Architecture)
│   ├── entities/                 # Entidades de domínio
│   │   ├── Service.ts
│   │   ├── Project.ts
│   │   └── User.ts
│   │
│   ├── repositories/             # Interfaces de repositório
│   │   ├── IServiceRepository.ts
│   │   └── IProjectRepository.ts
│   │
│   └── usecases/                 # Casos de uso
│       ├── GetServices.ts
│       ├── GetProjects.ts
│       └── CreateBudgetRequest.ts
│
├── data/                         # Camada de dados
│   ├── api/                      # Chamadas HTTP
│   │   └── client.ts
│   │
│   ├── db/                       # Database (futuro)
│   │   └── prisma.ts
│   │
│   ├── repositories/             # Implementações concretas
│   │   ├── ServiceRepository.ts
│   │   └── ProjectRepository.ts
│   │
│   └── cache/                    # Cache strategy
│       └── cache.ts
│
├── design-system/                # Design tokens e estilos
│   ├── colors.ts                 # Paleta de cores
│   ├── typography.ts             # Tipografia
│   ├── spacing.ts                # Escala de espaçamento
│   ├── shadows.ts                # Sombras e elevações
│   ├── animations.ts             # Animações
│   └── index.ts                  # Barrel export
│
├── lib/                          # Utilitários
│   ├── cn.ts                     # className utility
│   ├── api.ts                    # API helpers
│   ├── validation.ts             # Zod schemas
│   └── constants.ts              # Constantes
│
├── constants/                    # Dados constantes
│   ├── navigation.ts
│   ├── services.ts
│   ├── projects.ts
│   └── seo.ts
│
├── types/                        # Global types
│   └── index.ts
│
└── hooks/                        # Custom React hooks
    └── index.ts                  # useAsync, usePagination, etc
```

## 🏛️ Clean Architecture

Nosso projeto segue os princípios de Clean Architecture em 4 camadas:

### 1. **Presentation Layer** (UI)
- Componentes React
- Páginas (app router)
- Tratamento de UI state
- Interações do usuário

### 2. **Domain Layer** (Lógica de Negócio Pura)
- Entities: Objetos de domínio (Service, Project)
- Repositories: Interfaces (contrato de como obter dados)
- Use Cases: Lógica de negócio (CreateBudgetRequest)
- **NÃO tem dependências externas**

### 3. **Data Layer** (Fonte de Dados)
- Implementação de Repositories
- Chamadas HTTP/API
- Database queries
- Cache strategy

### 4. **Infrastructure**
- Next.js framework
- Tailwind CSS
- Bibliotecas externas

## 🎨 Design System

Todos os tokens de design estão centralizados em `src/design-system/`:

```typescript
// cores.ts
export const colors = {
  primary: { 50: "#...", 600: "#22c55e", ... },
  secondary: { ... },
  neutral: { ... }
}

// typography.ts
export const typography = {
  h1: { size: "3.5rem", weight: 700, ... }
  ...
}

// spacing.ts
export const spacing = {
  4: "1rem",
  6: "1.5rem",
  ...
}
```

### Usando o Design System

```typescript
import { colors, typography, spacing } from "@/design-system";

// Em componentes
<div style={{
  backgroundColor: colors.primary[600],
  padding: spacing[4],
  fontSize: typography.fontSize.body.base.size
}}>
  Content
</div>
```

## 📦 UI Components

Todos os componentes UI estão em `src/components/ui/` com:
- PropTypes bem definidas
- Acessibilidade nativa
- Variações (variant, size)
- States (disabled, loading, error)
- Documentação JSDoc

### Exemplo: Button

```typescript
import { Button } from "@/components/ui";

// Uso
<Button variant="primary" size="lg" onClick={handleClick}>
  Solicitar Orçamento
</Button>

// Variações
- variant: "primary" | "secondary" | "outline" | "ghost"
- size: "sm" | "md" | "lg"
- isLoading: boolean
- fullWidth: boolean
```

## 🔄 Features (Modular)

Cada feature é um módulo independente com:

```
features/services/
├── domain/
│   └── Service.ts          # Interface/Type
├── data/
│   └── services.ts         # Mock data / API calls
└── ui/
    └── ServiceCard.tsx     # Componente específico
```

## 🪝 Custom Hooks

Hooks reutilizáveis em `src/hooks/`:

- `useAsync()` - Gerenciar async operations
- `usePagination()` - Paginação
- `useWindowSize()` - Resposividade
- `useScrollPosition()` - Detectar scroll

```typescript
import { useAsync, usePagination } from "@/hooks";

// Uso
const { data, loading, error } = useAsync(fetchServices);
const { current, total, currentItems } = usePagination(items);
```

## 📋 Validação

Implementaremos Zod para validação type-safe:

```typescript
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type Contact = z.infer<typeof ContactSchema>;
```

## 🎯 Fluxo de Dados

```
User Input
    ↓
Component State (React)
    ↓
Use Case (Domain)
    ↓
Repository (Data)
    ↓
API/Database
    ↓
Response → Cache
    ↓
Domain Entity
    ↓
Component Update
```

## 📝 Padrões de Código

### Componentes Funcionais

```typescript
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

/**
 * Descrição do componente
 * Seu propósito
 */
export function MyComponent({ title, onAction }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### Custom Hooks

```typescript
export function useMyHook() {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    // Effect logic
  }, []);

  return { state };
}
```

### Utils & Helpers

```typescript
/**
 * Função utilitária curta
 * @param input - Descrição
 * @returns - Retorno
 */
export function myHelper(input: string): string {
  return input.toUpperCase();
}
```

## 🔧 TypeScript Best Practices

- ✅ Types explícitos em props
- ✅ Export types para reutilizar
- ✅ Usar `type` para types, `interface` para contratos
- ✅ Não usar `any`
- ✅ Generic types quando apropriado

## 📚 Próximos Passos

1. ✅ Design System criado
2. ✅ UI Components base
3. ⏳ Forms com validação (Zod)
4. ⏳ Página de Serviços expandida
5. ⏳ Galeria com lightbox
6. ⏳ Blog/Artigos
7. ⏳ API integration
8. ⏳ Analytics + SEO

## 📖 Referências

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Next.js Best Practices](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Patterns](https://reactpatterns.com/)
