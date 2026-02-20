import { randomUUID } from 'crypto';

const GLOBAL_KEY = '__xr_tracking_store__';

function createStore() {
  return {
    sessions: new Map(),
    events: [],
  };
}

function getStore() {
  if (!globalThis[GLOBAL_KEY]) {
    globalThis[GLOBAL_KEY] = createStore();
  }

  return globalThis[GLOBAL_KEY];
}

export function createSession() {
  const store = getStore();
  const sessionId = randomUUID();
  const startedAt = new Date().toISOString();

  const session = { sessionId, startedAt };
  store.sessions.set(sessionId, session);

  return session;
}

export function hasSession(sessionId) {
  return getStore().sessions.has(sessionId);
}

export function addEvent(event) {
  const store = getStore();
  store.events.push(event);
  return event;
}

export function getSessionEvents(sessionId) {
  return getStore().events.filter((event) => event.sessionId === sessionId);
}

export function getAnalytics() {
  const { sessions, events } = getStore();

  const stationCounts = new Map();
  const transitions = new Map();

  for (const event of events) {
    stationCounts.set(event.stationId, (stationCounts.get(event.stationId) || 0) + 1);

    if (event.fromStationId) {
      const key = `${event.fromStationId}->${event.stationId}`;
      transitions.set(key, (transitions.get(key) || 0) + 1);
    }
  }

  return {
    totalSessions: sessions.size,
    totalEvents: events.length,
    stationCounts: Array.from(stationCounts.entries())
      .map(([stationId, count]) => ({ stationId, count }))
      .sort((a, b) => b.count - a.count),
    transitions: Array.from(transitions.entries())
      .map(([transition, count]) => ({ transition, count }))
      .sort((a, b) => b.count - a.count),
  };
}
