"use client"

import { useRouter } from "next/navigation";
import React from "react";

const AddTodo = () => {

  const [todoInput, setTodoInput] = React.useState('');
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  }

  const handleOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: todoInput,
        })
      }).then((r) => {
        setTodoInput('');
        router.refresh();
      })
    }
  }

  return (
    <>
      <input
        id="add-todo"
        type="text"
        placeholder="Add New Todo"
        onChange={handleOnChange}
        onKeyDown={handleOnKeydown}
        value={todoInput}
      />
    </>
  )
}

export default AddTodo;