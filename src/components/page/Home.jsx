import React, { useContext } from "react";
import TaskContext from "../../Context/Task/taskContext";
import { Card, Progress } from "antd";
import moment from "jalali-moment";
import Task from "../layouts/task/Task";
import WrapperTask from "../layouts/task/WrapperTask";

const Home = () => {
  const taskContext = useContext(TaskContext);
  const { task } = taskContext;

  return (
    <div>
      <div className="w-1/3 mx-auto mt-3 ">
        <div className="bg-gradient-to-r from-bogart-500 via-indigo-600 to-purple-900 py-3 rounded-lg shadow-md p-2">
          <div className="flex">
            <div className="w-5/6 rtl text-white">
              <h1 className="text-white">تسک های امروز</h1>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                className="text-white w-full"
                status="active"
                percent={99.9}
              />
              <ul className="flex justify-between">
                <li>تمام شده : 13</li>
                <li>کل تسک ها : ۱۵</li>
              </ul>
            </div>
            <div className="w-1/6 text-center grid items-center text-white">
              <p className="font-bold text-xl">
                {moment(new Date().getTime()).locale("fa").format("DD")}
              </p>
              <p className="font-bold text-md">
                {moment(new Date().getTime()).locale("fa").format("MMMM")}
              </p>
            </div>
          </div>
        </div>
        <WrapperTask>
          {task.map((el) => (
            <Task />
          ))}
        </WrapperTask>
      </div>
    </div>
  );
};

export default Home;
