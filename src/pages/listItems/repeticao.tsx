import React, {useEffect, useState} from 'react';
import {  getProducts, delProduct , attNameProduct} from 'firebase'
import StardardImage from 'components/images/standard.jpg';
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

const replaceImgWithError = (e:any) => {
  e.target.onerror = null;
  e.target.src = 'http://placekitten.com/g/300/300';
};

  console.log("products =",products);
  return (
    <AllContainer>
      <CardContainer>
      <UlCards>
        {products?.map((product: any)=>{
        return(<Cards>
          <NomeProdutos>{product.data.name}</NomeProdutos>
          <FotoProdutos src={product.data.fotoUrl} onError={replaceImgWithError}/>
          <PrecoProdutos>R${product.data.price}</PrecoProdutos>
          <Ferramentas>
          <Editar onClick={() => attNameProduct(product.id,"rogerin")}><FaEdit color="white" size="2vh"/></Editar>
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
