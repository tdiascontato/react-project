import { styled } from "styled-components";

export const  ProfissionalStyle = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 50px;
    padding: 50px 65px;

    @media(max-width: 1040px){
        display: flex;
        flex-direction: column;
        padding: 5px 30px;
        transition: 1s ease;
    }
`;
export const  Text = styled.text`
    h1{
        color: #1F1F1F;
        font-size: 48px;
        font-weight: 700;
    }
    .Settings{
        display: flex;
        gap: 15px;
        hr{
            display: flex;
            width: 5px;
            height: calc(100%-50px);
            background-color: #018762;
        }
        h3{
            color: #515151;
            font-size: 24px;
            font-weight: 400;
        }

    }
`;
export const  Aside = styled.aside`
    display: flex;
    justify-content: right;
    
    img{
        max-width: 100%;
    }
`;