import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Teams from "../pages/teams";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Routes = () => {
  return (
    <BrowserRouter>
    <div className="Header">
      <Header/>
    </div>
    <div className="AllPages">
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Sobre} path="/sobre" />
        <Route component={Teams} path="/teams" />
      </Switch>
      </div>
      <div className="FooterRoute">
      <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default Routes;