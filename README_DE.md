# Nativity Control – Bedienungsanleitung

Diese Weboberfläche steuert WS2812-LEDs, Audio (Sprachdateien + Hintergrundmusik) und den Bachlauf (GPIO) anhand eines visuellen Kalenders.

## Seitenüberblick
- **Home**: Status (aktives Modul), Schnellaktionen.
- **Kalender**: Einträge für Modul 1 (gelb) oder Modul 2 (blau) anlegen/bearbeiten. Serientermin (wöchentlich) per Haken möglich.
- **Audio**: Sprachdateien verwalten. Hintergrundmusik je Szenario wird in `music_map` definiert.
- **LEDs**: Einzel-Overrides pro LED, Farbe (#RRGGBB) sowie Start-/Endsekunde innerhalb eines Szenarios.
- **Export**: Export der Daten in eine Textdatei (JSON) unter `exports/`.

## Module
- **Modul 0 (Aus)**: Keine Einträge im Kalender → alles aus.
- **Modul 1**: Alle LEDs leuchten identisch (Farbe aktuell Platzhalter „Krippe innen“, #ffff00). Keine Audioausgabe.
- **Modul 2**: Tag/Nacht-Zyklus (300 s): 100 s Tag, 50 s Tag→Nacht, 100 s Nacht, 50 s Nacht→Tag.
  - Tag: Nur Pfad-LEDs an (gelb).
  - Tag→Nacht: Pfad von Gelb→Rot→Blau über 50 s, Laterne ab Sekunde 40 an.
  - Nacht: Pfad Blau, Gebäude können individuell ein-/ausgehen (LED-Overrides).
  - Nacht→Tag: Pfad von Blau→Rot→Gelb über 50 s, Laterne ab Sekunde 10 aus.
  - Während Modul 2 ist der **Bachlauf aktiv**.

> **Hinweis:** Die tatsächliche Zuordnung von LED-Indizes zu Kategorien bitte in `services/scenarios.js` (`CategoryRanges`) anpassen.
