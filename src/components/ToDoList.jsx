// components/TodoList.js
// import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = (todos, handleComplete, handleEdit, handleDelete) => {
  return (
    <div>
      <h5 className="text-lg mb-4">To-Do List</h5>
      <ul className="task-list space-y-2 p-1">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-md bg-gray-800"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
                className="mr-2"
              />
              <span className="text-white">{todo.title}</span>
            </div>
            <div className="flex justify-content-items-end">
              <button
                onClick={() => handleEdit(todo.id, todo.title)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                <FaRegEdit />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
