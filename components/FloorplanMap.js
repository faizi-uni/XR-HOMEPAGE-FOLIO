'use client';

import Image from 'next/image';
import { STATIONS } from '../lib/stations';

export default function FloorplanMap({ activeStationId, onSelectStation }) {
  return (
    <section className="floorplan-card" aria-label="Ausstellungsgrundriss">
      <div className="floorplan-map">
        <Image
          src="/floorplan-placeholder.svg"
          alt="Schematische Karte des Ausstellungsgrundrisses"
          className="floorplan-image"
          fill
          priority
        />

        {STATIONS.map((station) => (
          <button
            type="button"
            key={station.id}
            className={`station-pin ${activeStationId === station.id ? 'is-active' : ''}`}
            style={{ left: `${station.x}%`, top: `${station.y}%` }}
            onClick={() => onSelectStation(station.id)}
            aria-label={`Station ${station.label}`}
          >
            <span className="station-pin__dot" />
            <span className="station-pin__label">{station.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
