import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="card hero">
      <div className="hero__content">
        <span className="hero__eyebrow">QA • Desenvolvimento • Governança</span>
        <h1 className="hero__title">{site.name}</h1>
        <p className="muted hero__subtitle">{site.headline}</p>

        <div className="hero__actions">
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
            className="badge badge--accent"
            href={whatsappLink("Olá Marcelo! Vi seu site e gostaria de falar sobre serviços/projetos.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp • {site.whatsappDisplay}
          </a>
        </div>

        <p className="muted hero__location">
          {site.location} • Disponível para oportunidades e projetos
        </p>
      </div>

      <div className="hero__media">
        <div className="hero__photo-frame">
          <Image
            className="hero__photo"
            src="/imagens/perfil-novo.png"
            alt={`Foto de ${site.name}`}
            width={190}
            height={240}
            sizes="(max-width: 640px) 160px, 190px"
            priority
          />
        </div>
      </div>
    </header>
  );
}
