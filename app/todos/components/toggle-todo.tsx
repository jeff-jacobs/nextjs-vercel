"use client"

import { useRouter } from "next/navigation";
import React from "react";

const ToggleTodoButton: React.FC<{
  id: number,
  isComplete: boolean,
}> = ({
  id,
  isComplete,
}) => {

  const router = useRouter();

  const handleClick = () => {
    fetch('/api/todos', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        is_complete: !isComplete,
      })
    }).then(() => {
      router.refresh();
    })
  }

  return (
    <button
      onClick={() => handleClick()}
    >
      {isComplete ? 'Mark Incomplete' : 'Mark Complete'}
    </button>
  )
}

export default ToggleTodoButton;