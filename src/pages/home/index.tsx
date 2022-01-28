import React from 'react';
import { Link } from "react-router-dom";
import {
    ProHead,
    Title,
    AddProd,
    Teste,
    //Pagina,
    //Pagina2,
    Principal,
    DivBotoes,
    CentraBotao
} from "./styles";



const Home = () => {
    return (
        <>
            <Principal>
                <ProHead>
                    <Title>50/50</Title>
                </ProHead>
                    <CentraBotao>
                    <DivBotoes>
                        <Link to="/Hub" style={{ textDecoration: 'none' }}><Teste>Jogar</Teste></Link>
                        <Link to="/Produtos" style={{ textDecoration: 'none' }}><AddProd>Adicionar Pergunta</AddProd></Link>
                    </DivBotoes>
                    </CentraBotao>
            </Principal>



        </>
    );
}

export default Home;