import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="muted footer__text">
        © {new Date().getFullYear()} {site.name}. Construído para portfolio e serviços.
      </p>
    </footer>
  );
}
