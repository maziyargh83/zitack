import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LayOut from "../components/page/LayOut";
const Home = lazy(() => import("../components/page/Home"));
const Routing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayOut />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routing;
