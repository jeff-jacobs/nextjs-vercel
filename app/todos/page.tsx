import { GET } from '../api/todos/route';
import AddTodo from './components/add-todo';
import TodoList from './components/todo-list';

export interface Todo {
  id: number;
  name: string;
  is_complete: boolean;
}

export const dynamic = 'force-dynamic'; 

export default async function Todos() {

  const res = await GET();
  const todos: Todo[] = await res.json();
  const incompleteTodos: Todo[] = todos.filter(todo => !todo.is_complete);
  const completeTodos: Todo[] = todos.filter(todo => todo.is_complete);

  return (
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <TodoList todos={incompleteTodos} status="incomplete" />
      {completeTodos.length > 0 && <TodoList todos={completeTodos} status="complete" />}
    </div>
  )
}