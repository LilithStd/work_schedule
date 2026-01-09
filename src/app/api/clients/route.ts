import { NextResponse } from 'next/server'

const  clients = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' }
]
// GET — получить клиентов
export async function GET() {
  return NextResponse.json(clients)
}

// POST — создать клиента
export async function POST(req: Request) {
  const body = await req.json()

  const newClient = {
    id: Date.now(),
    name: body.name,
  }

  clients.push(newClient)

  return NextResponse.json(newClient, { status: 201 })
}