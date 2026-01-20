import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, whatsappLink } from "@/lib/site";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginTop: 22, marginBottom: 10 }}>
      <h2 style={{ margin: 0, fontSize: 20 }}>{title}</h2>
      {subtitle && <p className="muted" style={{ margin: "6px 0 0 0" }}>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="container">
      <Header />

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
            Testes assistidos por IA para análise de falhas, geração de cenários e validação de APIs e registros.
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
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              {p.stack.map((s) => (
                <span className="badge" key={s}>{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
              <a className="badge" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              {p.demo ? (
                <a className="badge" href={p.demo} target="_blank" rel="noreferrer">Demonstração</a>
              ) : (
                <span className="badge" aria-disabled style={{ opacity: 0.65 }}>Demonstração (em breve)</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <SectionTitle title="Caso em destaque" subtitle="LGPD + IA aplicada em QA e desenvolvimento (visão prática)." />
      <div className="card">
        <h3 style={{ marginTop: 0 }}>{site.caseLGPDIA.title}</h3>
        <p className="muted">{site.caseLGPDIA.summary}</p>
        <a className="badge" href="/case-lgpd-ia">Ver caso</a>
      </div>

      <SectionTitle title="Serviços" subtitle="Dois blocos separados: TI (B2B/remoto) e Marcenaria (horas vagas)." />
      <div className="grid grid-2">
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

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Marcenaria & Montagem</h3>
          {site.servicesMaker.map((s) => (
            <div key={s.title} style={{ marginTop: 14 }}>
              <strong>{s.title}</strong>
              <ul className="muted">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
          <a
            className="badge"
            href={whatsappLink("Olá Marcelo! Gostaria de orçamento/agenda para marcenaria e montagem.")}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento (Marcenaria)
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
