# QA.MD

## Atuação do QA

- Garantir qualidade funcional, visual e de conteúdo do site.
- Validar navegação, links externos e consistência das informações.
- Propor melhorias com foco em usabilidade, acessibilidade e desempenho.

## Escopo de testes

- Página inicial
- Página do caso LGPD + IA
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

Funcionalidade: Acesso ao caso LGPD + IA
  Cenário: Abrir o caso a partir da página inicial
    Dado que estou na página inicial
    Quando clico em "Ver caso"
    Então sou direcionado para "/case-lgpd-ia"
    E vejo as seções "Desafio", "Abordagem" e "Tecnologias"

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

- `src/app/layout.tsx` usa `metadataBase` com `https://example.com`, o que gera metadados incorretos ao compartilhar links.
- Dependências do Tailwind estão instaladas, mas o CSS não utiliza Tailwind; isso pode aumentar o peso da compilação sem benefício real.

## Sugestões de melhorias

- Configurar `metadataBase` com o domínio real do projeto.
- Adicionar `:focus-visible` e `line-height` para melhorar acessibilidade e legibilidade.
- Incluir `robots.txt` e `sitemap.xml` para SEO.
- Criar testes automatizados com Playwright ou Cypress para fluxos críticos.
- Criar uma página de erro 404 personalizada em `src/app/not-found.tsx`.
