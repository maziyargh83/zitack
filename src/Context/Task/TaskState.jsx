import React, { useReducer } from "react";
import axios from "axios";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {} from "../types";
const TaskState = (props) => {
  const initialState = {
    task: [{ id: 1, text: "hoola" }],
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
