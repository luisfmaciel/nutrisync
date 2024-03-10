import styled from "styled-components";

export const NewMenuContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: transparent;
    
    @media screen and (max-width: 1200px) {
        padding: 0 28px;
        flex-direction: column;
        align-items: center ;
    }
`;

export const BoxNewMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: transparent;
    
    div:first-child {
        padding-right: 0;
    }
    
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        /* padding: 28px; */
    }
`;

export const BoxAttributes = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    padding: 24px !important;
    margin-top: 12px;

    @media screen and (max-width: 1200px) {
        border: 1px solid #d9d9d9;
        flex-wrap: wrap;
    }
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleInBox = styled.span`
    font-size: 16px;
`;

export const LineBottom = styled.div`
    height: 1px;
    width: 100%;
    background-color: #c4c4c4;
    margin-top: 4px;
    margin-bottom: 32px;
`;

export const BoxCheckbox = styled.div`
    display: flex;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const BoxGoals = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BoxFlex = styled.div`
    display: flex;
    width: 100%;
    /* margin-top: 12px; */
    gap: 36px;
    background-color: transparent;
    align-items: end;
    justify-content: center;

    ${BoxAttributes} {
        margin-bottom: 0;
    }

    button {
        width: 60%;
    }
    
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        
        button {
            margin-bottom: 24px;
        }
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 36px;
    flex-direction: column;
    justify-content: space-around;
    background-color: transparent;

    @media screen and (max-width: 1200px) {
        padding: 0;
    }
`;

export const BoxCategory = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        margin-top: 24px;
    }
`;


export const Loading = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(217, 217, 217, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    span {
        background-color: transparent;
        width: 70px;
        height: 70px;
        font-weight: 700;
        color: rgba(251, 168, 28, 0.5);
    }

    @media screen and (max-width: 1200px) {
        padding: 24px;
    } 
`;