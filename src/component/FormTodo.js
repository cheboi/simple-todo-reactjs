import React, { useState } from "react";
import "./index.css";

function FormTodo(props) {
  const initialFormState = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };
  const [todo, setTodo] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.description || !todo.dueDate || !todo.priority)
      return;

    props.addTodo(todo);
    setTodo(initialFormState);
  };
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <h3>Add Todo</h3>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
        className="text-title"
      />
      <label>Description</label>
      <textarea
        value={todo.description}
        name="description"
        onChange={handleInputChange}
        rows={5}
        cols={5}
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
      <input
        type="select"
        name="priority"
        value={todo.priority}
        onChange={handleInputChange}
      />
      <input class="submit-btn" type="submit" />
    </form>
  );
}

export default FormTodo;
