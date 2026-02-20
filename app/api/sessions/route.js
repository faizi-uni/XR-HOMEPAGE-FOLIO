import { createSession } from '../../../lib/store';

export async function POST() {
  const session = createSession();
  return Response.json(session, { status: 201 });
}
