import React, { useState, useContext } from "react";
import { todoContext } from "../context/TodoContext";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const ToDoItems = () => {
  const { todoData, editTodo, deleteTodo } = useContext(todoContext);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ul className="list-group w-100">
      {todoData && todoData.length > 0 ? (
        todoData.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
          >
            <div className="d-flex align-items-center ">
              <input
                type="checkbox"
                className="me-2"
                checked={!!checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <p
                className={`todo-text m-0 ${
                  checkedItems[item.id] ? "text-decoration-line-through" : ""
                }`}
              >
                {item.todo}
              </p>
            </div>

            <div className="d-flex ">
              <button
                onClick={() => editTodo(item.id)}
                className="edit-btn btn btn-info me-2"
              >
                <FiEdit />
                <span>&nbsp;Edit</span>
              </button>
              <button
                onClick={() => deleteTodo(item.id)}
                className="delete-btn btn btn-danger"
              >
                <AiOutlineDelete />
                <span>&nbsp;Del...</span>
              </button>
            </div>
          </li>
        ))
      ) : (
        <div className="text-center fs-3">No tasks available</div>
      )}
    </ul>
  );
};

export default ToDoItems;
