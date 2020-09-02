import React from "react";
import * as Feather from "react-feather";

const Nav = () => {
  return (
    <div className="w-full h-28 shadow-lg px-5 flex bg-gradient-to-r from-indigo  to-bogart-600 ">
      <div className="w-1/3 flex items-center">
        <h3 className="text-white font-bold text-xl">Zitack</h3>
      </div>
      <div className="w-1/3">
        <div className="flex my-4 p-2 rounded-lg bg-purple-800">
          <input
            type="text"
            name=""
            className="bg-transparent outline-none text-white  w-full"
            placeholder="Type..."
            id=""
          />
          <button className="outline-none">
            <Feather.Search className="float-right text-white w-6 h-5" />
          </button>
        </div>
      </div>
      <div className="w-1/3 flex justify-end items-center text-white">
        <span className="mx-2">
          <Feather.PlusCircle className="text-white w-6 h-5" />
        </span>
        <span className="mx-2">
          <Feather.Bell className="text-white w-6 h-5" />
        </span>
        <span className="mx-2">
          <Feather.Settings className="text-white w-6 h-5" />
        </span>
      </div>
    </div>
  );
};

export default Nav;
