import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-title">
      <span className="section-title__line" />
      <div>
        <h2 style={{ margin: 0, fontSize: 20 }}>{title}</h2>
        {subtitle && <p className="muted" style={{ margin: "6px 0 0 0" }}>{subtitle}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="container">
      <Header />

      <section className="card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>Sobre mim</h2>
        <p className="muted" style={{ marginTop: 8 }}>
          Sou QA Automation Engineer e Software Developer com experiência em automação de testes, desenvolvimento Web e API,
          qualidade de software, governança de dados e conformidade com LGPD.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          Atuo aplicando IA e prompt engineering para acelerar testes, análise de falhas, validação de APIs e criação de
          cenários BDD, sempre com foco em previsibilidade, rastreabilidade e segurança da informação. Trabalho com
          Selenium, Cucumber, RestAssured, Postman, Java, TypeScript, Next.js e arquiteturas orientadas a processos.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          Tenho forte preocupação com ética no desenvolvimento, governança e qualidade desde o design, além de
          experiência prática na construção de produtos reais com visão de negócio.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
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
          <h3 style={{ marginTop: 0 }}>Automação de QA</h3>
          <p className="muted">
            Automação Web e API, BDD, regressão e estratégia de testes com foco em confiabilidade.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>IA aplicada</h3>
          <p className="muted">
            IA aplicada em QA e desenvolvimento, automações com n8n, geração de cenários e integrações via APIs.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Governança & LGPD</h3>
          <p className="muted">
            Boas práticas para dados sensíveis, evidências e conformidade em ambientes corporativos.
          </p>
        </div>
      </div>

      <SectionTitle title="Projetos em destaque" subtitle="Repositórios selecionados para recrutadores e clientes." />
      <div className="grid grid-2">
        {site.projects.map((p) => (
          <div className="card" key={p.name}>
            <h3 style={{ marginTop: 0 }}>{p.name}</h3>
            <p className="muted" style={{ marginTop: 6 }}>{p.tagline}</p>
            {p.images?.length ? (
              <div className="project-gallery" aria-label={`Imagens do projeto ${p.name}`}>
                {p.images.map((img) => (
                  <img className="project-image" key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
            ) : null}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              {p.stack.map((s) => (
                <span className="badge" key={s}>{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
              {p.github ? (
                <a className="badge" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              ) : (
                <span className="badge badge--ghost" aria-disabled style={{ opacity: 0.65 }}>Repositório privado</span>
              )}
              {p.demo ? (
                <a className="badge" href={p.demo} target="_blank" rel="noreferrer">Demonstração</a>
              ) : (
                <span className="badge" aria-disabled style={{ opacity: 0.65 }}>Demonstração (em breve)</span>
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
            <h3 style={{ marginTop: 0 }}>{caseStudy.title}</h3>
            <p className="muted" style={{ marginTop: 6 }}>{caseStudy.positioning}</p>
            <p className="muted" style={{ marginTop: 6 }}>{caseStudy.summary}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <a className="badge" href="/case-lgpd-ia">Ver cases completos</a>
      </div>

      <SectionTitle
        title="Serviços"
        subtitle="Atuação em TI (B2B/remoto) com foco em QA, desenvolvimento e governança."
      />
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Serviços em TI</h3>
        {site.servicesTI.map((s) => (
          <div key={s.title} style={{ marginTop: 14 }}>
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
