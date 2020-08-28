import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LayOut from "../components/page/LayOut";
const Routing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayOut />}>
            {/* <Route path="/auth" element={<Auth />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routing;
