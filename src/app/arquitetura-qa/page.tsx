import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";

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

export default function ArquiteturaQA() {
  const { architectureQA } = site;

  return (
    <main className="container">
      <div className="case-nav">
        <a className="badge badge--ghost" href="/">← Voltar para a página inicial</a>
      </div>

      <Header />

      <SectionTitle
        title={architectureQA.title}
        subtitle={architectureQA.subtitle}
      />

      <section className="card">
        <h2 className="card-title">{architectureQA.overview.title}</h2>
        {architectureQA.overview.paragraphs.map((paragraph) => (
          <p className="muted" key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <SectionTitle
        title={architectureQA.architecture.title}
        subtitle={architectureQA.architecture.description}
      />

      <div className="grid grid-2">
        <section className="card">
          <h3 className="card-title">Principais camadas</h3>
          <ul className="muted">
            {architectureQA.architecture.layers.map((layer) => (
              <li key={layer.title}>
                <strong>{layer.title}</strong> — {layer.text}
              </li>
            ))}
          </ul>
          <p className="muted">{architectureQA.architecture.qaNote}</p>
        </section>
        <section className="card prompt-card">
          <h3 className="card-title">Diagrama simples</h3>
          <pre className="muted">{architectureQA.architecture.diagram}</pre>
        </section>
      </div>

      <SectionTitle title={architectureQA.acceptanceCriteria.title} subtitle="Exemplos de critérios utilizados." />
      <section className="card">
        <p className="muted">{architectureQA.acceptanceCriteria.description}</p>
        <ul className="muted">
          {architectureQA.acceptanceCriteria.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="muted">{architectureQA.acceptanceCriteria.closing}</p>
      </section>

      <SectionTitle title={architectureQA.qaPlan.title} subtitle="Estrutura objetiva, com foco em visibilidade." />
      <section className="card">
        <p className="muted">{architectureQA.qaPlan.description}</p>
        {architectureQA.qaPlan.sections.map((section) => (
          <div className="service-block" key={section.title}>
            <strong>{section.title}</strong>
            <ul className="muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="muted">{architectureQA.qaPlan.closing}</p>
      </section>

      <SectionTitle title={architectureQA.integrationValidation.title} subtitle="Integrações externas como pontos críticos." />
      <section className="card">
        <p className="muted">{architectureQA.integrationValidation.description}</p>
        <ul className="muted">
          {architectureQA.integrationValidation.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <SectionTitle title={architectureQA.aiSupport.title} subtitle="IA como suporte, com decisão humana." />
      <section className="card">
        <p className="muted">{architectureQA.aiSupport.description}</p>
        <ul className="muted">
          {architectureQA.aiSupport.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="muted">{architectureQA.aiSupport.closing}</p>
      </section>

      <SectionTitle title={architectureQA.conclusion.title} />
      <section className="card">
        <p className="muted">{architectureQA.conclusion.text}</p>
      </section>

      <Footer />
    </main>
  );
}
