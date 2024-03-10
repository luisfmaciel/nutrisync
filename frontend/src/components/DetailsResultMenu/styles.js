import styled from "styled-components";

export const DetailsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-color: #ffffff;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;

export const MenuTitle = styled.span`
    font-size: 16px;
    font-weight: 700;
    margin: 16px 0 26px 0;
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

export const EmptyBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export const InformationText = styled.p`
    font-size: 14px;
`;