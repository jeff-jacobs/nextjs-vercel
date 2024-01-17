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
    fetch('http://localhost:3000/api/todos', {
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
    <>
      <button
        onClick={() => handleClick()}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteTodoButton;