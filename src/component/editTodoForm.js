import React, { useState, useEffect } from "react";
import './index.css'

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
      <h3 style={{marginLeft: '5px'}}>Edit Todo</h3>
      <label style={{marginLeft: '5px'}}>Todo Title</label>
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
      <button className="submit-btn" style={{margin: '5px', borderRadius: '5px'}}>Update Todo</button>
    </form>
  );
};

export default EditTodoForm;
