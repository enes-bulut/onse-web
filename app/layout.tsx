import type { Metadata } from "next";
import "./globals.css";

import { siteUrl, basePath } from "../site-config.mjs";

const canonicalUrl = siteUrl;
const title = "Ontology-Native Software Engineering | Ontology-Native Engineering Research";
const description =
  "An independent, non-commercial technical research project exploring how ontologies could guide software design, implementation, verification, and evolution.";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(canonicalUrl),
    title,
    description,
    applicationName: "Ontology-Native Software Engineering",
    alternates: {
      canonical: canonicalUrl,
      types: {
        "text/markdown": `${canonicalUrl}index.html.md`,
      },
    },
    icons: {
      icon: `${basePath}/favicon.png?v=20260809`,
      shortcut: `${basePath}/favicon.png?v=20260809`,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Ontology-Native Software Engineering",
      title: "Ontology-Native Software Engineering — Exploring Ontology-Native Engineering",
      description: "An evolving technical research hypothesis investigating ontologies as an authoritative semantic foundation for software systems.",
      images: [
        {
          url: `${canonicalUrl}og.png`,
          width: 1731,
          height: 909,
          alt: "Ontology-Native Software Engineering | Own the meaning behind your systems.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ontology-Native Software Engineering — Exploring Ontology-Native Engineering",
      description: "Exploring whether software meaning can remain explicit, authoritative, and independent of implementation.",
      images: [`${canonicalUrl}og.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
