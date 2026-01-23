# QA.MD

## Atuação do QA

- Garantir qualidade funcional, visual e de conteúdo do site.
- Validar navegação, links externos e consistência das informações.
- Propor melhorias com foco em usabilidade, acessibilidade e desempenho.

## Escopo de testes

- Página inicial
- Página de cases atualizados
- Página Arquitetura & QA
- Links externos (GitHub, LinkedIn, e-mail e WhatsApp)
- Responsividade em dispositivos móveis e computadores

## Testes BDD (Gherkin)

```gherkin
Funcionalidade: Navegação principal
  Cenário: Acessar a página inicial
    Dado que o visitante acessa a página inicial
    Quando a página carrega
    Então o cabeçalho com nome e subtítulo é exibido
    E os cards de serviços são apresentados

Funcionalidade: Acesso aos cases
  Cenário: Abrir os cases a partir da página inicial
    Dado que estou na página inicial
    Quando clico em "Ver cases completos"
    Então sou direcionado para "/case-lgpd-ia"
    E vejo a seção "Cases atualizados"
    E encontro os cases "Plataforma de Suporte Técnico" e "Rayzen"

Funcionalidade: Arquitetura & QA
  Cenário: Acessar a página Arquitetura & QA
    Dado que estou na página inicial
    Quando clico em "Ver página completa"
    Então sou direcionado para "/arquitetura-qa"
    E vejo a seção "Arquitetura & QA"
    E encontro "Critérios de Aceite" e "QA Plan — Abordagem"

Funcionalidade: Navegação do case
  Cenário: Retornar para a página inicial
    Dado que estou na página do case
    Quando clico em "Voltar para a página inicial"
    Então sou direcionado para "/"

Funcionalidade: Modelos de IA aplicada
  Cenário: Exibir modelos de IA aplicada em testes
    Dado que estou na página do case
    Quando visualizo a seção "Modelos de IA aplicada em testes"
    Então vejo três modelos com títulos e instruções

Funcionalidade: Contato via WhatsApp
  Cenário: Abrir conversa com mensagem pré-preenchida
    Dado que estou na página inicial
    Quando clico em "Solicitar proposta (TI)"
    Então sou direcionado para o link do WhatsApp com a mensagem correta

Funcionalidade: Projetos em destaque
  Cenário: Exibir projetos do portfólio
    Dado que a página inicial está carregada
    Quando visualizo a seção "Projetos em destaque"
    Então vejo o nome, descrição e tecnologias de cada projeto
```

## Bugs e riscos observados (análise estática)

- `src/app/layout.tsx` usa `metadataBase` com fallback para `https://marcelorayzen-marcelorayzen-site.vercel.app` e deve ser atualizado quando houver domínio próprio.
- Dependências e config do Tailwind foram removidas; caso seja necessário no futuro, reinstalar `tailwindcss` e `@tailwindcss/postcss`.

## Sugestões de melhorias (priorizadas)

### SEO & Descoberta

- Atualizar `metadataBase` e `NEXT_PUBLIC_SITE_URL` quando houver domínio próprio. (pendente)
- Open Graph e Twitter Card configurados com imagens sociais geradas. (concluído)
- Dados estruturados schema.org (Person + WebSite) adicionados em `src/app/head.tsx`. (concluído)
- `sitemap.xml` dinâmico em `src/app/sitemap.ts` e `robots.txt` dinâmico em `src/app/robots.ts`. (concluído)

### Performance

- Foto de perfil migrada para `next/image` com tamanho definido. (concluído)
- AVIF/WebP habilitado em `next.config.ts` para imagens futuras. (concluído)
- Estilos inline principais movidos para CSS, melhorando cache e legibilidade. (concluído)
- Dependências do Tailwind removidas por não haver uso real. (concluído)

### UX & Conteúdo

- Navegação por âncoras (Sobre mim, Projetos, Cases e Serviços). (pendente)
- Criar seção de resultados/impacto com métricas objetivas. (pendente)
- Reforçar CTA de contato com texto curto e direto. (pendente)

### Acessibilidade

- Inserir link “Pular para conteúdo”. (pendente)
- Garantir estados de foco visíveis em botões e links (`:focus-visible`). (pendente)
- `alt` descritivo na foto com `next/image`. (concluído)

### Qualidade & Deploy

- Playwright configurado com testes E2E básicos e scripts no `package.json`. (concluído)
- Configurar CI no GitHub Actions com `npm run lint`, `npm run build` e `npm run test:e2e`. (pendente)
- Adicionar monitoramento/analytics simples (Plausible ou GA). (pendente)
- Criar página 404 personalizada em `src/app/not-found.tsx`. (pendente)

### Segurança & Confiabilidade

- Adicionar headers de segurança em `next.config.ts` (HSTS, X-Frame-Options, Referrer-Policy e CSP ajustada). (pendente)
- Definir cache-control para ativos estáticos no deploy. (pendente)

## Documentação do que foi feito (resumo técnico)

### Estrutura e conteúdo

- Conteúdo centralizado em `src/lib/site.ts` com projetos, serviços, cases e prompts de IA.
- Página inicial (`src/app/page.tsx`) com seção “Sobre mim”, serviços, projetos, cases e CTA.
- Página de cases (`src/app/case-lgpd-ia/page.tsx`) com casos detalhados e modelos de IA aplicada.
- Página “Arquitetura & QA” (`src/app/arquitetura-qa/page.tsx`) com critérios de aceite, QA Plan e validação de integrações.
- Componentes base em `src/components/Header.tsx` e `src/components/Footer.tsx`.

### Design e UI

- Layout dark executivo com tipografia custom (Manrope + Playfair) e cartões translúcidos.
- Foto de perfil integrada ao hero com `next/image` e moldura.
- Contraste ajustado, fundo mais negro e CTA do WhatsApp com texto escuro.
- Detalhe dourado no eyebrow do hero alinhado com o conteúdo.
- Estilos inline reduzidos e consolidados em `src/app/globals.css`.

### SEO

- Open Graph e Twitter Card com imagens sociais em `src/app/opengraph-image.tsx` e `src/app/twitter-image.tsx`.
- JSON-LD schema.org em `src/app/head.tsx`.
- `robots.txt` e `sitemap.xml` gerados dinamicamente via App Router.

### Performance

- Formatos AVIF/WebP habilitados para imagens em `next.config.ts`.
- Dependências do Tailwind removidas por não uso.

### Qualidade

- Testes E2E com Playwright (`tests/site.spec.ts`) e config (`playwright.config.ts`).

## Observação sobre domínio

Enquanto não houver domínio próprio, manter `NEXT_PUBLIC_SITE_URL` com a URL da Vercel.
