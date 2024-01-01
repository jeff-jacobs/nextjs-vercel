import { db } from '@vercel/postgres';

export interface Todo {
  name: string;
  is_complete: boolean;
}

export default async function Todos() {

  const client = await db.connect();
  const res = await fetch('http://localhost:3000/api/todos/', {
    cache: 'no-store'
  });
  const todos: Todo[] = await res.json();

  console.log(todos);

  return (

    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo =>
          <li key={todo.name}>
            {todo.name} &nbsp;
          </li>
        )}
      </ul>
    </div>
  )
}