import React from "react";

function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div className="todo">
      <div>
        <div
          style={{
            textDecoration: todo.isDone ? "line-through" : "",
            fontWeight: "bolder",
            fontStyle: "italic",
            fontSize: "20px",
            marginLeft: "5px",
            marginBottom: '0px'
          }}
        >
          {todo.title}
        </div>
        <br />
        <div
          style={{ visibility: todo.isDone ? "hidden" : "visible" }}
          className="description"
        >
          {todo.description}
        </div>
        <br />
        <span
          style={{
            visibility: todo.isDone ? "hidden" : "visible",
            marginLeft: "5px",
          }}
        >
          {todo.dueDate}
        </span>
        <br />
        <span
          style={{
            marginLeft: "5px",
          }}
        >
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
