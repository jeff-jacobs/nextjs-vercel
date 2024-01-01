import { QueryResult, db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '@/app/todos/page';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  console.log('GET TODOS');

  // const { searchParams } = new URL(request.url);
  // const limit = searchParams.get('limit');
  // const offset = searchParams.get('offset');
  // console.log(limit);
  
  const client = await db.connect();
  const { rows } = await client.sql`SELECT * FROM todos;`;
  // const { rows } = await client.sql`SELECT * FROM todos LIMIT ${limit} OFFSET ${offset};`;

  console.log(rows);
  return NextResponse.json(rows);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {

  console.log('POST TODOS');

  return res.status(200).json({ message: 'Success POST' });
}