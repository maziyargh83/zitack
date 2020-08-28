import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "./app-assets/css/app.css";
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spin />}>
      <App />
    </Suspense>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
