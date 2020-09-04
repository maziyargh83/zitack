import React, { useContext, Fragment } from "react";
import TaskContext from "../../Context/Task/taskContext";

import Task from "../layouts/task/Task";
import TimeTask from "../layouts/task/TimeTask";
import WrapperTask from "../layouts/task/WrapperTask";

const Home = () => {
  const taskContext = useContext(TaskContext);
  const { task } = taskContext;

  return (
    <Fragment>
      <div className="w-1/3 mx-auto mt-3 ">
        <TimeTask />
        <WrapperTask name="تسک های مانده">
          {task.map((el) => (
            <Task {...el} key={el.id} />
          ))}
        </WrapperTask>
      </div>
    </Fragment>
  );
};

export default Home;
