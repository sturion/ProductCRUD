import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Produtos from "../pages/produtos";
import Lista from "../pages/listItems/repeticao";


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
      </Switch>
      </div>
      <div className="FooterRoute">
      </div>
    </BrowserRouter>
  );
};

export default Routes;