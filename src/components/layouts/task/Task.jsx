import React from "react";
import { MessageCircle } from "react-feather";
const Task = (props) => {
  return (
    <div className="w-full border-r rtl px-2 relative text-white border-purple-600 animate__animated animate__fadeIn">
      <MessageCircle />
      <h6>{props.text}</h6> <p>{props.des}</p>
    </div>
  );
};

export default Task;
