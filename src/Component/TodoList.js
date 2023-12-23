import React from "react";

function TodoList({ todos, setTodos, setEditTodo }) {
    const handleComplete = (id) => {
        setTodos((prevTodos) => {
          let updatedTodos = prevTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          });
      
          const updatedTodo = updatedTodos.find((todo) => todo.id === id);
          updatedTodos = updatedTodos.filter((todo) => todo.id !== id);
      
          if (updatedTodo.completed) {
            updatedTodos.unshift(updatedTodo);
          } else {
            updatedTodos.push(updatedTodo);
          }
      
          return updatedTodos;
        });
      };

  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const completed = <h2 style={{ color: "green" }}>Completed</h2>;

  return (
    <div>
      {/* Active Todos */}
      {activeTodos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.text}
            className="list"
            onChange={(e) => e.preventDefault()}
            onClick={() => handleComplete(todo.id)}
            readOnly
          />
          <div>
           
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo.id)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}

      {/* Completed Todos */}

      {completedTodos.length > 0 ? completed : null}
      {completedTodos.map((todo) => (
        <li className="list-item " style={{border:"1px solid green"}} key={todo.id}>
          <input
            type="text"
            value={todo.text}
            className="list"
            onChange={(e) => e.preventDefault()}
            onClick={() => handleComplete(todo.id)}
            readOnly
         
          />
          <div>
            
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo.id)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
