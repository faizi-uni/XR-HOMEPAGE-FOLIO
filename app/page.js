import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="section hero-card">
        <h1>Ausstellungs-Tracker für Betreuer:innen</h1>
        <p>
          Diese mobile Web-App hilft dir, anonyme Bewegungsdaten auf einem Grundriss zu erfassen.
          Starte ein anonymes Profil und dokumentiere Station für Station per Tap.
        </p>
        <div className="hero-actions">
          <Link href="/tracking" className="primary-btn">
            Tracking öffnen
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Wie es funktioniert</h2>
        <ul>
          <li>1) Anonymes Profil starten (keine Namen, keine direkten Identifikatoren)</li>
          <li>2) Aktuelle Position auf dem Grundriss antippen</li>
          <li>3) Nächste Station antippen und Bewegungssequenz erfassen</li>
        </ul>
      </section>
    </main>
  );
}
