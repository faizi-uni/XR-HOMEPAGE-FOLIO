# XR-HOMEPAGE-FOLIO
Dieses Repository bildet die Grundlage für eine digitale Präsenz von Harun Faizi – eine Homepage, die zugleich Portfolio und Einladung ist. Sie versammelt Arbeitsproben, eröffnet Wege zur Zusammenarbeit und gibt Einblick in eine Arbeitsweise, die zwischen Architektur, Forschung und digitalen Experimenten wächst.

## Entwicklung
Installiere Abhängigkeiten mit `npm install`. Sollte der Standardzugriff mit einem 403-Fehler wegen Proxy/Sicherheitsrichtlinien scheitern, versuche nacheinander:

1. Eventuelle Proxy-Umgebungsvariablen entfernen:
   ```bash
   unset npm_config_http-proxy npm_config_https-proxy
   ```
2. Einen alternativen Registry-Mirror setzen (lokal oder frei erreichbar):
   ```bash
   npm install --registry=https://registry.npmmirror.com/
   ```
3. Falls eine MITM-CA notwendig ist, den Pfad per `NODE_EXTRA_CA_CERTS` setzen oder die Datei in `.npmrc` hinterlegen.

So lässt sich der Abhängigkeitsdownload auch in eingeschränkten Netzwerken durchführen.
