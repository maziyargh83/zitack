import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layouts/nav/Nav";
const Index = () => {
  return (
    <div
      className="bg-gradient-to-tr from-bogart-900  to-indigo h-screen "
      style={{ overflowY: "auto" }}
    >
      <Nav />
      <Outlet />
    </div>
  );
};

export default Index;
