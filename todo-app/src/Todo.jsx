import React from "react";
import "./Todo.css";
import { useState } from "react";
function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const Submit = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const DeleteItem = (key) => {
    const updatedItems = todos.filter((element, id) => {
      return key !== id;
    });
    setTodos(updatedItems);
  };
  return (
    <div className="main">
      <input
        className="input__bar"
        placeholder="Add items"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button className="add" disabled={!input} onClick={Submit}>
        {" "}
        Add{" "}
      </button>
      {todos.map((element, key) => (
        <div className="element" key={key}>
          {element}

          <span>
            <button className="delete" onClick={() => DeleteItem(key)}>
              {" "}
              Delete{" "}
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Todo;
