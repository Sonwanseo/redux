import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
