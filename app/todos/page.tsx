import AddTodo from './components/add-todo';
import DeleteTodoButton from './components/delete-todo';
import TodoList from './components/todo-list';
import ToggleTodoButton from './components/toggle-todo';

export interface Todo {
  id: number;
  name: string;
  is_complete: boolean;
}

export default async function Todos() {

  const res = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store'
  });
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