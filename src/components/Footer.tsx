import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ marginTop: 26, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="muted" style={{ margin: 0, fontSize: 13 }}>
        © {new Date().getFullYear()} {site.name}. Construído para portfólio e serviços.
      </p>
    </footer>
  );
}
