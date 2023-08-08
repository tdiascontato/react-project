import { styled } from "styled-components";
export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: auto 65px;
    hr{
        width: 80%;
    }
`;
export const MenuFooter = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width:330px;
    place-items: center;

    text-decoration: none;
    list-style: none;

    a{
        text-decoration: none;
        color: #1F1F1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    }
    li.active {
        font-weight: 700;
    }
`;
export const Icons = styled.div`
    display: flex;
    width: 210px;
    align-items: flex-start;
    padding: 0 70px;
    gap: 32px;

    img{
        width: 32px;
        height: 32px;
        cursor: pointer;
    &:hover{
        opacity: 50%;
    }
    }
`;
export const Text = styled.text`
    padding: 10px 70px
`;