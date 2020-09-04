import React, { useReducer } from "react";
import axios from "axios";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {} from "../types";
const TaskState = (props) => {
  const initialState = {
    task: [
      {
        id: 1,
        text: "تسک تست",
        des:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facilis, corrupti natus vitae, cupiditate enim quo minus autem consequuntur ducimus ab unde velit laborum quam.",
      },
      {
        id: 2,
        text: "2تسک تست",
        des:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facilis, corrupti natus vitae, cupiditate enim quo minus autem consequuntur ducimus ab unde velit laborum quam.",
      },
      {
        id: 3,
        text: "3تسک تست",
        des:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facilis, corrupti natus vitae, cupiditate enim quo minus autem consequuntur ducimus ab unde velit laborum quam.",
      },
    ],
    filter: [],
    isFilter: false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <taskContext.Provider
      value={{
        task: state.task,
        filter: state.filter,
        isFilter: state.isFilter,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
