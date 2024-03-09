import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const DetailsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
`;

export const MenuTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin: 16px 0 50px 0;
`;

export const BoxButtons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 22px;
    
    button {
        width: 100% !important;
        height: fit-content;
        bottom: 0;
    }
`;

export const EmptyDetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Img = styled.img`
    width: 30%;
`;

export const InformationText = styled.p`
    font-size: 14px;
    text-align: center;
`;

export const NavLinks = styled(LinkR)`
    font-weight: bold;
    color:  rgb(251, 168, 28);    
`;