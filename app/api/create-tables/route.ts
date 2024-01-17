import { db } from '@vercel/postgres';

export async function GET(req: Request, res: any) {
  
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE todos ( name varchar(255), is_complete boolean, id BIGSERIAL PRIMARY KEY );`
  } catch (error) {
    console.log(error);
    return new Response('error');
  }

  return new Response('success');
}