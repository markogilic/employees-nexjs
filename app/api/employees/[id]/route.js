export async function GET(request, { params }) {
  const res = await fetch(`http://localhost:3500/employees/${params.id}`);
  const data = await res.json();

  return Response.json({ data });
}
