import React, {useEffect} from 'react';
import {getProducts} from 'firebase'
import './App.css';
import Routes from "./routes/routes";

function App() {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
    <div className="Body">
      <Routes/>
    </div>
  </div>
    )
  };
  
  export default App;