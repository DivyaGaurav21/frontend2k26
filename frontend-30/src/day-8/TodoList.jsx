import { useState } from "react";

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [editId, setEditId] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, title: "wake up!", isCompleted: false },
    { id: 2, title: " take bath early!", isCompleted: true },
  ]);

  function addTodoHandler() {
    if (!inputVal) {
      alert("please add todo!");
      return;
    }

    if (editId) {
      let modifyArr = todos.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, title: inputVal };
        } else {
          return todo;
        }
      });
      setTodos(modifyArr);
      setEditId(null);
      setInputVal("");
      return;
    }

    setTodos((prev) => [
      { id: Date.now(), title: inputVal, isCompleted: false },
      ...prev,
    ]);
    setInputVal("");
  }

  function deleteHandler(Id) {
    setTodos(todos.filter((todo) => todo.id !== Id));
  }

  function updateHandler(todo) {
    setEditId(todo.id);
    setInputVal(todo.title);
  }

  return (
    <div>
      <h4>TODO LIST</h4>
      <div className="input-container">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="add-todo"
          className="input"
        />
        <button onClick={addTodoHandler}>{editId ? "Update" : "Add"}</button>
      </div>
      <ul className="lists">
        {todos.map((todo) => (
          <li key={todo.id} className="list">
            <span> {todo.title}</span>
            <div>
              <button onClick={() => updateHandler(todo)}>update</button>
              <button onClick={() => deleteHandler(todo.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


// .input-container {
//   display: flex;
//   gap: 4px;
// }
// .input {
//   flex: 1;
// }
// .lists {
//   list-style: none;
//   padding-left: 0px;
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
// }

// .list {
//   border: 1px solid black;
//   padding: 4px;
//   display: flex;
//   justify-content: space-between;
// }
