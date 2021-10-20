import React from 'react';
import { Link } from "react-router-dom";
export {};


const Home = () =>{
  return (
      <>
      <div className="LoginPage">
    <div>
        HOME
    </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
        </div>
        </>
  );
}

export default Home;