import React, { useState, useEffect } from "react";

const EditTodoForm = (props) => {
  const [todo, setTodo] = useState(props.currentTodo);

  useEffect(() => {
    setTodo(props.currenTodo);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateTodo(todo.id, todo);
      }}
    >
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={todo.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="priority"
        value={todo.priority}
        onChange={handleInputChange}
      />
      <button>Update Todo</button>
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
