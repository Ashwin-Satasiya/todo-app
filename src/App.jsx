import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { todoContext } from "./context/TodoContext";
import { TodoContextProvider } from "./context/TodoContext";
import AddToDO from "./components/AddToDO";
import ToDoItems from "./components/ToDoItems";
import { useEffect, useState } from "react";

function App() {
  const [todoData, setTodoData] = useState(() => {
    const recData = JSON.parse(localStorage.getItem("todos"));
    return recData || [];
  });
  const [editTodoId, setEditTodoId] = useState(null); // Tracks the todo being edited

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData) || []);
  }, [todoData]);

  const deleteTodo = (id) => {
    const newData = todoData.filter((data) => data.id !== id);
    setTodoData(newData);
  };

  const editTodo = (id) => {
    setEditTodoId(id);
  };

  return (
    <TodoContextProvider>
      <todoContext.Provider
        value={{
          todoData,
          setTodoData,
          editTodo,
          editTodoId,
          setEditTodoId,
          deleteTodo,
        }}
      >
        <div className="container py-5">
          <div className="row w-100 justify-content-center mx-auto">
            <div className="col-12 col-md-10 d-flex flex-column align-items-center gap-4 p-5 rounded-4 todo-content-main">
              <h2 className="text-center mb-4">To Do Application</h2>
              <AddToDO />
              <ToDoItems />
            </div>
          </div>
        </div>
      </todoContext.Provider>
    </TodoContextProvider>
  );
}

export default App;
