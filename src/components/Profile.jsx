// components/Profile.js
// import React from "react";
import avatar from "../assets/avatar.png";
import { FaSignOutAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  return (
    <div className="w-1/3 flex flex-col items-center bg-gray-700 border-r border-gray-500 p-10">
      <h1 className="text-2xl mb-6">Profile</h1>
      <img
        className="w-24 h-24 rounded-full bg-slate-50 mb-4"
        src={avatar}
        alt="Avatar"
      />
      <h6 className="text-lg mb-4">
        Welcome Back, <span className="font-bold">Username!</span>
      </h6>
      <form className="flex flex-col items-center gap-3">
        <button className="flex items-center bg-slate-500 p-2 rounded-md w-36">
          <MdEdit className="mr-1" />
          Edit Profile
        </button>
        <button className="flex items-center bg-red-600 p-2 rounded-md w-36">
          <FaSignOutAlt className="mr-1" />
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Profile;
