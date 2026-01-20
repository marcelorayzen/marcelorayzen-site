import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";

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

export default function CaseLGPDIA() {
  return (
    <main className="container">
      <div className="case-nav">
        <a className="badge badge--ghost" href="/">← Voltar para a página inicial</a>
      </div>

      <Header />

      <SectionTitle
        title="Cases atualizados"
        subtitle="Produtos B2B e infra local-first com engenharia, QA e governança."
      />

      <div className="grid" style={{ gap: 22 }}>
        {site.caseStudies.map((caseStudy) => (
          <section className="card" key={caseStudy.title}>
            <h2 style={{ marginTop: 0 }}>{caseStudy.title}</h2>
            <p className="muted" style={{ marginTop: 6 }}>{caseStudy.positioning}</p>
            <p className="muted" style={{ marginTop: 6 }}>{caseStudy.summary}</p>

            <div className="grid grid-2" style={{ marginTop: 16 }}>
              {caseStudy.highlights.map((item) => (
                <div className={`card${item.code ? " prompt-card" : ""}`} key={item.title}>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  {item.text && <p className="muted">{item.text}</p>}
                  {item.bullets && (
                    <ul className="muted">
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {item.code && <pre className="muted">{item.code}</pre>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SectionTitle
        title="Modelos de IA aplicada em testes"
        subtitle="Três modelos prontos para acelerar QA e desenvolvimento com segurança."
      />
      <div className="grid grid-2">
        {site.aiModels.map((model) => (
          <div className="card prompt-card" key={model.title}>
            <h3 style={{ marginTop: 0 }}>{model.title}</h3>
            <pre className="muted">{model.prompt}</pre>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
