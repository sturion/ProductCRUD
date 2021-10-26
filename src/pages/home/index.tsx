import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Repeat from 'pages/listItems/repeat'
import { searchBarList } from 'firebase'
import { BsPlusCircleFill,BsSearch } from "react-icons/bs";
import {
  ProHead,
  Title,
  SearchSystem,
  AddProd,
  SearchBar,
  SubmitButton,
} from "./styles";


const Home = () => {
  var [name, setName] = useState("");

  const searchSubmit = (event: any) => {
    event.preventDefault();
    searchBarList(name);
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

export default Home;