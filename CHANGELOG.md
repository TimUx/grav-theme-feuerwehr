# v1.0.2
## 07/30/2026

1. [](#bugfix)
    * Header-Logos nicht mehr verzerrt (`width: auto`, HTML-Größenattribute entfernt)
    * PhotoSwipe-Lightbox für Beitragsgalerien wieder aktiv (Soft-Guard entfernt)

# v1.0.1
## 07/30/2026

1. [](#improved)
    * Oswald-Schrift lokal im Theme eingebunden (woff2)
    * Font Awesome als lokales Icon-Subset (ohne CDN)
    * CSS minifiziert (`custom.min.css`); Hintergrund als WebP mit JPG-Fallback
    * Theme-Assets über den Grav Asset Manager geladen
    * Bilder stark verkleinert (Hintergrund, Header-Logos) ohne sichtbare Designänderung
    * Blog-/Such-Vorschaubilder per Grav Media skaliert
    * Soft-Guards für Likes und PhotoSwipe; Theme-Config für Suche/Social
    * Page-Blueprints für Blog, Post, Page, Form, Error; Demo-Inhalt `_demo/`
    * Fehlerseite `error.html.twig`; Burger als Button inkl. Fokus-Styles
    * Ungenutzte Option `posts.max_initial` entfernt; Beitragsanzahl steuert Pagination
2. [](#bugfix)
    * CSS-Selektor für `.logo-left` korrigiert
    * Ungültiges verschachteltes `<main>` entfernt
    * Wirkungsloses Lazy-Load-JavaScript entfernt

# v1.0.0
## 09/18/2025

1. [](#new)
    * Erstes Release des Feuerwehr-Themes für Willingshausen
    * Templates für Default, Blog, Post, Formular, Zweispalten-Seite und Einsatzbericht
    * Sidebar mit Suche und Social-Links
    * Responsive Navigation mit Burger-Menü
