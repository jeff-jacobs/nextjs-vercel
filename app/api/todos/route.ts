import { db } from '@vercel/postgres';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  const client = await db.connect();
  const { rows } = await client.sql`SELECT * FROM todos;`;
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const { name }: { name: string } = await request.json();
  const client = await db.connect();
  const { rows } = await client.sql`INSERT INTO todos (name, is_complete) VALUES (${name}, false)`;
  revalidateTag('todos');
  return NextResponse.json(rows);
}

export async function DELETE(request: Request) {
  const { id }: { id: number } = await request.json();
  const client = await db.connect();
  const { rows } = await client.sql`DELETE FROM todos WHERE id = ${id}`;
  revalidateTag('todos');
  return NextResponse.json(rows);
}

export async function PATCH(request: Request) {
  const { id, is_complete }: { id: number, is_complete: boolean } = await request.json();
  const client = await db.connect();
  const { rows } = await client.sql`UPDATE todos set is_complete=${is_complete} WHERE id = ${id}`;
  revalidateTag('todos');
  return NextResponse.json(rows);
}