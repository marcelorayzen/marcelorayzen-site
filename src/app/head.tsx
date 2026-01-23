import { site } from "@/lib/site";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelorayzen-marcelorayzen-site.vercel.app").replace(/\/$/, "");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      url: siteUrl,
      email: `mailto:${site.email}`,
      jobTitle: "QA Automation Engineer e Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location,
      },
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${site.name} | Portfolio`,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function Head() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
