import { stationById } from '../../../lib/stations';
import { addEvent, getSessionEvents, hasSession } from '../../../lib/store';

const DEDUP_WINDOW_MS = 1200;

export async function POST(request) {
  const body = await request.json();
  const { sessionId, stationId, fromStationId } = body || {};

  if (!sessionId || !hasSession(sessionId)) {
    return Response.json({ error: 'Ungültige oder fehlende sessionId.' }, { status: 400 });
  }

  if (!stationId || !stationById[stationId]) {
    return Response.json({ error: 'Ungültige oder fehlende stationId.' }, { status: 400 });
  }

  if (fromStationId && !stationById[fromStationId]) {
    return Response.json({ error: 'Ungültige fromStationId.' }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const event = { sessionId, stationId, fromStationId: fromStationId || null, timestamp };

  const history = getSessionEvents(sessionId);
  const previous = history[history.length - 1];

  if (previous && previous.stationId === stationId) {
    const dt = new Date(timestamp).getTime() - new Date(previous.timestamp).getTime();
    if (dt <= DEDUP_WINDOW_MS) {
      return Response.json({ deduplicated: true, event: previous }, { status: 200 });
    }
  }

  addEvent(event);
  return Response.json({ deduplicated: false, event }, { status: 201 });
}
