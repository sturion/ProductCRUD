import React, { useState } from 'react';
import { setProducts } from 'firebase'
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';

import {
    ProductContainer,
    ProductCard,
    LinkDiv,
    InputPrice,
    InputName,
    InputPhoto,
    ProductForm,
    Title,
    SubmitButton,
} from "./styles";


const Produtos = () => {
    var [name, setName] = useState("");
    var [url, setUrl] = useState("");
    var [price, setPrice] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let priceF = parseFloat(price);
        if (price === "" || name === "" || url === ""){
            alert("campos em branco");
        }
        else {
            setProducts(url,name,priceF);
        }
    }

    return (
        <>

            <ProductContainer>
                <ProductCard>
                <LinkDiv>
                        <Link to="/"><AiFillHome color="grey" size="20px"/></Link>
                    </LinkDiv>
                    <div>
                        <Title>Cadastro de Produtos</Title>
                    </div>
                    <div>

                    </div>
                    <ProductForm onSubmit={handleSubmit}>
                        <label>Nome do produto:</label><InputName type="text" value={name} onChange={(e) => setName(e.target.value)}></InputName>
                        <label>Url da foto do Produto:</label><InputPhoto type="text" value={url} onChange={(u) => setUrl(u.target.value)}></InputPhoto>
                        <label>Preço:</label><InputPrice type="number" value={price} onChange={(v) => setPrice(v.target.value)}></InputPrice>
                        <SubmitButton type="submit">Enviar</SubmitButton>
                    </ProductForm>
                </ProductCard>
            </ProductContainer>
        </>
    );







}
export default Produtos;
