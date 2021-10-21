import React, {useEffect, useState} from 'react';
import {  getProducts, delProduct} from 'firebase'
import { FaTrash,FaEdit } from 'react-icons/fa';
import {
  CardContainer,
  Cards,
  AllContainer,
  UlCards,
  NomeProdutos,
  FotoProdutos,
  PrecoProdutos,
  Ferramentas,
  Excluir,
  Editar
} from "./styles";

const Repeticao = () => {

const [products, setProducts] = useState<any[]>([]);

useEffect(()=>{

  const request = async ()=>{

  const newProducts =  await getProducts();
  setProducts(newProducts)
  }
  request();
  

},[])


  console.log("products =",products);
  return (
    <AllContainer>
      <CardContainer>
      <UlCards>
        {products?.map((product: any)=>{
        return(<Cards>
          <NomeProdutos>{product.data.name}</NomeProdutos>
          <FotoProdutos>{product.id}</FotoProdutos>
          <PrecoProdutos>Preço:{product.data.price}</PrecoProdutos>
          <Ferramentas>
          <Editar><FaEdit color="white" size="2vh"/></Editar>
          <Excluir onClick={() => delProduct(product.id)}><FaTrash color="white" size="2vh"/></Excluir>
          
          </Ferramentas>
        </Cards>
        )
        })}
      </UlCards>
      
      </CardContainer>
    </AllContainer>
  )
}

export default Repeticao;
