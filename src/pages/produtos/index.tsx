import React, { useState } from 'react';
import { setProducts } from 'firebase'
import { Link } from "react-router-dom";

import {
    ProductContainer,
    ProductCard,
    LinkDiv,
    InputPrice,
    InputName,
    InputPhoto,
    ProductForm,
} from "./styles";


const Produtos = () => {
    var [name, setName] = useState("");
    var [url, setUrl] = useState("");
    var [price, setPrice] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let priceF = parseFloat(price);
        setProducts(url,name,priceF);
    }

    return (
        <>

            <ProductContainer>
                <ProductCard>
                    <div>
                        Cadastro de Produtos
                    </div>
                    <div>

                    </div>
                    <ProductForm onSubmit={handleSubmit}>
                        <InputName type="text" value={name} onChange={(e) => setName(e.target.value)}></InputName>
                        <InputPhoto type="text" value={url} onChange={(u) => setUrl(u.target.value)}></InputPhoto>
                        <InputPrice type="number" value={price} onChange={(v) => setPrice(v.target.value)}></InputPrice>
                        <button type="submit">Enviar</button>
                    </ProductForm>
                    <LinkDiv>
                        <Link to="/">HOME</Link>
                    </LinkDiv>
                </ProductCard>
            </ProductContainer>
        </>
    );







}
export default Produtos;
