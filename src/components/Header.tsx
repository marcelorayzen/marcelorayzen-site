import { site, whatsappLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="card" style={{ padding: 22 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 34, letterSpacing: -0.5 }}>{site.name}</h1>
          <p className="muted" style={{ margin: "8px 0 0 0", fontSize: 15 }}>
            {site.headline}
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="badge" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="badge" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="badge" href={`mailto:${site.email}`}>
            E-mail
          </a>
          <a
            className="badge"
            href={whatsappLink("Olá Marcelo! Vi seu site e gostaria de falar sobre serviços/projetos.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp • {site.whatsappDisplay}
          </a>
        </div>

        <p className="muted" style={{ margin: 0 }}>
          {site.location} • Disponível para oportunidades e projetos
        </p>
      </div>
    </header>
  );
}
