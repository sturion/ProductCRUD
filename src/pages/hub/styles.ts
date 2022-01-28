import styled from "styled-components";

export const CardContainer = styled.div`
    max-height: 100vh;
    max-width: 100vw;
`
    ;

export const Cards = styled.button`
    background-color: rgba(23, 31, 93, 0.7);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 9px 2px rgba(255,255,255,0.75);
    height:8vh;
    width:15vw;
    margin:5px;
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

export const AllContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-height: 100vh;
margin-top:-200%;
max-width: 100vw;
align-items: center;`;

export const UlCards = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    height: 60vh;
    margin-left: -50%;
    margin-top:-50%;
    align-content: flex-start;
`;
export const ProductName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 80%;
`;
export const ProductPhoto = styled.div`
    width: 14vw;
    height: 14vw;
    max-width: 150px;
    max-height: 150px;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
`;
export const ProductPrice = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8vw;
    color: black;
`;
export const Tools = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #8A2FF5;
    position: relative;
    width: 100%;
    border-radius: 0px 0px 10px 10px;

`;
export const Exclude = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 10px 0px;
    }
`;
export const NameEdit = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 0px 10px;
    }

`;
export const EditPrice = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 0px 0px;
    }

`;
export const PhotoEdit = styled.button`
    width:50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0px 0px 0px 0px;
    }

`;

export const EditInput = styled.input`
    width: 80vw;
    max-width: 800px;
    height:5vh;
    max-height: 30px;
    border:none;
    background-color: #8A2FF5;
    margin-top:10px;
    color: #FFFFFF;
    border-radius: 10px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;
export const EditAll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #8A2FF5;
    position: relative;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
`;

export const EditBarDiv = styled.div`

`;