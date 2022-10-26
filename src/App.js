import React, { useState } from "react";
import "./App.css";
import Todo from "./component/todo";
import FormTodo from "./component/FormTodo";
// import Search from "./component/search";

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

  return (
    <div className="App">
      <div className="Container">
        <h1 className="text-center">Todo List</h1>
        {/* <Search /> */}
        <FormTodo addTodo={addTodo} />
        <div>
          <input
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
