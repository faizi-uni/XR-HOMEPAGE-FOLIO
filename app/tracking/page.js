'use client';

import { useEffect, useMemo, useState } from 'react';
import FloorplanMap from '../../components/FloorplanMap';
import { stationById } from '../../lib/stations';

const STORAGE_KEY = 'xr-tracking-session-id';

export default function TrackingPage() {
  const [sessionId, setSessionId] = useState('');
  const [events, setEvents] = useState([]);
  const [activeStationId, setActiveStationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) {
      setSessionId(existing);
    }
  }, []);

  const activeStation = useMemo(() => stationById[activeStationId], [activeStationId]);

  async function startSession() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/sessions', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Session konnte nicht erstellt werden.');
      }

      const data = await response.json();
      setSessionId(data.sessionId);
      setEvents([]);
      setActiveStationId('');
      window.sessionStorage.setItem(STORAGE_KEY, data.sessionId);
    } catch (sessionError) {
      setError(sessionError.message);
    } finally {
      setLoading(false);
    }
  }

  async function onSelectStation(stationId) {
    if (!sessionId || loading) {
      setError('Bitte zuerst ein anonymes Profil starten.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const fromStationId = events.length ? events[events.length - 1].stationId : null;
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, stationId, fromStationId }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Event konnte nicht gespeichert werden.');
      }

      setActiveStationId(stationId);

      if (!data.deduplicated) {
        setEvents((current) => [...current, data.event]);
      }
    } catch (eventError) {
      setError(eventError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="section tracking-header">
        <h1>Ausstellungstracking (anonym)</h1>
        <p>
          Tippe auf dem Grundriss die aktuelle Position der Person. Jede Auswahl wird als
          Stationswechsel gespeichert.
        </p>

        <div className="tracking-actions">
          <button type="button" className="primary-btn" onClick={startSession} disabled={loading}>
            {sessionId ? 'Neues anonymes Profil starten' : 'Anonymes Profil starten'}
          </button>
          {sessionId ? <code className="session-chip">Session: {sessionId}</code> : null}
        </div>

        {activeStation ? (
          <p className="active-station">
            Aktuelle Station: <strong>{activeStation.label}</strong>
          </p>
        ) : null}

        {error ? <p className="error-text">{error}</p> : null}
      </section>

      <FloorplanMap activeStationId={activeStationId} onSelectStation={onSelectStation} />

      <section className="section">
        <h2>Verlauf</h2>
        {events.length === 0 ? (
          <p>Noch keine Bewegungsdaten erfasst.</p>
        ) : (
          <ol className="timeline-list">
            {events.map((event, index) => (
              <li key={`${event.timestamp}-${index}`}>
                <strong>{stationById[event.stationId]?.label || event.stationId}</strong>
                <span>{new Date(event.timestamp).toLocaleTimeString('de-DE')}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}
