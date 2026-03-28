# 📊 Project Structure Visualization

## Árvore Completa Atual

```
nga-topografia/
│
├── 📄 Documentação
│   ├── README.md                 # Setup e visão geral
│   ├── ARCHITECTURE.md           # 🆕 Arquitetura profissional
│   ├── CONTRIBUTING.md           # 🆕 Guia de contribuições
│   ├── CHANGELOG.md              # 🆕 Histórico de mudanças
│   ├── NEXT_STEPS.md             # 🆕 Próximos passos
│   ├── AGENTS.md                 # Configuração de agents
│   └── CLAUDE.md                 # Referência a AGENTS.md
│
├── ⚙️ Configuração
│   ├── package.json              # Dependencies (Next 16, React 19, Tailwind 4)
│   ├── tsconfig.json             # TypeScript (strict mode, @/* alias)
│   ├── next.config.ts            # Next.js configuration
│   ├── tailwind.config.js         # Tailwind CSS config
│   ├── postcss.config.mjs         # PostCSS for Tailwind
│   ├── eslint.config.mjs          # ESLint rules
│   ├── .prettierrc                # 🆕 Prettier formatter
│   ├── next-env.d.ts             # Next.js type definitions
│   └── nga-topografia.iml         # IntelliJ IDE config
│
├── 🎨 Next.js App Router
│   └── app/
│       ├── layout.tsx             # Root layout
│       ├── page.tsx               # Homepage
│       ├── error.tsx              # Error boundary
│       ├── not-found.tsx          # 404 page
│       ├── globals.css            # Global styles + Tailwind
│       └── (pages)/               # Route groups (futuro)
│           ├── about/
│           ├── services/
│           ├── gallery/
│           ├── blog/
│           ├── contact/
│           ├── request-quote/
│           └── regions/
│
├── 🏗️ Source Code
│   └── src/
│       │
│       ├── 🎨 Design System (💎 FOUNDATION)
│       │   ├── colors.ts          # Primary, secondary, accent, neutral, semantic
│       │   ├── typography.ts      # H1-H6, body sizes, weights, line heights
│       │   ├── spacing.ts         # 4px scale (1, 2, 3, 4, 6, 8, 12, etc)
│       │   ├── shadows.ts         # 11 elevation levels + variants
│       │   ├── animations.ts      # Durations, easing, transitions, keyframes
│       │   └── index.ts           # Barrel export
│       │
│       ├── 🧩 Components
│       │   ├── common/            # Shared across pages
│       │   │   ├── Header.tsx     # (futuro)
│       │   │   ├── Footer.tsx     # (futuro)
│       │   │   ├── Navigation.tsx
│       │   │   └── Breadcrumb.tsx # (futuro)
│       │   │
│       │   ├── sections/          # Page sections
│       │   │   ├── Hero.tsx
│       │   │   ├── Services.tsx
│       │   │   ├── Projects.tsx
│       │   │   ├── Gallery.tsx    # (futuro)
│       │   │   ├── About.tsx
│       │   │   ├── Contact.tsx
│       │   │   └── CTA.tsx        # (futuro)
│       │   │
│       │   ├── ui/                # 🆕 Reusable UI components
│       │   │   ├── Button.tsx     # 4 variants × 3 sizes
│       │   │   ├── Badge.tsx      # 6 variants, 2 sizes
│       │   │   ├── Input.tsx      # Text field with validation
│       │   │   ├── Textarea.tsx   # Multi-line input
│       │   │   ├── Card.tsx       # Container with hover efx
│       │   │   ├── Modal.tsx      # (futuro)
│       │   │   ├── Toast.tsx      # (futuro)
│       │   │   └── index.ts       # Barrel export
│       │   │
│       │   ├── forms/             # Form components
│       │   │   ├── ContactForm.tsx    # (futuro)
│       │   │   ├── BudgetForm.tsx     # (futuro)
│       │   │   └── NewsletterForm.tsx # (futuro)
│       │   │
│       │   └── layouts/           # Layout wrappers
│       │       ├── Container.tsx   # Max-width + padding
│       │       ├── Grid.tsx        # Responsive grid
│       │       └── Flex.tsx        # Flex utilities
│       │
│       ├── 📦 Features (Modular)
│       │   ├── services/
│       │   │   ├── domain/
│       │   │   │   └── Service.ts
│       │   │   ├── data/
│       │   │   │   └── services.ts
│       │   │   ├── ui/
│       │   │   │   ├── ServiceCard.tsx      # (futuro)
│       │   │   │   ├── ServiceGrid.tsx     # (futuro)
│       │   │   │   └── ServicePage.tsx     # (futuro)
│       │   │   └── index.ts
│       │   │
│       │   ├── projects/
│       │   │   ├── domain/
│       │   │   ├── data/
│       │   │   └── ui/
│       │   │
│       │   ├── testimonials/      # (futuro)
│       │   ├── blog/              # (futuro)
│       │   ├── gallery/           # (futuro)
│       │   └── locations/         # (futuro)
│       │
│       ├── 🧠 Domain (Clean Architecture)
│       │   ├── entities/          # Domain entities
│       │   │   ├── Service.ts
│       │   │   ├── Project.ts
│       │   │   └── User.ts        # (futuro)
│       │   │
│       │   ├── repositories/      # Repository interfaces
│       │   │   ├── IServiceRepository.ts
│       │   │   └── IProjectRepository.ts
│       │   │
│       │   └── usecases/          # Business logic
│       │       ├── GetServices.ts
│       │       ├── GetProjects.ts
│       │       └── CreateBudgetRequest.ts # (futuro)
│       │
│       ├── 💾 Data Layer
│       │   ├── api/
│       │   │   └── client.ts      # HTTP client
│       │   │
│       │   ├── repositories/      # Concrete implementations
│       │   │   ├── ServiceRepository.ts
│       │   │   └── ProjectRepository.ts
│       │   │
│       │   ├── db/                # Database (futuro)
│       │   │   └── prisma.ts
│       │   │
│       │   └── cache/             # Caching strategy
│       │       └── cache.ts
│       │
│       ├── 📚 Constants
│       │   ├── navigation.ts      # Menu links
│       │   ├── services.ts        # Services data
│       │   ├── projects.ts        # Projects data
│       │   └── seo.ts             # SEO metadata
│       │
│       ├── 🏷️ Types
│       │   └── index.ts           # Global type definitions
│       │
│       ├── 🔧 Utilities & Helpers
│       │   ├── lib/
│       │   │   ├── cn.ts          # className utility
│       │   │   ├── api.ts         # API helpers
│       │   │   ├── validation.ts  # Zod schemas (futuro)
│       │   │   └── constants.ts   # Internal constants
│       │   │
│       │   └── 🪝 Custom Hooks
│       │       ├── useAsync.ts        # Async operations
│       │       ├── usePagination.ts   # Pagination logic
│       │       ├── useWindowSize.ts   # Responsive detection
│       │       ├── useScrollPosition.ts # Scroll tracking
│       │       └── index.ts           # Barrel export
│
├── 🎬 Public Assets
│   └── public/
│       ├── favicon.ico
│       ├── og-image.png
│       └── (imagens de serviços, projetos, etc)
│
└── 📦 Dependencies
    ├── next: ^16.2.1             # React server framework
    ├── react: ^19.2.4            # UI library
    ├── typescript: ^5             # Type safety
    ├── tailwindcss: ^4.x         # Utility CSS
    ├── framer-motion: ^12.38.0   # Animations
    ├── lucide-react: ^1.7.0      # Icons
    ├── eslint: ^9                # Linting
    └── prettier: (just added)    # Formatting
```

## 📊 Componentes por Tipo

### UI Components (Reusável em qualquer lugar)
```
✅ Button      - 4 variantes, 3 tamanhos, loading state
✅ Badge       - 6 cores, 2 tamanhos
✅ Input       - Text field com validação
✅ Textarea    - Multi-line input
✅ Card        - Container com hover effect
⏳ Modal       - Dialog (futuro)
⏳ Toast       - Notificações (futuro)
```

### Section Components (Específicas de página)
```
✅ Hero        - Full-screen intro
✅ Services    - Grid de serviços
✅ Projects    - Portfolio showcase
✅ About       - Missão e valores
✅ Contact     - Info de contato
⏳ Testimonials - Depoimentos (futuro)
⏳ Gallery     - Grid de imagens (futuro)
⏳ CTA          - Call-to-action (futuro)
```

### Common Components (Header/Footer/Nav)
```
✅ Navigation  - Menu principal
⏳ Header      - Topo com logo (futuro)
⏳ Footer      - Rodapé (futuro)
⏳ Breadcrumb  - Navegação (futuro)
```

## 🏛️ Layers

```
┌─────────────────────────────────────────┐
│   PRESENTATION LAYER (UI)               │
│  Components, Pages, Hooks, States       │
├─────────────────────────────────────────┤
│   DOMAIN LAYER (Business Logic)         │
│  Entities, Interfaces, Use Cases        │
├─────────────────────────────────────────┤
│   DATA LAYER (Sources)                  │
│  Repositories, API Calls, Cache         │
├─────────────────────────────────────────┤
│   INFRASTRUCTURE (Framework)            │
│  Next.js, Tailwind, React, TypeScript   │
└─────────────────────────────────────────┘
```

## 🔄 Data Flow

```
User Interaction
        ↓
React Component (Presentation)
        ↓
Custom Hook (e.g., useServices)
        ↓
Use Case / Domain Logic
        ↓
Repository Interface
        ↓
Repository Implementation (Data)
        ↓
API / Database / Cache
        ↓
Response → Entity
        ↓
Component Update
        ↓
Re-render UI
```

## 📈 Scalability

```
Componentes por Tipo     | Quantidade | Crescimento
───────────────────────────────────────────────
UI Components           |     4      | +15 (futuro)
Section Components      |     5      | +10 (futuro)
Common Components       |     1      | +3 (futuro)
Feature Modules         |     2      | +5+ (futuro)
Custom Hooks            |     4      | +10+ (futuro)
Pages                   |     1      | +8+ (futuro)
───────────────────────────────────────────────
TOTAL                   |    ~17     | → 50+
```

## 🎯 Priority Implementation Order

```
FASE 1 (Agora):
  [✅] Design System
  [✅] UI Components Base
  [✅] Custom Hooks
  [✅] Documentação

FASE 2 (Next 4-6 hours):
  [⏳] ServiceCard component
  [⏳] Zod validation setup
  [⏳] ContactForm component
  [⏳] BudgetRequestForm component

FASE 3 (Next 1-2 days):
  [⏳] Advanced components (Modal, Toast, Pagination)
  [⏳] Gallery com lightbox
  [⏳] Testimonials section
  [⏳] Header/Footer profissional

FASE 4 (Next 3-5 days):
  [⏳] Blog infrastructure
  [⏳] Advanced pages (/services, /gallery, /blog, /about)
  [⏳] API routes e server actions
  [⏳] Database integration (Prisma)

FASE 5 (Long term):
  [⏳] Analytics integration
  [⏳] SEO optimization
  [⏳] Performance tuning
  [⏳] CMS integration
  [⏳] Admin dashboard
```

## 💾 Storage & Import Patterns

```typescript
// Design tokens - Use em qualquer lugar
import { colors, typography, spacing } from "@/design-system";

// UI Components - Importar do UI layer
import { Button, Badge, Input } from "@/components/ui";

// Constants - Dados globais
import { SERVICES, PROJECTS } from "@/constants";

// Features - Módulos específicos
import { ServiceCard, useServices } from "@/features/services";

// Hooks - Hook reutilizável
import { useAsync, usePagination } from "@/hooks";

// Types - Type safety
import type { Service, Project } from "@/types";

// Utils - Helpers genéricas
import { cn } from "@/lib/cn";
```

---

**Status**: Estrutura completa pronta para escalabilidade 🚀
