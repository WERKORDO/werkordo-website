# WERKORDO Website

Responsiver Unternehmensauftritt für WERKORDO – Projektbüro für Innenausbau und Handwerk.

## Vor Veröffentlichung ersetzen

- `info@werkordo.de` nur verwenden, wenn die Adresse eingerichtet ist.
- Impressum und Datenschutzerklärung mit den vollständigen Pflichtangaben ergänzen.
- Den Portrait-Platzhalter im Abschnitt „Über WERKORDO“ durch ein authentisches Foto von Manuel Bauer ersetzen.
- Die Domain in `app/layout.tsx` anpassen, falls nicht `werkordo.de` verwendet wird.

## Lokal starten

Node.js 22 oder neuer und pnpm installieren, dann:

```bash
pnpm install
pnpm dev
```

## Build prüfen

```bash
pnpm build
```

## Veröffentlichung mit GitHub Pages

Die fertige Automatisierung liegt unter `.github/workflows/deploy-pages.yml`.

1. Neues GitHub-Repository anlegen.
2. Den gesamten Inhalt dieses Ordners hochladen.
3. Im Repository unter **Settings → Pages → Source** den Eintrag **GitHub Actions** auswählen.
4. Änderungen in den Branch `main` laden.
5. Nach wenigen Minuten erscheint die öffentliche Adresse im Bereich **Settings → Pages**.

Der Ablauf erzeugt automatisch eine statische Version und veröffentlicht sie. Für eine eigene Domain in GitHub Pages die Domain eintragen und anschließend `BASE_PATH` im Workflow leeren.
