export const site = {
  name: "Marcelo Rayzen",
  headline: "Automação de QA • Desenvolvedor de Software • Testes assistidos por IA • Governança & LGPD",
  location: "Itapevi/SP",
  email: "marcelo.rayzen@live.com",
  whatsapp: "5511993882374", // padrão internacional
  whatsappDisplay: "(11) 99388-2374",
  github: "https://github.com/marcelorayzen",
  linkedin: "https://linkedin.com/in/marcelo-augusto-572669221/",
  servicesTI: [
    {
      title: "Automação de QA (Web e API)",
      bullets: [
        "Automação de testes Web (Selenium)",
        "Testes de API (RestAssured / Postman)",
        "BDD com Cucumber e suíte E2E",
        "Estratégia de testes e regressão",
      ],
    },
    {
      title: "IA aplicada em QA/Desenvolvimento",
      bullets: [
        "Testes assistidos por IA (instruções para cenários, defeitos e registros)",
        "Validação de contratos e corpos de requisição e resposta de API",
        "Geração de massa de dados fictícia com governança",
        "Fluxos de trabalho com n8n e integrações via APIs",
      ],
    },
    {
      title: "Governança & LGPD",
      bullets: [
        "Boas práticas para dados sensíveis em testes",
        "Mascaramento/anonimização e minimização",
        "Documentação de evidências e rastreabilidade",
        "Apoio a times em privacidade e qualidade",
      ],
    },
  ],
  architectureQA: {
    title: "Arquitetura & QA",
    subtitle: "Qualidade por design em produtos digitais",
    overview: {
      title: "Visão Geral",
      paragraphs: [
        "Nesta seção apresento minha abordagem de QA integrado à arquitetura de sistemas, atuando desde a fase de concepção até a validação final das entregas.",
        "O foco não é apenas testar funcionalidades, mas garantir qualidade, previsibilidade, rastreabilidade e governança, especialmente em sistemas digitais complexos, com múltiplas integrações e impacto direto no negócio ou no serviço ao cidadão.",
      ],
    },
    architecture: {
      title: "Arquitetura orientada à Qualidade (QA-driven)",
      description: "A arquitetura dos sistemas é pensada considerando pontos críticos de validação, riscos técnicos e impacto das integrações externas.",
      layers: [
        {
          title: "Frontend",
          text: "Responsável pela experiência do usuário e validação dos fluxos principais, estados e mensagens de erro.",
        },
        {
          title: "Backend / APIs",
          text: "Camada onde residem regras de negócio, transições de status, SLAs, validações e integrações externas.",
        },
        {
          title: "Integrações Externas",
          text: "Serviços de pagamento, notificações, armazenamento, sistemas de terceiros ou dados públicos.",
        },
        {
          title: "Persistência e Auditoria",
          text: "Armazenamento de dados, logs, rastreabilidade de ações e suporte a auditorias.",
        },
      ],
      qaNote: "Do ponto de vista de QA, cada camada possui cenários de validação específicos, incluindo fluxos positivos, negativos e tratamento de falhas.",
      diagram: `flowchart TB
  User[Usuário / Cliente]
  FE[Frontend]
  BE[Backend / APIs]
  EXT[Integrações externas]
  DB[(Persistência & Auditoria)]

  User --> FE
  FE --> BE
  BE --> DB
  BE <--> EXT`,
    },
    acceptanceCriteria: {
      title: "Critérios de Aceite",
      description: "Os critérios de aceite são definidos antes do desenvolvimento, em conjunto com negócio e time técnico, com o objetivo de reduzir ambiguidades e alinhar expectativas.",
      bullets: [
        "Fluxo principal executa sem erros",
        "Regras de negócio são respeitadas em todas as transições de status",
        "Campos obrigatórios possuem validação adequada",
        "Mensagens de erro são claras e consistentes",
        "Integrações externas possuem tratamento de falha",
        "Dados retornados estão completos e corretos",
      ],
      closing: "Essa prática garante que todos saibam o que significa \"pronto\" antes da implementação.",
    },
    qaPlan: {
      title: "QA Plan — Abordagem",
      description: "O QA Plan é utilizado como guia para organizar a estratégia de testes, definir prioridades e dar visibilidade ao processo de qualidade.",
      sections: [
        {
          title: "Tipos de teste",
          bullets: [
            "Testes funcionais",
            "Testes de regressão",
            "Smoke tests para validação rápida de ambiente",
          ],
        },
        {
          title: "Escopo de testes",
          bullets: [
            "Fluxos críticos do negócio",
            "Pontos sensíveis da arquitetura",
            "Funcionalidades impactadas por integrações",
          ],
        },
        {
          title: "Ambientes e dados",
          bullets: [
            "Ambientes de teste e homologação",
            "Massa de dados controlada",
          ],
        },
        {
          title: "Evidências e rastreabilidade",
          bullets: [
            "Registro de cenários testados",
            "Evidências de validação",
            "Apoio a auditorias e governança",
          ],
        },
      ],
      closing: "Essa estrutura facilita o alinhamento entre QA, desenvolvimento e negócio, além de reduzir retrabalho.",
    },
    integrationValidation: {
      title: "Validação de Integrações",
      description: "Integrações externas são tratadas como pontos críticos de risco, especialmente em sistemas corporativos e governamentais.",
      bullets: [
        "Contratos de API (request/response)",
        "Cenários positivos e negativos",
        "Tratamento de indisponibilidade ou timeout",
        "Validação de dados enviados e recebidos",
        "Logs e rastreabilidade de falhas",
      ],
    },
    aiSupport: {
      title: "IA aplicada ao QA (apoio ao processo)",
      description: "A Inteligência Artificial é utilizada como apoio ao processo de qualidade, principalmente para:",
      bullets: [
        "Exploração de cenários de teste",
        "Geração e refinamento de critérios de aceite",
        "Análise de falhas e logs",
        "Apoio à documentação técnica",
      ],
      closing: "O uso de IA é feito de forma consciente, como ferramenta de suporte, mantendo decisões críticas sob responsabilidade humana.",
    },
    conclusion: {
      title: "Conclusão",
      text: "Minha atuação em QA vai além da execução de testes, envolvendo arquitetura, planejamento, validação de integrações, documentação e governança.",
    },
  },
  projects: [
    {
      name: "ERP Rayzen Digital",
      tagline: "ERP/gestão com visão de produto, processos e evolução contínua.",
      stack: ["TypeScript", "Web", "Gestão", "Processos"],
      github: "https://github.com/marcelorayzen/erp-rayzen-digital",
      demo: "", // opcional
      images: [] as { src: string; alt: string }[]
    },
    {
      name: "Rayzen — Infra pessoal de IA (Local-first)",
      tagline: "Infra local-first para orquestração de agentes com foco em governança e previsibilidade.",
      stack: ["Node.js", "TypeScript", "MCP", "IA"],
      github: "",
      demo: "", // opcional
      images: [] as { src: string; alt: string }[]
    },
  ],
  caseStudies: [
    {
      title: "Plataforma de Suporte Técnico (Service Desk)",
      positioning: "Produto B2B real, com engenharia, QA e governança desde o início.",
      summary:
        "Plataforma completa para abertura, roteamento e execução de chamados técnicos (presencial e remoto), com pagamentos, SLA, dashboards, anexos e governança de qualidade integrada desde o início.",
      highlights: [
        {
          title: "Arquitetura do Repositório",
          code: `plataforma-suporte/
├── backend/
│   ├── src/               # API NestJS
│   ├── prisma/            # Schema, migrations
│   ├── docs/
│   │   ├── api.md         # Endpoints resumidos
│   │   ├── qa-plan.md     # Plano de QA, smoke e governança
│   └── tests/
├── frontend/
│   ├── app/               # Next.js (App Router)
│   ├── components/
│   └── styles/            # Tailwind
└── docs/
    ├── arquitetura.md
    ├── dados.md
    ├── roadmap.md
    ├── legal-lgpd.md
    └── qa.md`,
        },
        {
          title: "Arquitetura Geral",
          code: `flowchart LR
  User[Usuário / Cliente]
  Tech[Técnico]
  Web[Frontend<br/>Next.js + Tailwind]
  API[Backend API<br/>NestJS]
  DB[(PostgreSQL<br/>Prisma)]
  Asaas[ASAAS<br/>Pagamentos]
  Supabase[Supabase<br/>Storage]
  FCM[Firebase<br/>Push Notifications]
  Dash[Dashboards<br/>Web]
  Docs[Docs & QA<br/>Arquitetura / QA Plan]

  User --> Web
  Tech --> Web
  Web --> API
  API --> DB
  API --> Asaas
  API --> Supabase
  API --> FCM
  API --> Dash
  API --> Docs`,
        },
        {
          title: "Fluxo de Chamados + SLA",
          code: `sequenceDiagram
  participant U as Usuário
  participant W as Web App
  participant A as API (NestJS)
  participant T as Técnico
  participant P as Pagamentos (ASAAS)
  participant N as Notificações (FCM)

  U->>W: Abre chamado
  W->>A: Criação do chamado
  A->>A: Classifica prioridade / SLA
  A->>T: Roteia chamado
  A->>N: Push de novo chamado
  T->>A: Atualiza status / execução
  A->>P: Processa pagamento
  A->>N: Notifica usuário`,
        },
        {
          title: "QA & Governança Integrados",
          code: `flowchart TB
  Req[Requisitos]
  QAPlan[QA Plan<br/>Smoke / Regressão]
  Tests[Testes Automatizados]
  Logs[Logs & Evidências]
  LGPD[Governança & LGPD]

  Req --> QAPlan
  QAPlan --> Tests
  Tests --> Logs
  Logs --> LGPD`,
        },
        {
          title: "Importante!",
          text: "QA, governança e compliance nascem junto com o sistema, não depois.",
        },
        {
          title: "Stack Técnica",
          bullets: [
            "Backend: NestJS, Prisma, PostgreSQL",
            "Frontend: Next.js (App Router), Tailwind CSS",
          ],
        },
        {
          title: "Integrações",
          bullets: [
            "Pagamentos: ASAAS",
            "Anexos: Supabase Storage",
            "Notificações: Firebase Cloud Messaging (FCM)",
          ],
        },
        {
          title: "Qualidade & Governança",
          bullets: [
            "Plano de QA documentado",
            "Smoke tests e critérios de aceite",
            "Evidências e rastreabilidade",
            "Documentação técnica clara (API, QA, arquitetura)",
            "Base preparada para compliance e auditoria",
          ],
        },
        {
          title: "Problemas que Resolve",
          bullets: [
            "Falta de rastreabilidade em operações técnicas",
            "Controle frágil de SLA e priorização",
            "Integração manual de pagamentos e anexos",
            "Ausência de visão gerencial (dashboards)",
          ],
        },
        {
          title: "Resultado",
          bullets: [
            "Operação técnica centralizada",
            "Redução de falhas e retrabalho",
            "Visibilidade operacional e gerencial",
            "Base sólida para escalar suporte e serviços",
          ],
        },
      ],
    },
    {
      title: "Rayzen — Infra pessoal de IA (MCP + UFC + Agents)",
      positioning: "Infra de IA séria, segura, auditável e sem hype.",
      summary:
        "Infra local-first de orquestração de agentes de IA, focada em controle de contexto, segurança, observabilidade e baixo acoplamento. Projetada para evitar dependência excessiva de SaaS e garantir previsibilidade em automações com IA.",
      highlights: [
        {
          title: "Stack Técnica",
          bullets: [
            "Runtime: Node.js + TypeScript (sem binários nativos)",
            "HTTP/MCP: Fastify",
            "Busca: FlexSearch (full-text em memória)",
            "Validação: Zod",
            "Contexto: UFC (Unified File Context) em Markdown",
            "Metadados: gray-matter (frontmatter YAML)",
            "Infra: dotenv, uuid",
            "Logs: JSONL estruturado",
          ],
        },
        {
          title: "Componentes Principais",
          bullets: [
            "UFC (Unified File Context): contexto versionável e controlado",
            "Agents: agentes especializados por domínio com ferramentas permitidas",
            "MCP Server: Fastify expondo ferramentas via HTTP e controle de permissões",
          ],
        },
        {
          title: "Arquitetura da Infra (Local-first)",
          code: `flowchart LR
  UFC[UFC<br/>Markdown Context]
  Agent[Agente Especializado]
  MCP[MCP Server<br/>Fastify]
  Tools[Ferramentas<br/>APIs / FS / Scripts]
  Logs[Logs JSONL]
  Search[FlexSearch<br/>FTS]

  UFC --> Agent
  Agent --> MCP
  MCP --> Tools
  Tools --> MCP
  MCP --> Logs
  UFC --> Search`,
        },
        {
          title: "Execução de Tarefa com Governança",
          code: `sequenceDiagram
  participant C as Contexto (UFC)
  participant A as Agent
  participant M as MCP Server
  participant T as Tool
  participant L as Logs

  C->>A: Contexto controlado
  A->>M: Solicita execução
  M->>M: Valida permissões
  M->>T: Executa ferramenta
  T->>M: Retorno
  M->>L: Registra JSONL
  M->>A: Resultado`,
        },
        {
          title: "Segurança & Controle",
          code: `flowchart TB
  Input[Entrada]
  Zod[Validação Zod]
  Policy[Políticas / Hooks]
  Exec[Execução]
  Audit[Logs Auditáveis]

  Input --> Zod
  Zod --> Policy
  Policy --> Exec
  Exec --> Audit`,
        },
        {
          title: "Importante!",
          text: "IA previsível, auditável e alinhada à governança — sem hype.",
        },
        {
          title: "Segurança & Governança",
          bullets: [
            "Hooks de validação e segurança",
            "Logs estruturados (JSONL) por execução",
            "Rastreabilidade completa de decisões",
            "Arquitetura preparada para ambientes regulados",
          ],
        },
        {
          title: "Impacto de valor",
          bullets: [
            "Resolve problemas de contexto e previsibilidade",
            "Alinha IA com compliance, QA e engenharia.",
          ],
        },
      ],
    },
  ],
  aiModels: [
    {
      title: "Riscos de LGPD em endpoint",
      prompt: `Analise este ponto de acesso de API e identifique possíveis riscos de LGPD,
como exposição de dados pessoais, ausência de anonimização ou tratamento inadequado de erros.
Sugira casos de teste automatizados.`,
    },
    {
      title: "Detecção de dados sensíveis em logs",
      prompt: `Avalie os logs abaixo e identifique dados pessoais ou sensíveis.
Sugira regras de mascaramento, alertas e casos de teste para evitar vazamento de informações.
Indique quais campos devem ser minimizados.`,
    },
    {
      title: "Geração de cenários BDD a partir de requisitos",
      prompt: `A partir desta história de usuário, gere cenários BDD (Dado/Quando/Então)
com caminhos felizes, exceções e validações de segurança.
Inclua critérios de aceite e casos de teste prioritários.`,
    },
  ],
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}




