import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-title">
      <span className="section-title__line" />
      <div>
        <h2 className="section-title__heading">{title}</h2>
        {subtitle && <p className="muted section-title__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="container">
      <Header />

      <section className="card about-card">
        <h2 className="about-title">Sobre mim</h2>
        <p className="muted about-text">
          Sou QA Automation Engineer e Software Developer com experiência em automação de testes, desenvolvimento Web e API,
          qualidade de software, governança de dados e conformidade com LGPD.
        </p>
        <p className="muted about-text">
          Atuo aplicando IA e prompt engineering para acelerar testes, análise de falhas, validação de APIs e criação de
          cenários BDD, sempre com foco em previsibilidade, rastreabilidade e segurança da informação. Trabalho com
          Selenium, Cucumber, RestAssured, Postman, Java, TypeScript, Next.js e arquiteturas orientadas a processos.
        </p>
        <p className="muted about-text">
          Tenho forte preocupação com ética no desenvolvimento, governança e qualidade desde o design, além de
          experiência prática na construção de produtos reais com visão de negócio.
        </p>
        <p className="muted about-text">
          Paralelamente à tecnologia, atuo como empreendedor na área de marcenaria e montagem de móveis, aplicando
          princípios de organização, qualidade, responsabilidade e entrega, o que fortalece minha visão prática e foco
          em resultado.
        </p>
      </section>

      <SectionTitle
        title="O que eu entrego"
        subtitle="Qualidade, desenvolvimento e governança com foco em resultado, rastreabilidade e segurança."
      />

      <div className="grid grid-3">
        <div className="card">
          <h3 className="card-title">Automação de QA</h3>
          <p className="muted">
            Automação Web e API, BDD, regressão e estratégia de testes com foco em confiabilidade.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">IA aplicada</h3>
          <p className="muted">
            IA aplicada em QA e desenvolvimento, automações com n8n, geração de cenários e integrações via APIs.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Governança & LGPD</h3>
          <p className="muted">
            Boas práticas para dados sensíveis, evidências e conformidade em ambientes corporativos.
          </p>
        </div>
      </div>

      <SectionTitle title="Projetos em destaque" subtitle="Repositórios selecionados para recrutadores e clientes." />
      <div className="grid grid-2">
        {site.projects.map((p) => (
          <div className="card" key={p.name}>
            <h3 className="card-title">{p.name}</h3>
            <p className="muted card-subtitle">{p.tagline}</p>
            {p.images?.length ? (
              <div className="project-gallery" aria-label={`Imagens do projeto ${p.name}`}>
                {p.images.map((img) => (
                  <img className="project-image" key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
            ) : null}
            <div className="stack-row">
              {p.stack.map((s) => (
                <span className="badge" key={s}>{s}</span>
              ))}
            </div>
            <div className="action-row">
              {p.github ? (
                <a className="badge" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              ) : (
                <span className="badge badge--ghost badge--disabled" aria-disabled>Repositório privado</span>
              )}
              {p.demo ? (
                <a className="badge" href={p.demo} target="_blank" rel="noreferrer">Demonstração</a>
              ) : (
                <span className="badge badge--disabled" aria-disabled>Demonstração (em breve)</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <SectionTitle
        title="Cases em destaque"
        subtitle="Plataforma de Suporte Técnico e Rayzen — infra pessoal de IA (local-first)."
      />
      <div className="grid grid-2">
        {site.caseStudies.map((caseStudy) => (
          <div className="card" key={caseStudy.title}>
            <h3 className="card-title">{caseStudy.title}</h3>
            <p className="muted card-subtitle">{caseStudy.positioning}</p>
            <p className="muted card-subtitle">{caseStudy.summary}</p>
          </div>
        ))}
      </div>
      <div className="section-link">
        <a className="badge" href="/case-lgpd-ia">Ver cases completos</a>
      </div>

      <SectionTitle
        title="Arquitetura & QA"
        subtitle="Como estruturo qualidade desde a arquitetura até integrações externas."
      />
      <div className="card">
        <p className="muted">
          Qualidade por design aplicada à arquitetura, critérios de aceite e validação de integrações críticas.
        </p>
        <ul className="muted">
          <li>Arquitetura pensada com rastreabilidade e qualidade</li>
          <li>Critérios de aceite definidos antes do desenvolvimento</li>
          <li>QA Plan com foco em fluxos críticos e evidências</li>
          <li>Validação de integrações externas e falhas esperadas</li>
        </ul>
        <a className="badge" href="/arquitetura-qa">Ver página completa</a>
      </div>

      <SectionTitle
        title="Serviços"
        subtitle="Atuação em TI (B2B/remoto) com foco em QA, desenvolvimento e governança."
      />
      <div className="card">
        <h3 className="card-title">Serviços em TI</h3>
        {site.servicesTI.map((s) => (
          <div key={s.title} className="service-block">
            <strong>{s.title}</strong>
            <ul className="muted">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
        <a
          className="badge"
          href={whatsappLink("Olá Marcelo! Quero conversar sobre serviços de TI (QA/Desenvolvimento/IA/Governança).")}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar proposta (TI)
        </a>
      </div>

      <Footer />
    </main>
  );
}
