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
  servicesMaker: [
    {
      title: "Marcenaria & Montagem (horas vagas)",
      bullets: [
        "Montagem e instalação de móveis",
        "Ajustes, alinhamento e acabamento",
        "Projetos sob demanda (conforme agenda)",
      ],
    },
  ],
  projects: [
    {
      name: "ERP Rayzen Digital",
      tagline: "ERP/gestão com visão de produto, processos e evolução contínua.",
      stack: ["TypeScript", "Web", "Gestão", "Processos"],
      github: "https://github.com/marcelorayzen/erp-rayzen-digital",
      demo: "", // opcional
    },
    {
      name: "Auto Center",
      tagline: "Sistema para oficinas: OS, clientes, estoque e faturamento.",
      stack: ["TypeScript", "API", "JWT", "Administração"],
      github: "https://github.com/marcelorayzen/Auto-center-",
      demo: "", // opcional
    },
  ],
  caseLGPDIA: {
    title: "Caso: LGPD + IA aplicada em QA e Desenvolvimento",
    summary:
      "Uso de IA e boas práticas de governança para acelerar testes e reduzir riscos de exposição de dados em APIs e registros.",
    sections: [
      {
        title: "Desafio",
        bullets: [
          "Validar sistemas com dados pessoais e sensíveis",
          "Aumentar cobertura com foco em privacidade",
          "Analisar falhas/registros e respostas de API com rastreabilidade",
        ],
      },
      {
        title: "Abordagem",
        bullets: [
          "IA (modelos de linguagem) para gerar cenários BDD e hipóteses de falha",
          "Revisão de contratos e corpos de API para evitar exposição",
          "Massa de dados fictícia e evidências de conformidade",
        ],
      },
      {
        title: "Tecnologias",
        bullets: ["Selenium", "Cucumber (BDD)", "RestAssured", "Postman", "APIs REST", "LGPD", "ISO/IEC 27001 (base)"],
      },
    ],
  },
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
