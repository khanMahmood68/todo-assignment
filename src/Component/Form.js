import React, { useEffect } from "react";

function Form({ todos, setTodos, newTodo, setNewTodo, editTodo, setEditTodo }) {
  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setNewTodo(editTodo.text);
    } else {
      setNewTodo("");
    }
  }, [setNewTodo, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo && newTodo.trim() !== "") {
      setTodos([
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
        ...todos,
      ]);
      setNewTodo("");
    } else {
      updateTodo(newTodo, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="button-add" type="submit">
          {editTodo ? "Update" : "Add"}
        </button>
      </form>
      <div className="task"><h2 >Complete: <span style={{color:"green"}}>{todos.filter((todo)=>(todo.completed === true)).length}</span></h2> 
         <h2 >Incomplete: <span style={{ color: "#ff6c6c"}}>{todos.filter((todo)=>(todo.completed === false)).length}</span></h2> </div>
    </div>
  );
}

export default Form;
