import React from "react";
import ReactDOM from "react-dom";
import { store } from "./features/store";
import { Provider } from "react-redux";
import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
