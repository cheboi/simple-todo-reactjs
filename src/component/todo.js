import React from "react";

function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div className="todo">
      <div>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "", fontWeight: "bolder", fontStyle: "italic" }}>
          {todo.title}
        </span>
        <br />
        <span style={{ visibility: todo.isDone ? "hidden" : "visible" }}>
          {todo.description}
        </span>
        <br />
        <span style={{ visibility: todo.isDone ? "hidden" : "visible" }}>
          {todo.dueDate}
        </span>
        <br />
        <span className="priority ${todo.priority}" >
          Priority: {todo.priority}
        </span>

        <div class="input-buttons">
          <button
            onClick={() => {
              editTodo(todo);
            }}
            className="button muted-button edit-button"
          >
            Edit
          </button>
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
