import styled from "styled-components";

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
