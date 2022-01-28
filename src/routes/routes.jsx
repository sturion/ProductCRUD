import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Dev from "../pages/dev";
import Login from "../pages/login";
import Produtos from "../pages/produtos";
import Lista from "../pages/listItems/repeat";
import Home from "../pages/home";
import Hub from "../pages/hub";


const Routes = () => {
  return (
    <BrowserRouter>
    <div className="Header">
    </div>
    <div className="AllPages">
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" />
        <Route component={Produtos} path="/produtos" />
        <Route component={Lista} path="/listItems" />
        <Route component={Dev} path="/dev" />
        <Route component={Hub} path="/hub" />
      </Switch>
      </div>
      <div className="FooterRoute">
      </div>
    </BrowserRouter>
  );
};

export default Routes;