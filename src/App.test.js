/*
 * @Author: Suns
 * @Date: 2020-10-10 15:18:44
 * @LastEditTime: 2020-11-26 10:05:42
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
