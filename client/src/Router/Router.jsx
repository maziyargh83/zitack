import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const Routing = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* hi */}
          {/* <Route path="/*" element={<Client />}>
            <Route path="/auth" element={<Auth />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routing;
