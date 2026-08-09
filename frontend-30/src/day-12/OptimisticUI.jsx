//  implement optimistic UI update.
// “Implement a Like button using Optimistic UI Update.
// The UI should update immediately, and if the API fails,
// rollback to the previous state.”

// First, I save the previous state. Then I immediately update the UI
//  without waiting for the API response. I make the API request in
// the background. If the request succeeds, I keep the optimistic
//  state. If it fails, I restore the previous state as a rollback.
//  I also handle  error states to 
// 
import React from "react";
import "./day12.css";
import { useState } from "react";

const TODOS = [
  { id: 1, title: "wake early", status: true },
  { id: 2, title: "take shower", status: false },
  { id: 3, title: "read books", status: false },
];

function deleteTodoItemAPI(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("failure of API"), 4000);
  });
}

const OptimisticUI = () => {
  const [todos, setTodos] = useState(TODOS);
  const [error, setError] = useState(null);

  const deleteHandler = async (Id) => {
    setError("");
    let deletedItem = todos.find((item) => item.id === Id);
    setTodos((prev) => prev.filter((item) => item.id !== Id));
    try {
      //   let response = await fetch(`/api/delete?id=${Id}`, {
      //     method: "DELETE",
      //   });
      //   if (!response.ok) {
      //     throw new Error("deleted Failed");
      //   }
      await deleteTodoItemAPI(Id);
      console.log("Todo deleted successfully");
    } catch (err) {
      setTodos((prev) => [...prev, deletedItem]);
      setError("failed to delete , restored");
    }
  };

  return (
    <div className="box">
      {error && <span className="error">{error}</span>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span onClick={() => deleteHandler(todo.id)}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimisticUI;
