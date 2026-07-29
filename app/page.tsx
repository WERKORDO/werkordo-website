import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WERKORDO | Projektbüro für Innenausbau und Handwerk",
  description:
    "Externe Projektunterstützung für Schreinereien und Innenausbaubetriebe – vom Leistungsverzeichnis bis in die Werkstatt.",
};

const services = [
  {
    number: "01",
    title: "Projektmanagement",
    text: "Termine, Informationen und Entscheidungen bleiben im Fluss – mit einem festen Ansprechpartner über alle Projektphasen.",
    tags: ["Koordination", "Terminführung", "Kommunikation"],
  },
  {
    number: "02",
    title: "Arbeitsvorbereitung",
    text: "Aus Plänen werden klare Fertigungsgrundlagen: technische Klärung, Stücklisten, Bestellungen und saubere Übergaben.",
    tags: ["Technische Klärung", "Stücklisten", "Bestellungen"],
  },
  {
    number: "03",
    title: "Digitale Organisation",
    text: "Praktische, verständliche Abläufe statt Insellösungen – passend zu Ihrem Betrieb und zu Ihrem Team.",
    tags: ["Prozesse", "Dokumentation", "Werkzeuge"],
  },
];

const steps = [
  ["Verstehen", "Wir klären Auftrag, Engpass und gewünschten Umfang."],
  ["Ordnen", "Wir strukturieren Unterlagen, Zuständigkeiten und Termine."],
  ["Steuern", "Wir begleiten Abstimmungen und halten Entscheidungen fest."],
  ["Übergeben", "Die Werkstatt erhält vollständige, umsetzbare Grundlagen."],
];

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WERKORDO",
    description: "Projektbüro für Innenausbau und Handwerk",
    founder: { "@type": "Person", name: "Manuel Bauer" },
    areaServed: "Deutschland",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roding",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WERKORDO Startseite">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>WERKORDO</span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#ueber">Über WERKORDO</a>
        </nav>
        <a className="button button-small header-cta" href="#kontakt">Projekt besprechen</a>
        <details className="mobile-menu">
          <summary aria-label="Navigation öffnen"><span /><span /></summary>
          <nav aria-label="Mobile Navigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#ueber">Über WERKORDO</a>
            <a href="#kontakt">Projekt besprechen</a>
          </nav>
        </details>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Projektbüro aus Roding</p>
            <h1>Vom Auftrag bis<br />in die <em>Werkstatt.</em></h1>
            <p className="hero-lead">
              WERKORDO entlastet Schreinereien und Innenausbaubetriebe bei
              Projektmanagement, Arbeitsvorbereitung und digitalen Abläufen.
            </p>
            <div className="hero-actions">
              <a className="button" href="#kontakt">Unverbindlich anfragen <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#leistungen">Leistungen ansehen <span aria-hidden="true">↓</span></a>
            </div>
            <ul className="trust-row" aria-label="Vorteile">
              <li>Handwerksnah</li><li>Flexibel einsetzbar</li><li>Ein Ansprechpartner</li>
            </ul>
          </div>
          <div className="hero-visual" aria-label="Darstellung eines geordneten Projektablaufs">
            <div className="plan-grid" />
            <div className="project-card card-a">
              <span className="card-label">PROJEKT 01</span>
              <b>Innenausbau</b>
              <div className="progress"><i /></div>
              <small>Planung → Werkstatt</small>
            </div>
            <div className="project-card card-b">
              <span className="status-dot" /> <small>Übergabe bereit</small>
              <div className="mini-lines"><i /><i /><i /></div>
            </div>
            <div className="axis-label x">WERK</div>
            <div className="axis-label y">ORDO</div>
            <div className="material-swatch"><i /><i /><i /></div>
          </div>
        </section>

        <section className="signal-bar" aria-label="Kernleistung">
          <p>Wenn Kapazität fehlt, aber Qualität bleiben muss.</p>
          <span>Projektsteuerung</span><span>Arbeitsvorbereitung</span><span>Digitalisierung</span>
        </section>

        <section className="section services" id="leistungen">
          <div className="section-heading">
            <p className="eyebrow"><span /> Was wir übernehmen</p>
            <h2>Mehr Ruhe im Büro.<br />Mehr Klarheit in der Fertigung.</h2>
            <p>Genau dort Unterstützung, wo Projekte Zeit, Abstimmung und technische Sorgfalt brauchen.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="scope-note">
            <strong>Je nach Projekt einzeln oder kombiniert.</strong>
            <span>Leistungsverzeichnisse · Architektenabstimmung · Konstruktion vorbereiten · Fertigung übergeben</span>
          </div>
        </section>

        <section className="section workflow" id="ablauf">
          <div className="workflow-intro">
            <p className="eyebrow light"><span /> So arbeiten wir</p>
            <h2>Ein klarer Weg durch jedes Projekt.</h2>
            <p>WERKORDO fügt sich in bestehende Abläufe ein. Ohne unnötige Systeme, ohne lange Anlaufzeit.</p>
            <a className="text-link light" href="#kontakt">Engpass besprechen <span aria-hidden="true">↗</span></a>
          </div>
          <ol className="steps">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section founder" id="ueber">
          <div className="founder-portrait" role="img" aria-label="Platzhalter für ein authentisches Portrait von Manuel Bauer">
            <span className="portrait-initials">MB</span>
            <div className="portrait-caption">Manuel Bauer<br /><small>Gründer von WERKORDO</small></div>
          </div>
          <div className="founder-copy">
            <p className="eyebrow"><span /> Handwerk verstehen</p>
            <h2>Aus der Praxis.<br />Für die Praxis.</h2>
            <p className="quote">„Gute Projekte scheitern selten am Können – sondern an fehlender Zeit, unklaren Übergaben und Informationen, die zu spät ankommen.“</p>
            <p>
              WERKORDO steht für eine einfache Idee: anspruchsvolle handwerkliche
              Projekte so zu organisieren, dass Büro, Planung und Werkstatt
              zuverlässig zusammenspielen. Persönlich geführt von Manuel Bauer,
              mit Blick fürs Detail und Verständnis für betriebliche Realität.
            </p>
            <div className="values"><span>Präzise</span><span>Pragmatisch</span><span>Verlässlich</span></div>
          </div>
        </section>

        <section className="section fit">
          <div>
            <p className="eyebrow"><span /> Passt WERKORDO zu Ihnen?</p>
            <h2>Für Betriebe, die gute Arbeit machen – und Projekte besser organisieren wollen.</h2>
          </div>
          <div className="fit-list">
            <p><b>01</b><span>Aufträge sind da, aber im Büro fehlt Kapazität.</span></p>
            <p><b>02</b><span>Projektleiter sollen gezielt entlastet werden.</span></p>
            <p><b>03</b><span>Übergaben in die Werkstatt brauchen mehr Klarheit.</span></p>
            <p><b>04</b><span>Digitale Abläufe sollen praktisch statt kompliziert sein.</span></p>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <p className="eyebrow light"><span /> Erstes Gespräch</p>
          <h2>Wo können wir<br /><em>Ordnung schaffen?</em></h2>
          <p>Erzählen Sie kurz von Ihrem Projekt oder Engpass. Im ersten Gespräch klären wir, ob und wie WERKORDO Sie sinnvoll unterstützen kann.</p>
          <a className="button button-light" href="mailto:info@werkordo.de?subject=Projektanfrage%20an%20WERKORDO">E-Mail vorbereiten <span aria-hidden="true">↗</span></a>
          <small>Unverbindlich · Persönlich mit Manuel Bauer · Standort Roding</small>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>WERKORDO</span></a>
        <p>Projektbüro für Innenausbau und Handwerk<br />Vom Auftrag bis in die Werkstatt.</p>
        <div><span>Roding, Bayern</span><a href="mailto:info@werkordo.de">info@werkordo.de</a></div>
        <nav aria-label="Rechtliches"><a href="#">Impressum</a><a href="#">Datenschutz</a></nav>
        <small>© {new Date().getFullYear()} WERKORDO · Manuel Bauer</small>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
