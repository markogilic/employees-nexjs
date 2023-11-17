export async function GET() {
  const res = await fetch(' http://localhost:3500/roles');
  const data = await res.json();

  return Response.json({ data });
}
