import styled from "styled-components";

export const CardContainer = styled.div`
display: inline-block;
flex-wrap: wrap;
justify-content: center;
align-items: center;`;

export const Cards = styled.div`
margin: 10px;
width: 80vw;
height: 80vw;
max-width: 250px;
max-height: 350px;
display: flex;
background-color: #E6E6E6;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 10px;
box-shadow: 0px 0px 10px 3px grey;
`;

export const AllContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

export const UlCards = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
`;
export const NomeProdutos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8vw;
    color: black;
`;
export const FotoProdutos = styled.img`
    width: 150px;
    height: 150px;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
`;
export const PrecoProdutos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8vw;
    color: black;
    margin-bottom: -20%;
`;
export const Ferramentas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #8A2FF5;
    position: relative;
    width: 100%;
    border-radius: 0px 0px 10px 10px;

`;
export const Excluir = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 10px 0px;
    }
`;
export const Editar = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 0px 10px;
    }

`;