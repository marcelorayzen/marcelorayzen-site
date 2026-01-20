# Site do Marcelo Rayzen

Portfólio profissional com foco em QA, desenvolvimento, IA aplicada e governança/LGPD.

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

## Estrutura principal

- `src/lib/site.ts` — conteúdo centralizado (nome, serviços, projetos e links)
- `src/app/page.tsx` — página inicial
- `src/app/case-lgpd-ia/page.tsx` — página do caso LGPD + IA
- `src/components` — componentes de cabeçalho e rodapé
- `QA.MD` — atuação de QA, cenários BDD, bugs e melhorias

## Scripts úteis

- `npm run dev` — desenvolvimento
- `npm run build` — compilação de produção
- `npm run start` — executar a compilação local
- `npm run lint` — lint do projeto

## Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, crie um novo projeto e selecione o repositório.
3. Mantenha as configurações padrão e publique.

## Personalização

Edite o conteúdo em `src/lib/site.ts`.
