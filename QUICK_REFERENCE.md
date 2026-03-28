# 🎯 Quick Reference Guide - NGA Topografia v2

## 🚀 Start Here

### Em 10 Segundos
- Build: `npm run build` ✅
- Dev: `npm run dev` → http://localhost:3000
- Lint: `npm run lint` ✅
- Format: `npm run format`
- Type-check: `npm run type-check` ✅

### Estrutura Mental
```
Design Tokens → UI Components → Features → Pages
     ↓                ↓            ↓       ↓
  colors.ts      Button.tsx    Service  /services
  spacing.ts     Badge.tsx     Project  /projects
  shadows.ts     Input.tsx
  etc.
```

---

## 🎨 Design System in 30 Seconds

### Colors
```typescript
import { colors } from "@/design-system";

// Uso
<div style={{ backgroundColor: colors.primary[600] }}>
  Primary Green
</div>
```

**Paleta:**
- Primary: Verde (#22c55e)
- Secondary: Azul (#0ea5e9)
- Accent: Laranja (#f97316)
- Neutro: Escala de cinza
- Semântico: Success, warning, error, info

### Spacing
```typescript
import { spacing } from "@/design-system";

// Escala: 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48...
<div style={{ padding: spacing[4] }}> // 1rem
```

### Typography
```typescript
import { typography } from "@/design-system";

<h1 style={typography.h1}>Título</h1>
<p style={typography.fontSize.body.base}>Parágrafo</p>
```

---

## 🧩 UI Components in 30 Seconds

### Button
```typescript
import { Button } from "@/components/ui";

<Button variant="primary" size="lg" onClick={...}>
  Clique aqui
</Button>

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg
// Props: disabled, isLoading, fullWidth
```

### Badge
```typescript
import { Badge } from "@/components/ui";

<Badge variant="success" size="lg">
  Concluído
</Badge>

// Variants: success, warning, error, info, default, secondary
// Sizes: sm, lg
```

### Input
```typescript
import { Input } from "@/components/ui";

<Input 
  label="Nome"
  placeholder="João Silva"
  error="Nome é obrigatório"
  helperText="Seu nome completo"
/>
```

### Card
```typescript
import { Card } from "@/components/ui";

<Card className="hover:shadow-lg">
  Conteúdo do card
</Card>
```

---

## 🪝 Custom Hooks in 30 Seconds

### useAsync
```typescript
import { useAsync } from "@/hooks";

const { data, loading, error } = useAsync(async () => {
  return await fetchServices();
});

if (loading) return <div>Carregando...</div>;
if (error) return <div>Erro: {error.message}</div>;
return <div>{data}</div>;
```

### usePagination
```typescript
import { usePagination } from "@/hooks";

const { current, total, currentItems } = usePagination(items, 5);

<div>
  {currentItems.map(item => <Item key={item.id} item={item} />)}
  <button onClick={() => current++}>Próxima</button>
</div>
```

### useWindowSize
```typescript
import { useWindowSize } from "@/hooks";

const { width, height, isSmall } = useWindowSize(768);

{isSmall ? <MobileMenu /> : <DesktopMenu />}
```

---

## 📁 Pasta Correta Para Cada Coisa

| Tipo | Pasta | Exemplo |
|------|-------|---------|
| UI reutilizável | `src/components/ui/` | Button, Badge, Input |
| Seção de página | `src/components/sections/` | Hero, Services, About |
| Feature modular | `src/features/{name}/` | services/, projects/ |
| Tipos globais | `src/types/` | index.ts |
| Dados/Constants | `src/constants/` | navigation.ts, services.ts |
| Hooks | `src/hooks/` | index.ts |
| Design tokens | `src/design-system/` | colors.ts, spacing.ts |
| Utils | `src/lib/` | cn.ts, api.ts |
| Rotas | `app/(pages)/` | about/, services/, contact/ |

---

## 📝 Criar Novo Componente - Template

### 1. Simples (UI Component)
```typescript
// src/components/ui/MyComponent.tsx
import { colors, spacing } from "@/design-system";

interface MyComponentProps {
  title: string;
  variant?: "primary" | "secondary";
}

/**
 * Descrição do componente
 */
export function MyComponent({ title, variant = "primary" }: MyComponentProps) {
  return (
    <div style={{ padding: spacing[4], color: colors.primary[600] }}>
      {title}
    </div>
  );
}
```

### 2. Feature Modular (Service)
```typescript
// 1. Domain
// src/features/my-feature/domain/MyEntity.ts
export interface MyEntity { id: string; name: string; }

// 2. Data
// src/features/my-feature/data/my-feature.ts
export const MY_DATA: MyEntity[] = [...]

// 3. Component
// src/features/my-feature/ui/MyCard.tsx
export function MyCard({ item }: { item: MyEntity }) {
  return <Card>{item.name}</Card>;
}

// 4. Export
// src/features/my-feature/index.ts
export { MyCard }
export type { MyEntity }
export { MY_DATA }
```

---

## 🎨 Tailwind Classes Que Funcionam

```html
<!-- Cores -->
<div class="bg-primary-600 text-white">

<!-- Spacing -->
<div class="p-4 m-6 gap-8">

<!-- Responsivo -->
<div class="w-full md:w-1/2 lg:w-1/3">

<!-- Hover -->
<div class="hover:shadow-lg hover:scale-105 transition-all">

<!-- Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## ✅ Checklist Antes de Commitar

```bash
npm run type-check  # ✅ 0 errors
npm run lint        # ✅ 0 warnings
npm run format      # ✅ Prettier formatado
npm run build       # ✅ Build successful
```

Depois:
```bash
git add .
git commit -m "feat(componente): breve descrição"
git push
```

---

## 🐛 Troubleshooting Rápido

### Build Error
```
❌ Componente não encontrado
→ Verificar tsconfig.json @/* paths
→ Verificar import (espaço, case, .tsx)
```

### Tailwind não funciona
```
❌ Classe não aparece
→ Verificar tailwind.config.js content: ["src/**/*.{ts,tsx}"]
→ Restartar dev server
```

### TypeScript error
```
❌ any implícito
→ Adicionar tipo explicitamente
→ type Props = { ... }
```

### Prettier conflita com ESLint
```bash
npm run lint -- --fix
npm run format
```

---

## 📚 Documentação Disponível

| Doc | Propósito |
|-----|-----------|
| **README.md** | Setup inicial |
| **ARCHITECTURE.md** | Princípios de design |
| **CONTRIBUTING.md** | Padrões de código |
| **CHANGELOG.md** | Histórico + roadmap |
| **NEXT_STEPS.md** | Próximas tarefas |
| **PROJECT_STRUCTURE.md** | Organização de pastas |
| **PROGRESS_CHECKLIST.md** | Acompanhamento |
| **QUICK_REFERENCE.md** | Este arquivo! |

---

## 🎯 Padrão de Código Recomendado

```typescript
// ✅ BOM
import { Button } from "@/components/ui";
import { colors } from "@/design-system";

type Props = { title: string; onClick?: () => void };

export function MyComponent({ title, onClick }: Props) {
  return <Button onClick={onClick}>{title}</Button>;
}

// ❌ RUIM
import Button from "../../../components/ui/Button";
export function MyComponent(props: any) {
  return <Button>{props.title}</Button>;
}
```

---

## 🔗 Import Paths Rápidos

```typescript
// Design System
import { colors } from "@/design-system";
import { spacing } from "@/design-system";
import { typography } from "@/design-system";

// UI Components
import { Button, Badge, Input } from "@/components/ui";

// Constants
import { SERVICES } from "@/constants/services";

// Hooks
import { useAsync } from "@/hooks";

// Features
import { ServiceCard } from "@/features/services";

// Lib/Utils
import { cn } from "@/lib/cn";
```

---

## 🚀 Próximo Passo: ServiceCard

Fazer isto agora:

```bash
# 1. Criar arquivo
touch src/features/services/ui/components/ServiceCard.tsx

# 2. Copiar template da seção "Criar Novo Componente"

# 3. Usar dados de:
# src/constants/services.ts

# 4. Usar componentes:
# Button, Badge, Card

# 5. Verificar
npm run type-check && npm run build
```

---

**Tempo para dominar este guide**: 15 minutos 📖  
**Tempo economizado em debugging**: 2+ horas ⏱️

Boa codificação! 🎉
