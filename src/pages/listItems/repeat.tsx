import React, { useEffect, useState } from 'react';
import { getProducts, delProduct, attNameProduct, attPriceProduct, attUrlProduct } from 'firebase'
import { FaTrash, FaEdit } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi'
import { MdInsertPhoto } from 'react-icons/md'
import {
  CardContainer,
  Cards,
  AllContainer,
  UlCards,
  ProductName,
  ProductPhoto,
  ProductPrice,
  Tools,
  Exclude,
  NameEdit,
  EditPrice,
  PhotoEdit,
  EditInput,
  EditAll,
  EditBarDiv,
} from "./styles";

const Repeticao = () => {

  var [name, setName] = useState("");



  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {

    const request = async () => {

      const newProducts = await getProducts();
      setProducts(newProducts)
    }
    request();


  }, [])

  const replaceImgWithError = (e: any) => {
    e.target.onerror = null;
    e.target.src = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';
  };

  return (
    <AllContainer>
      <EditBarDiv>
        <EditInput type="text" value={`${name}`} onChange={(o) => setName(o.target.value)} placeholder="Insira a informação e clique no card correspondente para editar"></EditInput>
      </EditBarDiv>
      <CardContainer>
        <UlCards>

          {products?.map((product: any) => {
            return (
              <Cards>
                <ProductName>{product.data.name}</ProductName>
                <ProductPhoto src={product.data.fotoUrl} onError={replaceImgWithError} />
                <ProductPrice>R${product.data.price}</ProductPrice>
                <EditAll>
                  <Tools>
                    <NameEdit onClick={() => attNameProduct(product.id, name)}><FaEdit color="white" size="2vh" /></NameEdit>
                    <EditPrice onClick={() => attPriceProduct(product.id, parseFloat(name))}><GiPriceTag color="white" size="2vh" /></EditPrice>
                    <PhotoEdit onClick={() => attUrlProduct(product.id, name)}><MdInsertPhoto color="white" size="2vh" /></PhotoEdit>
                    <Exclude onClick={() => delProduct(product.id)}><FaTrash color="white" size="2vh" /></Exclude>
                  </Tools>
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
