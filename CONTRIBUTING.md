## Guia de Contribuição

Obrigado por considerar contribuir para NGA Topografia! Este documento fornece diretrizes para contribuições.

### Como Começar

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/nga-topografia.git`
3. **Crie uma branch**: `git checkout -b feature/sua-feature`
4. **Instale dependências**: `npm install`
5. **Inicie o servidor**: `npm run dev`

### Estrutura de Pastas

```
├── app/              # Next.js App Router
├── components/       # Componentes React reutilizáveis
├── src/
│   ├── constants/    # Dados constantes
│   ├── types/        # Tipos TypeScript
│   ├── lib/          # Funções utilitárias
│   └── utils/        # Helpers
└── public/           # Arquivos estáticos
```

### Convenções de Código

#### Componentes

```tsx
/**
 * Descrição do componente
 * Seu propósito e funcionalidade
 */
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
}
```

#### Types

```typescript
// src/types/index.ts
export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
}
```

#### Constantes

```typescript
// src/constants/dados.ts
export const DADOS = {
  chave: "valor",
} as const;
```

### Commits

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona novo serviço
fix: corrige bug no Navbar
docs: atualiza README
style: formata código
refactor: simplifica lógica
test: adiciona testes
chore: atualiza dependências
```

**Exemplo:**
```bash
git commit -m "feat: adiciona mobile menu com animações"
```

### Pull Requests

1. **Descritivo** - Descreva o que mudou e por quê
2. **Linked Issues** - Referencie issues relacionadas
3. **Screenshots** - Inclua screenshots para changes visuais
4. **Tests** - Adicione testes se aplicável
5. **Documentation** - Atualize docs se necessário

**Template:**
```markdown
## Descrição
Breve descrição da mudança

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentation

## Checklist
- [ ] Código segue style guide
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Build passa sem warnings

## Relacionado
Fecha #123
```

### Linting

```bash
npm run lint
```

Corrija automaticamente:
```bash
npm run lint -- --fix
```

### Testing (Futuro)

```bash
npm test
npm run test:watch
npm run test:coverage
```

### Performance Checklist

- [ ] Nenhuma console errors/warnings
- [ ] Componentes otimizados (memo onde apropriado)
- [ ] Eventos removidos proper cleanup
- [ ] Imagens otimizadas
- [ ] CSS sem duplication

### Acessibilidade

- [ ] Semantic HTML
- [ ] ARIA labels onde necessário
- [ ] Navegação por teclado funciona
- [ ] Contraste adequado
- [ ] Mobile friendly

### Tipos de Contribuição

#### 🎯 Novas Features

1. Abra uma issue descrevendo a feature
2. Aguarde discussão com mantenedores
3. Implemente seguindo as convenções
4. Envie PR com testes

#### 🐛 Bug Fixes

1. Abra issue com reprodução
2. Implemente fix
3. Adicione testes que falhavam antes
4. Envie PR

#### 📝 Documentação

1. Corrija/melhore documentação
2. Envie PR

#### ♻️ Refactoring

1. Discuta mudanças em issue
2. Refatore mantendo funcionalidade
3.Adicione testes
4. Envie PR

### Dúvidas?

- 📖 [Documentação Next.js](https://nextjs.org/docs)
- 💬 Abra uma discussion
- 📧 Entre em contato

### Código de Conduta

- Seja respeitoso
- Acolha diferentes opiniões
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Reporte abuso aos mantenedores

---

**Obrigado por contribuir! 🎉**
