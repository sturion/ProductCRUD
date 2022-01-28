import React, { useEffect, useState } from 'react';
import { getProducts} from 'firebase'
import {AuthContext} from "../../../src/providers/auth";
import {
  CardContainer,
  Cards,
  AllContainer,
  UlCards,
  ProductName,
  ProductPhoto,
  //ProductPrice,
  EditInput,
  EditBarDiv,
} from "./styles";

type provider = {
  data:{
    question: string, CAnswer:string,WAnswer:string,
  }
}

const Repeticao = () => {

  var [name, setName] = useState("");

  
  const { user}:any = React.useContext(AuthContext);
  const collection:any = user.name;

  const [products, setProducts] = useState<provider>({}as provider);

  useEffect(() => {

    const request = async () => {

      const newProducts = await getProducts(collection);
      let arrayNumber = newProducts.length;
      let questionNumber=Math.floor(Math.random() * (arrayNumber - 0));
      console.log(questionNumber)
      setProducts(newProducts[questionNumber]);
      console.log(newProducts[questionNumber]);
    }
    request();


  }, [collection,user])

  return (
    <AllContainer>
      <EditBarDiv>
        <EditInput type="text" value={`${name}`} onChange={(o) => setName(o.target.value)} placeholder="Insira a informação e clique no card correspondente para editar"></EditInput>
      </EditBarDiv>
      <CardContainer>
        <UlCards>

          
              <Cards>
                <ProductName>{products?.data?.question}</ProductName>
                <ProductPhoto>{products?.data?.CAnswer}</ProductPhoto>
                {//<ProductPrice>{products?.data?.WAnswer}</ProductPrice>
                }
                {/* <EditAll>
                  <Tools>
                    <NameEdit onClick={() => attNameProduct(products.id, name)}><FaEdit color="white" size="2vh" /></NameEdit>
                    <EditPrice onClick={() => attPriceProduct(products.id, parseFloat(name))}><GiPriceTag color="white" size="2vh" /></EditPrice>
                    <PhotoEdit onClick={() => attUrlProduct(products.id, name)}><MdInsertPhoto color="white" size="2vh" /></PhotoEdit>
                    <Exclude onClick={() => delProduct(products.id)}><FaTrash color="white" size="2vh" /></Exclude>
                  </Tools>
                </EditAll> */}
              </Cards>
        </UlCards>

      </CardContainer>
    </AllContainer>
  )
}

export default Repeticao;
