import { db } from '@vercel/postgres';

export async function GET(req: Request, res: any) {

  console.log('TODOS');
  
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE todos ( name varchar(255), is_complete bit );`
    await client.sql`INSERT INTO todos (name, is_complete) VALUES ('todo 1', CAST(0 AS BIT)), ('todo 2', CAST(0 AS BIT));`
  } catch (error) {
    console.log(error);
    return new Response('error');
  }

  const todos = await client.sql`SELECT * FROM todos;`;
  return new Response('success');
}