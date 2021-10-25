import styled from "styled-components";



export const ProductContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`;

export const ProductCard = styled.div`
width: 400px;
height: 350px;
background: white;
border: 1px solid grey;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 0px 10px 3px grey;
`;


export const LinkDiv = styled.div`
    display: flex;
    position: relative;
    left: -175px;
    padding:15px;
    padding-bottom:30px;
    margin-top:-10px;
    flex-direction: left;
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
display:flex;
flex-direction: column;
`;

export const Title = styled.h1`
color: black;
margin-top: -20px;
`;

export const SubmitButton = styled.button`
    margin-top: 30px;
    height: 40px;
    border-radius: 50px;
    background-color: #8A2FF5;
    border: none;
    color: white;
`;