// components/CompletedList.js
// import React from "react";
import { MdDelete } from "react-icons/md";

const CompletedList = (todos, handleComplete, handleDelete) => {
  return (
    <div>
      <h5 className="text-lg mt-6 mb-4">Completed Tasks</h5>
      <ul className="task-list space-y-2 p-1">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-md bg-green-600"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo.id)}
                className="mr-2"
              />
              <span className="text-white line-through">{todo.title}</span>
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
