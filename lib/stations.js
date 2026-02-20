export const STATIONS = [
  { id: 'eingang', label: 'Eingang', x: 8, y: 84, zone: 'Süd-West' },
  { id: 'modell-wohnhotel', label: 'Modell Wohnhotel', x: 16, y: 74, zone: 'West' },
  { id: 'atelier', label: 'Atelier', x: 38, y: 77, zone: 'Mitte' },
  { id: 'zentrum', label: 'Zentrum', x: 50, y: 55, zone: 'Mitte' },
  { id: 'vr-kreis', label: 'VR Kreis', x: 63, y: 68, zone: 'Süd-Ost' },
  { id: 'fotografie-video', label: 'Fotografie & Video', x: 79, y: 26, zone: 'Nord-Ost' },
  { id: 'leseecke', label: 'Leseecke', x: 64, y: 86, zone: 'Süd' },
  { id: 'ausgang', label: 'Ausgang', x: 92, y: 84, zone: 'Süd-Ost' },
];

export const stationById = Object.fromEntries(STATIONS.map((station) => [station.id, station]));
