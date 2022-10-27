import React, { useState } from "react";
import "./App.css";
import Todo from "./component/todo";
import FormTodo from "./component/FormTodo";
import EditTodoForm from "./component/editTodoForm";

function App() {
  const todosData = [
    {
      id: 1,
      title: "walk Around",
      description: "To do some exercise",
      dueDate: "11/01/2022",
      priority: "Low",
    },
    {
      id: 2,
      title: "Take Dog to Vet",
      description: "Dog Got Hit By Car",
      dueDate: "10/27/2022",
      priority: "High",
    },
    {
      id: 3,
      title: "Go to church",
      description: "Visit My Nun Sister",
      dueDate: "10/28/2022",
      priority: "Low",
    },
  ];
  const initialFormState = {
    id: null,
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState(todosData);
  const [query, setQuery] = useState("");

  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    setEditing(true);

    setCurrentTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority,
    });
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="App">
      <h1 className="text-center">Todo List</h1>
      <div className="Container">
        {editing ? (
          <div>
            <h2>Edit Todo</h2>
            <EditTodoForm
              setEditing={setEditing}
              currentTodo={currentTodo}
              updateTodo={updateTodo}
            />
          </div>
        ) : (
          <div className="add-form">
            <FormTodo addTodo={addTodo} />
          </div>
        )}

        <div className="display-input">
          <input
            type="search"
            placeholder="Enter Todo Title"
            onChange={(event) => setQuery(event.target.value)}
          />
          {todos
            .filter((todo) => {
              if (query === "") {
                return todo;
              } else if (
                todo.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return todo;
              }
            })
            .map((todo, index) => (
              <div>
                <div>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
