import React,{ useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { categories } from "../../components/data/categories";
import {AuthContext} from "../../providers/auth";
import {
  CardContainer,
  Cards,
  AllContainer,
  UlCards,
  ProductName,
  EditInput,
  EditBarDiv,
} from "./styles";

export type OptionType = {
  value: string;
  label: string;
};

let a:any = [];

const Hub = () => {
  const { user,setUser }:any = React.useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<any>([]);

  let auxCategories = categories;
  

  const auxArray = Array.from(Array(12).keys())
  


  useEffect(() => {
          auxArray.map(()=>{
            let arrayLength = auxCategories.length;
            let questionNumber = Math.floor(Math.random() * (arrayLength));
            let b = auxCategories.splice(questionNumber, 1)[0];
            a.push(b);
            return null;
          })
          
      },[auxCategories, auxArray] )

  useEffect(() => {
    setCategory(a);
    console.log(category);


  },[category])

  return (
    
    <AllContainer>
      <CardContainer>
        <UlCards>         
                {category.map((c:any) => c?.label &&  <Cards onClick={(s) => setUser({name: c?.value})}><Link to="/Dev" style={{ textDecoration: 'none' , color: 'white'}}><ProductName>{c.label}</ProductName></Link></Cards>)}          
        </UlCards>
      </CardContainer>
    </AllContainer>
  )
}


export default Hub;