import Header from "./Component/Header";
import "./App.css";
import Form from "./Component/Form";
import { useEffect, useState } from "react";
import TodoList from "./Component/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const resetTodos = () => {
    setTodos([]);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <button className="reset" onClick={resetTodos}>Reset</button>
        <div>
          <Header />
        </div>
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div><TodoList todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo}/></div>
      </div>
      {/* <TODO/> */}
    </div>
  );
}

export default App;
