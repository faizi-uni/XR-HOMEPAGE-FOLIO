import { getAnalytics } from '../../../lib/store';

export async function GET() {
  return Response.json(getAnalytics());
}
