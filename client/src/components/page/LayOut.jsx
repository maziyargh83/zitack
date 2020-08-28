import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layouts/nav/Nav";
const Index = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Index;
