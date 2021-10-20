import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Produtos from "../pages/produtos";
//import Footer from "../components/Footer";
//import Header from "../components/Header";


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
      </Switch>
      </div>
      <div className="FooterRoute">
      </div>
    </BrowserRouter>
  );
};

export default Routes;