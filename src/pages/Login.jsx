// import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <div className="">
        <div className="form bg-gray-900 ">
          <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-96 mx-auto">
            <h1 className="bg-gray-900 text-violet-900 text-4xl font-bold ">
              VOCA
            </h1>
            <h1 className=" bg-gray-900 text-zinc-100 mb-4 text-3xl">Task</h1>
            <label className="block mb-4 bg-gray-900">
              <span className=" bg-gray-900 block text-sm text-start font-medium text-zinc-100 mb-2">
                Email
              </span>
              <input
                type="email"
                className="mb-3 bg-gray-900 w-full border border-violet-900 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your email"
              />
            </label>
            <label className="block mb-4 bg-gray-900">
              <span className="bg-gray-900 block text-sm font-medium text-start text-zinc-100 mb-2">
                Password
              </span>
              <input
                type="password"
                className="mb-7 bg-gray-900 w-full border border-violet-900 rounded-md p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your password"
              />
            </label>
            <button className="bg-violet-900 text-white w-full py-2 rounded-md font-semibold hover:bg-violet-800 transition duration-200">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
