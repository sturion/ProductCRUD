import React, {useEffect, useState} from 'react';
import {  getProducts, delProduct , attNameProduct, attPriceProduct,attUrlProduct} from 'firebase'
import StardardImage from 'components/images/standard.jpg';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi'
import { MdInsertPhoto } from 'react-icons/md'
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
  EditarNome,
  EditarPreco,
  EditarFoto,
  EditInput,
  EditAll,
} from "./styles";

const Repeticao = () => {

  var [name, setName] = useState("");



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
          <EditAll>
          <EditInput type="text" value={`${name}`} onChange={(e) => setName(e.target.value)} placeholder="Insira a informação"></EditInput>
          <Ferramentas>
          <EditarNome onClick={() => attNameProduct(product.id,name)}><FaEdit color="white" size="2vh"/></EditarNome>
          <EditarPreco onClick={() => attPriceProduct(product.id,parseFloat(name))}><GiPriceTag color="white" size="2vh"/></EditarPreco>
          <EditarFoto onClick={() => attUrlProduct(product.id,name)}><MdInsertPhoto color="white" size="2vh"/></EditarFoto>
          <Excluir onClick={() => delProduct(product.id)}><FaTrash color="white" size="2vh"/></Excluir>         
          </Ferramentas>
          </EditAll>
        </Cards>
        )
        })}
      </UlCards>
      
      </CardContainer>
    </AllContainer>
  )
}

export default Repeticao;
