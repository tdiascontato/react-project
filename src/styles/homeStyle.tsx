import { styled } from "styled-components";

interface ButtonProps{
    bg: string;
    bd: string;
    col: string;
}

export const HomeStyle = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 50px;
    padding: 50px 65px;

    @media (max-width: 1040px){
        display: flex;
        flex-direction: column;
        padding: 5px 30px;
        transition: 1s ease;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    .Settings{
        display: flex;
        gap: 70px;
        
        @media (max-width: 570px){
         display : flex;
         flex-direction: column;
         gap: 3px;
        }
    }
`;

export const Text = styled.text`
    h1{
        text-align: start;
        font-size: 48px;
        color: #1f1f1f;
        font-weight: 700;
    }
    h3{
        text-align: justify;
        font-weight: 400;
        font-size: 24px;
        color: #515151;
    }
    `;

export const Button = styled.button<ButtonProps>`
        width: 195px;
        height: 50px;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        
        border: 2px solid ${props => props.bd};
        background-color: ${props => props.bg};
        color: ${props => props.col};
`;

export const Aside = styled.aside`
    img{
        max-width: 100%;
    }
`;