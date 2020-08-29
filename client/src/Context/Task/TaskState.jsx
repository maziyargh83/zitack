import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {} from "../types";
const AlertState = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <taskContext.Provider value={{}}>{props.children}</taskContext.Provider>
  );
};

export default AlertState;
