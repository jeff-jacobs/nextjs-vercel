import { Todo } from "../page"
import DeleteTodoButton from "./delete-todo"
import ToggleTodoButton from "./toggle-todo"

const TodoList: React.FC<{
  todos: Todo[],
  status: 'complete' | 'incomplete',
}> = ({
  todos,
  status,
}) => {
  return (
    <>
      <h2>{status === 'complete' ? 'Complete' : 'Incomplete'} Todos</h2>
      <ul style={{ marginBottom: '10px' }}>
        {todos.length ? todos.map(todo =>
          <li
            key={todo.id}
            style={{ padding: '5px 0' }}
          >
            {todo.name} &nbsp;
            <DeleteTodoButton id={todo.id} />
            <ToggleTodoButton id={todo.id} isComplete={todo.is_complete} />
          </li>
        ) : <li>No todos!</li>}
      </ul>
    </>
  )
}

export default TodoList;