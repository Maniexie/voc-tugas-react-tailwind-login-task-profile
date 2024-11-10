import { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import { FaSignOutAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Task = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      if (editingId) {
        setTodos(
          todos.map((todo) =>
            todo.id === editingId ? { ...todo, title: value } : todo
          )
        );
        setEditingId(null);
      } else {
        const newTodo = {
          id: Date.now(),
          title: value,
          description: "Task description",
          completed: false,
        };
        setTodos([...todos, newTodo]);
      }
      setValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, title) => {
    setEditingId(id);
    setValue(title);
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center w-full min-h-screen p-3 bg-gray-900">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-4 ">
        {/* Profile Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-700 border-r border-gray-500 p-6 md:p-10 rounded-lg">
          <h1 className="text-2xl mb-6">Profile</h1>
          <img
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-50 mb-4 object-cover"
            src={avatar}
            alt="Avatar"
          />
          <h6 className="text-lg mb-4">
            Welcome Back, <span className="font-bold">Username!</span>
          </h6>
          <form className="flex flex-col items-center gap-3">
            <NavLink to="/updateprofile">
              <button className="flex items-center bg-slate-500 p-2 rounded-md w-36 hover:bg-slate-600">
                <MdEdit className="mr-1" />
                Edit Profile
              </button>
            </NavLink>
            <button className="flex items-center bg-red-600 p-2 rounded-md w-36 hover:bg-red-700">
              <FaSignOutAlt className="mr-1" />
              Sign Out
            </button>
          </form>
        </div>

        {/* To-Do List Section */}
        <div className="w-full md:w-2/3 bg-gray-700 p-6 md:p-10 rounded-lg">
          {/* To-Do Form */}
          <form
            className="flex flex-col sm:flex-row justify-center max-sm:justify-end items-center mb-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder={editingId ? "Update task..." : "Add a new task..."}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full sm:w-2/3 p-3 bg-gray-800 text-white rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 mb-3 sm:mb-0 sm:mr-4"
            />
            <button
              type="submit"
              className="bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 h-12 w-full sm:w-auto"
            >
              {editingId ? "Update" : <IoMdAdd />}
            </button>
          </form>

          {/* To-Do List */}
          <h5 className="text-lg mb-1">To-Do List</h5>
          <p className="mb-2">
            Current{" "}
            <span className="font-bold">
              {todos.length - todos.filter((todo) => todo.completed).length}
            </span>{" "}
            Tasks
          </p>
          <div className="border border-gray-500 overflow-y-auto max-h-48 p-3 rounded-md bg-gray-800">
            <ul className="task-list space-y-2 p-1">
              {todos
                .filter((todo) => !todo.completed)
                .map((todo) => (
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
                    <div className="flex">
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

          {/* Completed List */}
          <h5 className="text-lg mt-6 mb-1">Completed Tasks</h5>
          <p className="mb-2">
            Done{" "}
            <span className="font-bold">
              {todos.filter((todo) => todo.completed).length}
            </span>{" "}
            Tasks
          </p>
          <div className="border border-gray-500 overflow-y-auto max-h-48 p-3 rounded-md bg-gray-800">
            <ul className="task-list space-y-2 p-1">
              {todos
                .filter((todo) => todo.completed)
                .map((todo) => (
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
                      <span className="text-white line-through text-justify">
                        {todo.title}
                      </span>
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
        </div>
      </div>
    </div>
  );
};

export default Task;
