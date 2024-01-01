import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  console.log('POST NEW TODO');
  console.log(request.body);
  
  const client = await db.connect();
  // const { rows } = await client.sql`SELECT * FROM todos;`;

  return NextResponse.json({ message: 'Successful add' })
}