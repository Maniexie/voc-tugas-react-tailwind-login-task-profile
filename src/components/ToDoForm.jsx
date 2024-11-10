// components/TodoForm.js
// import React from "react";
import { IoMdAdd } from "react-icons/io";

const TodoForm = (value, setValue, handleSubmit, isEditing) => {
  return (
    <form
      className="flex justify-center items-center mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={isEditing ? "Update task..." : "Add a new task..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 mr-4"
      />
      <button
        type="submit"
        className="bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 h-12"
      >
        {isEditing ? "Update" : <IoMdAdd />}
      </button>
    </form>
  );
};

export default TodoForm;
