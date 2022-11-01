import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Todo from "./component/todo";
import FormTodo from "./component/FormTodo";
import EditTodoForm from "./component/editTodoForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
      id: 4,
      title: "Take Dog to Walk",
      description: "As a dog owner you must supervise your dog at all times and ensure the dog is kept within calling distance and under control. It is in your best interest to provide your pet with obedience training and socialisation skills necessary to become a well-mannered and socially well-adjusted dog.",
      dueDate: "11/2/2022",
      priority: "High",
    },

    {
      id: 3,
      title: "Go to Market",
      description: "Buy some groceries",
      dueDate: "10/29/2022",
      priority: "Medium",
    },
    {
      id: 4,
      title: "Go to Temple",
      description: "Have Some Prayers",
      dueDate: "10/20/2022",
      priority: "High",
    },
  ];
  const initialFormState = {
    id: null,
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState(todosData);
  const [query, setQuery] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#977D6";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);

    closeModal();
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
    openModal();
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="App">
      <h1 className="text-center">Todo List</h1>
      <button onClick={openModal} style={{height: '25px', width: "100px"}}>Add Activity</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="Container">
          <button
            onClick={closeModal}
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "10px",
              backgroundColor: "red",
              marginRight: "0px",
              position: "absolute",
              top: '0',
              right: '0',
              marginRight: "17px",
              marginTop: '18px'
            }}
          >
            ✕
          </button>
          {editing ? (
            <div>
              <h2 style={{color: 'white'}}>Edit Todo</h2>
              <EditTodoForm
                setEditing={setEditing}
                currentTodo={currentTodo}
                updateTodo={updateTodo}
              />
            </div>
          ) : (
            <div className="add-form">
              <h2 style={{color: 'white'}}>Edit Todo</h2>
              <FormTodo addTodo={addTodo} />
            </div>
          )}
        </div>
      </Modal>

      <div className="display">
        <input
          type="search"
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="display-input">
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
