import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Repeat from 'pages/listItems/repeat'
//import { getProducts } from 'firebase'
import {categories} from "../../components/data/categories";
import { BsPlusCircleFill,BsSearch } from "react-icons/bs";
import {AuthContext} from "../../providers/auth";
import {
  ProHead,
  Title,
  SearchSystem,
  AddProd,
  SearchBar,
  SubmitButton,
} from "./styles";



const Dev = () => {
  const { /*user,*/ setUser }:any = React.useContext(AuthContext);
  const [name, setName] = useState("");


  const searchSubmit = (event:any) => {
    console.log(categories.length)
    event.preventDefault();
    setUser({name: name});
  }


  return (
    <>
      <div className="LoginPage">
        <ProHead>
          <Title>Product CRUD</Title>
        </ProHead>
        <SearchSystem onSubmit={searchSubmit}>
          <Link to="/produtos"><AddProd><BsPlusCircleFill /></AddProd></Link>
          <SearchBar value={name} onChange={(s) => setName(s.target.value)} placeholder="Digite para pesquisar"></SearchBar>
          <SubmitButton type="submit"><BsSearch /></SubmitButton>
        </SearchSystem>
        <Repeat />
      </div>
    </>
  );
}

export default Dev;