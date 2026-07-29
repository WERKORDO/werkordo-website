import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://werkordo.de"),
  title: {
    default: "WERKORDO | Projektbüro für Innenausbau und Handwerk",
    template: "%s | WERKORDO",
  },
  description: "Externe Projektunterstützung für Schreinereien und Innenausbaubetriebe – vom Auftrag bis in die Werkstatt.",
  keywords: ["Arbeitsvorbereitung Schreinerei", "Projektmanagement Innenausbau", "Projektbüro Handwerk", "Roding"],
  openGraph: {
    title: "WERKORDO – Vom Auftrag bis in die Werkstatt.",
    description: "Projektmanagement, Arbeitsvorbereitung und digitale Organisation für Schreinereien und Innenausbaubetriebe.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
