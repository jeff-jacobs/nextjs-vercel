import AddTodo from './components/add-todo';
import TodoList from './components/todo-list';

export interface Todo {
  id: number;
  name: string;
  is_complete: boolean;
}

export default async function Todos() {

  let todos: Todo[] = [];
  let incompleteTodos: Todo[] = []
  let completeTodos: Todo[] = [];

  try {
    const res = await fetch('http://localhost:3000/api/todos', {
      cache: 'no-store'
    });
    todos = await res.json();
    incompleteTodos= todos.filter(todo => !todo.is_complete);
    completeTodos= todos.filter(todo => todo.is_complete);
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <TodoList todos={incompleteTodos} status="incomplete" />
      {completeTodos.length > 0 && <TodoList todos={completeTodos} status="complete" />}
    </div>
  )
}