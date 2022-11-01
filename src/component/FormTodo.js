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
    if (!todo.title || !todo.description || !todo.dueDate || !todo.priority) return;
    props.addTodo(todo);
    setTodo(initialFormState);

    
  };

  const handleClose = (e) =>{
    props.closeModal()
  }

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <h3 style={{marginLeft: '5px'}}>Add Todo</h3>
      <label style={{marginLeft: '5px'}}>Title</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
        className="text-title"
      />
      <label style={{marginLeft: '5px'}}>Description</label>
      <textarea
        value={todo.description}
        name="description"
        onChange={handleInputChange}
        rows={5}
        cols={5}
        className="text-description"
      />
      <label style={{marginLeft: '5px'}}>Date</label>
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleInputChange}
        className="text-date"
      />
      <label style={{marginLeft: '5px'}}>Priority</label>
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

      <input className="submit-btn" type="submit" />
    </form>
  );
}

export default FormTodo;
