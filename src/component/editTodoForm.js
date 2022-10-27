import React, { useState, useEffect } from "react";

const EditTodoForm = (props) => {
  const [todo, setTodo] = useState(props.currentTodo);

  useEffect(() => {
    setTodo(props.currentTodo);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(todo);
    setTodo({ ...todo, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTodo(todo.id, todo);
      }}
      className = "form-control"
    >
      <h3>Edit Todo</h3>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
        className="text-title"
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={todo.description}
        onChange={handleInputChange}
        className="text-description"
      />
      <label>Date</label>
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleInputChange}
        className="text-date"

      />
      <label>Priority</label>
      <div className="priority-input">
        <input
          type="radio"
          name="priority"
          value="high"
          onChange={handleInputChange}
        />
        High
        <input
          type="radio"
          name="priority"
          value="low"
          onChange={handleInputChange}
        />
        Low
        <input
          type="radio"
          name="priority"
          value="medium"
          onChange={handleInputChange}
        />
        Medium
      </div>
      <button className="submit-btn">Update Todo</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
