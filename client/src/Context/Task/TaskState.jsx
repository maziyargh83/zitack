import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {} from "../types";
const TaskState = (props) => {
  const initialState = {
    task: [
      { id: 1, name: "task #1" },
      { id: 2, name: "task #2" },
      { id: 3, name: "task #3" },
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
