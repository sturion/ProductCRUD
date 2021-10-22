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
    </div>
        <ul>
          <li>
            <Link to="/produtos">Produtowads</Link>
          </li>
        </ul>
        <Repeticao />
        </div>
        </>
  );
}

export default Home;