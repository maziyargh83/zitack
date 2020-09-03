import React from "react";
import { Calendar } from "react-feather";

const WrapperTask = () => {
  return (
    <div className="bg-gradient-to-r from-bogart-500 via-indigo-600 to-purple-900 py-3 rounded-lg shadow-md p-2 my-3">
      <ul className="text-white flex justify-between">
        <li>
          Today <Calendar className="inline mx-2" />
        </li>
        <li>تسک های مانده</li>
      </ul>
    </div>
  );
};

export default WrapperTask;
