# Site do Marcelo Rayzen

Portfólio profissional com foco em QA, desenvolvimento, IA aplicada e governança/LGPD.

## Estado atual

- Layout dark executivo com hero, foto e seções de serviços, projetos e cases.
- Fundo mais negro com contraste ajustado e CTA do WhatsApp legível.
- Página dedicada "Arquitetura & QA" com foco em critérios de aceite, QA Plan e validação de integrações.
- SEO com Open Graph, Twitter Card e JSON-LD (schema.org).
- `sitemap.xml` e `robots.txt` gerados dinamicamente (App Router).
- Performance com `next/image` e formatos AVIF/WebP habilitados.
- Testes E2E básicos com Playwright.
- Tailwind removido por não uso.

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:3000`.

## Variáveis de ambiente

Defina a URL pública do site (use a URL da Vercel enquanto não houver domínio próprio):

```bash
NEXT_PUBLIC_SITE_URL=https://marcelorayzen-marcelorayzen-site.vercel.app
```

## Estrutura principal

- `src/lib/site.ts` — conteúdo centralizado (nome, serviços, projetos e links)
- `src/app/page.tsx` — página inicial
- `src/app/case-lgpd-ia/page.tsx` — página de cases atualizados
- `src/app/arquitetura-qa/page.tsx` — página “Arquitetura & QA”
- `src/app/head.tsx` — JSON-LD (schema.org)
- `src/app/sitemap.ts` — sitemap dinâmico
- `src/app/robots.ts` — robots dinâmico
- `src/components` — componentes de cabeçalho e rodapé
- `QA.MD` — atuação de QA, cenários BDD, bugs e melhorias

## SEO & Social

- `https://seu-dominio/sitemap.xml`
- `https://seu-dominio/robots.txt`
- `https://seu-dominio/opengraph-image`
- `https://seu-dominio/twitter-image`

## Scripts úteis

- `npm run dev` — desenvolvimento
- `npm run build` — compilação de produção
- `npm run start` — executar a compilação local
- `npm run lint` — lint do projeto
- `npm run test:e2e` — testes E2E com Playwright
- `npm run test:e2e:ui` — modo interativo do Playwright

## Testes E2E (Playwright)

1. Instale os navegadores (uma vez):
   ```bash
   npx playwright install
   ```
2. Rode os testes:
   ```bash
   npm run test:e2e
   ```

## Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, crie um novo projeto e selecione o repositório.
3. Defina `NEXT_PUBLIC_SITE_URL` com a URL da Vercel.
4. Mantenha as configurações padrão e publique.

## Personalização

Edite o conteúdo em `src/lib/site.ts`.

## Próximos passos (pendentes)

- Navegação por âncoras (Sobre mim, Projetos, Cases e Serviços).
- Página 404 personalizada (`src/app/not-found.tsx`).
- CI no GitHub Actions com lint, build e testes.
- Estados de foco visíveis e link “Pular para conteúdo”.
- Headers de segurança no `next.config.ts`.
