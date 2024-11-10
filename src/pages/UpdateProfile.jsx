import avatar from "../assets/avatar.png";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <div className="border border-gray-500 h-auto w-2/3 bg-gray-900 p-8 rounded-lg">
        <NavLink to="/task">
          <button className="flex justify-start items-center text-xl text-zinc-100 mb-6 cursor-pointer hover:bg-violet-400 hover:text-white transition duration-200 rounded-md w-fit p-2 gap-2">
            <FaArrowLeft />
            <span className="font-bold hidden md:block">Back To Task</span>
          </button>
        </NavLink>
        <hr className="w-full border border-zinc-100 mb-2" />
        <h1 className="text-2xl text-white font-bold mb-6 text-center">
          Update Profile
        </h1>
        <div className="form-update flex flex-col items-center">
          <img
            src={avatar}
            className="w-24 h-24 rounded-full bg-slate-50 mb-4"
            alt="Avatar"
          />
          <label className="w-full max-w-md mb-4">
            <span className="text-sm font-medium text-zinc-100 mb-2 flex">
              Profile URL
            </span>
            <input
              type="file"
              className="w-full bg-gray-900 text-zinc-100 border border-gray-600 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </label>
          <label className="w-full max-w-md mb-4">
            <span className="text-sm font-medium text-zinc-100 mb-2 flex">
              Name
            </span>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full bg-gray-900 text-zinc-100 border border-gray-600 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </label>
          <label className="w-full max-w-md mb-4">
            <span className="text-sm font-medium text-zinc-100 mb-2 flex">
              Email
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-900 text-zinc-100 border border-gray-600 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </label>
          <label className="w-full max-w-md mb-6">
            <span className="text-sm font-medium text-zinc-100 mb-2 flex">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-900 text-zinc-100 border border-gray-600 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </label>
          <button className="bg-violet-900 text-white w-full max-w-md py-2 rounded-md font-semibold hover:bg-violet-800 transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
