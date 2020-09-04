import React, { useState, Fragment } from "react";
import { Calendar, ChevronDown, ChevronUp } from "react-feather";

const WrapperTask = (props) => {
  const [dropDown, setDropDown] = useState(true);
  const toggleWT = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="bg-gradient-to-r from-bogart-500 via-indigo-600 to-purple-900 py-3 rounded-lg shadow-md p-2 my-3">
      <ul className="text-white flex justify-between px-3" onClick={toggleWT}>
        <li>
          Today <Calendar className="inline mx-2" />
        </li>
        <li>
          <ChevronDown />
        </li>
        <li>{props.name}</li>
      </ul>

      <div className="px-3" style={{ minHeight: dropDown ? 250 : 5 }}>
        {dropDown && <Fragment>{props.children}</Fragment>}
      </div>
    </div>
  );
};

export default WrapperTask;
