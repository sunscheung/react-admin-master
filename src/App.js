/*
 * @Author: Suns
 * @Date: 2020-10-10 15:18:44
 * @LastEditTime: 2020-11-26 11:20:48
 */
import React, { Component } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Switch } from "react-router-dom";
// console.log('Appjs')
import Login from "./routes/Login/index";
// import Login from './routes/Login2/index'
import Index from "./routes/Index/index";
import "./App.css";
import "./assets/font/iconfont.css";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Index} />
      </Switch>
    );
  }
}

export default App;
