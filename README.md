# XR-HOMEPAGE-FOLIO
Dieses Repository bildet die Grundlage für eine digitale Präsenz von Harun Faizi – eine Homepage, die zugleich Portfolio und Einladung ist. Sie versammelt Arbeitsproben, eröffnet Wege zur Zusammenarbeit und gibt Einblick in eine Arbeitsweise, die zwischen Architektur, Forschung und digitalen Experimenten wächst.

## Entwicklung
Installiere Abhängigkeiten mit `npm install`. Falls der Standardzugriff wegen Proxy/Sicherheitsrichtlinien scheitert, probiere nacheinander:

1. Eventuelle Proxy-Umgebungsvariablen entfernen (vermeidet Warnungen wie „Unknown env config \"http-proxy\"“):
   ```bash
   unset npm_config_http-proxy npm_config_https-proxy
   ```
2. Einen alternativen Registry-Mirror temporär setzen:
   ```bash
   npm install --registry=https://registry.npmmirror.com/
   ```
3. Eine eigene CA einbinden, falls nötig:
   ```bash
   export NODE_EXTRA_CA_CERTS=/pfad/zur/ca.pem
   ```
4. Wenn alles blockiert, nutze ein vorbereitetes Offline- oder internen Registry-Cache (z. B. Artifactory/Nexus) oder kopiere einen vorhandenen `node_modules`-Ordner in das Projekt.

Starte die Entwicklungsumgebung anschließend mit `npm run dev`.
