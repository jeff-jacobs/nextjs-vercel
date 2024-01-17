"use client"

import { useRouter } from "next/navigation";
import React from "react";

const DeleteTodoButton: React.FC<{
  id: number,
}> = ({
  id,
}) => {

  const router = useRouter();

  const handleClick = () => {
    fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      })
    }).then((r) => {
      router.refresh();
    })
  }

  return (
    <button
      onClick={() => handleClick()}
    >
      Delete
    </button>
  )
}

export default DeleteTodoButton;