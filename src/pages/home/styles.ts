import styled from "styled-components";

export const ProHead = styled.div`
width: 100%;
background-color: rgba(0,0,0,0);
color: #fff;
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
z-index:1;
overflow: hidden;
user-select: none;
align-items: center;`;


export const Title = styled.h1`

`;

export const AddProd = styled.div`
    background-color: rgba(23, 31, 93, 0.7);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 9px 2px rgba(255,255,255,0.75);
    height:8vh;
    width:15vw;
    margin-top:10px;
    margin-bottom:-10vh;
    border:none;
    position: relative;
    z-index:1;
    border:white solid;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    text-decoration: none;
    align-self: auto;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 2em;
    user-select: none;
`;

export const Teste = styled.div`
    background-color: rgba(23, 31, 93, 0.7);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 9px 2px rgba(255,255,255,0.75);
    height:8vh;
    width:15vw;
    margin-bottom:10px;
    position: relative;
    z-index:1;
    border:white solid;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    user-select: none;
`;

export const Principal = styled.div`
    //max-width:100vw;
    margin-bottom:150%;
    margin-top:100%;
`

export const DivBotoes = styled.div`
    display:flex;
    max-width:100%;
    max-height:90%;
    flex-direction: column;
    
`

export const CentraBotao = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    z-index:8;

`
