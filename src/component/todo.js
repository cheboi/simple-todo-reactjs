import React from "react";

function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div className="todo">
      <div>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "", fontWeight: "bolder", fontStyle: "italic" }}>
          {todo.title}
        </span>
        <br />
        <span style={{ display: todo.isDone ? "hide" : "show" }}>
          {todo.description}
        </span>
        <br />
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.dueDate}
        </span>
        <br />
        <span style={{ textDecoration: todo.isDone ? "line-through" : "", color: todo.priority.High ? "red" : "yellow", }} >
          Priority: {todo.priority}
        </span>

        <div class="input-buttons">
          <button
            onClick={() => {
              editTodo(todo);
            }}
            className="button muted-button"
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
