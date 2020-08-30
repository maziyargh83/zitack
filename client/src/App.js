import React, { Fragment } from "react";
import Router from "./Router/Router";
import TaskState from "./Context/Task/TaskState";
function App() {
  return (
    <Fragment>
      <TaskState>
        <Router />
      </TaskState>
    </Fragment>
  );
}

export default App;
