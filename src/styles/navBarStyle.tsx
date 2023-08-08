import { styled } from "styled-components";

export const ContainerNavBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 65px;
    background-color: #f0f0f0;

    @media (max-width:450px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const Logo = styled.text`
    color: #018762;
    font-family: Nunito;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-self: left;
`;
export const Menu = styled.ul`
    display: flex;
    width: 330px;
    justify-content: right;
    align-items: center;
    list-style: none;
    gap: 30px;
    
    a{
        text-decoration: none;
        color: #1F1F1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    li.active {
        color: #018762;
    }
`;