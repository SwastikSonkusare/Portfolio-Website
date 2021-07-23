import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";

import App from "./App";
import "./index.scss";

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.querySelector("#root")
);
