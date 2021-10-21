import React from 'react';
import { Link } from "react-router-dom";
import {app, database} from 'firebase'
import Repeticao from 'pages/listItems/repeticao'
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
            <Link to="/produtos">Produtowads</Link>
          </li>
          <li>
            <Link to="/listItems">daw</Link>
          </li>
        </ul>
        <Repeticao />
        </div>
        </>
  );
}

export default Home;