// export const dynamic = 'force-dynamic'

// cashe mangment for server side
export async function GET() {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
}
