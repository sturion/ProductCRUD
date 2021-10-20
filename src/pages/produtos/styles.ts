import styled from "styled-components";



export const ProductContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`;

export const ProductCard = styled.div`
width: 300px;
height: 300px;
background: grey;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: center;`;


export const LinkDiv = styled.div`
    display: flex;
    padding:15px;
`;

export const InputPrice = styled.input`
width: 200px;
height: 25px;
background: fff;`;

export const InputName = styled.input`
width: 200px;
height: 25px;
background: fff;`;

export const InputPhoto = styled.input`
width: 200px;
height: 25px;
background: fff;`;

export const SendButton = styled.button`
    background-color: rgba(255, 255,255,0);
    margin-left: 10px;
`;

export const ProductForm = styled.form`
`;