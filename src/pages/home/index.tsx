import React from 'react';
import { Link } from "react-router-dom";
import Repeticao from 'pages/listItems/repeticao'
import { 
  ProHead,
  Title,
  SearchSystem,
  AddProd,
  SearchBar,
  SubmitButton,
 } from "./styles";


const Home = () =>{
  return (
      <>
      <div className="LoginPage">
    <ProHead>
      <Title>Product CRUD</Title>
    </ProHead>
    <SearchSystem>    
    <Link to="/produtos"><AddProd>Adicionar Produtos</AddProd></Link>
    <SearchBar></SearchBar>
    <SubmitButton>Submit</SubmitButton>
    
    </SearchSystem>
        <Repeticao />
        </div>
        </>
  );
}

export default Home;