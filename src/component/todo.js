import React, { useState } from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <div>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.title}
        </span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.description}
        </span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.dueDate}
        </span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.priority}
        </span>

        <div>
          <button className="mark-done" onClick={() => markTodo(index)}>
            ✓
          </button>{" "}
          <button className="remove-todo" onClick={() => removeTodo(index)}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
