# XR-HOMEPAGE-FOLIO

Mobile Web-App für Betreuer:innen einer Ausstellung, um **anonyme Bewegungsdaten** direkt auf einem Grundriss zu erfassen.

## Funktionen (MVP)
- Start eines anonymen Profils (Session-ID, kein Name, keine direkten Identifikatoren)
- Interaktiver Grundriss mit tappbaren Stationen
- Bewegungsverlauf pro Session als Timeline
- API-Endpunkte für Session, Events und Basis-Analytics

## Datenschutz (MVP)
- Es werden keine Klarnamen oder direkten personenbezogenen Identifikatoren gespeichert.
- Erfasst werden nur Session-ID, Stationen und Zeitstempel.
- Diese Demo nutzt eine In-Memory-Speicherung (Daten gehen bei Server-Neustart verloren).

## API Schema
### `POST /api/sessions`
Erstellt eine anonyme Session.

Beispielantwort:
```json
{
  "sessionId": "f57b0d25-61af-494e-b8a3-c99e5eafad43",
  "startedAt": "2026-02-20T10:10:00.000Z"
}
```

### `POST /api/events`
Speichert einen Stationswechsel.

Beispiel-Request:
```json
{
  "sessionId": "f57b0d25-61af-494e-b8a3-c99e5eafad43",
  "stationId": "atelier",
  "fromStationId": "modell-wohnhotel"
}
```

### `GET /api/analytics`
Liefert aggregierte Basisdaten (Sessions, Stationen, Übergänge).

## Setup
1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

2. Entwicklung starten:
   ```bash
   npm run dev
   ```

3. Im Browser öffnen:
   - `http://localhost:3000` (Startseite)
   - `http://localhost:3000/tracking` (Erfassung)
