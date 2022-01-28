import React, { useState } from 'react';
import { setProducts } from 'firebase'
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import Select from "react-select";
import { categories} from "../../../src/components/data/categories";


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
    var [question, setQuestion] = useState("");
    var [WAnswer, setWAnswer] = useState("");
    var [CAnswer, setCAnswer] = useState("");
    var [category, setCategory] = useState<string|undefined>("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (WAnswer === "" || CAnswer === "" || question === "" || category === "" || !category) {
            alert("campos em branco");
        }
        else {
            setProducts(question, CAnswer, WAnswer, category);
            WAnswer = "";
        }
    }
    return (
        <>

            <ProductContainer>
                <ProductCard>
                    <LinkDiv>
                        <Link to="/"><AiFillHome color="grey" size="20px" /></Link>
                    </LinkDiv>
                    <div>
                        <Title>Cadastro de Perguntas</Title>
                    </div>
                    <div>

                    </div>
                    <ProductForm onSubmit={handleSubmit}>
                        <Select options={categories} onChange={(s) => setCategory(s?.value)}
                        />
                        <label>Pergunta:</label><InputPhoto type="text" value={question} onChange={(u) => setQuestion(u.target.value)}></InputPhoto>
                        <label>Resposta Correta:</label><InputName type="text" value={CAnswer} onChange={(e) => setCAnswer(e.target.value)}></InputName>
                        <label>Resposta Errada:</label><InputPrice type="text" value={WAnswer} onChange={(v) => setWAnswer(v.target.value)}></InputPrice>
                        <SubmitButton type="submit">Enviar</SubmitButton>
                    </ProductForm>
                </ProductCard>
            </ProductContainer>
        </>
    );







}
export default Produtos;
