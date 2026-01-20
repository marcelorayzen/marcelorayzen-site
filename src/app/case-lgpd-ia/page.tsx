import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";

export default function CaseLGPDIA() {
  return (
    <main className="container">
      <Header />

      <div className="card" style={{ marginTop: 18 }}>
        <h2 style={{ marginTop: 0 }}>{site.caseLGPDIA.title}</h2>
        <p className="muted">{site.caseLGPDIA.summary}</p>

        <div className="grid" style={{ marginTop: 12 }}>
          {site.caseLGPDIA.sections.map((sec) => (
            <div className="card" key={sec.title}>
              <h3 style={{ marginTop: 0 }}>{sec.title}</h3>
              <ul className="muted">
                {sec.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <h3 style={{ marginTop: 0 }}>Exemplo de instrução</h3>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }} className="muted">
{`Analise este ponto de acesso de API e identifique possíveis riscos de LGPD,
como exposição de dados pessoais, ausência de anonimização ou tratamento inadequado de erros.
Sugira casos de teste automatizados.`}
          </pre>
        </div>
      </div>

      <Footer />
    </main>
  );
}
