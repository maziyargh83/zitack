import React, { useContext } from "react";
import TaskContext from "../../Context/Task/taskContext";
import { Card, Progress } from "antd";
import moment from "jalali-moment";
const Home = () => {
  const taskContext = useContext(TaskContext);
  const { task } = taskContext;

  return (
    <div>
      <div className="w-1/3 mx-auto mt-3 ">
        <div className="rounded bg-indigo shadow-md p-2">
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
      </div>
    </div>
  );
};

export default Home;
