import React, { useReducer } from "react";
import axios from "axios";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {} from "../types";
const TaskState = (props) => {
  const initialState = {
    task: [],
    filter: [],
    isFilter: false,
  };
  React.useEffect(() => {
    fetchTask();
  }, []);
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const fetchTask = async () => {
    try {
      let res = await axios.post("/task");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
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
