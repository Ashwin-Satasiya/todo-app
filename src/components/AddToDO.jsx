import React, { useState, useEffect, useContext } from "react";
import { todoContext } from "../context/TodoContext";

const AddToDO = () => {
  const { todoData, setTodoData, editTodoId, setEditTodoId } =
    useContext(todoContext);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (editTodoId) {
      const todoToEdit = todoData.find((item) => item.id === editTodoId);
      if (todoToEdit) setInputData(todoToEdit.todo);
    }
  }, [editTodoId, todoData]);

  const onBtnClick = () => {
    if (inputData.trim()) {
      if (editTodoId) {
        const updatedTodos = todoData.map((item) =>
          item.id === editTodoId ? { ...item, todo: inputData } : item
        );
        setTodoData(updatedTodos);
        setEditTodoId(null);
      } else {
        const newTodo = {
          id: Date.now(),
          todo: inputData,
          complete: false,
        };
        setTodoData([...todoData, newTodo]);
      }
      setInputData("");
    } else {
      alert("Add a task!");
    }
  };

  return (
    <div className="d-flex w-100 gap-4">
      <input
        className="form-control"
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={onBtnClick} className="btn btn-primary">
        {editTodoId ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddToDO;
