# Feuerwehr Willingshausen

![Feuerwehr](thumbnail.jpg)

Custom-[Grav](https://getgrav.org)-Theme für die Freiwillige Feuerwehr Willingshausen.

> **Hinweis:** Das Theme ist derzeit **nicht** im offiziellen Grav-Repository gelistet. Eine Installation über GPM (`bin/gpm install`) oder den Admin-Theme-Browser ist daher **noch nicht möglich**. Bitte manuell über GitHub installieren (siehe unten).

# Installation

Voraussetzung: [Grav](https://github.com/getgrav/grav) `>= 1.7.0`.

## Manuelle Installation (aktuell einzige Möglichkeit)

1. Das Repository als ZIP von [GitHub](https://github.com/TimUx/grav-theme-feuerwehr) herunterladen (oder klonen).
2. Den Inhalt nach `/your/site/grav/user/themes/` entpacken.
3. Den Ordner in `feuerwehr` umbenennen, falls nötig.

Die Theme-Dateien liegen anschließend unter:

```
/your/site/grav/user/themes/feuerwehr
```

Optional kann beim manuellen Entpacken der Inhalt von `_demo/` nach `user/` übernommen werden (Beispielseiten für News, Footer und Sidebar).

### Schriften & Attribution

* **Oswald** – SIL Open Font License 1.1 (siehe `fonts/OFL-Oswald.txt`)
* **Font Awesome 6** (Subset) – lokal unter `fonts/fontawesome/` bzw. `css/fontawesome-subset.css`; [Font Awesome Free License](https://fontawesome.com/license/free)

# Aktualisieren

Da GPM noch nicht verfügbar ist, erfolgt das Update manuell:

1. Den Ordner `user/themes/feuerwehr` löschen (bzw. vorher sichern).
2. Die neue Version von [GitHub](https://github.com/TimUx/grav-theme-feuerwehr) herunterladen.
3. Nach `user/themes/` entpacken und den Ordner `feuerwehr` nennen.
4. Cache leeren: im Grav-Root `bin/grav clear-cache` ausführen.

> **Hinweis:** Änderungen an Dateien im Theme-Ordner gehen dabei verloren. Anpassungen in `user/config/themes/` bleiben erhalten.

# Funktionen

* Theme für Feuerwehr-Websites (FFW Willingshausen)
* Responsives Layout mit Burger-Navigation
* Blog-Ansicht mit Pagination
* Einsatzbericht-Template mit strukturierten Feldern
* Zweispalten-Seitenlayout (benötigt Shortcode Core)
* Sidebar mit Suche und Social-Links (Facebook, Instagram, WhatsApp, E-Mail)
* Lokale Oswald-Schrift sowie lokales Font-Awesome-Subset
* Fehlerseite (`error`) im Theme-Look
* Optionaler Demo-Inhalt unter `_demo/`

### Empfohlene Plugins

* [SimpleSearch](https://github.com/getgrav/grav-plugin-simplesearch) – Suche in Sidebar/Navigation
* [Pagination](https://github.com/getgrav/grav-plugin-pagination) – Blog-Seiten
* [Archives](https://github.com/getgrav/grav-plugin-archives) – Archiv in der Sidebar
* [PhotoSwipe](https://github.com/getgrav/grav-plugin-photoswipe) – Bildergalerien
* [Shortcode Core](https://github.com/getgrav/grav-plugin-shortcode-core) – Zweispalten-Layout (`page2c`)
* Likes-Plugin (falls verwendet) – Like-Button auf Beiträgen/Einsatzberichten

### Unterstützte Seitentemplates

* Default
* Blog
* Post (Blog-Beitrag)
* Formular
* Page (einspaltig)
* Page2c (zweispalig)
* Einsatzbericht
* Error
* SimpleSearch-Ergebnisse

# Konfiguration

Standardwerte in `feuerwehr.yaml`:

```yaml
enabled: true
posts:
  read_more_label: 'Weiterlesen'
sidebar:
  show_search: true
  show_social: true
social:
  facebook: 'https://www.facebook.com/ffw.willingshausen'
  instagram: 'https://www.instagram.com/ffw.willingshausen'
  whatsapp: 'https://whatsapp.com/channel/...'
  email: 'email@feuerwehr-willingshausen.de'
```

Zum Anpassen `feuerwehr.yaml` nach `user/config/themes/` kopieren und dort bearbeiten – oder die Optionen im Administrationspanel nutzen.

# Performance (Site/Server)

Empfohlene Grav-Einstellungen in `user/config/system.yaml` (nicht Teil des Themes):

```yaml
twig:
  cache: true
  auto_reload_templates: false   # in Produktion
assets:
  css_pipeline: true
  css_minify: true
  js_pipeline: true
  js_minify: true
images:
  cache: true
```

Zusätzlich am Webserver Gzip/Brotli und Cache-Header für Assets unter `user/themes/feuerwehr/` aktivieren.

# Theme aktivieren

1. Nach `/your/site/grav/user/config` wechseln.
2. Die Datei `system.yaml` öffnen.
3. `theme:` auf `theme: feuerwehr` setzen.
4. Speichern und Cache leeren: `bin/grav clear-cache`.

Danach erscheint das Theme im Frontend.
