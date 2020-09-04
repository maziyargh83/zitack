import React from "react";
import { Progress } from "antd";
import moment from "jalali-moment";
const TimeTask = () => {
  return (
    <div className="bg-gradient-to-r text-white rtl from-bogart-500 via-indigo-600 to-purple-900 py-3 rounded-lg shadow-md p-2">
      <div className="px-3">
        <div className="text-center justify-center items-center flex">
          <h3 className="font-bold text-white text-xl">
            {moment(new Date().getTime()).locale("fa").format("DD")}
          </h3>
          <h3 className="font-bold text-white text-md">
            {moment(new Date().getTime()).locale("fa").format("MMMM")}
          </h3>
        </div>
        <div>
          <ul className="text-white flex justify-between py-2">
            <li>تسک ها : 13</li>
            <li>تسک های درحال اجرا : 2</li>
          </ul>
        </div>
        <div>
          <Progress
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            status="active"
            className="mx-auto w-full"
            percent={60}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeTask;
