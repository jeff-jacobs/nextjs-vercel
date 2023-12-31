import { db } from '@vercel/postgres';

interface Todo {
  name: string;
  is_complete: boolean;
}

export default async function Todos() {

  const client = await db.connect();
  const { rows } = await client.sql`SELECT * from todos`;

  return (

    <div>
      <h1>Todos</h1>
      <ul>
        {rows.map(row =>
          <li key={row.name}>
            {row.name} &nbsp;
            <button>{row.is_complete ? 'Mark Incomplete' : 'Mark Complete'}</button>
          </li>
        )}
      </ul>
    </div>
  )
}